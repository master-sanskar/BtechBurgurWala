import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrder = () => {

  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#fsdfjahlfdlalk</td>
                <td>Processing</td>
                <td>24</td>
                <td>₹{14500}</td>
                <td>COD</td>

                <td>
                  <Link to={`/order/${"asdsds"}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrder
