from fastapi import APIRouter, HTTPException, Depends, Request
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import select
from database.connection import SessionLocal
from models.user import User
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(
    prefix="/contact",
    tags=["Contact"]
)

#-------------Envoi de mail---------------

class ContactForm(BaseModel):
    nom: str
    email: str
    title: str
    description: str
    
conf = ConnectionConfig(
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),
    MAIL_FROM=os.getenv("MAIL_FROM"),
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_STARTTLS=False, 
    MAIL_SSL_TLS=True,
    USE_CREDENTIALS=True
)

fm = FastMail(conf)

    
async def send_mail_contact(nom: str, email: str, title: str, description: str):

    message = MessageSchema(
        subject=f"{nom} - {title}",
        recipients=[os.getenv("MAIL_RECEIVER")],  
        body=f"Le nom de la personne: {nom}. \nLe mail de la personne{email}. \nLe titre du mail{title}.\n{description}",
        subtype="plain"
    )
    await fm.send_message(message)
    print("Mail envoyé ✅")

@router.post("")
async def contact(form:ContactForm, request):
    await send_mail_contact( 
        nom=form.nom,
        email=form.email,
        title=form.title,
        description=form.description
    )

    return {"message": "Votre message a été envoyé !"}

        
