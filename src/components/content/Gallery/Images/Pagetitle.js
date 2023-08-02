import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEventCommonBanner } from '../../../../redux/action/Galleryaction';

const Pagetitle = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventCommonBanner());
    }, []);
    const imageCommonBanner = useSelector((state) => state?.GalleryReducer?.eventcommonbannerList);
    // console.log("Image Common Banner=", imageCommonBanner);

    return (
        <>
            <div className="page-title-area"
                style={{ background: `url('http://alobhaitsolution.com:1997/uploaded-files/${imageCommonBanner?.image}') `}}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <h2 className="text-white">Images</h2>
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