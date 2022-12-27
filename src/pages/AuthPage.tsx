import React from 'react';
import {CiLogin} from 'react-icons/ci'
import './style.scss'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'
import {loginUser} from "../axios/axios";
import {AxiosError} from "axios";



const AuthPage:React.FC = () => {
    const navigate = useNavigate();
    const loginRef = React.useRef<HTMLInputElement>(null)

    async function login(){
        try{
            const res =  await loginUser(loginRef.current?.value)
            if (res === true) {
                navigate("/main")
            }
        }catch (err ){
            if (err instanceof AxiosError) {
                alert(err.response?.data.message);
            }
        }
    }
    return (


                <div className={"container"}>
                    <div className={"logoGroupe"}>
                        <div className={"parkingString"}><h4>MyParking</h4></div>
                        <div><CiLogin className={"icon"}/></div>
                        <div className={"inputBlockMain"}>
                            <div className={"inputBlock"}>
                                <p className={'topString'}  >Логин</p>
                                <input type="text" className={"input "} ref={loginRef}/>
                            </div>
                            <div className={"inputBlock"}>
                                <p className={'topString'}>Пароль</p>
                                <input type="password" className={"input"} />
                            </div>
                            <div className={"inputBlock"}>
                                <div className={"btn"}><p className={"btnString"} onClick={login}>Вход</p></div>
                            </div>

                        </div>
                    </div>
                </div>



    );
};

export default AuthPage;