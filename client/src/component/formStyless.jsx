import { useEffect } from "react"
import { useParams } from "react-router-dom"

const FormStyless = ({ api, componenteExito, children, titulo, subtitulo, funciones }) => {

  if (funciones == undefined) return <FuncionesProps />
  if (api == undefined) return <ApiProps />

  if (api.isLoading) return <p>Cargando...</p>

  const { id } = useParams();

  const success = id ? api.actualizarSuccess : api.crearSuccess;
  const error = id ? api.actualizarError : api.crearError;

  useEffect(() => {
    if (componenteExito == undefined) {
      console.log("MISS -> 'componenteExito' -> Html")
    }
    if (!titulo) {
      console.log("MISS -> 'titulo' ->  string")
    }

    if (!subtitulo) {
      console.log("MISS -> 'subtitulo' -> string")
    }
  }, [])

  if (funciones.registroExitoso && success) {
    if (!componenteExito) return <DefaultComponent />
    return componenteExito
  }

  return (
    <main className="form_main">
      {error && <p className="form_main-p_error">Verifica los campos con lo que se te solicita</p>}

      <h1 className="form_main-h1_titulo">{titulo}</h1>
      <p className="form_main-p_subtitulo">{subtitulo}</p>

      <form noValidate={!!id} onSubmit={funciones.enviarFormulario} className="form_main-form">
        {children}
      </form>
    </main>
  )
}


const DefaultComponent = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'componenteExito' as atributte in {'<Form />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<Form componenteExito={<Navigate to={"/YOUR_ITEM"}>}/>`}</span></p>
      <p>if you use {'<Navigate />'}</p>
      <p>Dont forget to import it <span className="p-2 font-mono bg-gray-900 text-orange-400">{'import { Navigate } from "react-router-dom"'}</span></p>
    </div>
  )
}
const ApiProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'api' as atributte in {'<Form />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<Form api={api}/>`}</span></p>
    </div>
  )
}
const FuncionesProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'funciones' as atributte in {'<Form />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<Form funciones={funciones}/>`}</span></p>
    </div>
  )
}

export default FormStyless  
