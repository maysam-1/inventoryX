from pydantic import BaseModel, Field
from uuid import UUID
from datetime import datetime
from typing import Optional


class Product(BaseModel):
    id: UUID
    name: str
    category_id: UUID
    quantity: int = Field(ge=0)
    description: Optional[str] = None
    is_active: bool = True
    created_at: datetime
    updated_at: datetime
    
    model_config = {"from_attributes": True}


class ProductCreate(BaseModel):
    name: str = Field(..., min_length=1)
    category_id: UUID
    quantity: int = Field(ge=0)
    description: Optional[str] = None
    is_active: bool = True