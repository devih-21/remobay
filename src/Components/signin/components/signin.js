import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import '../styles/signin.css';
import Head from './head';
import SigninForm from './sign-in-form'
import SigninFooter from './signin-footer';
const Signin = () => {
  let history = useHistory();

  // useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     history.push('/profile/freelancer/1'); debugger;
  //   }
  // })

    return(
        <div className="signin">
            <Head/>
            <SigninForm/>
            <SigninFooter/>
        </div>
    )
}

export default Signin;