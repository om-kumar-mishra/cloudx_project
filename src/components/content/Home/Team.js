import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTeam } from '../../../redux/action/Homeaction';
import ReactHtmlParser from 'react-html-parser';
const Team = () => {
    const [loading, setLoading] = useState(false);
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
        dispatch(getTeam());
    }, []);
    let i = 0;
    const teamDetail = useSelector((state) => state?.HomeReducer?.teamList);
    // console.log("Team=", teamDetail);
    setTimeout(() => {
        setLoading(true)
    }, 1000);
    return (
        <>
            <div className="team-area repair-team-area ptb-80 bg-f9f6f6">
                <div className="container">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="section-title">
                        <h2>Our Awesome Team That Makes It Happen</h2>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <section className="logos-slider slider">
                            {loading && (<OwlCarousel className='owl-theme' loop margin={5} autoplayTimeout={1500} autoplay={true} responsive={responsive}>
                                {teamDetail?.map(teammember => {
                                    { i++ }
                                    return <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                                        <div className="single-team">
                                            <div className="team-image">
                                                <img src={`http://alobhaitsolution.com:1997/uploaded-files/${teammember?.image}`} alt={`${i}. ${teammember?.Name}}`} />
                                            </div>

                                            <div className="team-content" >
                                                <div className="team-info">
                                                    <h3>{teammember?.Name}</h3>
                                                    <span>{teammember?.designation}</span>
                                                </div>
                                                <ul>
                                                    <li><a href={`mailto:${teammember?.mail}`} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                                    </a> </li>
                                                    <li><a href={`${teammember?.skype}`} target="_blank">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                            fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                                                            <path
                                                                d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
                                                        </svg>
                                                    </a> </li>
                                                    <li><a href={`${teammember?.linkedin}`} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> </li>
                                                </ul>
                                                {
                                                    teammember?.message?.length > 180 ?
                                                        ReactHtmlParser(teammember?.message?.slice(0, 180) + "...")
                                                        : ReactHtmlParser(teammember?.message)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </OwlCarousel>)}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team