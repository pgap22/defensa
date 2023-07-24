//!This file is only an example

import Form from "src/component/form"
import Input from "src/component/Input"
import { Navigate } from "react-router-dom" //If you want to redirect when user complete the form
import useApi from "src/hooks/useAPI"
import { useFormulario } from "src/hooks/useFormulario"
import Button from "src/component/button" //Button with default styles

//export default FormComponent() <- add export default on your pages Component

function FormComponent() {
      
    //Same order is mandatory
    const api = useApi("/usuario") //Your express route
    const campos = ["nombre", "email", "password", "avatar"] //Every Prisma field without id
    const [names, funciones] = useFormulario(campos, api)


    return (
        <>
            {/* You can put more html elements from here ! */}

            {/* to here */}

            <Form
                api={api}
                funciones={funciones}
                componenteExito={<Navigate to={"/usuario"} />}
            >
                <Input name={names.nombre} placeholder="nombre" />
                <Input name={names.email} placeholder="email" />
                <Input name={names.password} placeholder="password" />
                <Input type="file" name={names.avatar} placeholder="avatar" />

                <Button>Send !</Button>
            </Form>

            {/* You can put more html elements from here ! */}

            {/* to here */}

        </>
    )
}
