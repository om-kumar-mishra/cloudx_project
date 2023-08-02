import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFooterContact } from '../../redux/action/FooterContactaction';

const Header = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterContact());
    }, [])
    const HeaderContactDetails = useSelector((state) => state?.FooterContactReducer?.footerContactList[0]);
    // console.log('Header Contact details:', HeaderContactDetails);

    const [style, setStyle] = useState({ display: "none" });
    const [toggleViewer, setToggleViewer] = useState(<span><span><span></span></span></span>);
    const handletogglenavbar = () => {
        if (style.display === "none") {
            setStyle({});
            setToggleViewer("X");
        } else {
            setStyle({ display: "none" });
            setToggleViewer(<span><span><span></span></span></span>);
        }
    }
    return (
        <>

            <header id="header" className="headroom navbar-color-white">
                <div className="top-header-area">
                    <div className="top-header-area-start">
                        <div className="container-fluid">
                            <div className="justify-content-end">
                                <ul className="ml-auto d-flex justify-content-end">
                                    <li className="nav-item mail-icon mx-4">
                                        <a className="text-white" style={{ fontSize: "14px" }} href={`mailto:${HeaderContactDetails?.email}`}>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                                            {HeaderContactDetails?.email}</a>
                                    </li>
                                    <li className="nav-item ph-icon" style={{ marginRight: "2rem" }}>
                                        <a className="text-white" href="#" style={{ fontSize: "14px" }}>
                                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                                            +91 {HeaderContactDetails?.phone}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="startp-responsive-nav">
                    <div className="container-fluid">
                        <div className="startp-responsive-menu mean-container">
                            <div className="mean-bar">
                                <a className="meanmenu-reveal" style={{ right: "0px", left: "auto", textAlign: "center", textIndent: "0px", fontSize: "18px" }} onClick={handletogglenavbar}>
                                    {toggleViewer}
                                </a>
                                <nav className="mean-nav">
                                    <div className="menu-primary-container">
                                        <ul className="navbar-nav nav ml-auto" style={style}>
                                            <li className="nav-item"><a className="nav-link" href="#"></a></li>
                                            <li id="menu-item-37" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-37">
                                                <Link to="/" aria-current="page">Home</Link></li>
                                            <li id="menu-item-35" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><Link to="/services">Services</Link></li>
                                            <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85"><Link to="/industry">Industry</Link></li>
                                            <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><Link to="/gallery">Gallery</Link></li>
                                            <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31 mean-last"><Link to="/contactus">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="logo">
                                <Link to="/">
                                    <img src="wp-content/uploads/2023/04/logo.png" alt="logo" title='CloudXperts' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="startp-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="logo_area">
                                <Link to="/">
                                    <img src="wp-content/uploads/2023/04/logo.png" alt="logo" title='CloudXperts' />
                                </Link>
                            </div>


                            <div className="mean-push"></div><div className="collapse navbar-collapse mean-menu justify-content-end" id="navbarSupportedContent" style={{ display: "none" }}>
                                <div className="menu-primary-container">
                                    <ul className="navbar-nav nav ml-auto">
                                        <li className="nav-item"><a className="nav-link" href="%24menu_item_url.html"></a></li>
                                        <li id="menu-item-37" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-37">
                                            <Link to="/" aria-current="page">Home</Link></li>
                                        <li id="menu-item-35" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><Link to="/services">Services</Link></li>
                                        <li id="menu-item-85" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85"><Link to="/industry">Industry</Link></li>
                                        <li id="menu-item-32" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><Link to="/gallery">Gallery</Link></li>
                                        <li id="menu-item-31" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><Link to="/contactus">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="others-option-for-responsive">
                                <div className="container">
                                    <div className="dot-menu">
                                        <div className="inner">
                                            <div className="circle circle-one"></div>
                                            <div className="circle circle-two"></div>
                                            <div className="circle circle-three"></div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="option-inner">
                                            <div className="others-option">
                                                <a href="cart.html" className="cart-wrapper-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg><span>0</span></a>
                                                <a href="contact.html" className="btn btn-light">Support</a>
                                                <a href="login.html" className="btn btn-primary">Login</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="others-option">
                            </div>
                        </nav>
                    </div>
                </div>


            </header>
            {/* <header id="header" className="headroom navbar-color-white">
                <div className="startp-responsive-nav">
                    <div className="container-fluid">
                        <div className="startp-responsive-menu">
                            <div className="logo">
                                <Link to="index.html">
                                    <img src="./wp-content/uploads/2023/04/logo.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="startp-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <div className="logo_area">
                                <Link to="index.html">
                                    <img src="wp-content/uploads/2023/04/logo.png" alt="logo" style={{ marginLeft: "24px" }} />
                                </Link>
                            </div>


                            <div className="collapse navbar-collapse mean-menu justify-content-end" id="navbarSupportedContent">
                                <div className="top-header-area">
                                    <div className="top-header-area-start">
                                        <div className="container-fluid">
                                            <div className="justify-content-end">
                                                <ul className="ml-auto d-flex justify-content-end">
                                                    <li className="nav-item mail-icon mx-4">
                                                        <Link className="text-white" to="mailto: sales@cloudxperts.co.in"
                                                            style={{ fontSize: "14px" }}>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                            </span>
                                                            sales@cloudxperts.co.in</Link>
                                                    </li>
                                                    <li className="nav-item ph-icon">
                                                        <Link className="text-white" to="#" style={{ fontSize: "14px" }}>
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                                            </span>
                                                            +91 882-608-7600</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu-primary-container">
                                    <ul className="navbar-nav nav ml-auto">
                                        <li className="nav-item"><Link className="nav-link" to="%24menu_item_url.html"></Link> </li>
                                        <li id="menu-item-37"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-37">
                                            <Link to="/" aria-current="page">Home</Link>
                                        </li>
                                        <li id="menu-item-35"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-35"><Link
                                                to="/services">Services</Link> </li>
                                        <li id="menu-item-85"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-85"><Link
                                                to="/industry">Industry</Link> </li>
                                        <li id="menu-item-32"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-32"><Link
                                                to="/gallery">Gallery</Link> </li>
                                        <li id="menu-item-31"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31"><Link
                                                to="/contactus">Contact Us</Link> </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="others-option-for-responsive">
                                <div className="container">
                                    <div className="dot-menu">
                                        <div className="inner">
                                            <div className="circle circle-one"></div>
                                            <div className="circle circle-two"></div>
                                            <div className="circle circle-three"></div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="option-inner">
                                            <div className="others-option">
                                                <Link to="cart.html" className="cart-wrapper-btn"><i
                                                    data-feather="shopping-cart"></i><span>0</span></Link>
                                                <Link to="contact.html" className="btn btn-light">Support</Link>
                                                <Link to="login.html" className="btn btn-primary">Login</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="others-option">

                            </div>
                        </nav>
                    </div>
                </div>

            </header> */}
        </>
    )
}

export default Header