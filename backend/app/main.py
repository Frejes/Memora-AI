from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.memory import router
from app.routes.upload import router as upload_router
from app.routes.graph import router as graph_router
from app.routes.files import router as files_router


app = FastAPI(title="Memora AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(upload_router)
app.include_router(graph_router)
app.include_router(files_router)


@app.get("/")
def home():
    return {"message": "Memora AI Backend Running 🚀"}