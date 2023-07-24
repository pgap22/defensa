import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

const TablaCRUD = ({ api, name}) => {
  if (name == undefined) return <NameProps />
  if (api == undefined) return <ApiProps />

  if(api.isLoading) return <p>Cargando...</p>

  const listaItems = api.data;

  if(!api.data.length) return <p>No hay datos !</p>
  
  const titulos = [...Object.entries(listaItems[0]), '']

  return (
    <table className='w-fit'>
      <thead>
        <tr className='bg-yellow-200 border border-yellow-500 font-bold text-lg capitalize w-full'>
          {
            titulos.map(
              (item, i) => <td key={i + "-titulo"} className='p-2'>{item[0]}</td>
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          listaItems.map(item => {
            const values = [...Object.values(item), <Acciones name={name} api={api}  item={item} />]
            return <tr key={item.id+"border"} className='border'>
              {values.map(value => {
                if(typeof value == 'string'  && value.startsWith("uploads")){
                  return <img width={200} className='p-3' src={"http://localhost:4000/"+value} alt="" />
                }

                return <td key={value+"-value"} className='p-4'>{value}</td>
              })}
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

const Acciones = ({name,item,api}) => {
  return (
    <div className='grid grid-cols-2 max-w-[170px] gap-4'>
      <Link to={"/"+name+"/"+item.id}>
        <Button color='#a37500'>Editar</Button>
      </Link>
      <div onClick={()=>{
        api.eliminar(item.id)
      }}>
        <Button color='red'>Eliminar</Button>
      </div>
    </div>
  )
}

const ApiProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'api' as atributte in {'<TablaCRUD />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<TablaCRUD api={api}/>`}</span></p>
    </div>
  )
}
const NameProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'name' as atributte in {'<TablaCRUD />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<TablaCRUD name={'your_item'}/>`}</span></p>
    </div>
  )
}

export default TablaCRUD