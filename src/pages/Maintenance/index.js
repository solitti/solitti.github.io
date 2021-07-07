import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';

export default function Maintenance() {
  return (
    <Container>
      <a href="https://solitti.com.br">
        <div className="box-logo">
          <span className="logo">SOLITTI</span>
          <span className="nature">SOLUTIONS</span>
        </div>
      </a>
      <div className="box-contact">
        <span>
          <a href="mailto:hi@solitti.com.br">
            <FontAwesomeIcon icon={faEnvelope} /> hi@solitti.com.br
          </a>
        </span>
      </div>
    </Container>
  );
}
