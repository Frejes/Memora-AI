import os
import tempfile

import cognee
from pypdf import PdfReader
from docx import Document
from app.services.entity_extractor import extract_entities
from app.services.graph_store import graph_data
from app.config.supabase import supabase


async def process_file(file):
    suffix = os.path.splitext(file.filename)[1]

    with tempfile.NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
        tmp.write(await file.read())
        temp_path = tmp.name

    text = ""

    if suffix.lower() == ".pdf":
        reader = PdfReader(temp_path)

        for page in reader.pages:
            extracted = page.extract_text()
            if extracted:
                text += extracted + "\n"

    elif suffix.lower() == ".docx":
        doc = Document(temp_path)

        for p in doc.paragraphs:
            text += p.text + "\n"

    elif suffix.lower() == ".txt":
        with open(temp_path, "r", encoding="utf-8") as f:
            text = f.read()

    else:
        raise Exception("Unsupported file type")

    # Extract entities from the uploaded document
    nodes, edges = extract_entities(text)

    # Save graph in memory
    graph_data["nodes"] = nodes
    graph_data["edges"] = edges

    # Store the full document in Cognee
    await cognee.remember(
        f"""
    Source File: {file.filename}

    {text}
    """
    )

    os.remove(temp_path)

    return "File stored in memory"

async def save_uploaded_file(user_id: str, filename: str):
    supabase.table("uploaded_files").insert({
        "user_id": user_id,
        "filename": filename
    }).execute()