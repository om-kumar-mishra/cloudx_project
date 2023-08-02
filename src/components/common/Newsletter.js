import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNewsletter } from '../../redux/action/Newsletteraction';
import ReactHtmlParser from 'react-html-parser';
const Newsletter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsletter());
    }, [])
    const newsLetterDetails = useSelector((state) => state?.NewsLetterReducer?.newsLetterList[0]);
    // console.log(`News Letter Details:`, newsLetterDetails);

    return (
        <>
            <div className="newsletter-area">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="newsletter-image">
                                <div id="media_image-4" className="" widget="widget_media_image"><img width="1000" height="600"
                                    src={`http://alobhaitsolution.com:1997/uploaded-files/${newsLetterDetails?.icon}`}
                                    className="image wp-image-364  attachment-full size-full" alt="" decoding="async" loading="lazy"
                                    style={{ maxWidth: "100%", height: "auto" }}
                                    srcSet={`http://alobhaitsolution.com:1997/uploaded-files/${newsLetterDetails?.icon} 985w, http://alobhaitsolution.com:1997/uploaded-files/${newsLetterDetails?.icon} 300w, http://alobhaitsolution.com:1997/uploaded-files/${newsLetterDetails?.icon} 768w`}
                                    sizes="(max-width: 985px) 100vw, 985px" /></div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="newsletter-content">
                                <div id="custom_html-9" className="widget_text " widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget ready-to-talk-p">
                                        {/* <h2 style={{ color: "#582bff", textShadow: "2px 2px 5px white", marginBottom: "13px" }}>{newsLetterDetails?.title}</h2>
                                        {ReactHtmlParser(newsLetterDetails?.description)} */}
                                        {/* removing margin of 13px from styling */}
                                        <h2 style={{ color: "#582bff", textShadow: "2px 2px 5px white" }}>{newsLetterDetails?.title}</h2>
                                        <p>

                                            {ReactHtmlParser(newsLetterDetails?.description)}
                                        </p>

                                        <Link to="/contactus" className="btn-custom my-1">Get Connected</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="analytics-shape1 text-end">
                        <img src="wp-content/themes/cloudx_new/assets/img/bigdata-analytics/analytics-shape1.png" alt="image" /></div>
                </div>
            </div >
        </>
    )
}

export default Newsletter