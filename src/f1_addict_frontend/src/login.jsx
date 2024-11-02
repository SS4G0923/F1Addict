import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Banner from './components/banner';
import Footer from './components/footer';
import { useState } from 'react';
import { message } from 'antd';
import './login.css';

export default function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowScheduleFromParent, setIsShowScheduleFromParent] = useState(false);

    const loginApi = async(email, password) => {
        if(email.trim() === '' || password.trim() === ''){
            message.warning('Please enter username and password');
            return;
        }
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!reg.test(email)){
            message.warning('Please enter a valid email address');
            return;
        }
        const user = {'email': email, 'password': password};
        const res = await axios.post("http://localhost:7070/auth/login", user);
        if(res.data.code !== 200){
            message.error(res.data.message);
            return;
        }
        else if(res.data.code === 200){
            message.success('Login successfully');
            localStorage.setItem('username', res.data.data.username);
            localStorage.setItem('token', res.data.data.token);
            navigate('/home');
            return;
        }
    }
    document.title = 'F1Addict - Login';


    return(
        <>
            <Banner isShowScheduleFromParent={isShowScheduleFromParent}/>
            <div className="loginContent" >
                <div className="loginContentWrapper" onMouseOver={()=>setIsShowScheduleFromParent(false)}>
                    <div className="loginForm">
                        <div className="loginFormTitle">
                            <h1>Log in</h1>
                        </div>
                        <div className="loginFormInput">
                            <input type="text" name="eamil" placeholder="E-mail Address" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                        </div>
                        <div className="loginFormInput">
                            <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <div className="submitButton">
                            <input type="submit" value="Log in" onClick={()=>loginApi(email, password)}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}