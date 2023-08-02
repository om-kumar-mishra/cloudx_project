import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { getImage } from '../../../../redux/action/Galleryaction';

//lightGallery CSS
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

//lightGallery CSS

const Servicearea = () => {
    const [lightboxDisplay, setLightBoxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState("");
    const [responsiveClass, setResponsiveClass] = useState("col-md-3");
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const setWindowDimensions = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        dispatch(getImage());
        window.addEventListener('resize', setWindowDimensions);
        // if(windowWidth>426 && windowWidth<992){
        //     setResponsiveClass('col-md-6 my-3');
        // }else{
        //     setResponsiveClass('col-md-3 my-2');
        // }
        return () => {
            window.removeEventListener('resize', setWindowDimensions)
        }
    }, []);
    const dispatch = useDispatch();
    const imgDetail = useSelector((state) => state?.GalleryReducer?.imageList);
    // console.log("img=", imgDetail);

    let i = 0;
    //function to show a specific image in the lightbox, amd make lightbox visible
    const showImage = (image) => {
        setImageToShow(image);
        setLightBoxDisplay(true);
    };

    //hide lightbox
    const hideLightBox = () => {
        setLightBoxDisplay(false);
    };

    //show next image in lightbox
    const showNext = (e) => {
        e.stopPropagation();
        let currentIndex = imgDetail.indexOf(imageToShow);
        if (currentIndex >= imgDetail.length - 1) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = imgDetail[currentIndex + 1];
            setImageToShow(nextImage);
        }
    };

    //show previous image in lightbox
    const showPrev = (e) => {
        e.stopPropagation();
        let currentIndex = imgDetail.indexOf(imageToShow);
        if (currentIndex <= 0) {
            setLightBoxDisplay(false);
        } else {
            let nextImage = imgDetail[currentIndex - 1];
            setImageToShow(nextImage);
        }
    };

    return (
        <>
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="image-gallery-class" style={{ justifyContent: "center" }}>
                        <LightGallery speed={500} plugin={[lgThumbnail, lgZoom, lgAutoplay, lgVideo, lgShare, lgRotate]}>
                            {imgDetail?.map(image => {
                                { i = i + 1; }
                                return <a href={`http://alobhaitsolution.com:1997/uploaded-files/${image?.image}`}
                                    // className={(windowWidth > 426 && windowWidth < 992) ? "col-md-6 my-3" : "col-md-3 my-3"}
                                    className="my-3 col-lg-3 col-md-6 col-sm-6"
                                    key={i}>
                                    <img src={`http://alobhaitsolution.com:1997/uploaded-files/${image?.image}`} alt={image?.image} width="300" height="350" style={{ borderStyle: "solid", borderWidth: "5px", borderColor: "#dcd9d9", borderRadius: "2px", objectFit: "cover" }} />
                                </a>


                            })}
                        </LightGallery>


                        {/* {
                            lightboxDisplay ?
                                <div id="lightbox" onClick={hideLightBox} style={{
                                    zIndex: 999,
                                    position: "fixed",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}>
                                    <button style={{ backgroundColor: "#1d9a9f", visibility: "hidden" }} onClick={showPrev}>⭠</button>
                                    <img id="lightbox-img" src={imageToShow} ></img>
                                    <button style={{ backgroundColor: "#1d9a9f", visibility: "hidden" }} onClick={showNext}>⭢</button>
                                </div >
                                : ""
                        } */}


                        <div className="col-12" style={{ textAlign: "center" }}>
                            <div className="">
                                <Link to="/gallery"><img src='/wp-content/uploads/2023/04/back_button.png' height="50px" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape2 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
                <div className="shape3"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape3.svg" alt="shape" /></div>
                <div className="shape4"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape6 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape7"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape8 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
            </div >
        </>
    )
}

export default Servicearea