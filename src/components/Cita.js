import React from 'react'
import styles from './Cita.module.css'

const Cita = ({ paciente, setEditarPaciente, eliminarPaciente }) => {
 
  const { fecha, nombre, telefono, temperatura, presion, peso, saturacion, sintomas, diagnostico, tratamiento, revicion, id} = paciente
     
  return (
    <div>
           <div className={ styles.cont_cita }>
              <div className={ styles.datos }>
                    <p>Fecha de Cita: <span>{ fecha }</span></p>
                    <p>Nombre del Paciente: <span>{ nombre }</span></p>
                    <p>Teléfono: <span>{ telefono }</span></p>
              </div>
              <div className={ styles.signos}>
                    <p>Temperatura: <span>{ temperatura }</span>°</p>
                    <p>Presión Arterial: <span>{ presion }</span></p>
                    <p>Peso: <span>{ peso }</span> kg</p>
                    <p>saturación: <span>{ saturacion }</span>%</p>
              </div>
                <div>
                  <div className={ styles.sintomas }>
                    <p>Sintomas: <span>{ sintomas }</span></p>
                                  
                                                                
                  </div>
                  <div className={ styles.diagnostico }>
                      <p>Diagnóstico: <span>{ diagnostico }</span></p>
                  </div>  
                  <div className={ styles.tratamiento }>
                      <p>Tratamiento: <span>{ tratamiento }</span></p>
                  </div> 
                  <div className={ styles.revicion }>
                      <p>Fecha de Revisión: <span>{ revicion }</span></p>
                  </div> 
                    
                </div>
                <div className={ styles.cont_btn }>
                    <button
                            type='button'
                            className={ styles.editar }
                            onClick={() => setEditarPaciente( paciente )}
                    >
                      Editar
                    </button>
                    <button
                            type='button'
                            className={ styles.eliminar }
                            onClick={() => eliminarPaciente(id)}
                    >
                      Eliminar
                    </button>

                </div>
               
        </div>
    </div>
  )
}

export default Cita;