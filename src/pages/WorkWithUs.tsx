import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap';

const WorkWithUs: React.FC = () => {

    const [openAccordion, setOpenAccordion] = useState<string>('0');

    return (
        <>
            <section className="banner page-contact p-0 mb-5" style={{ height: "100px" }}></section>
            <section className="banner contact-us-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 pe-lg-5">
                            <div className="title pb-1 pt-2 fw-normal text-primary aos-init aos-animate" data-aos="fade-up">
                                Work With Us
                            </div>
                            <p className="pt-3 aos-init aos-animate" data-aos="fade-up">
                                Turkmen Gala HJ has a successful heritage of being a trusted partner to numerous clients, in Turkmenistan.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <Accordion activeKey={openAccordion} onSelect={(eventKey) => setOpenAccordion(eventKey as string)}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        Assistant Accountant
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "Calibri, sans-serif", fontSize: "12pt" }}>Position Title:</span></b><span style={{ fontFamily: "Calibri, sans-serif", fontSize: "12pt" }}> Assistant Accountant </span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Work schedule:</span></b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> 6 days per week</span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Probationary period:</span></b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> 3 months</span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "11.75pt" }}>
                                            <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "7pt" }}> </span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Job Requirements:</span></b>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Education:</span></b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> Higher diploma education in Accounting, Finance or Economics</span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Experience:</span></b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> 2-3 years of experience as a Accountant/Finance</span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Languages:</span></b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> Fluent in English, Russian and Turkmen</span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}> </span>
                                        </p>
                                        <p style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <b><span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Job Responsibilities:</span></b>
                                        </p>
                                        <ul style={{ color: "rgb(34, 34, 34)", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "small" }}>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Responsible payroll, inventor management budgeting reports, record keeping</span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Controlling Costs and finance control</span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Plans, directs and conducts accounting activities in Finance</span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Ensure that all necessary documents are requested, collected, and compiled by legal compliance</span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Assisting Accounting Department </span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Maintain documents & records in compliance with the requirements of the management system</span>
                                            </li>
                                            <li style={{ marginLeft: "15px", fontFamily: "Calibri, sans-serif" }}>
                                                <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Prepare documents & record towards the submission of financial auditing documents, </span>
                                            </li>
                                        </ul>
                                        <p style={{ color: "rgb(34, 34, 34)", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "small" }}></p>
                                        <p style={{ margin: "0cm 0cm 8pt 18pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Interested candidates send your application to <a href="mailto:hr@turkmengala.com" target="_blank" style={{ color: "rgb(5, 99, 193)" }}>hr@turkmengala.com</a></span>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>
                                        Construction Engineer
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Company Description
                                            </span>
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            Turkmen Gala is a provider of diversified engineering, procurement, construction and contracting services for the onshore and offshore oil &amp; gas, industrial sector and energy industries. We offer a range of solution from designing to fabrication and commissioning to decommissioning. Our goal is to provide total solutions within set objectives while respecting environment and caring for people. We promote higher performance standards with disciplined people, thought and action.
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <br style={{ boxSizing: "inherit" }} />
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Role Description
                                            </span>
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            The Construction Engineer will work on a contract basis for Turkmen Gala. The role will be responsible for preparation of construction drawings and civil engineering tasks. The duties of Construction Enginener include
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            designing pipelines, overseeing construction and ensuring that the pipelines are operating safely and efficiently.
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <br style={{ boxSizing: "inherit" }} />
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Qualifications
                                            </span>
                                        </p>
                                        <ul style={{
                                            boxSizing: "inherit",
                                            marginLeft: "1.6rem",
                                            paddingLeft: "18px",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Background in Civil Engineering, Construction Engineering, or related field
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Ability to prepare and interpret construction drawings
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Experience in Inspection and Quality Control in a construction environment
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Strong written and verbal communication skills
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Ability to work independently and in a team environment
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Proficiency with AutoCAD and other construction software
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Bachelor's degree in Civil or Construction Engineering or related field
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Experience in offshore or onshore oil &amp; gas, industrial sector and energy industries is a plus
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Fluency in English, Russian and Turkmen Languages
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Salary in $
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                hr@turkmengala.com
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>
                                        HSEQ & Construction in Charge
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            Turkmen Gala is a diversified engineering, procurement, construction, and contracting service provider to the onshore and offshore oil &amp; gas, industrial sector, and energy industries. We aim to exceed performance standards while respecting the environment, caring for our people, and offering total solutions from design to fabrication, commissioning to decommissioning. Our facilities allow us to achieve objectives within agreed-upon properties and timelines.
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <br style={{ boxSizing: "inherit" }} />
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Role Description
                                            </span>
                                        </p>
                                        <ul style={{
                                            boxSizing: "inherit",
                                            marginLeft: "1.6rem",
                                            paddingLeft: "18px",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Ensures that quality is being maintained on Health, Safety &amp; Environment, Document Control, Training
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Materials such as presentations, handouts, equipment, etc, Company and course accreditations/registrations
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                and Integrated Management System (IMS).
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Maintains IMS document control, safekeeping and storage.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Records and maintains minutes of all employee meetings.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Perform and leads the team in the Internal Audit for the Integrated Management System.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Prepares monthly HSEQ Performance reports &amp; other reports as maybe required.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Ensures compliance with all applicable legislations and codes governing environmental health and safety.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Plans, monitors, records and reports the conduct of safety related activities and emergency drills.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Conducts Risk Assessment &amp; Hazard Identification and maintains relevant records.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Develops and implements accident investigation, data analysis, and recurrence prevention programs and procedures.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Conducts on-site reviews and audits of operations and facilities.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Recommends and implements corrective and preventive actions.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Reviews registration and documents for regulatory and legal compliance.
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Responds and provides assistance to all emergency situations.
                                            </li>
                                        </ul>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Qualifications & Skills
                                            </span>
                                        </p>
                                        <ul style={{
                                            boxSizing: "inherit",
                                            marginLeft: "1.6rem",
                                            paddingLeft: "18px",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Bachelor's degree preferred in Engineering with experience in construction projects and management
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Minimum of 5 years experience in Health, Safety, Environment, Quality (HSEQ) management in the construction industry
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Experience developing and implementing HSEQ and quality management systems
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Strong knowledge of local and international regulations, policies, and industry standards relating to the construction industry
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Excellent communication and leadership skills with the ability to build relationships and influence stakeholders at all levels
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Demonstrate experience in leading audits and risk assessments
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Fluent in oral and written Russian and English languages
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Strong organizational and problem-solving skills with the ability to make decisions under pressure
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Ability to work collaboratively with cross-functional teams
                                            </li>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                Language - Turkmen, Russian, English
                                            </li>
                                        </ul>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Training & Certifications
                                            </span>
                                        </p>
                                        <ul style={{
                                            boxSizing: "inherit",
                                            marginLeft: "1.6rem",
                                            paddingLeft: "18px",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <li style={{
                                                boxSizing: "inherit",
                                                marginTop: "",
                                                marginRight: "",
                                                marginBottom: "",
                                                marginLeft: "1.6rem",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)"
                                            }}>
                                                ISO 45001, 14001, 9001 auditor certifications.
                                            </li>
                                        </ul>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                Salary: $
                                            </span>
                                        </p>
                                        <p style={{
                                            boxSizing: "inherit",
                                            margin: "var(--artdeco-reset-base-margin-zero)",
                                            padding: "var(--artdeco-reset-base-padding-zero)",
                                            border: "var(--artdeco-reset-base-border-zero)",
                                            fontSize: "14px",
                                            verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                            lineHeight: "var(--artdeco-reset-typography_getLineHeight)",
                                            color: "rgba(0, 0, 0, 0.9)",
                                            fontFamily: "-apple-system, system-ui, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, &quot;Fira Sans&quot;, Ubuntu, Oxygen, &quot;Oxygen Sans&quot;, Cantarell, &quot;Droid Sans&quot;, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Lucida Grande&quot;, Helvetica, Arial, sans-serif"
                                        }}>
                                            <span style={{
                                                boxSizing: "inherit",
                                                margin: "var(--artdeco-reset-base-margin-zero)",
                                                padding: "var(--artdeco-reset-base-padding-zero)",
                                                border: "var(--artdeco-reset-base-border-zero)",
                                                fontSize: "var(--artdeco-reset-base-font-size-hundred-percent)",
                                                verticalAlign: "var(--artdeco-reset-base-vertical-align-baseline)",
                                                background: "var(--artdeco-reset-base-background-transparent)",
                                                outline: "var(--artdeco-reset-base-outline-zero)",
                                                fontWeight: "var(--artdeco-reset-typography-font-weight-bold)"
                                            }}>
                                                #Turkmenistancitizensonly
                                            </span>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>
                                        Maintenance Officer
                                    </Accordion.Header>
                                    <Accordion.Body>

                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Position Title:</span></b>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Maintenance Officer</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Work schedule:</span></b>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;6 days per week</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Probationary period:</span></b>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;3 months</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", lineHeight: "11.75pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "7pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Job Requirements:</span></b>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Education:&nbsp;</span></b>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Bachelor’s Degree / Diploma in Engineering / Science</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Experience:&nbsp;</span></b>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;2-3 years of experience in Maintenance Job.</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Languages:</span></b>
                                            <span lang="EN-US">&nbsp;</span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Fluent in English, Russian and Turkmen</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;</span>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p className="MsoNormal" style={{ margin: "0cm 0cm 8pt", color: "rgb(34, 34, 34)", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <b><span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Job Responsibilities:</span></b>
                                            <span lang="EN-US"></span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Prepare &amp; update maintenance matrix indicating the inspection, calibration, third party certification &amp; maintenance schedule for each equipment.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Maintain the current &amp; accurate inventory of all facilities and equipment used for the delivery of the Training/Assessment</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Responsible for ensuring the serviceability of all the practical training equipment required for trainings</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Maintaining the records for all the 3rd party services and inspection certificates of the equipment.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Carryout periodic maintenance of the practical training equipment; complete the necessary documentation such as checklist, maintenance log etc.,</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Monitor the maintenance / inspection activity performed by maintenance assistants and ensure the effectiveness.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Conduct and update monthly inspection records of fire extinguishers used for the training.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>&nbsp;Be familiar with MER – Tier, roles &amp; responsibilities.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Participate in MER drills.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", margin: "0cm 0cm 0.0001pt 54pt", background: "initial", backgroundPosition: "initial", backgroundSize: "initial", backgroundRepeat: "initial", backgroundOrigin: "initial", backgroundClip: "initial", lineHeight: "15.6933px", fontSize: "11pt", fontFamily: "Calibri, sans-serif" }}>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Symbol" }}>&middot;<span style={{ fontVariantNumeric: "normal", fontVariantEastAsian: "normal", fontVariantAlternates: "normal", fontKerning: "auto", fontFeatureSettings: "normal", fontStretch: "normal", fontSize: "7pt", lineHeight: "normal", }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
                                            <span lang="EN-US" style={{ fontSize: "12pt", fontFamily: "Calibri, sans-serif", }}>Participate in all emergency drills.</span>
                                        </p>
                                        <p style={{ color: "rgb(34, 34, 34)", fontFamily: "Arial, Helvetica, sans-serif", fontSize: "small" }}></p>
                                        <p style={{ margin: "0cm 0cm 8pt 18pt", color: "rgb(34, 34, 34)", background: "initial", fontFamily: "Calibri, sans-serif", fontSize: "11pt", lineHeight: "15.6933px" }}>
                                            <span style={{ fontFamily: "\"Times New Roman\", serif", fontSize: "12pt" }}>Interested candidates send your application to <a href="mailto:hr@turkmengala.com" target="_blank" style={{ color: "rgb(5, 99, 193)" }}>hr@turkmengala.com</a></span>
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sendcvmin">
                <div className="container">
                    <div className="title pb-4 pt-2 fw-normal text-primary"> Send CV </div>
                    <div className="row">
                        <div className="col-lg-5">
                            <p className="pt-0">
                                Turkmen Gala provides complete Inspection solutions for Energy sector. Each service we perform is carefully selected for each specific job.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <form className="sendcv">
                                <div className="row gy-4">
                                    <div className="col-lg-6">
                                        <input type="text" className="form-control" placeholder="Name" name="name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="email" className="form-control" placeholder="Email Address" name="email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <input type="number" className="form-control" placeholder="Phone number" name="phone_number" />
                                    </div>
                                    <div className="col-lg-6">
                                        <select className="form-select form-control" aria-label="Default select example" name="recruitment_id" >
                                            <option value="0">Select job title</option>
                                            <option value="10">Assistant Accountant</option>
                                            <option value="8">Construction Engineer</option>
                                            <option value="9">HSEQ &amp; Construction in Charge</option>
                                            <option value="11">Maintenance Officer</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="attach-file">
                                            <input type="file" className="form-control" placeholder="Attach file" accept="application/pdf" />
                                            <span>Attach file</span>
                                            {/* <img src="img/attachment.svg" /> */}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn  mt-4 btn-warning w-100" style={{ marginTop: "-1px" }}>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkWithUs;