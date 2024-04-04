import { useState } from "react"
import React from "react"
import { UsersContext } from "./get"
import  Button  from "../../components/Button"
export default function DeleteUser() {
    const {users, fetchUsers} = React.useContext(UsersContext)
    const [Id, setId] = useState("")

    const handleInputId = event  => {
        setId(event.target.value)
    }
    const handleSubmit = async () => {

      await fetch(`http://localhost:8000/api/users/${Id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }).then(fetchUsers)
    }
  
    return (
      <form>
        <input type="text" placeholder="Введите Id" onChange={handleInputId}/>
        <Button label={"Удалить"} click={handleSubmit} />
      </form>
    )
  }