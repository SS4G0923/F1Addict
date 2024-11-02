import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from './components/banner'
import Footer from './components/footer'
import './register.css'
import { message } from 'antd'

export default function Register(){

    const navigate = useNavigate()

    const [isShowScheduleFromParent, setIsShowScheduleFromParent] = useState(false)
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signup = async (email, username, password) => {
        if(email.trim() === '' || password.trim() === '' || username.trim() === ''){
            message.warning('Please enter email, username and password');
            return;
        }
        const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!reg.test(email)){
            message.warning('Please enter a valid email address');
            return;
        }
        const user = {'email': email, 'username': username, 'password': password};
        const res = await axios.post('http://localhost:7070/auth/register', user);
        if(res.data.code === 0){
            message.success('Signup successfully');
            return;
        }
        else if (res.data.code === 1){
            message.error(res.data.message);   
            navigate('/login')
            return;
        }
    }

    document.title = 'F1Addict - Signup';

    return(
        <>
            <Banner isShowScheduleFromParent={isShowScheduleFromParent}/>
            <div className="registerContent" onMouseOver={()=>setIsShowScheduleFromParent(false)}>
                <div className="registerContentWrapper">
                    <div className="registerForm">
                        <form action="" method="POST">
                            <div className="registerFormTitle">
                                <h1>Sign up</h1>
                            </div>
                            <div className="registerFormInput">
                                <input type="text" name="email" placeholder="E-mail Address" autoComplete="off" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                            </div>
                            <div className="registerFormInput">
                                <input type="text" name="username" placeholder="Username" autoComplete="off" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                            </div>
                            <div className="registerFormInput">
                                <input type="password" name="password" placeholder="Password" autoComplete="off" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                            </div>
                            <div className="registerSubmitButton">
                                <input type="button" value="Sign up" onClick={()=>signup(email, username, password)}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}