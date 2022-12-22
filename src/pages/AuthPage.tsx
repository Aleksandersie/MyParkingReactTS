import React from 'react';
import {CiLogin} from 'react-icons/ci'
import './style.scss'
import {Route,Routes,Link,useNavigate} from 'react-router-dom'


const AuthPage:React.FC = () => {
    const navigate = useNavigate();


    return (


                <div className={"container"}>
                    <div className={"logoGroupe"}>
                        <div className={"parkingString"}><h4>MyParking</h4></div>
                        <div><CiLogin className={"icon"}/></div>
                        <div className={"inputBlockMain"}>
                            <div className={"inputBlock"}>
                                <p className={'topString'}>Логин</p>
                                <input type="text" className={"input "}/>
                            </div>
                            <div className={"inputBlock"}>
                                <p className={'topString'}>Пароль</p>
                                <input type="password" className={"input "} />
                            </div>
                            <div className={"inputBlock"}>
                                <div className={"btn"}><p className={"btnString"} onClick={()=>navigate('/main')}>Вход</p></div>
                            </div>

                        </div>
                    </div>
                </div>



    );
};

export default AuthPage;