from fastapi import APIRouter, UploadFile, File, Depends

from app.dependencies.auth import get_current_user
from app.services.file_service import (
    process_file,
    save_uploaded_file,
)

router = APIRouter(
    prefix="/upload",
    tags=["Upload"],
)


@router.post("/")
async def upload(
    file: UploadFile = File(...),
    current_user=Depends(get_current_user),
):
    # Process file with Cognee
    result = await process_file(file)

    # Save file metadata in Supabase
    await save_uploaded_file(
        current_user.id,
        file.filename,
    )

    return {
        "success": True,
        "filename": file.filename,
        "message": result,
    }