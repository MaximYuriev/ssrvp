import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "http://localhost:8000/api"
    }),
    tagTypes: ['Users'],
    endpoints: (builder) => ({
      getUsers: builder.query({
        query:()=>"/users",
        providesTags: (id) => [{ type: 'Users', id }],
      }),
      addUser: builder.mutation({
        query(body) {
          return {
            url:"/users",
            method: "POST",
            body
          }
        },
        invalidatesTags: ['Users']
      }),
      updateUser: builder.mutation({
        query(body){
          return{
            url:"/users",
            method: "PUT",
            body
          }
        },
        invalidatesTags: ['Users']
      }),
      deleteUser: builder.mutation({
        query(id){
          return{
            url:`/users/${id}`,
            method: "DELETE"
          }
        },
        invalidatesTags: ['Users']
      })
    })
});
export const {useGetUsersQuery,useAddUserMutation,useUpdateUserMutation,useDeleteUserMutation} = userApi
export default function Users() {


  const {data,error,isLoading} = useGetUsersQuery()

  if (error)
    return(<div>{error}</div>)
  else if (isLoading)
    return(<div>Загрузка...</div>)
  else if (data)
  {
    const usr = data.lst
    const Items = usr.map((user) => {
      return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
      )
    })
    return (
      <>
        <table align="center" border="1">
          <thead>
            <tr>
              <td>Id</td>
              <td>Имя</td>
              <td>Возраст</td>
            </tr>
          </thead>
          <tbody>
            {Items}
          </tbody>
        </table>
        <Footer len={usr.length}/>
      </>
    )
  }
  else
    return (
      <div>
        Данных нет
      </div>
    )
}
