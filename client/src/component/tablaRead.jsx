import React from 'react'

const TablaRead = ({ api}) => {
  if (api == undefined) return <ApiProps />

  if(api.isLoading) return <p>Cargando...</p>

  const listaItems = api.data;

  if(!api.data.length) return <p>No hay datos !</p>
  
  const titulos = Object.entries(listaItems[0])

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
            const values = Object.values(item)
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



const ApiProps = () => {
  return (
    <div className="space-y-4 m-4">
      <p>Need to put 'api' as atributte in {'<TablaRead />'}</p>
      <p>Example: <span className="p-2 font-mono bg-black text-white ">{`<TablaRead api={api}/>`}</span></p>
    </div>
  )
}


export default TablaRead