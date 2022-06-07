import React from "react";
import { useHistory } from "react-router";
import { Container, Image } from "react-bootstrap";
import Head from "./Head";

import "./Donate.css";

const Donate = () => {
  const history = useHistory();

  return (
    <Container>
      <Head title="Donation" text="Support me by donating." />
      <div className="d-flex justify-content-center">
        <div
          className="selectPayment"
          onClick={() =>
            (window.location = "https://www.buymeacoffee.com/ombayus")
          }
        >
          <div>
            <Image src="/buymeacoffee.png" className="icon" />
          </div>
        </div>
        <div
          className="selectPayment"
          onClick={() => history.push("/donate/metamask")}
        >
          <div>
            <Image src="/metamask.webp" className="icon" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Donate;
