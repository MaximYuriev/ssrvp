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
import Lab4 from "./templates/Lab4"
import Lab5 from "./templates/Lab5"
import Lab6 from "./templates/Lab6"
import Author from './templates/Author'
import { createContext, useEffect, useState } from "react"
import { useLocalStorage } from './hooks/useLocalStorage'

export const menuItems = [
  { id: 0, text: "Главная", path: "", component: <div><h2>Выберите лабораторную</h2></div> },
  { id: 1, text: "Лабораторная 1", path: "lab/1", component: <Lab1 /> },
  { id: 2, text: "Лабораторная 2", path: "lab/2", component: <Lab2 /> },
  { id: 3, text: "Лабораторная 3", path: "lab/3", component: <Lab3 /> },
  { id: 4, text: "Лабораторная 4", path: "lab/4", component: <Lab4 /> },
  { id: 5, text: "Лабораторная 5", path: "lab/5", component: <Lab5 /> },
  { id: 6, text: "Лабораторная 6", path: "lab/6", component: <Lab6 /> },
  { id: 7.1, text: "О себе", path: "author", component: <Author /> },
]

const routes = menuItems.map((menuItem) => {
  return {
    path: "/" + menuItem.path,
    element: menuItem.component
  }
}
)

const router = createBrowserRouter(routes)
export const ThemeContext = createContext();
export const DrawerContext = createContext();
function App() {
  const [theme, setTheme] = useLocalStorage("theme","light")
  const toggleTheme = () =>{
    setTheme(theme==="light" ? "dark":"light")
  }
  useEffect(() => {
    if (theme==="dark") 
      document.body.classList.add("dark")
    else
      document.body.classList.remove("dark")
  }, [theme]);

  const [open, setOpen] = useState(true)
  const openDrawer = () => {
    setOpen((prev)=>!prev);
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <DrawerContext.Provider value={{open,openDrawer}}>
        <Header text="Лабораторные работы"></Header>
        <Grid container spacing={2}>
          <Grid item xs={0}>
            <Menu items={menuItems}/>
          </Grid>
          <Grid item xs={10}>
              <Content>
                <RouterProvider router={router} />
              </Content>
          </Grid>
        </Grid>
      </DrawerContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
