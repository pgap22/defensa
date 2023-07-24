import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const useFormulario = (fields = [], api) => {
  const { id } = useParams();
  let currentItem = api.data ? api.data.filter(item => item.id == id)[0] : {};
  
  if(currentItem == undefined){
    currentItem = {}
  }

  const { register, handleSubmit, formState } = useForm();

  let formFields = {};

  for (let field of fields) {
    if(currentItem.id){
      formFields[field] = register(field, {required: false, value: currentItem[field]});
    }else{
      formFields[field] = register(field);
    }
  }
  
  if(currentItem.id){
    formFields.id = register('id', {value: currentItem.id});
  }


  const enviarDatos = async (datos) => {
    if(currentItem.id){
      await api.actualizar(datos)
      return
    }
    await api.crear(datos)
  };

  const campos = {...formFields}

  const funciones = {
    enviarFormulario: handleSubmit(enviarDatos),
    registroExitoso: formState.isSubmitSuccessful,
  }

  return [campos, funciones];

};

export { useFormulario };


/*
const campos = ["nombre", "email", "password", "avatar"] // Each table field

const [name, funciones] = useFormulario(campos, api)
*/