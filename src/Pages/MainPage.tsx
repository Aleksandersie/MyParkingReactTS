import React, {useState} from 'react';
import './style.scss'
import moment from "moment";
import CarString from "./components/CarString/CarString";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {log} from "util";

export interface ICar{
    id:number,
    carNumber:string,
    startTime:string,
}

const MainPage = () => {
    const navigate = useNavigate()
    const [car,setCar] = useState([])

    // const car =[
    //     {id:1, num: "o123tk01", startTime: moment().format(" h:mm:ss")},
    //     {id:1, num: "o777tk01", startTime: moment().format(" h:mm:ss")},
    //     {id:1, num: "o555tk01", startTime: moment().format(" h:mm:ss")},
    // ]

    const carNumberRef = React.useRef<any>(null)
    async function startParking(){
        console.log(carNumberRef.current.value)
        await axios.post('http://localhost:5000/cars', {carNumber:carNumberRef.current.value,startTime:moment()})
    }
    //moment().format("dddd, MMMM Do YYYY, HH:mm:ss")
    async function getCar(){
        console.log(carNumberRef.current.value)
        await axios.get('http://localhost:5000/cars').then(data=>setCar(data.data))
    }

    console.log(car)
    return (
        <>
            <div className={"mainTopBar"}>
                <div className={"container"}>
                    <h5 className={"logo"} onClick={()=>navigate("/main")}>MyParking</h5>
                </div>
            </div>

            <div className={'container'}>
                <div className={"btnCont"}>
                    <div className={"btn"}><p className={"btnString"} onClick={startParking}>Добавить машину</p></div>
                    <div className={"btn"}><p className={"btnString"} onClick={getCar}>Загрузить машины</p></div>
                </div>
                <input type="text" ref={carNumberRef} />
                <div className={"parkBlock"}>
                    <table>
                        <tr className={"tabRound"}>
                            <td className={"tab tabHeader"}>#</td>
                            <td className={"tab tabHeader"}>Номер</td>
                            <td className={"tab tabHeader"}>Время заезда</td>
                            <td className={"tab tabHeader"}>Время на парковке</td>
                            <td className={"tab tabHeader"}>К оплате</td>
                        </tr>
                        {car.map((car,index)=>(
                            <CarString car={car} index={index}/>
                        ))}
                    </table>

                </div>
            </div>
        </>


    );
};

export default MainPage;