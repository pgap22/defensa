//!This file is only an example

import TablaCRUD from "src/component/tablaCrud"
import useApi from "src/hooks/useAPI"

import { Link } from "react-router-dom"
import Button from "src/component/button"


//export default TablaCore() <- add export default on your pages Component

export default function TablaCore(){

    const api = useApi("/usuario") // '/your_express_route'

    return (
        <>
        {/* You can put more html elements from here ! */}
        <Link>
            <Button>Crear Usuario</Button>
        </Link>
        {/* to here */}

        {/* name=your_express_route_without_slash  */}
        <TablaCRUD name={"usuario"} api={api} />

        {/* You can put more html elements from here ! */}
        
        {/* to here */}
        
        </>
    )
}
