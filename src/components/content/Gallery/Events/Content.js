import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getEvent } from '../../../../redux/action/Galleryaction';
import { Link } from 'react-router-dom';

const Content = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEvent());
    }, []);
    let i = 0;
    const eventDetail = useSelector((state) => state?.GalleryReducer?.eventList);
    // console.log("event=", eventDetail);
    return (
        <>
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="row">
                        {eventDetail?.map(event => {
                            { i++ }
                            return <div className="col-lg-4 col-sm-6 col-md-6" key={i}>
                                <div className="agency-services-box">
                                    <img src={`http://alobhaitsolution.com:1997/uploaded-files/${event?.image}`} alt={`${event?.title}`} style={{ height: "312px", width: "450px" }} />
                                    <div className="content">
                                        {/* <h3><Link to={`/gallery-events-gallery/${event?.id}`}>{event?.title}</Link></h3> */}
                                        <h3><Link to={`/${event?.id}`}>{event?.title}</Link></h3>
                                    </div>
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