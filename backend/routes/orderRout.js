import express from 'express'
import { placeOrder,placeOrderstripe,allOrders,userOrders,updateStatus, placeOrderRazorpay } from '../controllers/orederController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
// admin features 
orderRouter.post('list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)
//payment feature
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderstripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// user feature
orderRouter.post('/userorders',authUser,userOrders)

export default orderRouter