import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, } from "react-bootstrap";
import { meta, resumelio } from "../../content_option";
import { Link } from "react-router-dom";

export const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumelio.YOUR_RESUME;
    link.setAttribute("download", "resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
            <img
              style={{
                maxHeight: "50%",
              }}
              src={resumelio.YOUR_RESUME}
              alt="resume"
            />
            <Link
              onClick={handleDownload}
              className="d-flex justify-content-center mt-5"
              style={{ textDecoration: "none" }}
            >
              <div id="button_h" className="ac_btn btn">
                Download
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </Link>
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {() => {
            return;
          }}
        </div>
      </Container>
    </HelmetProvider>
  );
};
