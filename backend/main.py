from fastapi import FastAPI
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
from public.users import users_router
import uvicorn

app = FastAPI()
app.include_router(users_router)
origins = [
    "http://localhost:5173",
    "localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get('/',response_class=PlainTextResponse)
def f_indexH():
    return"<b> Hello! </b>"
if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port = 8000)