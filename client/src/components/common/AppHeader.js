import React, { useState } from "react";
import { Anchor, Button, Drawer } from "antd";
import { Link } from "react-router-dom";

const AppHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <div className="fluid-container">
      <div className="header">
        <div className="logo">
          <i className="fas fa-home fa-2x"></i>
          <Link to="/">Real Estate</Link>
        </div>
        <div className="mobile-hidden">
          <Anchor targetOffset="65">
            <Anchor.Link href="#banner" title="Home" />
            <Anchor.Link href="#about" title="About" />
            <Anchor.Link href="#options" title="Options" />
            <Anchor.Link href="#faq" title="FAQ" />
            <Link to="/properties" className="ant-anchor-link-title">
              Real Estate
            </Link>
          </Anchor>
        </div>
        <div className="mobile-visible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={true}
            onClose={closeDrawer}
            visible={visible}
          ></Drawer>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
