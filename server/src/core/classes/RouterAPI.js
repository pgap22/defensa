import { Router } from "express"; 

class RouterAPI{
    constructor(controlador){
        this.controlador = controlador;
        this.router = Router();

        this.router.get("/", this.controlador.leer)
        this.router.post("/", this.controlador.crear)

        this.router.get("/:id", this.controlador.leerPorId)
        this.router.patch("/:id", this.controlador.editar)
        this.router.delete("/:id", this.controlador.eliminarUno)
    }
}

export {RouterAPI};