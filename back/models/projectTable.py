from sqlalchemy import Column, Integer, String, DateTime, Text
from database.connection import Base
from datetime import datetime
from sqlalchemy.dialects.postgresql import JSONB

class Project(Base):
    __tablename__= "project"

    id = Column(Integer, primary_key=True, index=True)

    nom_projet = Column(String(255), nullable=False, index=True)
    desc_projet = Column(Text, nullable=True)
    techno = Column(JSONB, nullable=True)

    lien_img = Column(String, nullable=True)
    lien_url = Column(String, nullable=True)
    lien_gh = Column(String, nullable=True)
    lien_vdo = Column(String, nullable=True)

    presentation_projet = Column(Text, nullable=True)
    technique_projet = Column(Text, nullable=True)


    created_at = Column(
        DateTime(timezone=True),
        default=datetime.utcnow,
        nullable=False
    )
