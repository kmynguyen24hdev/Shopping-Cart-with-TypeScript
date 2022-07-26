import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import MyImage from "/imgs/cartIcon.png";

function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavBarBs sticky="top" className="bg-white showdown-sm sm-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && <Button
          onClick={openCart}
          variant="outline-dark"
          className="rounded-circle, position-relative"
        >
          <img
            src={MyImage}
            alt="Cart"
            style={{ width: "1.2rem", height: "1.4rem" }}
          />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              top: 0,
              right: 0,
              transform: "translate(30%, -30%)",
              fontSize: "1rem",
            }}
          >
            {cartQuantity}
          </div>
        </Button>}
      </Container>
    </NavBarBs>
  );
}

export default Navbar;
