export class Appoinment {
  constructor(
    public _id: string = '',
    public date: string = '',
    public doctorId: string = '',
    public doctorName: string = '',
    public userId: string = '',
    public userName: string = '',
    public ips: string = '',
    public specialty: string = '',
    public location: string = '',
    public status: string = ''
  ) {}
}
