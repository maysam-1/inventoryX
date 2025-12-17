from fastapi import FastAPI
from sqlalchemy import text
from app.utils.database import engine

app = FastAPI(title="Backend API")

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
