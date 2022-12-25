import React, {useEffect, useState} from 'react';
import './style.scss'
import moment from "moment";
import CarString from "../components/CarString/CarString";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {complete, get, getPrice, start} from "../axios/axios";

export interface ICar{
    id:number,
    carNumber:string,
    startTime:string,
}

const MainPage = () => {
    const navigate = useNavigate()
    const [car,setCar] = useState<ICar[]>([])
    const [parkingPrice,setParkingPrice] = useState<number>(0)
    useEffect(()=>{
        getPrice().then(data=>setParkingPrice(data.price))
        getCar()
    },[setCar])

    const carNumberRef = React.useRef<any>(null)
    async function startParking(){
        start(carNumberRef.current.value,String(moment())).then(()=>get().then(data=>setCar(data)))

        // await axios.post('http://localhost:5000/cars', {carNumber:carNumberRef.current.value,startTime:moment()})
        //     .then(()=>get().then(data=>setCar(data)))
    }

    async function getCar(){
        get().then(data=>setCar(data))
    }

    async function comp(id:number){
       if(window.confirm("Завершить парковку?")){
            await complete(id)
                .then(()=>get()
                    .then(data=>setCar(data))
                )
        }
    }

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
                    {/*<div className={"btn"}><p className={"btnString"} onClick={getCar}>Загрузить машины</p></div>*/}
                        <p>Номер машины</p>
                        <input type="text" ref={carNumberRef} className={"input"} />
                </div>

                <div className={"parkBlock"}>
                    <table className={"tabBody"}>
                        <tr className={"tabRound"}>
                            <td className={"tab tabHeader"}>#</td>
                            <td className={"tab tabHeader"}>Номер</td>
                            <td className={"tab tabHeader"}>Время заезда</td>
                            <td className={"tab tabHeader"}>Время на парковке</td>
                            <td className={"tab tabHeader"}>К оплате</td>
                            <td className={"tab tabHeader"}>Завершить</td>
                        </tr>
                        {car.map((car: ICar , index)=>(
                            <CarString car={car} index={index} comp={comp} key={car.id} price={parkingPrice}/>
                        ))}
                    </table>

                </div>
            </div>
        </>


    );
};

export default MainPage;