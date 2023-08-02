import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getService } from '../../../redux/action/Serviceaction';
const Pagetitle = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getService());
    }, []);

    const serviceDetail = useSelector((state) => state.ServiceReducer.serviceBannerList);
    // console.log("ServiceBanner=", serviceDetail);
    // http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail?.image}
    return (
        <>
            <div className="page-title-area" style={{ background: `transparent url('http://alobhaitsolution.com:1997/uploaded-files/${serviceDetail?.image}') right top no-repeat`, backgroundSize: "cover !important" }}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <h2 className="text-white">{serviceDetail?.title}</h2>
                        </div>
                    </div>
                </div>

                <div className="shape1"><img src="../wp-content/themes/cloudx_new/assets/img/shape1.png" alt="shape" /></div>
                <div className="shape2 rotateme"><img src="../wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
                <div className="shape3"><img src="../wp-content/themes/cloudx_new/assets/img/shape3.svg" alt="shape" /></div>
                <div className="shape4"><img src="../wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape5"><img src="../wp-content/themes/cloudx_new/assets/img/shape5.png" alt="shape" /></div>
                <div className="shape6 rotateme"><img src="../wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape7"><img src="../wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape8 rotateme"><img src="../wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
            </div>
        </>
    )
}

export default Pagetitle