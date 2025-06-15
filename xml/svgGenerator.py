import xml.etree.ElementTree as ET
import re

def slugify(text):
    return re.sub(r'\W+', '_', text.strip().lower())

def generar_svg_para_ruta(ruta, index):
    nombre_ruta = ruta.find("nombre").text
    nombre_archivo = slugify(nombre_ruta) or f"ruta_{index}"

    altitudes = []
    distancias = []
    nombres_hitos = []
    total = 0

    for hito in ruta.findall("hitos/hito"):
        coord = hito.find("coordenadas")
        alt = float(coord.get("alt"))
        dist = float(hito.find("distancia").text)
        nombre = hito.find("nombre").text

        altitudes.append(alt)
        total += dist
        distancias.append(total)
        nombres_hitos.append(nombre)

    if not altitudes or not distancias:
        print(f"⚠️ Ruta sin datos suficientes: {nombre_ruta}")
        return

    width, height = 800, 400
    padding = 40

    max_alt = max(altitudes)
    min_alt = min(min(altitudes), 0)  # Forzar al menos hasta el nivel del mar

    total_dist = distancias[-1]

    # Escalado de puntos
    puntos = [
        (
            padding + (d / total_dist) * (width - 2 * padding),
            height - padding - ((a - min_alt) / (max_alt - min_alt) * (height - 2 * padding))
        )
        for d, a in zip(distancias, altitudes)
    ]

    # Generar el SVG
    svg = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}">']

    # Línea de base (cota 0 m)
    if min_alt <= 0 <= max_alt:
        y_cero = height - padding - ((0 - min_alt) / (max_alt - min_alt) * (height - 2 * padding))
        svg.append(f'<line x1="{padding}" x2="{width - padding}" y1="{y_cero}" y2="{y_cero}" stroke="gray" stroke-dasharray="4" />')
        svg.append(f'<text x="{padding}" y="{y_cero - 5}" font-size="12" fill="gray">Nivel del mar (0 m)</text>')

    # Polilínea de altimetría
    polyline = " ".join(f"{x},{y}" for x, y in puntos)
    svg.append(f'<polyline points="{polyline}" style="fill:none;stroke:blue;stroke-width:2" />')

    # Etiquetas de altura
    for (x, y), alt, nombre in zip(puntos, altitudes, nombres_hitos):
        svg.append(f'<circle cx="{x}" cy="{y}" r="4" fill="red" />')
        svg.append(f'<text x="{x + 5}" y="{y - 10}" font-size="12" fill="black">{int(alt)} m</text>')
        svg.append(f'<text x="{x + 5}" y="{y + 10}" font-size="10" fill="gray">{nombre}</text>')

    svg.append('</svg>')

    with open(f"{nombre_archivo}.svg", "w", encoding="utf-8") as f:
        f.write("\n".join(svg))

    print(f"✔️ SVG generado: {nombre_archivo}.svg")

def main():
    tree = ET.parse("rutas.xml")
    root = tree.getroot()

    for index, ruta in enumerate(root.findall("ruta")):
        generar_svg_para_ruta(ruta, index + 1)

if __name__ == "__main__":
    main()
