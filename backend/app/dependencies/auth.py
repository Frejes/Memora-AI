from fastapi import Header, HTTPException
from app.config.supabase import supabase


async def get_current_user(
    authorization: str = Header(...)
):
    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Missing Bearer token"
        )

    token = authorization.replace("Bearer ", "")

    try:
        response = supabase.auth.get_user(token)

        if response.user is None:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        return response.user

    except Exception as e:
        import traceback

        print("=== AUTH ERROR ===")
        print(repr(e))
        traceback.print_exc()
        print("=== END AUTH ERROR ===")

        raise HTTPException(
            status_code=401,
            detail=str(e)
        )