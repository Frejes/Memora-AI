from fastapi import APIRouter
from app.services.graph_store import graph_data

router = APIRouter(prefix="/graph", tags=["Graph"])


@router.get("/")
async def get_graph():
    return graph_data