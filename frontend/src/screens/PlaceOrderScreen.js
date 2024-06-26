import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Row,
    Col,
    Button,
    ListGroup,
    Image,
    Card,
    ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Checkout from "../components/Checkout";
import { addOrder } from "../actions/orderActions";
import { CREATE_ORDER_RESET } from "../constants/orderConstants";

function PlaceOrderScreen() {
    const orderCreate = useSelector((state) => state.orderCreate);
    const { order, error, success } = orderCreate;

    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    cart.items_price = cart.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    cart.shipping_price = (cart.items_price > 500 ? 0 : cart.items_price * 0.01).toFixed(2);
    cart.total_price = (Number(cart.items_price) + Number(cart.shipping_price)).toFixed(2);


    useEffect(() => {
        if (!cart.paymentMethod) {
            navigate('/payment/');
        }
        if(success){
            navigate(`/orders/${order.id}`)
            dispatch({ type: CREATE_ORDER_RESET })
        }
    }, [success, navigate])

    const placeOrder = () => {
        dispatch(
            addOrder({
                orderItems: cart.cartItems,
                shippingAddress: cart.shippingAddress,
                paymentMethod: cart.paymentMethod,
                items_price: cart.items_price,
                shipping_price: cart.shipping_price,
                total_price: cart.total_price,
            })
        );
    };
    return (
        <div>
            <Checkout step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Shipping: </strong>
                                {cart.shippingAddress.address},{" "}
                                {cart.shippingAddress.city},{" "}
                                {cart.shippingAddress.postal_code},{" "}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <p>
                                <strong>Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? (
                                <Message variant="info">Cart is empty</Message>
                            ) : (
                                <ListGroup variant="flush">
                                    {cart.cartItems.map((item, id) => (
                                        <ListGroup.Item key={id}>
                                            <Row>
                                                <Col md={1}>
                                                    <Link
                                                        to={`/products/${item.product}`}
                                                    >
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fluid
                                                            rounded
                                                        />
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    <Link
                                                        to={`/products/${item.product}`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col>
                                                    {item.quantity} x $
                                                    {item.price} = $
                                                    {(
                                                        item.quantity *
                                                        item.price
                                                    ).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items: </Col>
                                    <Col>${cart.items_price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping: </Col>
                                    <Col>${cart.shipping_price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>${cart.total_price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                    type="button"
                                    className="w-100"
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                >
                                    Place order
                                </Button>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default PlaceOrderScreen;
