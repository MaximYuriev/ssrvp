import Button from "../components/Button"
const Lab2 = () => {
    return (
            <div>
                <h2>Лабораторная работа 2</h2>
                <Button label="Кнопка первая" click={()=> alert ("кнопка 1 нажата")}/><br/>
                <Button label="Кнопка вторая" click={()=> alert ("кнопка 2 нажата")}/>
            </div>
        )
}

export default Lab2