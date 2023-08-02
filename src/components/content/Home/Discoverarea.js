import React, { useState, useEffect } from 'react'
import { getDiscoverArea } from '../../../redux/action/Homeaction';
import { useDispatch, useSelector } from 'react-redux';
import AOS from 'aos';
import ScrollTrigger from 'react-scroll-trigger';
import ReactHtmlParser from 'react-html-parser'
const Discoverarea = () => {
    const [aosClass, setAosClass] = useState("do-box");
    const dispatch = useDispatch();
    // const [counterOn, setCounterOn] = useState(false);
    useEffect(() => {
        dispatch(getDiscoverArea());
        AOS.init();
    }, []);

    const discoverDetail = useSelector((state) => state?.HomeReducer?.discoverareaList);
    // console.log("Discover Detail=", discoverDetail);

    return (
        <>
            <div className="discover-area ptb-45 m-auto bg-f9f6f6">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>How We Make The Magic Happen</h2>
                        <div className="bar"></div>
                    </div>
                    {/* <ScrollTrigger onEnter={() => { setCounterOn(true) }} onExit={() => { setCounterOn(true) }}> */}

                        <div className="do-it-area" >
                            <div className="top-area-do">
                                <div className="box-flex-area">
                                    <ul className="box-ani">
                                        {
                                            discoverDetail?.map((card) => {
                                                return <li className="flip-box-area">
                                                    <div className="do-box aos-init aos-animate" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                                                        data-aos-duration="2000">
                                                        <img src={`http://alobhaitsolution.com:1997/uploaded-files/${card?.image}`} alt={card?.title} style={{ width: "100%" }} />
                                                        <div className="do-box-content">
                                                            <h4 className="text-center do-title">{card?.title}</h4>
                                                            <p className='do-box-p' style={{ textAlign: "left", fontSize: "12px", display: "-webkit-box", WebkitLineClamp: "8", WebkitBoxOrient: "vertical" ,overflow:'hidden', textOverflow:'ellipsis'}}>
                                                                {ReactHtmlParser(card?.description)}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    {/* </ScrollTrigger> */}
                </div>
                <div className="analytics-shape1">
                    <img
                        src="wp-content/themes/cloudx_new/assets/img/bigdata-analytics/analytics-shape1.png" alt="image" />
                </div>
            </div >
        </>
    )
}

export default Discoverarea;