import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Content from './components/Content'
import Grid from '@mui/material/Grid'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Lab1 from "./templates/Lab1"
import Lab2 from "./templates/Lab2"
import Lab3 from "./templates/Lab3"


const menuItems = [
  {id: 0, text: "Главная", path: "", component: <div><h2>Выберите лабораторную</h2></div>},
  {id: 1, text: "Лабораторная 1", path: "lab/1", component: <Lab1/>},
  {id: 2, text: "Лабораторная 2", path: "lab/2", component: <Lab2/>},
  {id: 3, text: "Лабораторная 3", path: "lab/3", component: <Lab3/>}
]

const routes = menuItems.map((menuItem) => {
  return {
    path: "/" + menuItem.path,
    element: menuItem.component
  }
}
)

const router = createBrowserRouter(routes)

console.log(router)

function App() {
  return (
    <>
      <Header text="Лабораторные работы"></Header>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Menu
            items={menuItems}
          ></Menu>
        </Grid>
        <Grid item xs={10}>
          <Content>
            <RouterProvider router={router} />
          </Content>
        </Grid>
      </Grid>
      <Footer></Footer>
    </>
  )
}

export default App
