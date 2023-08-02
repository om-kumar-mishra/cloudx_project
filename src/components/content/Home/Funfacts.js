import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useSelector, useDispatch } from "react-redux";
import { getCounters } from '../../../redux/action/Homeaction';
const Funfacts = () => {
    const [counterOn, setCounterOn] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCounters());
    }, []);

    const counterDetail = useSelector((state) => state?.HomeReducer?.counterList[0]);
    // console.log("counter=", counterDetail);
    return (
        <>
            <div className="funfacts-area bg-image ptb-80">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2 style={{ color: "#fff" }}>Relax!!! We Have Got You Covered</h2>
                        <div className="bar"></div>
                    </div>
                    <ScrollTrigger onEnter={() => { setCounterOn(true) }} onExit={() => { setCounterOn(true) }}>

                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-3 col-6 col-sm-6 mt-2">
                                <div className="single-funfact">
                                    <h3><span className="odometer odometer-auto-theme" data-count="50+">
                                        <div className="odometer-inside">
                                            <span className="odometer-value">{counterOn && <CountUp start={0} end={counterDetail?.success_champions} duration={3} delay={0.3} />}</span>
                                        </div>
                                    </span>+
                                    </h3>
                                    <p style={{ color: "#fff" }}>Success Champions</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 col-sm-6 mt-2">
                                <div className="single-funfact">
                                    <h3><span className="odometer odometer-auto-theme" data-count="50+">
                                        <div className="odometer-inside">
                                            <span className="odometer-value">{counterOn && <CountUp start={0} end={counterDetail?.salesforce_certification} duration={3} delay={0.3} />}</span>
                                        </div>
                                    </span>+
                                    </h3>
                                    <p style={{ color: "#fff" }}>Salesforce Certifications</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 col-sm-6 mt-2">
                                <div className="single-funfact">
                                    <h3><span className="odometer odometer-auto-theme" data-count="50+">
                                        <div className="odometer-inside">
                                            <span className="odometer-value">{counterOn && <CountUp start={0} end={counterDetail?.happy_customers} duration={3} delay={0.3} />}</span>
                                        </div>
                                    </span>+
                                    </h3>
                                    <p style={{ color: "#fff" }}>Happy Customers</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 col-sm-6 mt-2">
                                <div className="single-funfact">
                                    <h3><span className="odometer odometer-auto-theme" data-count="50+">
                                        <div className="odometer-inside">
                                            <span className="odometer-value">{counterOn && <CountUp start={0} end={counterDetail?.project_delivered} duration={3} delay={0.3} />}</span>
                                        </div>
                                    </span>+
                                    </h3>
                                    <p style={{ color: "#fff" }}>Projects Delivered</p>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 col-sm-6 mt-2">
                                <div className="single-funfact">
                                    <h3><span className="odometer odometer-auto-theme" data-count="50+">
                                        <div className="odometer-inside">
                                            <span className="odometer-value">{counterOn && <CountUp start={0} end={counterDetail?.go_to_market_solution} duration={3} delay={0.2} />}</span>
                                        </div>
                                    </span>+
                                    </h3>
                                    <p style={{ color: "#fff" }}>Go To Market Solutions</p>
                                </div>
                            </div>

                            
                        </div>
                    </ScrollTrigger>
                </div>
            </div>
        </>
    )
}

export default Funfacts