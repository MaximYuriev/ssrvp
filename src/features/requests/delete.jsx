import { useState } from "react"
import React from "react"
import DialogForm from "../../components/Dialog"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteUserMutation,useGetUsersQuery} from "./get";
export default function DeleteUser() {

    const [Id, setId] = useState("")
    const [deleteUser] = useDeleteUserMutation()
    const {data} = useGetUsersQuery()
    const handleInputId = event  => {
        setId(event.target.value)
    }
    const handleSubmit = async () => {
      await deleteUser(Id)
    }
  
    return (
      <DialogForm TextOpen="Удалить" Title="Удаление пользователя" TextAction="Удалить" Action={handleSubmit} iconbutton={<DeleteIcon/>}>
        <input type="text" placeholder="Введите Id" onChange={handleInputId}/>
      </DialogForm>
    )
  }