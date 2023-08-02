import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getFooterContact } from '../../redux/action/FooterContactaction';
import ReactHtmlParser from 'react-html-parser'
const Footer = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterContact());
    }, [])
    const FooterContactDetails = useSelector((state) => state?.FooterContactReducer?.footerContactList[0]);
    // console.log(`Footer Contact Details:`, FooterContactDetails);

    return (
        <>
            <footer className="footer-area bg-f7fafd">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-4">
                            <div className="single-footer-widget">
                                <div className="footer-logo" style={{ marginLeft: "24px" }}>
                                    <Link to="/">
                                        
                                        <div id="media_image-3" className="widget widget_media_image"><Link
                                            to="/"><img width="2003" height="1048"
                                                src="wp-content/uploads/2023/03/White.png"
                                                className="image wp-image-45  attachment-full size-full" alt="" decoding="async"
                                                loading="lazy" style={{ maxWidth: "100%", height: "auto" }}
                                                // srcSet="https://cloudx.alobhatechnologies.co.in/wp-content/uploads/2023/03/White.png 2003w, https://cloudx.alobhatechnologies.co.in/wp-content/uploads/2023/03/White-300x157.png 300w, https://cloudx.alobhatechnologies.co.in/wp-content/uploads/2023/03/White-1024x536.png 1024w, https://cloudx.alobhatechnologies.co.in/wp-content/uploads/2023/03/White-768x402.png 768w, https://cloudx.alobhatechnologies.co.in/wp-content/uploads/2023/03/White-1536x804.png 1536w"
                                                // sizes="(max-width: 2003px) 100vw, 2003px"
                                                 /></Link></div>
                                    </Link>
                                </div>
                                <div id="custom_html-3" className="widget_text " widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <p style={{ textAlign: "left", marginLeft: "24px" }}>{ReactHtmlParser(FooterContactDetails?.summary)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget pl-5">
                                <div id="custom_html-4" className="widget_text" widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <h3 style={{ textAlign: "left" }}>Company</h3>
                                        <ul className="list">
                                            <li><Link to="/industry">Industry</Link></li>
                                            <li><Link to="/services">Services</Link></li>
                                            <li><Link to="/gallery">Gallery</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div id="custom_html-5" className="widget_text" widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <h3 style={{ textAlign: "left" }}>Support</h3>
                                        <ul className="list">
                                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div id="custom_html-6" className="widget_text" widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <h3 style={{ textAlign: "left" }}>Address</h3>

                                        <ul className="footer-contact-info">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                                {FooterContactDetails?.address}
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                                </svg>
                                                Email:
                                                <a href={`mailto: ${FooterContactDetails?.email}`}>
                                                    <span className="__cf_email__" data-cfemail="2e464b4242416e5d5a4f5c5a5e004d4143">{FooterContactDetails?.email}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                Phone: <a href={`tel:+91 ${FooterContactDetails?.phone}`}>+91
                                                    {FooterContactDetails?.phone}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="custom_html-7" className="widget_text" widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <ul className="social-links">
                                            <li><a href="https://www.linkedin.com/company/cloudxpertsindia/" className="linkedin"
                                                target="_blank" rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                            </a></li>
                                            <li><a href="https://www.facebook.com/cloudxpertsindia" className="facebook" target="_blank"
                                                rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/cloudxpertsconsulting/" className="instagram"
                                                target="_blank" rel="noopener">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                                            </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <div id="custom_html-8" className="widget_text" widget="widget_custom_html">
                                    <div className="textwidget custom-html-widget">
                                        <p style={{ textAlign: "center" }}>Copyright © 2023 CloudXperts Consulting Pvt Ltd. All Right
                                            Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // <img src="wp-content/themes/cloudx_new/assets/img/map.png" className="map" alt="map" /> */}
                <div className="shape1"><img src="wp-content/themes/cloudx_new/assets/img/shape1.png" alt="shape" /></div>
                <div className="shape8 rotateme"><img src="wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
            </footer>
        </>
    )
}

export default Footer