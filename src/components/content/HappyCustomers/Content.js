import React from 'react'
import { Link } from 'react-router-dom'
const Content = () => {
    return (
        <>
            <div className="agency-services-area ptb-80">
                <div className="container">
                    <div className="row">

                        <div class="col-12">
                            <div class="btn">
                                <Link to="/">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape2 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
                <div className="shape3"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape3.svg" alt="shape" /></div>
                <div className="shape4"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape6 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape7"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape4.svg" alt="shape" /></div>
                <div className="shape8 rotateme"><img src="https://cloudxperts.co.in/wp-content/themes/cloudx_new/assets/img/shape2.svg" alt="shape" /></div>
            </div>
        </>
    )
}

export default Content