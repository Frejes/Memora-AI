import asyncio
import cognee

async def main():
    print("Testing Cognee...")

    await cognee.remember(
        "Memora AI is a memory operating system for AI agents."
    )

    results = await cognee.recall(
        query_text="What is Memora AI?"
    )

    print(results)

if __name__ == "__main__":
    asyncio.run(main())