import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getHappyCustomers } from '../../../redux/action/Homeaction';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
const Feedback = () => {
    const [loading, setLoading] = useState(false)
    const responsive = {
        0: {
            items: 1
        },

        600: {
            items: 2
        },

        900: {
            items: 3
        }
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHappyCustomers());
    }, []);
    let i = 0;
    const customerDetail = useSelector((state) => state?.HomeReducer?.customerList);
    // console.log("customer=", customerDetail);
    setTimeout(() => {
        setLoading(true);
    }, 1000);
    return (
        <>
            <div className="bigdata-feedback-area ptb-80">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>Happy Customers Is All We Have Got</h2>
                        <div className="bar"></div>
                    </div>
                    <section className="logos-slider slider ">
                        <div className="owl-carousel owl-theme feedback owl-loaded owl-drag">
                            {loading && (<OwlCarousel className='owl-theme' loop margin={5} items={3} dots={true} autoplayTimeout={15000} autoplay={true} responsive={responsive}>
                                {
                                    customerDetail?.map(customer => {
                                        { i++ }
                                        return <div className="item" key={i}>
                                            <div className="single-feedback-box">
                                                <div className="feedback-desc" style={{  textOverflow: 'ellipsis' }}>
                                                    {ReactHtmlParser(customer?.description)}
                                                </div>

                                                <div className="client-info">
                                                    <img src={`http://alobhaitsolution.com:1997/uploaded-files/${customer?.image}`} alt={`${customer?.name}`} />
                                                    <h3>{customer?.name}</h3>
                                                    <span>{customer?.degination}</span>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }

                            </OwlCarousel>)}
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Feedback