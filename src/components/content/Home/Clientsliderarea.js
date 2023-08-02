import React, { useEffect, useState } from 'react'
// import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { getClientList } from '../../../redux/action/Homeaction';
import { useDispatch, useSelector } from 'react-redux';
const Clientsliderarea = () => {
    const [loading, isLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getClientList());
    }, []);
    let i = 0;
    const clientDetail = useSelector((state) => state.HomeReducer.clientList);
    // console.log("Clients=", clientDetail);
    setTimeout(() => { isLoading(true) }, 1000);
    return (
        <>
            <div className="clients-log ptb-80">
                <div className="section-title">
                    <h2>We Believe In Partnership & Collaboration</h2>
                    <div className="bar">
                    </div>
                </div>
                <div className="container-fluid">
                    <section className="logos-slider slider">
                        {/* OWl */}
                        {/* {console.log("loading:",loading)} */}
                        {loading && (<OwlCarousel className='owl-theme' loop margin={5} items={4} dots={false} autoplay={true} autoplayTimeout={1500} >
                            {clientDetail?.map(client => {
                                { i++ }
                                return <div className="item" key={i}><img src={`http://alobhaitsolution.com:1997/uploaded-files/${client?.icon}`} alt={client?.icon} /></div>
                            })}
                        </OwlCarousel>)};
                    </section>
                </div>
            </div>
        </>
    )
}

export default Clientsliderarea