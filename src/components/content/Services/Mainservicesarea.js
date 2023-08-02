import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from 'react-html-parser';
import { getService, getServiceBanner, getServiceHeading } from '../../../redux/action/Serviceaction';
const Mainservicesarea = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getServiceBanner());
        dispatch(getServiceHeading());
    }, []);

    const serviceDetail = useSelector((state) => state?.ServiceReducer?.serviceList);
    const serviceHeadingDetail = useSelector((state) => state?.ServiceReducer?.serviceHeadingList[0]);
    // console.log("Service=", serviceDetail);
    // console.log("Service Heading=", serviceHeadingDetail);

    return (
        <>
            <div className="services-area-two ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>{serviceHeadingDetail?.title}</h2>
                        <div className="bar"></div>
                        {ReactHtmlParser(serviceHeadingDetail?.description)}
                    </div>

                    <div className="row">
                        {
                            serviceDetail?.map(card => {
                                return <div className="col-lg-4 col-md-6 col-sm-12">
                                    <div className="single-services-box-item">
                                        <div className="icon">
                                            <img src={`http://alobhaitsolution.com:1997/uploaded-files/${card?.icon}`} alt={card?.title} />
                                        </div>
                                        <div>
                                            <h3><a href="#">{card?.title}</a></h3>
                                            <p style={{ textAlign: "justify !important" }}>{ReactHtmlParser(card?.description)}</p>
                                        </div>
                                        <div className="shape"><img src="../wp-content/themes/cloudx_new/assets/img/bigdata-analytics/rectangle.png" alt="image" /></div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainservicesarea