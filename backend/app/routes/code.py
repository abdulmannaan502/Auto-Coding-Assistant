# backend/app/routes/code.py

from fastapi import APIRouter, Request
from pydantic import BaseModel

router = APIRouter()

class CodeRequest(BaseModel):
    code: str

@router.post("/explain")
def explain_code(request: CodeRequest):
    # Just a mocked explanation for now
    return {
        "response": f"🧠 Analyzing your code:\n\n{request.code[:60]}...\n\n➡️ This looks like a placeholder explanation."
    }
