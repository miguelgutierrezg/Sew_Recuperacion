import xml.etree.ElementTree as ET
import os
import re

def slugify(text):
    return re.sub(r'\W+', '_', text.strip().lower())

def generar_kml_para_ruta(ruta, index):
    nombre_ruta = ruta.find('nombre').text
    nombre_archivo = slugify(nombre_ruta) or f"ruta_{index}"
    coordinates = []

    for hito in ruta.findall(".//hito"):
        coord = hito.find('coordenadas')
        lon = coord.get('lon')
        lat = coord.get('lat')
        alt = coord.get('alt')
        coordinates.append(f"{lon},{lat},{alt}")  # incluye altitud

    kml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
    <name>{nombre_ruta}</name>
    <Placemark>
        <name>{nombre_ruta}</name>
        <LineString>
            <altitudeMode>absolute</altitudeMode>
            <coordinates>
                {' '.join(coordinates)}
            </coordinates>
        </LineString>
    </Placemark>
</Document>
</kml>"""

    with open(f"{nombre_archivo}.kml", 'w', encoding='utf-8') as f:
        f.write(kml_content)
    print(f"✔️ KML con altitud generado: {nombre_archivo}.kml")

def main():
    tree = ET.parse("rutas.xml")
    root = tree.getroot()

    for index, ruta in enumerate(root.findall("ruta")):
        generar_kml_para_ruta(ruta, index + 1)

if __name__ == "__main__":
    main()
