import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { backendUrl, currency } from "../App";

function Orders({ token }) {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        {
          headers: { token },
        },
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if(response.data.success) {
        await fetchAllOrders()
      }

    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6">Orders</h2>

      <div className="space-y-5">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm bg-white p-4 flex flex-col lg:flex-row gap-5"
          >
            {/* Parcel Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={assets.parcel_icon}
                alt=""
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Order Details */}
            <div className="flex-1">
              <div className="space-y-1">
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    {item.name}{" "}
                    <span className="font-medium">x {item.quantity}</span>{" "}
                    <span className="text-gray-500">({item.size})</span>
                  </p>
                ))}
              </div>

              <div className="mt-4">
                <p className="font-semibold">
                  {order.address.firstName} {order.address.lastName}
                </p>

                <p className="text-gray-600 text-sm">{order.address.street}</p>

                <p className="text-gray-600 text-sm">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country} - {order.address.zipcode}
                </p>

                <p className="text-gray-600 text-sm mt-1">
                  {order.address.phone}
                </p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="min-w-[180px] space-y-2 text-sm">
              <p>
                <span className="font-semibold">Items :</span>{" "}
                {order.items.length}
              </p>

              <p>
                <span className="font-semibold">Method :</span>{" "}
                {order.paymentMethod}
              </p>

              <p>
                <span className="font-semibold">Payment :</span>{" "}
                {order.payment ? (
                  <span className="text-green-600">Done</span>
                ) : (
                  <span className="text-red-500">Pending</span>
                )}
              </p>

              <p>
                <span className="font-semibold">Date :</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* Amount & Status */}
            <div className="flex flex-col justify-between gap-4 lg:min-w-[180px]">
              <p className="text-xl font-bold">
                {currency}
                {order.amount}
              </p>

              <select
              onChange={(event) => statusHandler(event,order._id)}
                value={order.status}
                className="border rounded-md px-3 py-2 outline-none text-sm w-full"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
