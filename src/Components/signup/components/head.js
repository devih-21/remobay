import {ReactComponent as ReactLogo} from '../../../logo/icon.svg';

const Head = () => {
    return(
        <div>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand ml-auto" href="#">
                        <ReactLogo width={100} height={30}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <div className="nav-link">
                                    <span>Already have an account? <a  href="/signin" className="px-2 secondColor">Log in</a></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}
export default Head;