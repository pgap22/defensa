import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoLogoOctocat, IoMdPhotos } from "react-icons/io";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [genero, setGenero] = useState(0)
  const [estilo, setEstilo] = useState(0);
  const [peso, setPeso]     = useState(0)
  const [error, setError] = useState(false);
  


  const listaPesos = ["0-25lb","25-50lb","50-100lb","50-100lb","+100lb"]
  const listaGenero = ["Masculino","Femenino"]
  const listaEstilo = ["rociado", "esterilizado"]

  const { register, handleSubmit, formState } = useForm();

  const enviarDatos = async (datos)=>{
      setError(false)
      console.log({
        ...datos,
        peso: listaPesos[peso],
        estilo: listaEstilo[estilo],
        genero: listaGenero[genero]
      })
      const data = {
        ...datos,
        peso: listaPesos[peso],
        estilo: listaEstilo[estilo],
        genero: listaGenero[genero]
      }
      try {
        await axios.postForm("http://localhost:4000/mascota", data)
      } catch (error) {
        
      }
  }

  const errorForm = ()=>{
    setError(true);
  }


  return (
    <div className="min-h-screen grid grid-cols-[25%_1fr]">
      <div className="bg-[#807283] relative p-6 flex flex-col items-center">

        <div className="flex items-center gap-4">

          <div className="bg-[#F9DAD7] w-fit rounded-full p-2">
            <IoLogoOctocat size={32} color="#807283" />
          </div>

          <h2 className="font-bold text-4xl">Puppasure</h2>


          <img src="/dog.png" className="absolute bottom-0" width={200} alt="" />
        </div>

      </div>

      <div className="min-h-full grid grid-rows-[1fr_100px]">
        <div className="bg-[#F9DAD7] p-8">
          <div className="max-w-xl flex flex-col gap-5">
            <h2 className="font-bold text-3xl">Wow Perritos ! Procura que tu perrito tenga el mejor cuidado</h2>
            {
              error && <p className="font-bold text-red-900 text-2xl">VERIFICA LOS CAMPOS SI ESTAN</p>
            }
            {
              formState.isSubmitSuccessful && <p className="font-bold text-green-900 text-2xl">MASCOTA REGISTRADA !</p>
            }
            
            <div className="grid grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2 max-w-[200px]">
                  <Input name={register('nombre', {required: true})} label={"Nombre"} placeholder={"Nombre de la mascota"} />
                  <Input name={register('raza',{required: true})} label={"Raza"} placeholder={"Raza de la mascota"} />
                </div>

                <Selector state={genero} setState={setGenero}  label={"Genero"} opciones={listaGenero} />
              </div>

              <div className="flex flex-col gap-3">

                <label htmlFor="imagen" className="flex cursor-pointer items-center gap-4">
                  <div className="bg-gray-200 w-fit p-4 rounded-full">
                    <IoMdPhotos size={26} />
                  </div>
                  <p>Sube una foto</p>
                </label>
                <input {...register('imagen',{required: true})} type="file" id="imagen" hidden />

                <Input name={register("fecha_nacimiento",{required: true})} label={"Fecha de nacimiento"} type={"date"} />
                <Selector state={estilo} setState={setEstilo} label={"Rociado o Esterilizado"} opciones={listaEstilo} />


              </div>
            </div>

            <Selector state={peso} setState={setPeso} label={"Peso"} opciones={listaPesos} />

          </div>
        </div>


        <div className="flex justify-center items-center">
            <div className="max-w-lg flex justify-between w-full">
              <Link className="p-2 rounded-full px-4 border border-[#928694]" to={"/login"}>Volver</Link>
              <button className="p-2 rounded-full px-4 text-white bg-[#928694] border border-[#928694]" onClick={handleSubmit(enviarDatos,errorForm)}>Crear</button>
            </div>
        </div>


      </div>
    </div>
  );
};


const Selector = ({opciones = [], label, state, setState}) => {
  return (
    <div>
      <label htmlFor="">{label}</label>

      <div style={{
        gridTemplateColumns: `repeat(${opciones.length}, 1fr)`
      }} className="bg-white p-1 grid max-w-fit gap-3">
        {
          opciones.map((item,i) => (
            i==state
            ? <div className="bg-[#EFC2BF] text-center select-none px-3 cursor-pointer">{item}</div>
            : <div onClick={()=>{setState(i)}} className="text-center cursor-pointer select-none px-3">{item}</div>
          ))
        }
      </div>
    </div>
  )
}

const Input = ({name, label, placeholder,type}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="">{label}</label>
      <input className="bg-gray-100 p-2 rounded" type={type} placeholder={placeholder} {...name} />
    </div>
  )
}

export default Welcome;