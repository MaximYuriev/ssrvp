from fastapi import APIRouter, Body
from typing import Union, Annotated
from models.good import Main_User, Main_UserDB, New_Respons
from fastapi.responses import JSONResponse

users_router = APIRouter()

def coder_password(cod: str):
    result = cod*2

users_list = [
    {"id" : 1,
     "name" :'Ivanov',
      "age" : "20"
      
    }
    ]

def find_user(id: int) -> Union[Main_UserDB,None]:
    for user in users_list:
        if user.id == id:
            return user
    return None
@users_router.get("/api/users")
def get_users():
    return {"data" : users_list}



@users_router.post("/api/users")
def create_user(user: dict):
    users_list.append(user)
    return {"data":{"Success"}}

@users_router.put("/api/users")
async def edit_person(body:dict):
    for user in users_list:
        if user["id"] == int(body["id"]):
            user["name"] = body["name"]
            user["age"] = body["age"]
            return{"data": "Success"}
    return {"data": "Пользователь не найден!"}

@users_router.delete("/api/users/{id}")
def delete_person(id: int):
    for user in users_list:
        if user["id"] == id:
            users_list.remove(user)
            return {"data": "Success"}
    return {"data": "Пользователь не найден"}












































