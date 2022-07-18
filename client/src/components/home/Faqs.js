import React from "react";
import { Button, Collapse } from "antd";

const { Panel } = Collapse;

const Faqs = () => {
  return (
    <div id="faq" className="block faq-block">
      <div className="fluid-container">
        <div className="title-section">
          <h2>Frequently Asked Questions</h2>
          <p>
            What are the most frequently asked questions regarding properties?
          </p>
        </div>
      </div>
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="How do I find the right properties?">
          <p>
            Duis sit amet aliquam purus. Nulla eu egestas justo, in auctor est.
            Donec gravida eros condimentum pharetra vestibulum. Nunc placerat
            urna in luctus condimentum. Sed vulputate ultricies massa aliquam
            efficitur. Nullam fermentum vel quam ac vestibulum. Quisque ornare
            in sem quis maximus. Nunc in quam est. Nulla eu nisl vulputate,
            semper diam in, malesuada elit. Phasellus ut finibus tellus.
            Maecenas id vulputate magna. Pellentesque sollicitudin purus elit,
            vitae rutrum nulla ultrices vel. Phasellus ac sapien purus.
          </p>
        </Panel>
        <Panel header="How do I can trust your agents?">
          <p>
            Duis sit amet aliquam purus. Nulla eu egestas justo, in auctor est.
            Donec gravida eros condimentum pharetra vestibulum. Nunc placerat
            urna in luctus condimentum. Sed vulputate ultricies massa aliquam
            efficitur. Nullam fermentum vel quam ac vestibulum. Quisque ornare
            in sem quis maximus. Nunc in quam est. Nulla eu nisl vulputate,
            semper diam in, malesuada elit. Phasellus ut finibus tellus.
            Maecenas id vulputate magna. Pellentesque sollicitudin purus elit,
            vitae rutrum nulla ultrices vel. Phasellus ac sapien purus.
          </p>
        </Panel>
        <Panel header="Who are your major clients?">
          <p>
            Duis sit amet aliquam purus. Nulla eu egestas justo, in auctor est.
            Donec gravida eros condimentum pharetra vestibulum. Nunc placerat
            urna in luctus condimentum. Sed vulputate ultricies massa aliquam
            efficitur. Nullam fermentum vel quam ac vestibulum. Quisque ornare
            in sem quis maximus. Nunc in quam est. Nulla eu nisl vulputate,
            semper diam in, malesuada elit. Phasellus ut finibus tellus.
            Maecenas id vulputate magna. Pellentesque sollicitudin purus elit,
            vitae rutrum nulla ultrices vel. Phasellus ac sapien purus.
          </p>
        </Panel>
        <Panel header="How do I get touch?">
          <p>
            Duis sit amet aliquam purus. Nulla eu egestas justo, in auctor est.
            Donec gravida eros condimentum pharetra vestibulum. Nunc placerat
            urna in luctus condimentum. Sed vulputate ultricies massa aliquam
            efficitur. Nullam fermentum vel quam ac vestibulum. Quisque ornare
            in sem quis maximus. Nunc in quam est. Nulla eu nisl vulputate,
            semper diam in, malesuada elit. Phasellus ut finibus tellus.
            Maecenas id vulputate magna. Pellentesque sollicitudin purus elit,
            vitae rutrum nulla ultrices vel. Phasellus ac sapien purus.
          </p>
        </Panel>
        <Panel header="Do I need to create an account?">
          <p>
            Duis sit amet aliquam purus. Nulla eu egestas justo, in auctor est.
            Donec gravida eros condimentum pharetra vestibulum. Nunc placerat
            urna in luctus condimentum. Sed vulputate ultricies massa aliquam
            efficitur. Nullam fermentum vel quam ac vestibulum. Quisque ornare
            in sem quis maximus. Nunc in quam est. Nulla eu nisl vulputate,
            semper diam in, malesuada elit. Phasellus ut finibus tellus.
            Maecenas id vulputate magna. Pellentesque sollicitudin purus elit,
            vitae rutrum nulla ultrices vel. Phasellus ac sapien purus.
          </p>
        </Panel>
      </Collapse>
      <div className="quick-support">
        <h3>Want expedited support?</h3>
        <p>
          Maecenas pulvinar placerat vulputate. Vestibulum lobortis condimentum
          orci, in rhoncus sem aliquam aliquet. Quisque ac lorem in nunc laoreet
          tempus ac vel elit. In pharetra sodales quam, eu dapibus enim accumsan
          id. Nam maximus justo vel leo aliquet interdum et a lacus. Cras orci
          lectus, luctus et ipsum non, pellentesque egestas enim. Curabitur
          feugiat eu arcu eget aliquet. Nullam nec est justo. Integer nec dolor
          vitae mi efficitur tristique.
        </p>
        <Button type="primary" size="large">
          <i className="fas fa-envelop"></i> Email your question!
        </Button>
      </div>
    </div>
  );
};

export default Faqs;
