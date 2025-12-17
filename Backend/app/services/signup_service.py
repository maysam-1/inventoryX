from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from app.models.user_model import User, UserRole
from app.schemas.signup_schema import SignupRequest
from app.core.password import hash_password


def signup_user(data: SignupRequest, db: Session) -> User:
    existing_user = db.query(User).filter(User.email == data.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    user = User(
        username=data.username,
        email=data.email.lower(),  
        role=UserRole.user,
        password=hash_password(data.password)
    )

    db.add(user)
    db.commit()
    db.refresh(user)

    return user
