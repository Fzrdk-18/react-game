import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
      <div>
        <Navbar variant ="dark">
            <Container>
                <Navbar.Brand href='/'>GameHolic</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#best">TRENDING GAME</Nav.Link>
                    <Nav.Link href="#trending">BEST GAME</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </div>
    )
}
export default NavigationBar;