import './UploadProfileImage.css';
import { useState, useEffect } from 'react';
import $ from "jquery";

const UploadProfileImage = () => {
  let [imgSrc, setImgSrc] = useState("");
  
  let xy = (st) => {
    setImgSrc(st);
  }

  // let imgSrc;
  let imgFile;

  $(document).on('hide.bs.modal','#uploadProfileImage', function () {
    console.log("Hidden");;
  });

  $(document).on('shown.bs.modal','#uploadProfileImage', function () {
    console.log("Shown");
    // imgSrc = "";
  });

  // function asyncFileReader (image) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  
  //     try {
  //       reader.readAsDataURL(image);
  //       reader.onloadend = () => {
  //         resolve(reader.result);
  //         console.log(reader.result);
  //       }
  //     } catch(e) {
  //       reject(e);
  //     }
  //   });
  // }

  // async function uploadImage(image) {
  //   const readerResult = await asyncFileReader(image);
  
  //   setImgSrc(readerResult);
  // }


  let showFileName = (e) => {
    e.preventDefault();
    let uploadButton = document.getElementById("confirmUploadBtn");
    imgFile = e.target.files[0];
    let image = document.getElementById("profileImage");
    
    const reader = new FileReader();
    reader.onload = () => {
      // imgSrc = reader.result;
      let result = reader.result;
      // console.log(result);
      // console.log(imgSrc);
      image.innerHTML = `<img src=${imgSrc} width="300px" height="300px" style="border-radius: 50%;" />`;
      if (typeof result == "string") {
        xy(result)
      } debugger;
      // setImgSrc(result);
      uploadButton.textContent = "Save Photo";
    }
    if (imgFile) {
      reader.readAsDataURL(imgFile);
    }
    console.log(imgSrc);
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
              <input type="file" id="uploadFileInput" onChange={showFileName} />
              <button id="confirmUploadBtn" type="button" className="btn">Attach photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadProfileImage;