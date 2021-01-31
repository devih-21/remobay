import '../styles/signin.css';
import Head from './head';
import SignupForm from './sign-in-form'
import SigninFooter from './signin-footer';
const Signup = () => {
    return(
        <div className="signin">
            <Head/>
            <SignupForm/>
            <SigninFooter/>
        </div>
    )
}

export default Signup;