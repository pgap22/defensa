import React from 'react'
import TablaRead from 'src/component/tablaRead'
import useApi from 'src/hooks/useAPI'

const Perrito = () => {
    const api = useApi("/mascota");

    return (
        <>
            <TablaRead api={api} />
        </>
    )
}

export default Perrito