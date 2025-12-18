from pydantic import BaseModel, Field
from uuid import UUID
from datetime import datetime
from typing import Optional


class Category(BaseModel):
    id: UUID
    name: str
    created_at: datetime
    
    model_config = {"from_attributes": True}


class CategoryCreate(BaseModel):
    name: str = Field(..., min_length=1, description="שם הקטגוריה")