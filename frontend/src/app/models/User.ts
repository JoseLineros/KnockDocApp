export class User {
  constructor(
    public _id: string = '',
    public identificacion: string = '',
    public nombre: string = '',
    public apellidos: string = '',
    public fechaNacimiento: string = '',
    public ciudad: string = '',
    public direccion: string = '',
    public celular: string = '',
    public email: string = '',
    public password: string = '',
    public role: number = 0,

    //! Doctors
    public ipsAsociado: string = '',
    public tp: string = '',
    public especialidad: string = ''
  ) {}
}
