from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from uuid import UUID
from app.utils.database import get_db
from app.core.jwt import get_current_user

from app.schemas.product_schema import Product, ProductCreate
from app.schemas.category_schema import Category, CategoryCreate
from app.schemas.audit_logs_schema import AuditLogResponse, AuditLogCreate

from app.services.product_service import get_all_available_products, get_all_products
from app.services.product_service import add_product as add_product_service
from app.services.category_service import get_all_categories, add_category as add_category_service
from app.services.audit_logs_service import (get_all_audit_logs, 
    get_audit_logs_by_product,
    get_audit_logs_by_user,
    create_audit_log)


router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/all_categories", response_model=list[Category])
def get_all_categories_route(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_all_categories(db)


@router.post("/add_category", response_model=Category, status_code=201)
def add_category_route(
    category: CategoryCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    category_data = category.model_dump()
    return add_category_service(db, category_data)


@router.get("/all_products", response_model=list[Product])
def get_all_products_route(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_all_products(db)


@router.get("/all_available_products", response_model=list[Product])
def get_all_available_products_route(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_all_available_products(db)


@router.post("/add_product", response_model=Product, status_code=201)
def add_product_route(
    product: ProductCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    product_data = product.model_dump()
    return add_product_service(db, product_data)


@router.get("/audit_logs", response_model=list[AuditLogResponse])
def get_all_audit_logs_route(
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_all_audit_logs(db)


@router.get("/audit_logs/product/{product_id}", response_model=list[AuditLogResponse])
def get_audit_logs_by_product_route(
    product_id: UUID,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_audit_logs_by_product(db, product_id)


@router.get("/audit_logs/user/{user_id}", response_model=list[AuditLogResponse])
def get_audit_logs_by_user_route(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    return get_audit_logs_by_user(db, user_id)

@router.post("/audit_logs", response_model=AuditLogResponse, status_code=201)
def create_audit_log_route(
    audit_log: AuditLogCreate,
    db: Session = Depends(get_db),
    current_user: dict = Depends(get_current_user)
):
    audit_log_data = audit_log.model_dump()
    return create_audit_log(db, audit_log_data)