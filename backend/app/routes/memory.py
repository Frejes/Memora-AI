from fastapi import APIRouter
from app.models.schemas import RememberRequest, RecallRequest
from app.services.cognee_service import remember_text, recall_text

router = APIRouter(
    prefix="/memory",
    tags=["Memory"]
)


@router.post("/remember")
async def remember(request: RememberRequest):
    result = await remember_text(request.text)

    return {
        "success": True,
        "result": result,
    }


@router.post("/recall")
async def recall(request: RecallRequest):
    result = await recall_text(
        request.query,
        request.history,
    )

    return {
        "success": True,
        "result": result,
    }