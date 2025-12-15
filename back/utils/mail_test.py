import asyncio
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
import os
from dotenv import load_dotenv


load_dotenv()

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

to_email = "islamderrouiche@gmail.com"
code="659235"

async def send_test_mail(to_email: str, code: str):

    message = MessageSchema(
        subject=code,
        recipients=[to_email],  
        body=f"Voici un test d'envoi de mail via FastAPI-Mail !\nVotre code : {code}",
        subtype="plain"
    )
    await fm.send_message(message)
    print("Mail envoyé ✅")




# Test
if __name__ == "__main__":
    asyncio.run(send_test_mail(to_email, code))