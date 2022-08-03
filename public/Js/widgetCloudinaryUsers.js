'use strict';
const boton_foto = document.getElementById("avatar")
const inputHidden = document.getElementById("hiddenAvatar")
const image = document.getElementById("imageProfile")
function showUploadWidget() { 
    cloudinary.openUploadWidget(
        { cloudName: "ds0upcco9", 
        uploadPreset: "ml_default", 
        sources: ["local", "camera", "google_drive", "facebook", "dropbox", "instagram", "shutterstock", "getty", "url", "unsplash", "istock"], 
        googleApiKey: "<image_search_google_api_key>", 
        showAdvancedOptions: false, 
        cropping: true, 
        multiple: false, 
        defaultSource: "local", 
        styles: { 
            palette: { 
                window: "#FFFFFF", 
                windowBorder: "#90A0B3", 
                tabIcon: "#FF5A00", 
                menuIcons: "#5A616A", 
                textDark: "#000000", 
                textLight: "#FFFFFF", 
                link: "#FF5A00", 
                action: "#FF620C", 
                inactiveTabIcon: "#000000", 
                error: "#F44235", 
                inProgress: "#FF8C00", 
                complete: "#20B832", 
                sourceBg: "#E4EBF1" }, 
                fonts: { 
                    default: null, "'Fira Sans', sans-serif": 
                    { url: "https://fonts.googleapis.com/css?family=Fira+Sans", active: true }
                 } 
                } 
            }, 
            (err, result) => 
            { if (!err && result && result.event === 'success'){ 
                console.log("Upload Widget event - ", result); 
                image.src = result.info.secure_url
                inputHidden.value=result.info.secure_url

            } 
        }); 
    }

boton_foto.addEventListener('click',showUploadWidget,false)
