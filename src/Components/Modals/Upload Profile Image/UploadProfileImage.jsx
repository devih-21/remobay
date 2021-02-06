import './UploadProfileImage.css';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadMultipleFiles } from '../../../Actions/utils';
import { useState, useEffect } from 'react';
import $ from "jquery";

class UploadProfileImage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {imgSrc: "qq"}
  }
  render() {
    // let [imgSrc, setImgSrc] = useState("");
    

    // let imgSrc;
    let imgFile;

    $(document).on('hide.bs.modal','#uploadProfileImage', function () {
      console.log("Hidden");;
    });

    $(document).on('shown.bs.modal','#uploadProfileImage', function () {
      console.log("Shown");
      // setImgSrc("123");
    });

    let saveProfilePic = (e) => {
      let pic = document.getElementById("profileImage");
      let picName = pic.children[0].attributes[1].nodeValue;
      console.log(picName);
      this.props.uploadMultipleFiles(picName)
      console.log(this.props.uploadedFiles);
      console.log(document.getElementById("confirmUploadBtn"));
    }


    let showFileName = (e) => {
      e.preventDefault();
      let uploadButton = document.getElementById("confirmUploadBtn");
      imgFile = e.target.files[0];
      let image = document.getElementById("profileImage");
      this.setState({imgSrc: "Hello World"})
      console.log(this.state.imgSrc);
      
      const reader = new FileReader();
      reader.onload = () => {
        let result = reader.result;
        console.log("result " + result);
        let fileName = e.target.files[0].name;
        console.log(e);
        image.innerHTML = `<img src=${result} filename=${fileName} width="300px" height="300px" style="border-radius: 50%;" />`;
        console.log(image.children[0].attributes[1].nodeValue);
        // setImgSrc(result);
        uploadButton.textContent = "Save Photo";
        uploadButton.type = "submit";
        uploadButton.onclick = saveProfilePic
        // this.props.uploadMultipleFiles(fileName, result)
      }
      if (imgFile) {
        reader.readAsDataURL(imgFile);
      }
      console.log(this.state.imgSrc);
    }


    return (
      <div>
        {/*Modal*/}
        <div className="modal fade " id="uploadProfileImage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Edit Photo</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body container">
                <div className="row col-12">
                  <div className="col-6">
                    <div id="previewImage"><div id="profileImage" className="h6">Attach or Drop photo Here</div></div>
                  </div>
                  <div className="col-6">
                    <div className="col-12 h3">Show clients the best version of yourself!</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button id="exitModal" type="button" className="btn" data-dismiss="modal">Cancel</button>
                <form action="/multiple-upload" method="POST" encType="multipart/form-data" >
                  <input type="file" multiple id="uploadFileInput" onChange={showFileName} />
                </form>
                <button id="confirmUploadBtn" type="submit" className="btn">Attach photo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {uploadedFiles: state.utilsReducer.uploadedFiles};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({uploadMultipleFiles}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps) (UploadProfileImage);