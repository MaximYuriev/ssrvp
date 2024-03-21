import Button from "../components/Button"
import { ThemeContext } from "../App"
import { useContext } from "react"
import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "../features/counter/counterSlice"
const Lab4 = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
            <div>
                <h2>Лабораторная работа 4</h2>
                <Button label="Смена темы" click={toggleTheme}/><br/><br/>
                <Button label="Прибавить" click={() => dispatch(increment())}/>
                <div id="counterLab4">{count}</div>
                <Button label="Отнять" click={() => dispatch(decrement())}/>
            </div>
        )
}

export default Lab4