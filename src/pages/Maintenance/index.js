import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Container } from "./styles";

export default function Maintenance() {
  return (
    <Container>
      <div className="box-logo">
        <span className="logo">SOLITTI</span>
        <span className="nature">SOLUTIONS</span>
      </div>
      <div className="box-contact">
        <span>
          <a href="https://wa.me/5531993841675" target="blank">
            <FontAwesomeIcon icon={faWhatsapp} /> 31 993841675
          </a>
        </span>
        <span>
          <FontAwesomeIcon icon={faEnvelope} /> contato@solitti.com.br
        </span>
      </div>
    </Container>
  );
}
