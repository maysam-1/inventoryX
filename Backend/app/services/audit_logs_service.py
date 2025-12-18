from sqlalchemy.orm import Session
from typing import List
from uuid import UUID

from app.models.audit_logs_model import AuditLog


def get_all_audit_logs(db: Session) -> List[AuditLog]:
    return db.query(AuditLog).order_by(AuditLog.created_at.desc()).all()


def get_audit_logs_by_product(db: Session, product_id: UUID) -> List[AuditLog]:
    return (
        db.query(AuditLog)
        .filter(AuditLog.product_id == product_id)
        .order_by(AuditLog.created_at.desc())
        .all()
    )


def get_audit_logs_by_user(db: Session, user_id: UUID) -> List[AuditLog]:
    return (
        db.query(AuditLog)
        .filter(AuditLog.user_id == user_id)
        .order_by(AuditLog.created_at.desc())
        .all()
    )


def create_audit_log(db: Session, audit_log_data: dict) -> AuditLog:
    new_audit_log = AuditLog(**audit_log_data)
    db.add(new_audit_log)
    db.commit()
    db.refresh(new_audit_log)
    return new_audit_log