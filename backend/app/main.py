from fastapi import FastAPI
from pydantic import BaseModel
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_name = "bigcode/starcoderbase-1b"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name, trust_remote_code=True).to("cuda")

class PromptRequest(BaseModel):
    prompt: str
    max_new_tokens: int = 128

class CodeRequest(BaseModel):
    code: str
    max_new_tokens: int = 128

@app.post("/generate")
async def generate_code(request: PromptRequest):
    inputs = tokenizer(request.prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_new_tokens=request.max_new_tokens)
    generated_code = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"response": generated_code.strip()}

@app.post("/explain")
async def explain_code(request: CodeRequest):
    # For explanation, prepare a prompt that asks the model to explain code clearly
    explanation_prompt = (
        "Explain the following code snippet in simple terms:\n\n"
        + request.code.strip()
        + "\n\nExplanation:"
    )
    inputs = tokenizer(explanation_prompt, return_tensors="pt").to("cuda")
    outputs = model.generate(**inputs, max_new_tokens=request.max_new_tokens)
    explanation = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Remove the prompt part from the generated text to return clean explanation only
    explanation = explanation.replace(explanation_prompt, "").strip()
    
    return {"response": explanation}
