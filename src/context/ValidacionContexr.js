import { createContext, useState } from 'react';
export const  ValidacionContext = createContext()

const ValidacionProvider = ( props ) => {

    const [ alerta, setAlerta ] = useState( false )

    return (

        <ValidacionContext.Provider
                   value={{
                       alerta,
                       setAlerta
                   }}
        >
                  {props.children}
        </ValidacionContext.Provider>

    )


}
export default ValidacionProvider