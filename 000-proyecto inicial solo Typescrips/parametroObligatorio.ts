
function activar(quien:string, 
                 objeto:string ="batiseñal",
                 momento?:string) {
    let mensajeBati:string;

    if (momento) {
        mensajeBati =`${ quien } activo ${objeto } en la ${ momento }`;
        
    } else {
        mensajeBati =`${ quien } activo ${objeto }`;
        
    }


    
    console.log(mensajeBati);
    
    
}

activar("Gordon", "batiseñal", "tarde"); 