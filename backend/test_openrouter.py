from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(
    api_key=os.getenv("LLM_API_KEY"),
    base_url="https://openrouter.ai/api/v1",
)

response = client.chat.completions.create(
    model="cohere/north-mini-code:free",
    messages=[
        {"role": "user", "content": "Reply with only: OpenRouter works"}
    ],
)

print(response.choices[0].message.content)