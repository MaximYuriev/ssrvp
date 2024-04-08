import React, { useEffect, useState } from "react";
import AddUser from "./add";
import UpdateUser from "./update";
import DeleteUser from "./delete";
import Footer from "../../components/Footer";
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
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
        </tr>
    )
  })
  return (
        <UsersContext.Provider value={{users, fetchUsers}}>
            <table align="center" border="1">
              <thead>
                <tr>
                  <td>Id</td>
                  <td>Имя</td>
                  <td>Возраст</td>
                </tr>
              </thead>
              <tbody>
                {dataItems}
              </tbody>
            </table>
            <Footer/>
        </UsersContext.Provider>
  )
}