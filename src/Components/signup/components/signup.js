import '../styles/signup.css';
import About from './about';
import Companies from './companies';
import Head from './head';
import SignupForm from './sign-up-form'
import SignupFooter from './signup-footer';
const Signup = () => {
    return(
        <div className="signup">
            <Head/>
            <SignupForm/>
            <Companies/>
            <About/>
            <SignupFooter/>
        </div>
    )
}

export default Signup;