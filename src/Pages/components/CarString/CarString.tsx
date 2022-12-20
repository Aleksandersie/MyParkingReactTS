import React from 'react';
import {ICar} from "../../MainPage";
import moment from "moment";

export interface ICarString{
    index?:number,
    car: ICar
}


const CarString:React.FC<ICarString> = ({car,index}) => {
    const startTime = moment(car.startTime)
    const minutes = moment().diff(startTime, 'minutes')

    let min = minutes % 60
    let hours = (minutes-min)/60
    let hoursToPaid = Math.ceil( minutes/60)*60


    return (
        <tr>
            <td className={"tab"}>{Number(index)+1}</td>
            <td className={"tab"}>{car.carNumber}</td>
            <td className={"tab"}>{startTime.format('D/M,HH:mm:ss')}</td>
            <td className={"tab"}>{hours+"ч"+":"+min+"мин"}</td>
            <td className={"tab"}>{hoursToPaid}</td>
        </tr>
    );
};

export default CarString;