import { useState } from 'react';
// import {Route} from 'react';
import { useNavigate } from 'react-router-dom';
// import Carosel from '../Assests/Images/Carosel.webp';
import BookCover from '../Assests/Images/wonderBloom.webp';
import NavBar from '../Components/NavBar';
import '../Assests/CSS/NavBar.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {

    const history = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === 'Zaynaa' && password === '1234') {
            toast.info('Dive in bookWorm!', {
                position: "bottom-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setTimeout(() => {
                history('/home')
            }, 1800)

        } else {
            setUsername("");
            setPassword("");
            toast.error('Incorrect Username/Password!', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // alert('Invalid username or password');
        }
    };

    return (
        <>
            <NavBar />
            <div class="loginBody">
                <div className="loginWrapper">
                    <div className="login">
                        <form action="#" class="loginF" onSubmit={handleSubmit}>
                            <p class="header">Login</p>
                            <input type="text" id="userN" class="loginInput" placeholder='Username' required value={username} onChange={handleUsernameChange} />
                            <input type="password" id="passW" class="loginInput" placeholder='Password' required value={password} onChange={handlePasswordChange} />
                            <input type="submit" id="submitL" class="buttonL" value="Login" />
                        </form>
                        {/* <div class = "navi">
                        <Link to ='/register'>
                            <p class = "new">New to goodReads? Register</p>
                        </Link>
                    </div> */}
                    </div>
                    <div className="carosel">
                        <img src={BookCover} alt='Img' />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <ToastContainer
                position="bottom-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

        </>
    )
}

export default Login;