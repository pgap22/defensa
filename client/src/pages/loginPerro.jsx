import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/component/button';

const LoginPerro = () => {
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const envairMascota = async (data) => {
        try {
            const mascota = await axios.post("http://localhost:4000/mascota/buscar", data)
            navigate("/mascota")
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    return (
        <form className='flex justify-center p-5' onSubmit={handleSubmit(envairMascota)}>
            <div className='flex-col flex gap-2' >
                {error && <p className='font-bold text-xl text-red-600'>No se encontro la mascota</p>}

                <label for="UserEmail" class="block text-xs font-medium text-gray-700">
                    Nombre de la mascota
                </label>

                <input
                    {...register("nombre")}
                    placeholder="nombre de la mascota"
                    class="mt-1 w-full border p-2 outline-none rounded-md border-gray-200 shadow-sm sm:text-sm"
                />

                <Button>Buscar</Button>
                <Link to={"/"} className='text-sm underline text-center'>Crear mascota</Link>
            </div>
        </form>
    )
}

export default LoginPerro