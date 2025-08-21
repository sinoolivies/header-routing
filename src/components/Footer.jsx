
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-1 fixed-bottom  "  > 
      <Container>
        {/* Top Features Row */}
        <Row className="text-center mb-4">
          <Col md={4} className="mb-3">
            <i className="bi bi-code-slash"></i> Built with Bootstrap
          </Col>
          <Col md={4} className="mb-3">
            <i className="bi bi-shield-lock"></i> 100% Secured Payment
          </Col>
          <Col md={4} className="mb-3">
            <i className="bi bi-person"></i> Made for the Professionals
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Footer Links */}
        <Row className="mt-5 text-center text-md-start">
          <Col xs={6} md={2} className="mb-3">
            <h6 className="fw-bold">Rareblocks</h6>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li>Team</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </Col>

          <Col xs={6} md={2} className="mb-3">
            <h6 className="fw-bold">Help</h6>
            <ul className="list-unstyled">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col xs={6} md={3} className="mb-3">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </Col>

          <Col xs={12} md={3} className="mb-3">
            <h6 className="fw-bold">More</h6>
            <ul className="list-unstyled">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary" />

        {/* Copyright */}
        <Row>
          <Col className="text-center">
            <small>© 2025. All Rights Reserved</small>
          </Col>
          
        </Row>
        <Row>
            <Col xs={12} sm={6} md={4}>Responsive</Col>

        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
