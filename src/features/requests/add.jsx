import { useState } from "react"
import React from "react"
import DialogForm from "../../components/Dialog"
import AddIcon from '@mui/icons-material/Add';
import { useAddUserMutation } from "./get";

export default function AddUser(len) {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [newUser] = useAddUserMutation()
    const handleInputName = event  => {
      setName(event.target.value)
    }

    const handleInputAge = event  => {
        setAge(event.target.value)
    }
    const handleSubmit = async () => {
      await newUser({
        id: len.len + 1,
        name: name,
        age: age
      })
      
    }
  
    return (
      <DialogForm TextOpen="Добавить" Title="Добавление пользователя" TextAction="Добавить" Action={handleSubmit} iconbutton={<AddIcon/>}>
        <input type="text" placeholder="Введите имя" onChange={handleInputName} /><br/><br/>
        <input type="number" placeholder="Введите возраст" onChange={handleInputAge} /><br/><br/>
      </DialogForm>
    )
  }