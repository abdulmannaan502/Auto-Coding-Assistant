from transformers import AutoTokenizer, AutoModelForCausalLM

model_name = "bigcode/starcoderbase-1b"

tokenizer = AutoTokenizer.from_pretrained(model_name)
tokenizer.pad_token = tokenizer.eos_token  # ✅ Fix added here

model = AutoModelForCausalLM.from_pretrained(model_name, trust_remote_code=True)
model.eval()

prompt = "def greet(name):\n    return f\"Hello, {name}!\""

inputs = tokenizer(prompt, return_tensors="pt", padding=True).to(model.device)

outputs = model.generate(
    inputs.input_ids,
    attention_mask=inputs.attention_mask,
    max_new_tokens=128,
    temperature=0.5,
    do_sample=True,
    top_k=50,
    pad_token_id=tokenizer.eos_token_id  # ✅ Fix included
)

result = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(result)
