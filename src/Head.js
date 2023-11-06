import logo from './logo.png';
import { Nav,Navbar,NavDropdown,Container } from 'react-bootstrap';

const head =  () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
    <Container>
      <Navbar.Brand href="/">
        <img
            alt=""
            src={logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            style={{ borderRadius: 400/ 2}}
        />
      </Navbar.Brand>
      <Navbar.Brand href="/">Numerical Calculator</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Methods" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">
                Bisection Methods
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/FalsePosition">
                Flase-Position Methods
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/OnePoint">
                One-Point Iteration Methods
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/NewtonRapshon">
                Newton-Rapson Methods
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default head;