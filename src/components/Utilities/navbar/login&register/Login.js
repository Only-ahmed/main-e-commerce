import { Link } from 'react-router-dom'
import logo from '../../../../Data/images/login/myjumia-top-logo.png'
import './bothForms.css'


const Login = () => {
    return (
        <div className="Loginform">
            <div>
                <div className="headLine">
                    <img className='mb-3' src={logo} alt='logo' width={'70px'} />
                    <div className='line1'>Login your account</div>
                    <div>Login To Jumia To access Your Account</div>
                </div>
                <div className='inputs'>
                    <input type='email' placeholder='E-mail / Phone number' />
                    <input type='password' placeholder='Password' />
                </div>
                <div className='click'>
                    <Link to={'/'}> <button>Sign in</button></Link>
                    <div className='last-line'>Don't have account? <Link to={'/register'}><span>register</span></Link> now</div>
                </div>
            </div>
        </div>
    )
}
export default Login