import { useState } from "react"
import React from "react"
import { UsersContext } from "./get"
import  Button  from "../../components/Button"
export default function AddUser() {
    const {users, fetchUsers} = React.useContext(UsersContext)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [Id, setId] = useState("")

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
      const updateUser = {
        "id": Id,
        "name": name,
        "age": age
      }
  
      await fetch("http://localhost:8000/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateUser)
      }).then(fetchUsers)
    }
  
    return (
      <form>
        <input type="text" placeholder="Введите Id" onChange={handleInputId}/>
        <input type="text" placeholder="Введите имя" onChange={handleInputName}/>
        <input type="text" placeholder="Введите возраст" onChange={handleInputAge}/>
        <Button label={"Обновить"} click={handleSubmit} />
      </form>
    )
  }