import { useState, useContext, useEffect } from 'react'
import styles from './Formulario.module.css'
import { ValidacionContext } from '../context/ValidacionContexr'
import Alerta from './Alerta'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ pacientes, setPacientes, editarpaciente, setEditarPaciente }) => {
   
const { alerta, setAlerta } = useContext( ValidacionContext )

const [ datos, setDatos ] = useState({
        fecha: "",
        nombre: "",
        telefono: "",
        temperatura: "",
        presion: "",
        peso: "",
        sintomas: "",
        diagnostico: "",
        tratamiento: "",
        revicion: "",
        saturacion: ""
    })
    useEffect(() => {

        if( Object.keys(editarpaciente).length > 0 ) {
            setDatos(editarpaciente)
        }


    },[ editarpaciente ])

 const { fecha, nombre, telefono, peso, estatura, temperatura, presion, saturacion, sintomas, diagnostico, tratamiento, revicion  } = datos 
 const onChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }
const onSubmit = e => {
    e.preventDefault()

    if( fecha.trim() === "" || nombre.trim() === "" || telefono.trim() === "" ||  peso.trim() === "" || estatura.trim() === "" || temperatura.trim() === "" || presion.trim() === ""  || saturacion.trim() === "" ||  sintomas.trim() === "" || diagnostico.trim() === "" || tratamiento.trim() === "" || revicion.trim() === "" ) {
        setAlerta( true )
        return
        
    }
        setAlerta(false)
    const objetoPacinte ={
        peso, 
        estatura,
        fecha, 
        nombre, 
        telefono, 
        temperatura,
        presion, 
        saturacion,
        sintomas, 
        diagnostico, 
        tratamiento, 
        revicion
        
    }

     if(editarpaciente.id ){
         objetoPacinte.id = editarpaciente.id
     const pacienteEditado = pacientes.map( pas => pas.id === editarpaciente.id ? objetoPacinte : pas )
        setPacientes( pacienteEditado )
        setEditarPaciente({})
       
       
    } else {
            objetoPacinte.id = uuidv4()
             setPacientes([
         ...pacientes,
         objetoPacinte
         ])
  }
    
     
       


     setDatos({
        fecha: "",
        nombre: "",
        peso: "",
        estatura: "",
        telefono: "",
        temperatura: "",
        presion: "",
        saturacion: "",
        sintomas: "",
        diagnostico: "",
        tratamiento: "",
        revicion: "",
        
     })
            


}



  return (
    <div>
        <h2>Organiza tus citas </h2>
        { alerta && <Alerta mensaje="Todos los campos son obligatorios"/>}
        <form onSubmit={ onSubmit }>
            <div className={ styles.cont_input}>
                <label htmlFor='fecha'>Fecha de cita</label>
                <input 
                  type='date'
                  value={ fecha }
                  placeholder='Ingrese la Fecha'
                  name='fecha'
                  className={ styles.entrada}
                  onChange={ onChange }
                />
            </div>
            <div className={ styles.cont_input}>
                <label htmlFor='nombre'>Nombre del paciente</label>
                <input 
                  type='text'
                  placeholder='Nombre completo del paciente'
                  name='nombre'
                  value={ nombre }
                  className={ styles.entrada}
                  onChange={ onChange }
                />
            </div>
            <div className={ styles.cont_input}>
                <label htmlFor='telefono'>Teléfono</label>
                <input 
                  type='text'
                  placeholder='Ingrese numero de teléfono'
                  name='telefono'
                  value={ telefono }
                  className={ styles.entrada}
                  onChange={ onChange }
                />
            </div>

            <div >
                <label htmlFor='nombre'>Signos vitales</label>
                <div className={ styles.signos}> 

                   <input 
                          type='text'
                          placeholder='Peso'
                          name='peso'
                          value={ peso }
                          className={ styles.entrada_signos}
                          onChange={ onChange }
                    />
                      <input 
                          type='text'
                          placeholder='Estatura'
                          name='estatura'
                          value={ estatura }
                          className={ styles.entrada_signos}
                          onChange={ onChange }
                    />
                
                    <input 
                          type='text'
                          placeholder='Temperatura'
                          name='temperatura'
                          value={ temperatura }
                          className={ styles.entrada_signos}
                          onChange={ onChange }
                    />
                    <input 
                          type='text'
                          placeholder='Presión arterial'
                          name='presion'
                          value={ presion }
                          className={ styles.entrada_signos}
                          onChange={ onChange }
                    />
                    
                    <input 
                          type='text'
                          placeholder='Saturación'
                          name='saturacion'
                          value={ saturacion }
                          className={ styles.entrada_signos}
                          onChange={ onChange }
                    />
                </div>
           </div>
           <div className={ styles.cont_input}>
                <label htmlFor='sintomas'>Síntomas</label>
                <textarea 
                         name='sintomas'
                         value={ sintomas }
                         className={ styles.entrada}
                         onChange={ onChange }
                >

                </textarea>
            </div>
            <div className={ styles.cont_input}>
                <label htmlFor='diagnostico'>Diagnóstico</label>
                <textarea 
                         name='diagnostico'
                         value={ diagnostico }
                         className={ styles.entrada}
                         onChange={ onChange }
                >
                </textarea>
            </div>
            <div className={ styles.cont_input}>
                <label htmlFor='tratamiento'>Tratamiento</label>
                <textarea 
                         name='tratamiento'
                         value={ tratamiento }
                         className={ styles.entrada}
                         onChange={ onChange }
                >
                </textarea>
            </div>
            <div className={ styles.cont_input}>
                <label htmlFor='fecha'>Fecha de revisión</label>
                <input 
                  type='date'
                  placeholder='Ingrese revicion'
                  name='revicion'
                  value={ revicion }
                  className={ styles.entrada}
                  onChange={ onChange }
                />
            </div>
            <div className={ styles.cont_input}>
              <button 
                     type='submit'
                     className={ styles.enviar }
                    >{editarpaciente.id ? "Editar paciente" : "Enviar"}</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario