import { Formik,Field,Form } from "formik"
import Button from "../components/Button"
const Lab5 = () => {

    const submit = async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
    }
    return (
            <div>
                <h2>Лабораторная работа 5</h2>
                <Formik initialValues={{name: "",email:""}}
                    onSubmit={submit}
                >
                    <Form>
                        <Field name="name" type="text" /> <br/> <br/>
                        <Field name="email" type="email" /> <br/> <br/>
                        <Button label="Отправить" type="submit"/>
                        <Button label="Сбросить" type="reset"/>
                    </Form>
                </Formik>
            </div>
        )
}

export default Lab5