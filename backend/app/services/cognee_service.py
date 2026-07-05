import cognee


async def remember_text(text: str):
    await cognee.remember(text)
    return "Memory stored successfully"


async def recall_text(query: str, history=[]):
    results = await cognee.recall(query)

    if not results:
        return "I couldn't find anything."

    return results[0].text