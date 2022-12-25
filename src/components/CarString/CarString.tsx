import React from 'react';

import moment from "moment";
import {AiOutlineCheck} from 'react-icons/ai'
import {BiRuble} from  'react-icons/bi'
import {ICar} from "../../pages/MainPage";
import {complete} from "../../axios/axios";

export interface ICarString{
    index?:number,
    car: ICar,
    price:number
    comp:(id:number)=>void
}


const CarString:React.FC<ICarString> = ({car,index,comp,price}) => {
    const startTime = moment(car.startTime)
    const minutes = moment().diff(startTime, 'minutes')

    let min = minutes % 60
    let hours = (minutes-min)/60
    let hoursToPaid = Math.ceil( minutes/60)*price

    // async function completeParking(id:number){
    //     await complete(id)
    // }
    // onClick={()=>complete(car.id)}
    return (
        <tr>
            <td className={"tab"}>{Number(index)+1}</td>
            <td className={"tab"}>{car.carNumber}</td>
            <td className={"tab"}>{startTime.format('D/M,HH:mm:ss')}</td>
            <td className={"tab"}>{hours+"ч"+":"+min+"мин"}</td>
            <td className={"tab"}>
                <div className={'iconBlock'}>
                    <p className={"paidText"}>{hoursToPaid}</p>
                    <BiRuble className={"iconColor"}/>
                </div>
                </td>
            <td className={"tab completeParking"}><div>
                <div className="iconBlock"  onClick={()=>comp(car.id)}>
                    <AiOutlineCheck />Завершить</div>
                </div>

            </td>
        </tr>
    );
};

export default CarString;