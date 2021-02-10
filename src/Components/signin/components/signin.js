import '../styles/signin.css';
import Head from './head';
import SigninForm from './sign-in-form'
import SigninFooter from './signin-footer';
const Signin = (props) => {
    console.log(props)
    return(
        <div className="signin">
            <Head/>
            <SigninForm allProps={props} history={props.history}/>
            <SigninFooter/>
        </div>
    )
}

export default Signin;