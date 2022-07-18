import React from "react";
import { Col, Row } from "antd";

const items = [
  {
    key: "1",
    icon: <i className="fas fa-search-location"></i>,
    title: "Simplified Search",
    content:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    key: "2",
    icon: <i className="fas fa-database"></i>,
    title: "Lots of Properties",
    content:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
  {
    key: "3",
    icon: <i className="fas fa-globe-africa"></i>,
    title: "Proudly African",
    content:
      "It is a long established fact that a reader will be distracted by the readable content.",
  },
];

const About = () => {
  return (
    <div id="about" className="block about-section">
      <div className="fluid-container">
        <div className="title-section">
          <h2>About Us</h2>
          <p>You will find us very interesting!</p>
        </div>
        <div className="content-section">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <Row gutter={[16, 16]}>
          {items.map((item) => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default About;
