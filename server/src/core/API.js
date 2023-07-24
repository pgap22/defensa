import { Controller } from "./classes/Controlador.js";
import { Scheme } from "./classes/Esquema.js";
import { RouterAPI } from "./classes/RouterAPI.js";

class API {
    constructor(table,object){
        
        const scheme = new Scheme(object);
        const controller = new Controller(scheme.validaciones(), table)
        const {router} = new RouterAPI(controller);
        
        this.router = router;
    }
}

export { API }