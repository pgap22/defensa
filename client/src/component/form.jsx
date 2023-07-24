import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Form = ({ api, componenteExito, children, titulo, subtitulo, funciones }) => {
  if (funciones == undefined) return <FuncionesProps />
  if (api == undefined) return <ApiProps />

  if (api.isLoading) return <p>Cargando...</p>

  const { id } = useParams();

  const success = id ? api.actualizarSuccess : api.crearSuccess;
  const error = id ? api.actualizarError : api.crearError;

  useEffect(() => {
    if (funciones == undefined) {
      console.log("MISS -> 'funciones' -> variable")
    }
    if (api == undefined) {
      console.log("MISS -> 'api' -> variable")
    }
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
    <main className="mx-auto max-w-xl border m-4 p-4 rounded-lg shadow-lg">
      {error && <p className="font-bold text-red-500">Verifica los campos con lo que se te solicita</p>}

      <h1 className="text-3xl font-bold">{titulo}</h1>
      <p className="text-xl text-gray-500">{subtitulo}</p>

      <form noValidate={!!id} onSubmit={funciones.enviarFormulario} className="mt-4 flex-col gap-3 flex">
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

export default Form  
