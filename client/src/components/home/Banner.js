import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Buy or sell properties",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit quam, interdum id pellentesque eu, posuere id ligula. Cras erat arcu, iaculis sit amet mollis a, semper eu diam. Aenean cursus erat et tortor fermentum semper. Sed congue orci mi, sit amet suscipit ante elementum a. Phasellus quis tempor lorem. Cras non dolor consequat, congue leo eget, rutrum tortor. Donec mollis in massa lacinia porta. Aliquam ultrices magna lectus, vel facilisis lectus accumsan ac. Integer laoreet nisi et tempor porta.",
  },
  {
    key: "2",
    title: "Buy or sell land",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit quam, interdum id pellentesque eu, posuere id ligula. Cras erat arcu, iaculis sit amet mollis a, semper eu diam. Aenean cursus erat et tortor fermentum semper. Sed congue orci mi, sit amet suscipit ante elementum a. Phasellus quis tempor lorem. Cras non dolor consequat, congue leo eget, rutrum tortor. Donec mollis in massa lacinia porta. Aliquam ultrices magna lectus, vel facilisis lectus accumsan ac. Integer laoreet nisi et tempor porta.",
  },
  {
    key: "3",
    title: "Buy or sell office space",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit quam, interdum id pellentesque eu, posuere id ligula. Cras erat arcu, iaculis sit amet mollis a, semper eu diam. Aenean cursus erat et tortor fermentum semper. Sed congue orci mi, sit amet suscipit ante elementum a. Phasellus quis tempor lorem. Cras non dolor consequat, congue leo eget, rutrum tortor. Donec mollis in massa lacinia porta. Aliquam ultrices magna lectus, vel facilisis lectus accumsan ac. Integer laoreet nisi et tempor porta.",
  },
];

const Banner = () => {
  return (
    <div id="banner" className="banner-section">
      <Carousel>
        {items.map((item) => {
          return (
            <div className="fluid-container" key={item.key}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btn-group">
                  <Button type="primary" size="large">
                    Learn more
                  </Button>
                  <Button icon={<SearchOutlined />} size="large">
                    Learn more...
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
