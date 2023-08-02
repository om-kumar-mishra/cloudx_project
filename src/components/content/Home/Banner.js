import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getBanner } from '../../../redux/action/Homeaction'
import ReactHtmlParser from 'react-html-parser';
const Banner = () => {
    const dispatch = useDispatch();
    const [isLoading, setisLoading] = useState(false);
    useEffect(() => {
        setisLoading(false);
        dispatch(getBanner());
        // const bannerDetail = useSelector((state) => state?.HomeReducer?.bannerList);
        setisLoading(true);
    }, []);

    const bannerDetail = useSelector((state) => state?.HomeReducer?.bannerList);
    // console.log("Banner=", bannerDetail, isLoading);

    return (
        <>
            {isLoading && <div className="bigdata-analytics-banner" style={{ backgroundImage: `url("http://alobhaitsolution.com:1997/uploaded-files/${bannerDetail?.image}")` }}>
                <div className="container-fluid">
                    <div className="bigdata-analytics-content" style={{ maxWidth: "850px", marginTop: "200px" }}>
                        <h1 style={{ marginBottom: "0px" }}>{bannerDetail.title}</h1>
                        {/* <h1 style={{ marginBottom: "0px" }}>with CRM & Digital Transformations</h1> */}
                        <p style={{ maxWidth: "610px", color: "#fff", marginTop: "20px" }}>
                            {/* {ReactHtmlParser(bannerDetail?.details?.slice(0, 250).replace(/(<([^>]+)>)/ig, '') + "...")}  */}
                            {
                                (bannerDetail?.details?.length < 200) ?
                                    ReactHtmlParser(bannerDetail?.details) :
                                    ReactHtmlParser(bannerDetail?.details?.slice(0, 200) + "...")
                            }
                        </p>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Banner