export type Roles = 'Admin' | 'Usuario'

export interface User{  
    Nombre: string
    Contrasena: string
}

export interface UserResponse{     
    Id: number 
    Nombre: string
    Rol: string
}