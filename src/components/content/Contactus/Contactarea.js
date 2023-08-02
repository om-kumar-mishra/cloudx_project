
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFooterContact } from '../../../redux/action/FooterContactaction';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, useFormik } from "formik";
import * as Yup from "yup"
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { getMap } from '../../../redux/action/Contactaction';
import Location_map from './Maparea'
import $ from "jquery";

import { useLoadScript } from "@react-google-maps/api";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
    Marker,
    GoogleMap,
    // InfoWindow,
    withScriptjs,
    withGoogleMap,
    // DirectionsRenderer,
} from 'react-google-maps'


// import { StyleSheet, View } from 'react-native';  
// import MapView from 'react-native-maps';  
// import { Marker } from 'react-native-maps';  
const MySwal = withReactContent(Swal);

const initialValues = {
    name: "",
    email: "",
    phone: "",
    company_name: "",
    description: ""
};
const Contactarea = () => {

    const [input, setInput] = useState(initialValues);

    //Get API data
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getFooterContact());
    }, [])
    const ContactDetails = useSelector((state) => state?.FooterContactReducer?.footerContactList[0]);
    // console.log(`Contact Details:`, ContactDetails);



    const map_list = useSelector((state) => state?.ContactReducer?.mapList);
    console.log("map_list========", map_list)



    // //map function
    // function map_fun()
    // {
    //     var locations = [
    //         ['Bondi Beach', -33.890542, 151.274856, 4],
    //         ['Coogee Beach', -33.923036, 151.259052, 5],
    //         ['Cronulla Beach', -34.028249, 151.157507, 3],
    //         ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    //         ['Maroubra Beach', -33.950198, 151.259302, 1]
    //       ];

    //       var map = new google.maps.Ma

    //       (document.getElementById('map'), {
    //         zoom: 10,
    //         center: new google.maps.LatLng(-33.92, 151.25),
    //         mapTypeId: google.maps.MapTypeId.ROADMAP
    //       });

    //       var infowindow = new google.maps.InfoWindow();

    //       var marker, i;

    //       for (i = 0; i < locations.length; i++) {  
    //         marker = new google.maps.Marker({
    //           position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    //           map: map
    //         });

    //         google.maps.event.addListener(marker, 'click', (function(marker, i) {
    //           return function() {
    //             infowindow.setContent(locations[i][0]);
    //             infowindow.open(map, marker);
    //           }
    //         })(marker, i));
    //       }

    // }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .max(25, 'Must be 25 characters or less')
                .required('Name is required'),

            email: Yup.string().email('Invalid email address').required('Email is required'),
            phone: Yup.string()
                .required("Phone number is required")
                .matches(phoneRegExp, 'Phone number is not valid')
                .min(10, "too short")
                .max(10, "too long"),
            company_name: Yup.string()
                .min(2, 'Must be 2 characters or more')
                .required('Subject is required'),
            description: Yup.string()
                .required('Subject is required'),
        }),

        onSubmit: (values, { resetForm }) => {
            console.log(values)
            axios.post('http://alobhaitsolution.com:1997/api/contact-us', values)
                .then(function (response) {
                    // console.log(response)
                    if (response.data.code == 200) {
                        toast.success("Thank you contacting us . We will revert back to your query soon. ");
                        resetForm();
                    }
                })
                .catch(function (error) {
                    //console.log(error.response)
                    toast.warn(error.response.data.Message);

                })


        }
    });

    const handleChange = (e) => {
        const reg = /^[0-9\b]+$/
        let preval = e.target.value
        if (e.target.value === '' || reg.test(e.target.value)) return true
        else e.target.value = preval.substring(0, (preval.length - 1))
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('clicked');
    }

    $(document).ready(function(){
        $('#map_con > div').addClass('map_sub-cls');
       });



    return (
        <>
            <div className="contact-area ptb-45" id="get-in"
                style={{ backgroundImage: "url('../wp-content/uploads/2023/05/cloudx-contact-bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="container-fluid">
                    <div className="section-title">
                        <h2 className="text-white">Get In Touch With Us</h2>
                        <div className="bar"></div>
                        <p className="text-white" style={{ textAlign: 'center' }}>Anything On your Mind, We’ll Be Glad To Assist You!</p>
                    </div>

                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12">


                            {/* <div id="map">
      <iframe
             src={`${ContactDetails?.map}`}
             width="600" height="400" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy"
             referrerpolicy="no-referrer-when-downgrade">
         </iframe>
     </div> */}
                            <div id="map_con">
                                <Location_map />
                            </div >
                        </div >

                        <div className="col-lg-6 col-md-12">
                            <div className="form-area">
                                <form onSubmit={formik.handleSubmit}>
                                    <input type="hidden" name="oid" value="00D5j000002WmCF" />
                                    <input type="hidden" name="retURL" value="https://www.cloudxperts.co.in/" />
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <input className="form-control" required
                                                    id="name"
                                                    maxLength="25"
                                                    name="name"
                                                    size="20"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    placeholder="Enter your full name"
                                                />
                                                <div className="help-block with-errors">
                                                    {formik.touched.name && formik.errors.name ? (
                                                        <div className='text-danger'>*{formik.errors.name}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">

                                                <input className="form-control" required
                                                    id="email"
                                                    maxLength="80"
                                                    name="email"
                                                    size="20"
                                                    type="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    placeholder="Enter your email" />
                                                <div className="help-block with-errors">
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div className='text-danger'>*{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">

                                                <input className="form-control" required
                                                    id="phone"
                                                    maxLength="10"
                                                    name="phone"
                                                    size="20"
                                                    type="text"
                                                    placeholder="Enter your mobile number"
                                                    pattern="[0-9]*"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.phone} />
                                                <div className="help-block with-errors" >
                                                    {formik.touched.phone && formik.errors.phone ? (
                                                        <div className='text-danger'>*{formik.errors.phone}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-6">
                                            <div className="form-group">
                                                <input className="form-control" required
                                                    id="company_name"
                                                    maxLength="40"
                                                    name="company_name"
                                                    size="20"
                                                    type="text"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.company_name}
                                                    placeholder="Enter your company" />
                                                <div className="help-block with-errors">
                                                    {formik.touched.company_name && formik.errors.company_name ? (
                                                        <div className='text-danger'>*{formik.errors.company_name}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">

                                                <textarea className="form-control"
                                                    name="description"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.description}
                                                    placeholder="Enter your full description"
                                                    required></textarea>
                                                <div className="help-block with-errors">
                                                    {formik.touched.description && formik.errors.description ? (
                                                        <div className='text-danger'>*{formik.errors.description}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <input style={{ border: "0" }} className="btn-custom" type="submit" name="submit"
                                                value="Send Message" />
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
            <ToastContainer />
        </>
    )
}

export default Contactarea