import {ReactComponent as ReactLogo} from '../../../logo/icon.svg';

const Head = () => {
    return(
        <div>
            <div className="container">
                <div className="row py-4 px-0">
                    <div className="col-12">
                        <div className="logo p-0 float-left ">
                            <ReactLogo width={100} height={30}/>
                        </div>
                      
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Head;