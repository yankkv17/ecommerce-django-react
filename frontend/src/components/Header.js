import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../actions/userActions";
import { listCategory } from "../actions/productActions";
import SearchBar from "./SearchBar";

function Header() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    useEffect(() => {
        dispatch(listCategory());
    }, [dispatch]);

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Navbar bg="light" variant="light" collapseOnSelect expand="sm">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Frame</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/about-us">
                                <Nav.Link>About Us</Nav.Link>
                            </LinkContainer>

                            <NavDropdown
                                title="Category"
                                id="category"
                                className="custom-dropdown"
                            >
                                {categories.map((category) => (
                                    <LinkContainer key={category} to={`category/${category}`}>
                                        <NavDropdown.Item>
                                            {category.charAt(0).toUpperCase() +
                                                category.slice(1)}
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                ))}
                            </NavDropdown>

                            {userInfo && userInfo.length !== 0 ? (
                                <NavDropdown
                                    title={userInfo.full_name}
                                    id="username"
                                    className="custom-dropdown"
                                >
                                    <LinkContainer to="/profile">
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            )}
                            {userInfo && userInfo.is_staff && (
                                <NavDropdown
                                    title="Admin"
                                    id="admin"
                                    className="custom-dropdown"
                                >
                                    <LinkContainer to="/admin/users/">
                                        <NavDropdown.Item>
                                            Users
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/products/">
                                        <NavDropdown.Item>
                                            Products
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to="/admin/orders/">
                                        <NavDropdown.Item>
                                            Orders
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                        </Nav>
                        <Nav>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <i className="fa-solid fa-bag-shopping header-icon" />
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/favourites">
                                <Nav.Link>
                                    <i className="fa-regular fa-heart header-icon" />
                                </Nav.Link>
                            </LinkContainer>
                            <SearchBar />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
