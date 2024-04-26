import { useState } from "react"
import React from "react"
import DialogForm from "../../components/Dialog"
import EditIcon from '@mui/icons-material/Edit';
import { useUpdateUserMutation } from "./get";
export default function UpdateUser() {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [Id, setId] = useState("")
    const [updateUser] = useUpdateUserMutation()
    const handleInputName = event  => {
      setName(event.target.value)
    }

    const handleInputAge = event  => {
        setAge(event.target.value)
    }
    const handleInputId = event  => {
        setId(event.target.value)
    }
    const handleSubmit = async () => {
      await updateUser({
        id: Id,
        name: name,
        age: age
      })
    }
  
    return (
      <DialogForm TextOpen="Обновить" Title="Обновление данных" TextAction="Обновить" Action={handleSubmit} iconbutton={<EditIcon/>}>
            <input type="text" placeholder="Введите Id" onChange={handleInputId}/><br/><br/>
            <input type="text" placeholder="Введите имя" onChange={handleInputName}/><br/><br/>
            <input type="text" placeholder="Введите возраст" onChange={handleInputAge}/><br/><br/>
      </DialogForm>
    )
  }