import React from 'react'

const OrderDetails = () => {
    return (
        <section className="orderDetails">
            <main>
                <h1>Order Details</h1>
                <div>
                    <h1>Shipping</h1>
                    <p>
                        <b>Address</b>
                        {"sjda 12-32ss dsad"}
                    </p>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p>
                        <b>Name</b>
                        {"Sanskar Chaurey"}
                    </p>
                    <p>
                        <b>Phone</b>
                        {9987456310}
                    </p>
                </div>

                <div>
                    <h1>Status</h1>
                    <p>
                        <b>Order Status</b>
                        {"Processing.."}
                    </p>
                    <p>
                        <b>Placed At</b>
                        {"23-02-2023"}
                    </p>
                    <p>
                        <b>Delivered At</b>
                        {"23-02-2023"}
                    </p>
                </div>

                <div>
                    <h1>Payment</h1>
                    <p>
                        <b>Payment Method</b>
                        {"Online"}
                    </p>
                    <p>
                        <b>Payment Reference</b>#{"asdasdsadsad"}
                    </p>
                    <p>
                        <b>Paid At</b>
                        {"23-02-2023"}
                    </p>
                </div>

                <div>
                    <h1>Amount</h1>

                    <p>
                        <b>Shipping Charges</b>₹{46.14}
                    </p>
                    <p>
                        <b>Tax</b>₹{18}
                    </p>
                    <p>
                        <b>Total Amount</b>₹{948 + 1490 + 2590 + 28 + 46.16}
                    </p>
                </div>

                <article>
                    <h1>Ordered Items</h1>
                    <div>
                        <h4>Cheese Burger</h4>
                        <div>
                            <span>{12}</span> x <span>{79}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Veg Cheese Burger</h4>
                        <div>
                            <span>{10}</span> x <span>{149}</span>
                        </div>
                    </div>
                    <div>
                        <h4>Burger Fries</h4>
                        <div>
                            <span>{10}</span> x <span>{259}</span>
                        </div>
                    </div>

                    <div>
                        <h4
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            Sub Total
                        </h4>
                        <div
                            style={{
                                fontWeight: 800,
                            }}
                        >
                            ₹{5028}
                        </div>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default OrderDetails
