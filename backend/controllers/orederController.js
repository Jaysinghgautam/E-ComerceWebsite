import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
// placing order using cod method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod:"COD",
        payment:false,
        Data:Date.now()
    }

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId,{cartData:{}})
    res.json({success:true,message:"Order placed"})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};

// placing method using stripe method

const placeOrderstripe = async (req, res) => {

};

// placing order using razorpay method

const placeOrderRazorpay = async (req, res) => {

};

// all orders data for admin panel

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({})
    res.json({success:true,orders})
  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
};

// user order data for frontend

const userOrders = async (req, res) => {
try {
  const {userId} = req.body 
  const orders = await orderModel.find({userId})
  res.json({success:true,orders})
} catch (error) {
  console.log(error)
  res.json({success:false,message:error.message})
}
    
    
};

// update order status from admin panel
const updateStatus = async (req, res) => {

};

export {
  placeOrder,
  placeOrderstripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
