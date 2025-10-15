import { Date } from "mongoose"

export interface Ibooks {
    title : string,
    autthor  :string,
    genre : string ,
    isbn : string,
    description : string,
    copies : number,
    available : boolean
}

