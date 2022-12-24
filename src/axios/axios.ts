import moment from "moment";
import axios from "axios";
import {ICar} from "../pages/MainPage";

export const complete = async function (id:number){
    const {data} = await axios.delete('http://localhost:5000/cars',{data:{id}})
    return data
}
export const start = async function (carNumber:number,startTime:string){
    const {data} = await axios.post('http://localhost:5000/cars', {carNumber,startTime})
    return data
}

export const get = async function (){
    const {data} = await axios.get<ICar[]>('http://localhost:5000/cars')
    return data
}

