from pydantic import BaseModel
from typing import List


class RememberRequest(BaseModel):
    text: str


class RecallRequest(BaseModel):
    query: str
    history: List[dict] = []