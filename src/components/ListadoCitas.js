import React from 'react'
import Cita from './Cita'

const ListadoCitas = ({ pacientes, setEditarPaciente, eliminarPaciente }) => {
         
  return (

    <div>
      { pacientes.length > 0  ? (
      <>
         <h2>Administra tus citas</h2>
         { pacientes.map( paciente => (
            <Cita 
                key={paciente.id}
                paciente={ paciente }
                setEditarPaciente={ setEditarPaciente }
                eliminarPaciente={ eliminarPaciente }
            />
          ))}
                
      </>
      
      ) : ( <h2>No hay Citas</h2>)}
      
        
    </div>
  )
}

export default ListadoCitas
