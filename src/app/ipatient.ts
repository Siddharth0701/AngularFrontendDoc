export interface IPatient {
    id:number,
    name:string,
    summary:string
    doctor:{
        id:number,
        name:string,
        area:string
    }
}
