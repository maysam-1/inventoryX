from fastapi import APIRouter, Depends, status,HTTPException,Response,Cookie
from sqlalchemy.orm import Session

from app.schemas.login_schema import LoginRequest
from app.schemas.user_schema import UserResponse
from app.schemas.signup_schema import SignupRequest
from app.services.signup_service import signup_user
from app.utils.database import get_db
from app.core.password import verify_password
from app.core.jwt import create_access_token, get_current_user
from app.models.user_model import User

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/signup", response_model=UserResponse)
def signup(data: SignupRequest, db: Session = Depends(get_db)):
    user = signup_user(data, db)

    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "role": user.role
    }


@router.post("/login")
def login(data: LoginRequest, response: Response, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == data.username).first()
    if not user or not verify_password(data.password, user.password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )

    token = create_access_token({"user_id": str(user.id), "role": user.role})

    response.set_cookie(
        key="access_token",
        value=token,
        httponly=True,
        samesite="lax",  
        secure=False,    
        max_age=60*60    
    )

    return {"message": "Logged in successfully"}


@router.post("/logout")
def logout(response: Response):
    response.delete_cookie(key="access_token")
    return {"message": "Logged out successfully"}


@router.get("/me")
def get_me(current_user: dict = Depends(get_current_user)):
    return {"user": current_user}


