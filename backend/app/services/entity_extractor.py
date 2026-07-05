import spacy

nlp = spacy.load("en_core_web_sm")


TECH_KEYWORDS = [
    "Python",
    "JavaScript",
    "React",
    "FastAPI",
    "Flask",
    "Node.js",
    "MongoDB",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "TensorFlow",
    "PyTorch",
    "Machine Learning",
    "Deep Learning",
    "OpenCV",
    "Git",
    "Docker",
    "AWS",
]


def extract_entities(text: str):
    doc = nlp(text)

    nodes = []
    edges = []

    # Root node
    nodes.append({"id": "Resume", "label": "Resume"})

    found = set()

    # Named entities
    for ent in doc.ents:
        if ent.label_ not in [
        "PERSON",
        "ORG",
        "PRODUCT",
        "WORK_OF_ART",
        ]:
            continue

        value = ent.text.strip()

        if len(value) < 3:
            continue

        if value in found:
            continue

        found.add(value)

        nodes.append({
            "id": value,
            "label": value,
        })

    edges.append({
        "source": "Resume",
        "target": value,
    })

    # Technology keywords
    for tech in TECH_KEYWORDS:
        if tech.lower() in text.lower():
            if tech not in found:
                found.add(tech)

                nodes.append({
                    "id": tech,
                    "label": tech
                })

                edges.append({
                    "source": "Resume",
                    "target": tech
                })

    return nodes, edges