from fastapi import FastAPI
from sqlalchemy import text
from app.utils.database import engine
from app.routes.auth_routes import router as auth_router
from app.routes.admin_routes import router as admin_router

app = FastAPI(title="Backend API")
app.include_router(auth_router)
app.include_router(admin_router) 


from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health_check():
    return {"status": "ok"}



@app.get("/test-db")
def test_db():
    try:
        with engine.connect() as conn:
            result = conn.execute(text("SELECT 1")).scalar()
        return {"db_connection": result}
    except Exception as e:
        return {"error": str(e)}
