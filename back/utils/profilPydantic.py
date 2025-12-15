from pydantic import BaseModel, EmailStr
from typing import Optional

class ProfileBase(BaseModel):
    username: str
    email: EmailStr
    bio: Optional[str] = None

class ProfileCreate(ProfileBase):
    pass

class ProfileUpdate(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    bio: Optional[str] = None

class ProfileOut(ProfileBase):
    id: int

    class Config:
        orm_mode = True
