import React, { useEffect } from 'react'
import { getPrivacyPolicy } from '../../../redux/action/CMSaction';
import { useDispatch, useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Container } from 'reactstrap';
const Privacypolicyarea = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPrivacyPolicy());
    }, []);

    const privacypolicyDetail = useSelector((state) => state?.CMSReducer?.privacypolicyList?.description);
    // console.log("privacypolicy=", privacypolicyDetail);

    return (
        <>
            <Container>
                <div className="privacy-policy-area ptb-80">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="privacy_policy_section">
                                    {ReactHtmlParser(privacypolicyDetail)}
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </>
    )
}

export default Privacypolicyarea