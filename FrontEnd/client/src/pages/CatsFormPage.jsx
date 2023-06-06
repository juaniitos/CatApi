import { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { createCat, deleteCat, updateCat, getCat } from '../api/cats.api'; 
import {useNavigate, useParams} from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function CatsFormPage() {

    const {register, handleSubmit, formState: {errors}, setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();
    
    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            await updateCat(params.id, data)
            toast.success('Actualización de datos', {
                position: "bottom-right"
            })
        } else { 
            await createCat(data);
            toast.success('Gato registrado', {
                position: "bottom-right"
            })
        }
        navigate('/') 
        })

    useEffect(() => {
        async function loadCat() {
            if (params.id) {
                const res = await getCat(params.id)
                console.log("RES", res)
                setValue('name', res.data.name)
                setValue('race', res.data.race)
                setValue('age', res.data.age)
                setValue('photo', res.data.photo)
                setValue('fauvorite', res.data.fauvorite)
            }
        }
    loadCat()
    }, [])

    return (
        <div>
            {params.id ? <h1>Formulario de edición</h1> : <h1>Formulario de registro</h1> }

            <form onSubmit={onSubmit} >
                <label>Nombre: </label>
                <input type="text" placeholder="name" 
                {...register("name", {required: true})}

                />
                {errors.name && <span>Name is required</span>}
                <br/>
                <label>Raza: </label>
                <input type="text" placeholder="race" 
                {...register("race", {required: true})}
                />
                {errors.race && <span>Race is required</span>}
                <br/>
                <label>Edad: </label>
                <input type="number" placeholder="age" 
                {...register("age", {required: false})}
                />
                <br/>
                <label>Foto: </label>
                <textarea rows="3" placeholder="Photo"
                {...register("photo", {required: true})}
                />
                <br/>
                <label>Favorito: </label>
                <input name='fauvorite' type="checkbox" /* defaultValue={console.log("CHECK", params)} */  
                {...register("fauvorite", {required: false})}
                />
                {errors.photo && <span>Photo is required</span>}
                <br/>
                <button className="btn btn--primary">Save</button>
                <button className="btn btn--secondary" 
                    onClick={() => {
                        navigate("/")
                }}>Cancelar</button>
            </form>
        </div>
    )
}