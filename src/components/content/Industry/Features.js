import React, { useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useSelector, useDispatch } from "react-redux";
import { getIndustry } from '../../../redux/action/Industryaction';
import { getIndustryheading } from '../../../redux/action/Industryaction';

const Features = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getIndustry());
        dispatch(getIndustryheading());
    }, []);

    const industryDetail = useSelector((state) => state.IndustryReducer.industryList);
    // console.log("Industry=", industryDetail);
    const industryheadingDetail = useSelector((state) => state.IndustryReducer.industryheadingList);
    // console.log("Industry Heading=", industryheadingDetail);
    let i = 0;
    return (
        <>
            <div className="features-area ptb-80 bg-f9f6f6">
                <div className="container-fluid">
                    <div className="section-title">
                        <h2>{industryheadingDetail[0]?.title}</h2>
                        <div className="bar"></div>
                        <p style={{ maxWidth: "950px" }}>
                            {/* {ReactHtmlParser(industryheadingDetail[0]?.description)}  */}
                            {industryheadingDetail[0]?.description.replace(/(<([^>]+)>)/ig, '')} </p>
                    </div>

                    <div className="projcard-container">
                        <div className="row">
                            {
                                industryDetail?.map(card => {
                                    { i++ }
                                    return <div className="projcard projcard-red" key={i}>
                                        <div className="projcard-innerbox">
                                            <img className="projcard-img" src={`http://alobhaitsolution.com:1997/uploaded-files/${card?.icon}`}
                                                alt={card?.title} />
                                            <div className="projcard-textbox">
                                                <div className="projcard-title">{ReactHtmlParser(card?.title)}</div>
                                                <div className="projcard-bar"></div>
                                                <div className="projcard-description">
                                                    {ReactHtmlParser(card?.description)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                            {/* <div className="projcard projcard-red">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/healthcare.jpg"
                                        alt="Healthcare &#038; Life Sciences" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Healthcare &#038; Life Sciences</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Healthcare providers,
                                                including homecare and pathological laboratories, need a 360-degree view of
                                                patients&#8217; health records and data from applications from many departments,
                                                including pharmacies, laboratories, billing, and marketing, in order to engage
                                                patients at the appropriate touchpoint. By removing boundaries between different
                                                systems and establishing a unified perspective of the patient experience, Salesforce
                                                Health Cloud enhances customer service, teamwork, and operational effectiveness.
                                                Health Cloud, an integrated CRM for the healthcare sector, provides care
                                                professionals and patients.
                                            </p>
                                            <p style={{ textAlign: "justify !important" }}>
                                                We help clinics, hospitals, care facilities, private practices, and doctors embrace
                                                and make the most of the use of Healthcare CRM software as a Salesforce Partner. You
                                                can boost the effectiveness of Salesforce Healthcare Services with the assistance of
                                                our.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-blue">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Realestate.png"
                                        alt="Real Estate &#038; Construction" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Real Estate &#038; Construction</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>CRM offers for Real estate
                                                brokerages, brokers, and agents a platform where they can communicate with clients
                                                around-the-clock and give individualised experiences to close deals more
                                                effectively, wisely, and quickly. Real estate buyers and investors can obtain
                                                real-time information and share automated data without taking any risks. They can
                                                maximise return on investment with the help of the information and analytics
                                                provided by real estate CRM. With personalised journeys, simplified loans, sales and
                                                service productivity, minimal follow-ups, and meaningful nurturing, the CRM unites
                                                real estate businesses, brokers, and agents on a single platform to conclude deals
                                                faster and beyond consumer expectations. The system has specialised features that
                                                make adoption and usability easier for campaigns, quotation administration, lead
                                                monitoring, visualisation, follow-ups, and inventory monitoring.</p>
                                            <p style={{ textAlign: "justify !important" }}>We assist real estate folks in quickly and
                                                error-free implementation of the solution, whether it be the transfer of an
                                                on-premise system to the Cloud or another CRM. With experience in application
                                                development, CRM automation, and data analytics, we have the capacity to provide a
                                                comprehensive digital solution for any real estate team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-red">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Financial-Services.png"
                                        alt="Banking &#038; Financial Services" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Banking &#038; Financial Services</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Financial institutions,
                                                advisors, and consultants can overcome the shortcomings of legacy systems with the
                                                cloud products, which also guarantees a smooth process. Financial institutions may
                                                improve their customer experiences, eliminate information silos, and obtain deeper
                                                insights for more effective business operations with cloud-based solutions.
                                                Damco&#8217;s Salesforce for financial services is a complete ecosystem of
                                                technologies that meets strict security, compliance, and regulatory requirements
                                                while delivering a superior client experience. It streamlines complicated procedures
                                                with strong workflow capabilities.</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>We provide a comprehensive
                                                range of financial services solutions, such as third-party integration, process
                                                automation, custom app development, managed services, smooth change management, etc.
                                                Our finance specialists, who have extensive experience deploying CRM solutions for
                                                financial professionals and organisations, provide these services.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-blue">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Professional-Services.png"
                                        alt="Professional Services" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Professional Services</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>We understood the underlining
                                                pain points and took a broader view of the engagement meeting with the company and
                                                established a solution that aligned with their needs. We delivered a quality system,
                                                100% on time and budget. Methodology Over a one and a half month period, we used the
                                                waterfall approach to deliver on one key theme i.e. Digital Transformation tailoring
                                                to the their needs. Feature Outline Our team of experts built a 360 Customer
                                                platform on the power and scalability of Salesforce leveraging powerful OOTB
                                                features and customizations wherever necessary.<br />
                                                Seamless Communication Everything at one place, organized. Reports and Dashboards on
                                                the home page to stay up to date on Opportunity pipeline, leads, payments,
                                                activities, etc.</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>With the rising expectations
                                                of the users, demand for specific workforce skills and rising competition, today the
                                                world of professional services is looking for a seamless, personalized experience,
                                                new level of automation, a mobile workforce and more.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-red">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Retail.png"
                                        alt="ECommerce &#038; Retail" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">ECommerce &#038; Retail</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Modern retailers may
                                                understand customer wants and preferences with the use of Retail and ecommerce CRM.
                                                Each team, including sales, marketing, and customer service, can use its features to
                                                respond in real-time with a knowledgeable response. By providing everyone with the
                                                knowledge they need to create and deliver the ideal products or services, Salesforce
                                                ecommerce, whether B2B or B2C, accelerates corporate processes. Businesses will be
                                                able to reach customers more quickly by utilising Salesforce Ecommerce
                                                Cloud/Salesforce Retail Cloud and providing seamless omnichannel experiences both
                                                online and in-store.</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>We help businesses embrace
                                                and maximise Salesforce ecommerce solutions, energise the sales and marketing
                                                pipeline with information from every touchpoint, and create a connected customer
                                                experience as a Salesforce Gold Partner with a complete retail technology ecosystem.
                                                To give teams a complete picture of clients from onboarding to retention, we map
                                                customer journeys. We are able to give superior outcomes in omnichannel retail
                                                management thanks to our experience with Salesforce ecommerce integration,
                                                Salesforce retail services, and industry workflows</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-blue">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Manufacturing-Logistics.png"
                                        alt="Manufacturing &#038; Distribution" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Manufacturing &#038; Distribution</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Manufacturing Cloud
                                                Salesforce uses account performance tracking, account-based forecasting, and team
                                                collaboration to enable personalised customer engagement and company efficiency at
                                                scale. You may increase client lifetime value while achieving sales targets faster
                                                by implementing the best CRM for manufacturing businesses. Manufacturing Cloud in
                                                Salesforce offers you a complete platform to increase operational agility, deliver
                                                smarter services, and expedite deals from enquiry to order completion by assisting
                                                manufacturers to communicate better with their partners and consumers.</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>As a Salesforce Partner with
                                                a complete retail technology ecosystem, we assist businesses in implementing and
                                                maximising Salesforce ecommerce solutions, enhancing sales and marketing pipelines
                                                with information from all touchpoints, and creating a connected customer experience.
                                                We map customer journeys to give teams a complete picture of customers from
                                                onboarding to retention. We can provide superior outcomes in omnichannel retail
                                                management thanks to our experience with Salesforce ecommerce integration,
                                                Salesforce retail services, and industry workflows</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-red">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Ed.Tech_.png"
                                        alt="Education and Technology" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Education and Technology</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Created a transformational
                                                roadmap by giving Field sales application targeting the client&#8217;s biggest pain
                                                points to provide them plethora of features blended in to a single system and
                                                deliver value to their Salesforce investment</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>Increased and effective
                                                customer engagement leading to the achievement of a higher CSAT score. Automated the
                                                processes that were eating up a lot of their time. They now use the saved time for
                                                things that actually require human intervention. The solution has already been
                                                seeing impressive results with accelerated overall efficiency and virtually 0 or
                                                fewer system upgrades.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="projcard projcard-blue">
                                <div className="projcard-innerbox">
                                    <img className="projcard-img" src="../wp-content/uploads/2023/04/Automobile.png"
                                        alt="Automotive &#038; Transport" />
                                    <div className="projcard-textbox">
                                        <div className="projcard-title">Automotive &#038; Transport</div>
                                        <div className="projcard-bar"></div>
                                        <div className="projcard-description">
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>In this digital revolution
                                                era, Automotive Manufacturers have to upgrade their processes &#038; capabilities
                                                and need to adapt to digital innovations in their businesses. The need is to
                                                continuously innovate and digitally transform the processes and stay ahead of the
                                                competition in managing customers, trade partners (distributors/ dealers/ retailers)
                                                and service management.</p>
                                            <p style={{ textAlign: "justify !important", fontSize: "14px" }}>As a Salesforce Manufacturing
                                                CRM Consultant and Gold Consulting Partner, we offer Robust, Innovative Digital
                                                Solutions covering each segment of the Automotive Industry. Accelerating sales,
                                                building a strong collaboration with channel partners and innovating the supply
                                                chain , service management and call center to redefine the customer experience. We
                                                revolutionize your business by Visitors management, Enhancing and managing dealer
                                                effectiveness, KPIs visibility and tracking across value chain, Service management,
                                                Better Lead conversions, Bring all dealers on-board on one single platform, Get
                                                real-time info on customers, dealers &#038; sales, Get real-time insights on dealer
                                                performance, Automation of tasks to curtail cost and time, Analyze data and turn it
                                                into profitable growth, B2B2C Customer experience.</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features