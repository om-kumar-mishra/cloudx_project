import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMap } from '../../../redux/action/Contactaction';
import { getFooterContact } from '../../../redux/action/FooterContactaction'



const Contactinfoarea = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterContact());
    }, [])
    const ContactDetails = useSelector((state) => state?.FooterContactReducer?.footerContactList[0]);

    const map_list = useSelector((state) => state?.ContactReducer?.mapList);

    return (
        <>
            <div className="contact-info-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src="../wp-content/uploads/2023/04/mail-box-6097676-5013081.png" />
                                </div>
                                <h3>Mail Us @</h3>
                                <p><a href={`mailto:${ContactDetails?.email}`}><span className="__cf_email__"
                                    data-cfemail="f796939a9e99b7848396858387d994989a">{ContactDetails?.email}</span></a>
                                </p>
                                <p><a href={`mailto:${ContactDetails?.email2}`}><span className="__cf_email__"
                                    data-cfemail="f796939a9e99b7848396858387d994989a">{ContactDetails?.email2}</span></a>
                                </p>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
>>>>>>> b68644e3e270d25ecb5449089db35078ba3a0323
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src="../wp-content/uploads/2023/04/2969405.png" />
                                </div>
                                <h3>Visit Us @</h3>
                                <p>{ContactDetails?.address}</p>
                            </div>
                        </div> */}

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src="../wp-content/uploads/2023/04/4696758.png" />
                                </div>
                                <h3>Call Us @</h3>
                                <p>+91 {ContactDetails?.phone}</p>
                                <p>+91 {ContactDetails?.phone2}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src="../wp-content/uploads/2023/04/4665631-1.png" />
                                </div>
                                <h3>Follow Us @</h3>
                                <ul className="d-flex">
                                    <li>
                                        <a href={`${ContactDetails?.linkedIn}`} className="linkedin"
                                            target="_blank" rel="noopener"><img src="../wp-content/uploads/2023/04/2447889.png"
                                                style={{ marginLeft: "-34px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${ContactDetails?.facebook}`} className="facebook" target="_blank"><img
                                            src="../wp-content/uploads/2023/04/free-facebook-4703920-3915172.png" style={{ marginLeft: "-29px" }} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`${ContactDetails?.instagram}`} className="instagram" target="_blank"
                                            rel="noopener"><img src="../wp-content/uploads/2023/04/2447888.png"
                                                style={{ marginLeft: "-30px" }} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12 my-3 text-center'>
                            <h4>Your Location</h4>
                        </div>
                        {/* <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="contact-info-box">
                                <div className="icon">
                                    <img src="../wp-content/uploads/2023/04/2969405.png" />
                                </div>
                                <h3>Visit Us @</h3>
                                <p>JAV Tower, H-17, H Block, Sector-63, Noida, Uttar Pradesh, India, 201301</p>
                            </div>
                        </div> */}
                    </div>
                    <OwlCarousel className='owl-theme' loop={false} items={2} dots={false} autoplay={true} autoplayTimeout={1500}>
                        {

                            map_list.map((element) => {
                                return (
                                    <>
                                        <div className="contact-info-box">
                                            <div className="icon">
                                                <img src="../wp-content/uploads/2023/04/2969405.png" />
                                            </div>
                                            <h3>{element?.title}</h3>
                                            <p>{element?.description}</p>
                                        </div>
                                    </>
                                )
                            })
                        }

                        {/* <div className="contact-info-box">
                            <div className="icon">
                                <img src="../wp-content/uploads/2023/04/2969405.png" />
                            </div>
                            <h3>Visit Us @</h3>
                            <p>JAV Tower, H-17, H Block, Sector-63, Noida, Uttar Pradesh, India, 201301</p>
                        </div>
                        <div className="contact-info-box">
                            <div className="icon">
                                <img src="../wp-content/uploads/2023/04/2969405.png" />
                            </div>
                            <h3>Visit Us @</h3>
                            <p>JAV Tower, H-17, H Block, Sector-63, Noida, Uttar Pradesh, India, 201301</p>
                        </div>
                        <div className="contact-info-box">
                            <div className="icon">
                                <img src="../wp-content/uploads/2023/04/2969405.png" />
                            </div>
                            <h3>Visit Us @</h3>
                            <p>JAV Tower, H-17, H Block, Sector-63, Noida, Uttar Pradesh, India, 201301</p>
                        </div>
                        <div className="contact-info-box">
                            <div className="icon">
                                <img src="../wp-content/uploads/2023/04/2969405.png" />
                            </div>
                            <h3>Visit Us @</h3>
                            <p>JAV Tower, H-17, H Block, Sector-63, Noida, Uttar Pradesh, India, 201301</p>
                        </div> */}

                    </OwlCarousel>;
                </div>
            </div>
        </>
    )
}

export default Contactinfoarea