from pydantic import BaseModel, ConfigDict
from datetime import datetime
from uuid import UUID

from app.models.audit_logs_model import ActionType


class AuditLogCreate(BaseModel):
    user_id: UUID
    product_id: UUID
    action: ActionType
    quantity: int

class AuditLogResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: UUID
    user_id: UUID
    product_id: UUID
    action: ActionType
    quantity: int
    created_at: datetime


class AuditLogDetailResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)
    
    id: UUID
    user_id: UUID
    product_id: UUID
    action: ActionType
    quantity: int
    created_at: datetime
    