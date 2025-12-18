from sqlalchemy.orm import Session
from app.models.category_model import Category as CategoryModel


def get_all_categories(db: Session):
    return db.query(CategoryModel).all()


def add_category(db: Session, category_data: dict):
    new_category = CategoryModel(**category_data)
    db.add(new_category)
    db.commit()
    db.refresh(new_category)
    return new_category