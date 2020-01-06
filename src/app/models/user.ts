export class User {
    nombre:string;
    email:string;
    contraseña:string;
    isActive:boolean;

    constructor(nombre?:string, email?:string, contraseña?:string){
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
        this.isActive = true;
    }
}
