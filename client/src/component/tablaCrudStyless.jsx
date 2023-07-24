import React from 'react'
import Button from './button'
import { Link } from 'react-router-dom'

const TablaCRUDStyless = ({ api, name}) => {
  if (name == undefined) return <NameProps />
  if (api == undefined) return <ApiProps />
  
  if(api.isLoading) return <p>Cargando...</p>
  
  const listaItems = api.data;

  if(!api.data.length) return <p>No hay datos !</p>
  
  const titulos = [...Object.entries(listaItems[0]), 'Acciones']

  return (
    <table className='tabla'>
      <thead className='tabla-thead'>
        <tr className='tabla-thead-tr'>
          {
            titulos.map(
              (item, i) => <td key={i + "-titulo"} className='tabla-thead-tr-td'>{item[0]}</td>
            )
          }
        </tr>
      </thead>
      <tbody className='tabla-tbody'>
        {
          listaItems.map(item => {
            const values = [...Object.values(item), <Acciones name={name} api={api}  item={item} />]
            return <tr key={item.id+"border"} className='tabla-tbody-tr'>
              {values.map(value => {
                if(typeof value == 'string'  && value.startsWith("uploads")){
                  return <td key={value+"-value"} ><img width={200} className='tabla-tbody-tr-img' src={"http://localhost:4000/"+value} alt="" /></td>
                }

                return <td key={value+"-value"} className='tabla-tbody-tr-td'>{value}</td>
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
    <div className='tabla-tbody-tr-divbotones'>
      <Link className='tabla-tbody-tr-divbotones-link' to={"/"+name+"/"+item.id}>
        <button className='tabla-tbody-tr-divbotones-link-buttoneditar'>Editar</button>
      </Link>
      <div className='tabla-tbody-tr-divbotones-div' onClick={()=>{
        api.eliminar(item.id)
      }}>
        <button className="tabla-tbody-tr-divbotones-div-botoneliminar">Eliminar</button>
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
export default TablaCRUDStyless