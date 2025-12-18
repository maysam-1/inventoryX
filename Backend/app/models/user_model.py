import uuid
from sqlalchemy import Column, String
from sqlalchemy.dialects.postgresql import UUID, ENUM
from sqlalchemy.orm import relationship
from app.utils.database import Base


from enum import Enum

class UserRole(str, Enum):
    admin = "admin"
    user = "user"


class User(Base):
    __tablename__ = "users"

    id = Column(
        UUID(as_uuid=True),
        primary_key=True,
        default=uuid.uuid4
    )
    username = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    role = Column(
        ENUM(
            UserRole,
            name="roles",
            create_type=False
        ),
        nullable=False,
        default=UserRole.user
    )
    password = Column(String, nullable=False)  


    audit_logs = relationship("AuditLog", back_populates="user")