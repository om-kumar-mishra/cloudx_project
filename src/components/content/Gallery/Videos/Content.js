import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getVideo } from '../../../../redux/action/Galleryaction';
const Content = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideo());
    }, [])
    const videoList = useSelector((state) => state?.GalleryReducer?.videoList);
    // console.log("video list = ", videoList);
    let i = 0;
    return (
        <>
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="row">
                        {videoList?.map((video) => {
                            { i++ }
                            return <div className="col-lg-4 col-sm-6 col-md-6" key={i}>
                                <div className="agency-services-box">
                                    <video width="300" height="240" controls poster='./wp-content/uploads/2023/05/play-button.png'>
                                        <source src={`http://alobhaitsolution.com:1997/uploaded-files/${video?.video}`} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                    {/* <div className="content">
                                        <h3><Link to={`/${event?.id}`}>{event?.title}</Link></h3>
                                    </div> */}
                                </div>
                            </div>
                        })}
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
            </div>
        </>
    )
}

export default Content
