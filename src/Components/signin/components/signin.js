import '../styles/signin.css';
import Head from './head';
import SigninForm from './sign-in-form'
import SigninFooter from './signin-footer';
const Signin = () => {
    return(
        <div className="signin">
            <Head/>
            <SigninForm/>
            <SigninFooter/>
        </div>
    )
}

export default Signin;