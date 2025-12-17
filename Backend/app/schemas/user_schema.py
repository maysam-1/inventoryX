from pydantic import BaseModel
from uuid import UUID
from ..models.user_model import UserRole

class UserResponse(BaseModel):
    id: UUID
    username: str
    email: str
    role: UserRole

    class Config:
        from_attributes = True


