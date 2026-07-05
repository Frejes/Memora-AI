# import os
# from openai import OpenAI

# client = OpenAI(
#     base_url="https://openrouter.ai/api/v1",
#     api_key=os.getenv("LLM_API_KEY"),
# )

# def ask_llm(question: str, context: str):
#     response = client.chat.completions.create(
#         model=os.getenv("LLM_MODEL"),
#         messages=[
#             {
#                 "role": "system",
#                 "content": (
#                     "You are Memora AI, an intelligent memory assistant. "
#                     "Answer ONLY using the provided memory context. "
#                     "If the answer cannot be found in the context, clearly say so."
#                 ),
#             },
#             {
#                 "role": "user",
#                 "content": f"""
# Memory Context:

# {context}

# Question:

# {question}
# """,
#             },
#         ],
#         temperature=0.3,
#     )

#     return response.choices[0].message.content