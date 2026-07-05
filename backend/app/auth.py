import os
import jwt
from fastapi import Header, HTTPException


def get_current_user(
    authorization: str = Header(...)
):
    if not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    token = authorization.replace("Bearer ", "")

    payload = jwt.decode(
        token,
        options={"verify_signature": False},
    )

    return payload