import { useState } from "react"
import React from "react"
import { UsersContext } from "./get"
import DialogForm from "../../components/Dialog"
import DeleteIcon from '@mui/icons-material/Delete';
export default function DeleteUser() {
    const {users, fetchUsers} = React.useContext(UsersContext)
    const [Id, setId] = useState("")

    const handleInputId = event  => {
        setId(event.target.value)
    }
    const handleSubmit = async () => {
      const deleteUser = {
        "id": Id,
      }
  
      await fetch(`http://localhost:8000/api/users/${Id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(fetchUsers)
    }
  
    return (
      <DialogForm TextOpen="Удалить" Title="Удаление пользователя" TextAction="Удалить" Action={handleSubmit} iconbutton={<DeleteIcon/>}>
        <input type="text" placeholder="Введите Id" onChange={handleInputId}/>
      </DialogForm>
    )
  }