import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import { getRemoteStaff, getWhatwecan } from '../../../redux/action/Homeaction';
import { getService } from '../../../redux/action/Serviceaction';
const Whatwedo = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWhatwecan());
        dispatch(getRemoteStaff());
        dispatch(getService());
    }, []);

    const whatwedoDetail = useSelector((state) => state.HomeReducer.whatwedoList);
    const remoteStaffDetail = useSelector((state) => state.HomeReducer.remotestaffList);
    const serviceDetail = useSelector((state) => state?.ServiceReducer?.serviceList);
    // console.log("whatwedo=", whatwedoDetail);
    // console.log("remoteStaff=", remoteStaffDetail);
    console.log('What we do Area/Service Detail:', serviceDetail);

    return (
        <>
            <div className="what-we-do-area ptb-80">
                <div className="container">
                    <div className="section-title">
                        <h2>See What We Can Solve For You</h2>
                        <div className="bar"></div>
                    </div>
                    <div className="what-we-do-area-content">
                        <div className="top-row-section">
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <div className="single-what-we-do-box single-what-we-do-box-cus">
                                        <div className="icon">
                                            <img className="whatwedoicon" style={{}} src={`http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail[0]?.icon}`} alt={`a. ${serviceDetail[0]?.title}`} />
                                        </div>
                                        <h3 style={{ textAlign: "left", marginLeft: "15px", marginBottom: "10px" }}>
                                            <Link to="/services"><b className="service-home-bold">{serviceDetail[0]?.title}</b></Link>
                                        </h3>
                                        <div
                                            style={{ display: "-webkit-box", WebkitLineClamp: "4", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            <p style={{ textAlign: "left", marginLeft: "15px" }}>
                                                {(serviceDetail[0]?.description?.length < 150) ?
                                                    ReactHtmlParser(serviceDetail[0]?.description)
                                                    : ReactHtmlParser(serviceDetail[0]?.description?.slice(0, 150) + "...")
                                                }
                                            </p>
                                        </div>
                                        <Link to="/services" className="read-more-btn">Learn More<svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="single-what-we-do-box single-what-we-do-box-cus">
                                        <div className="icon">
                                            <img className="whatwedoicon" style={{}} src={`http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail[1]?.icon}`}
                                                alt={`b. ${serviceDetail[1]?.title}`} />
                                        </div>
                                        <h3 style={{ textAlign: "left", marginLeft: "15px", marginBottom: "10px" }}><Link
                                            to="/services"><b className="service-home-bold">{serviceDetail[1]?.title}</b></Link> </h3>
                                        <div
                                            style={{ display: "-webkit-box", WebkitLineClamp: "4", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            <p style={{ textAlign: "left", marginLeft: "15px" }}>

                                                {(serviceDetail[1]?.description?.length < 150) ?
                                                    ReactHtmlParser(serviceDetail[1]?.description)
                                                    : ReactHtmlParser(serviceDetail[1]?.description?.slice(0, 150) + "...")
                                                }</p>
                                        </div>
                                        <Link to="/services" className="read-more-btn">Learn More<svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></Link>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="single-what-we-do-box single-what-we-do-box-cus">
                                        <div className="icon">
                                            <img className="whatwedoicon" style={{}} src={`http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail[2]?.icon}`}
                                                alt={`c. ${serviceDetail[2]?.title}`} />
                                        </div>
                                        <h3 style={{ textAlign: "left", marginLeft: "15px", marginBottom: "10px" }}><Link
                                            to="/services"><b className="service-home-bold">{serviceDetail[2]?.title}</b></Link> </h3>
                                        <div
                                            style={{ display: "-webkit-box", WebkitLineClamp: "4", WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                            <p style={{ textAlign: "left", marginLeft: "15px" }}>{(serviceDetail[2]?.description?.length < 150) ?
                                                ReactHtmlParser(serviceDetail[2]?.description)
                                                : ReactHtmlParser(serviceDetail[2]?.description?.slice(0, 150) + "...")
                                            }</p>
                                        </div>
                                        <Link to="/services" className="read-more-btn">Learn More<svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-row-section">
                            <div className="row">
                                <div className="col-lg-8 col-12" style={{ paddingRight: "30px" }}>
                                    <div className="what-we-image">

                                        <div className="what-we-do-image mt-3 single-what-we-do-box-cus">
                                            <img className="whatwedoicon" src={`http://alobhaitsolution.com:1997/uploaded-files/${remoteStaffDetail[0]?.icon}`}
                                                alt="Remote Staff Augmentation Image" style={{ width: "100%", height: "380px" }} />
                                            <div className="top-left">
                                                <h2 className="text-white" style={{ textAlign: "left" }}>{remoteStaffDetail[0]?.title}</h2>
                                                <p className="text-white" style={{ textAlign: "left", fontSize: "17px", fontWeight: "200" }} id='remotestaffdescription'>
                                                    {(remoteStaffDetail[0]?.description?.length < 200) ?
                                                        ReactHtmlParser(remoteStaffDetail[0]?.description)
                                                        : ReactHtmlParser(remoteStaffDetail[0]?.description?.slice(0, 200) + "...")
                                                    }
                                                    {/* {ReactHtmlParser(remoteStaffDetail[0]?.description)} */}
                                                </p> <Link to="/contactus" className="contact-us-btn">Contact Us
                                                    Now<img src="wp-content/uploads/2023/04/arroww.png" alt="image"
                                                        style={{ width: "20%", marginLeft: "10px" }} /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="single-what-we-do-box single-what-we-do-box-cus">
                                                <div className="icon">

                                                    <img className="whatwedoicon" src={`http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail[3]?.icon}`}
                                                        alt={`d. ${serviceDetail[3]?.title}`} />
                                                </div>
                                                <h3 style={{ textAlign: "left", marginLeft: "15px", marginBottom: "10px" }}>
                                                    <Link to="/services"><b class="service-home-bold">{serviceDetail[3]?.title}</b></Link>
                                                </h3>
                                                <p style={{ textAlign: "left", marginLeft: "15px" }}>
                                                    {(serviceDetail[3]?.description?.length < 150) ?
                                                        ReactHtmlParser(serviceDetail[3]?.description)
                                                        : ReactHtmlParser(serviceDetail[3]?.description?.slice(0, 150) + "...")
                                                    }</p>
                                                <Link to="/services" className="read-more-btn">Learn More<svg
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg></Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="single-what-we-do-box single-what-we-do-box-cus">
                                                <div className="icon">

                                                    <img src={`http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail[4]?.icon}`}
                                                        alt={`e. ${serviceDetail[1]?.title}`} />
                                                </div>
                                                <h3 style={{ textAlign: "left", marginLeft: "15px", marginBottom: "10px" }}>
                                                    <Link to="/services"><b className="service-home-bold">{serviceDetail[4]?.title}</b></Link>
                                                </h3>
                                                <p style={{ textAlign: "left", marginLeft: "15px" }}>
                                                    {(serviceDetail[4]?.description?.length < 150) ?
                                                        ReactHtmlParser(serviceDetail[4]?.description)
                                                        : ReactHtmlParser(serviceDetail[4]?.description?.slice(0, 150) + "...")
                                                    }
                                                </p>
                                                <Link to="/services" className="read-more-btn">Learn More<svg
                                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    fill="currentColor" className="bi bi-arrow-right mx-3" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                                </svg></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whatwedo