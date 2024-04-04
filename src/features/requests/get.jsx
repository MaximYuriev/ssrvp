import React, { useEffect, useState } from "react";
import AddUser from "./add";
import UpdateUser from "./update";
import DeleteUser from "./delete";
export const UsersContext = React.createContext({
  users: [], fetchUsers: () => {}
})

export default function Users() {
  const [users, setUser] = useState([])
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8000/api/users")
    const users = await response.json()
    setUser(users.data)
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  const dataItems = users.map((user) => {
        return ( 
            <div key={user.id}>
                    {user.name} {user.age}
            </div>
        )
})
  return (
        <UsersContext.Provider value={{users, fetchUsers}}>
            <AddUser/><br/>
            <UpdateUser/><br/>
            <DeleteUser/><br/>
            
            <b>{dataItems}</b>
        </UsersContext.Provider>
  )
}