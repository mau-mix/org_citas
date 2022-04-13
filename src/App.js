import { useState, useEffect } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';
import ValidacionProvider from './context/ValidacionContexr'

function App() {

  const [ pacientes, setPacientes ] = useState([])
  const [ editarpaciente, setEditarPaciente ] = useState({})
 
      useEffect(() => {
            const obtenerLs = JSON.parse(localStorage.getItem('pacientes')) ?? [];
            setPacientes( obtenerLs )
      },[])

      useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
      },[ pacientes ])

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter( eliminado => eliminado.id !== id )
        setPacientes(pacientesActualizados)
    }     

    return (
            <div>
                  <div>
                        <Header 
                             titulo="organizador de citas"
                       />
                  </div>
                  <div className='contenedor'>
                                    <ValidacionProvider>
                                                <Formulario 
                                                      pacientes={ pacientes }
                                                      setPacientes={ setPacientes }
                                                      editarpaciente={ editarpaciente }
                                                      setEditarPaciente={setEditarPaciente}
                                               />
                                   </ValidacionProvider>
                                          <div>
                                                <ListadoCitas 
                                                      pacientes={ pacientes }
                                                      setEditarPaciente={ setEditarPaciente }
                                                      eliminarPaciente={ eliminarPaciente }
                                                />
                                          </div>
                 </div>
           </div>
                 
  );
}

export default App;
