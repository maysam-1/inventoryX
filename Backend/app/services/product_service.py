from sqlalchemy.orm import Session
from app.models.product_model import Product as ProductModel


def get_all_products(db: Session):
    return db.query(ProductModel).all()

def get_all_available_products(db: Session):
    return db.query(ProductModel).filter(ProductModel.is_active == True).all()

def add_product(db: Session, product_data: dict):
    new_product = ProductModel(**product_data)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product