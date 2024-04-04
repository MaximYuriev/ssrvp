import { useState } from "react"
import React from "react"
import { UsersContext } from "./get"
import  Button  from "../../components/Button"
export default function AddUser() {
    const {users, fetchUsers} = React.useContext(UsersContext)
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleInputName = event  => {
      setName(event.target.value)
    }

    const handleInputAge = event  => {
        setAge(event.target.value)
    }

    const handleSubmit = async () => {
      const newUser = {
        "id": users.length + 1,
        "name": name,
        "age": age
      }
  
      await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }).then(fetchUsers)
    }
  
    return (
      <form>
        <input type="text" placeholder="Введите имя" onChange={handleInputName}/>
        <input type="text" placeholder="Введите возраст" onChange={handleInputAge}/>
        <Button label={"Добавить"} click={handleSubmit} />
      </form>
    )
  }