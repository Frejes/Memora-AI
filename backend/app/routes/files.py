from fastapi import APIRouter, Depends
from app.dependencies.auth import get_current_user
from app.config.supabase import supabase

router = APIRouter(
    prefix="/files",
    tags=["Files"],
)


@router.get("/")
async def get_files(
    current_user=Depends(get_current_user),
):
    response = (
        supabase.table("uploaded_files")
        .select("*")
        .eq("user_id", current_user.id)
        .order("uploaded_at", desc=True)
        .execute()
    )

    return response.data