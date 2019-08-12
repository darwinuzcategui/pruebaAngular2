function activar (    quien:string, //parametro obligatorio
                     objeto:string="Funcion activar", //parametro por defecto
                   momento?:string ){ //parametro opcional
    let mensaje:string;

    if ( momento ){
        
        mensaje =`${ quien } activo ${ objeto } en la ${ momento} `;

    } else {
        mensaje =`${ quien } activo la ${ objeto } `;

    }

    
    console.log(mensaje);

}

//activar("Jose Perez");
activar("darwin","otros objeto","tarde");