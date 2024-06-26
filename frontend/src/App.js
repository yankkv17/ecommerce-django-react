import { Container, Row } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import AboutScreen from "./screens/AboutScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UsersScreen from "./screens/UsersScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProductsByCategoryScreen from "./screens/ProductsByCategoryScreen.js";
import FavouritesScreen from "./screens/FavouritesScreen.js";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main className="py-3">
                    <Container>
                        <Routes>
                            <Route path="/" element={<HomeScreen />} exact />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route
                                path="/products/:id"
                                element={<ProductScreen />}
                            />
                            <Route
                                path="/category/:category"
                                element={<ProductsByCategoryScreen />}
                            />
                            <Route
                                path="/about-us/"
                                element={<AboutScreen />}
                            />
                            <Route path="/cart/:id?" element={<CartScreen />} />
                            <Route
                                path="/sign-up/"
                                element={<RegisterScreen />}
                            />
                            <Route
                                path="/profile/"
                                element={<ProfileScreen />}
                            />
                            <Route
                                path="/admin/users/"
                                element={<UsersScreen />}
                            />
                            <Route
                                path="/admin/user/:id/"
                                element={<UserEditScreen />}
                            />
                            <Route
                                path="/admin/products/"
                                element={<ProductsScreen />}
                            />
                            <Route
                                path="/admin/product/:id?/edit"
                                element={<ProductEditScreen />}
                            />
                            <Route
                                path="/admin/orders/"
                                element={<OrdersScreen />}
                            />
                            <Route
                                path="/shipping/"
                                element={<ShippingScreen />}
                            />
                            <Route
                                path="/payment/"
                                element={<PaymentScreen />}
                            />
                            <Route
                                path="/place-order/"
                                element={<PlaceOrderScreen />}
                            />
                            <Route
                                path="/orders/:id?"
                                element={<OrderScreen />}
                            />
                            <Route
                                path="/favourites/"
                                element={<FavouritesScreen />}
                            />
                        </Routes>
                    </Container>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
