import React from "react";
import { Button, Card, List } from "antd";
import { ChromeOutlined, HomeOutlined, TeamOutlined } from "@ant-design/icons";

const data = [
  {
    title: "Buy a property",
    content: [
      {
        icon: <HomeOutlined />,
        description:
          "Find your place with an immersive photo expenrience and the most listings",
      },
    ],
  },
  {
    title: "Sell a property",
    content: [
      {
        icon: <ChromeOutlined />,
        description:
          "Find your place with an immersive photo expenrience and the most listings",
      },
    ],
  },
  {
    title: "Rent a property",
    content: [
      {
        icon: <TeamOutlined />,
        description:
          "Find your place with an immersive photo expenrience and the most listings",
      },
    ],
  },
];

const Options = () => {
  return (
    <div id="options" className="block options-block grey-bg">
      <div className="fluid-container">
        <div className="title-section">
          <h2>Choose an option that fits your needs</h2>
          <p>It is a long established fact that a reader will be distracted.</p>
        </div>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 3, lg: 3, xl: 3, xxl: 3 }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].icon}</p>
                <p>{item.content[0].description}</p>
                <Button type="primary" size="large">
                  <i className="fab fa-telegram-planet"></i> Get Started
                </Button>
              </Card>
            </List.Item>
          )}
        ></List>
      </div>
    </div>
  );
};

export default Options;
