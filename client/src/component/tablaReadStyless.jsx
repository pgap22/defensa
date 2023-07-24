import React from 'react'

const TablaReadStyless = ({ api }) => {
  if (api == undefined) return <ApiProps />
  
  if(api.isLoading) return <p>Cargando...</p>
  
  const listaItems = api.data;

  if(!api.data.length) return <p>No hay datos !</p>
  
  const titulos = Object.entries(listaItems[0])

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
            const values = Object.values(item)
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


const ApiProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'api' as atributte in {'<TablaReadStyless />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<TablaReadStyless api={api}/>`}</span></p>
    </div>
  )
}

export default TablaReadStyless