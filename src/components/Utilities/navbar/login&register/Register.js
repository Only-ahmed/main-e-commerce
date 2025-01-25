import { Link } from 'react-router-dom'
import logo from '../../../../Data/images/login/myjumia-top-logo.png'
import './bothForms.css'


const Register = () => {
    return (
        <div className="Loginform">
            <div>
                <div className="headLine">
                    <img className='mb-3' src={logo} alt='logo' width={'70px'} />
                    <div className='line1'>Login your account</div>
                    <div>Login To Jumia To access Your Account</div>
                </div>
                <div className='inputs'>
                    <input type='text' placeholder='username' />
                    <input type='email' placeholder='E-mail / Phone number' />
                    <input type='password' placeholder='Password' />
                    <input type='password' placeholder='Confirm Password' />
                </div>
                <div className='click'>
                    <button>Sign up</button>
                    <div className='last-line'>have an account? <Link to={'/login'}><span>login</span></Link> now</div>
                </div>
            </div>
        </div>
    )
}
export default Register