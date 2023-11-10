import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// layouts
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

// components
import AlertBox from '../components/AlertBox';

// context
import { UserDetailsContext } from '../context/UserDetailsContextProvider';

import { fs } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

// skeleton loader
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetails = () => {
    const userDetails = useContext(UserDetailsContext);
    const orderId = useLocation().pathname.split('/').pop();
    const ordersList = userDetails ? (userDetails.ordersList ? userDetails.ordersList : []) : [];
    
    const orderDetails = ordersList.find((elem) => orderId === elem.orderId);
    const isInvalidId = (ordersList.length > 0 && orderDetails === undefined) ? true : false;

    const [showAlert, setShowAlert] = useState(false);

    const storeUpdatedDataToDatabase = async (user) => {
        try {
            // update users database
            await setDoc(doc(fs, "users", userDetails.id), user);

            // update orders database
            const orderRef = doc(fs, 'orders', orderId);
            await setDoc(orderRef, { status: 'canceled' }, { merge: true });
            toast.success('Your order is successfully cancled!');
        } catch (error) {
            toast.error('An error occured!');
            console.log(error);
        }
    }   

    // get alert box confirmation
    const getAlertResponse = (flag) => {
        if (flag) {
            userDetails.ordersList.map((elem) => {
                if (orderId === elem.orderId) {
                    elem.status = 'canceled';
                }
                return elem;
            });
            
            storeUpdatedDataToDatabase(userDetails);
            setShowAlert(false);
        } else {
            setShowAlert(false);
        }
    }

    const handleCancelOrder = () => {
        setShowAlert(true);
    }

    return (
        <>
        <AlertBox showAlert={showAlert} setShowAlert={setShowAlert} alertMessage="Confirm order cancellation!" getAlertResponse={getAlertResponse}/>
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ccc]">Order Details</h1>

                {isInvalidId ? <div className="px-[0.2rem] mt-[0.8rem] min-h-[40vh]"><p className="text-[1.2rem]">Invalid Order Id!</p></div> : <div className="mt-[1rem]">
                    {orderDetails === undefined ? <Skeleton className="w-full h-[130px] rounded-lg"/> : <div className="gradient-bg rounded-lg overflow-hidden shadow-lg">
                        <div className="px-[0.4rem] py-[0.2rem] bg-green-900 border-[1px] border-green-600 border-b-0 rounded-t-lg">
                            <p className="text-[#fff] text-[1.1rem] font-[600]">Order Info</p>
                        </div>

                        <div className="px-[0.4rem] py-[0.2rem] border-[1px] border-[#ccc] border-t-0 rounded-b-lg">
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Order Id</strong>
                                <span className="text-[1.1rem]">{orderDetails.orderId}</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Order Date</strong>
                                <span className="text-[1.1rem]">{orderDetails.time}</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Order Status</strong>
                                <span className="text-[1.1rem]">{orderDetails.status}</span>
                            </p>
                        </div>
                    </div>}

                    {orderDetails === undefined ? <Skeleton className="mt-[1.6rem] w-full h-[130px] rounded-lg"/> : <div className="mt-[1.8rem] gradient-bg rounded-lg overflow-hidden shadow-lg">
                        <div className="px-[0.4rem] py-[0.2rem] bg-green-900 border-[1px] border-green-600 border-b-0 rounded-t-lg">
                            <p className="text-[#fff] text-[1.1rem] font-[600]">Shipping Info</p>
                        </div>

                        <div className="px-[0.4rem] py-[0.2rem] border-[1px] border-[#ccc] border-t-0 rounded-b-lg">
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Email</strong>
                                <span className="text-[1.1rem]">{orderDetails.shippingInfo.email}</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Phone</strong>
                                <span className="text-[1.1rem]">{orderDetails.shippingInfo.phone}</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Address</strong>
                                <span className="text-[1.1rem] capitalize">
                                    {orderDetails.shippingInfo.address.street},&nbsp;
                                    {orderDetails.shippingInfo.address.city}-{orderDetails.shippingInfo.address.postcode},&nbsp; 
                                    {orderDetails.shippingInfo.address.division},&nbsp;
                                    {orderDetails.shippingInfo.address.country}
                                </span>
                            </p>
                        </div>
                    </div>}

                    {orderDetails === undefined ? <Skeleton className="mt-[1.6rem] w-full h-[220px] rounded-lg"/> : <div className="mt-[1.8rem] gradient-bg rounded-lg overflow-hidden shadow-lg">
                        <div className="px-[0.4rem] py-[0.2rem] bg-green-900 border-[1px] border-green-600 border-b-0 rounded-t-lg">
                            <p className="text-[#fff] text-[1.1rem] font-[600]">Product Items</p>
                        </div>

                        <div className="border-[1px] border-[#ccc] border-t-0 rounded-b-lg">
                            {orderDetails.orderItems.map((elem, index) => {
                                return (
                                    <div  key={index} className="px-[0.4rem] py-[0.2rem] flex items-start justify-between border-b-[1px] border-b-[#ccc] last:border-b-0">
                                        <div className="w-[calc(100%-130px)]">
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Name</strong>
                                                <span className="text-[1.1rem]">{elem.name}</span>
                                            </p>
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Category</strong>
                                                <span className="text-[1.1rem]">{elem.category}</span>
                                            </p>
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Price</strong>
                                                <span className="text-[1.1rem]">{parseInt(elem.price - ((elem.price * elem.discount) / 100))} Tk</span>
                                            </p>
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Discount</strong>
                                                <span className="text-[1.1rem]">{elem.discount}%</span>
                                            </p>
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Weight</strong>
                                                <span className="text-[1.1rem]">{`${elem.weight}${elem.unit} * ${elem.cartQuantity}`}</span>
                                            </p>
                                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Total Price</strong>
                                                <span className="text-[1.1rem]">{parseInt(elem.price - ((elem.price * elem.discount) / 100)) * elem.cartQuantity} Tk</span>
                                            </p>
                                        </div>
                                        <div className="mt-[0.2rem] h-[110px] w-[120px]">
                                            <img className="h-full w-full object-cover rounded-[0.1rem]" src={elem.imgUrl} alt="product-img" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>}

                    {orderDetails === undefined ? <Skeleton className="mt-[1.6rem] w-full h-[170px] rounded-lg"/> : <div className="mt-[1.8rem] gradient-bg rounded-lg overflow-hidden shadow-lg">
                        <div className="px-[0.4rem] py-[0.2rem] bg-green-900 border-[1px] border-green-600 border-b-0 rounded-t-lg">
                            <p className="text-[#fff] text-[1.1rem] font-[600]">Amount Details</p>
                        </div>

                        <div className="px-[0.4rem] py-[0.2rem] border-[1px] border-[#ccc] border-t-0 rounded-b-lg">
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Sub Total</strong>
                                <span className="text-[1.1rem]">{orderDetails.subTotal} Tk</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Discount</strong>
                                <span className="text-[1.1rem]">{orderDetails.discount} Tk</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Shipping Cost</strong>
                                <span className="text-[1.1rem]">{orderDetails.shippingCost} Tk</span>
                            </p>
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Total Amount</strong>
                                <span className="text-[1.1rem]">{orderDetails.totalCost} Tk</span>
                            </p>
                        </div>
                    </div>}

                    {orderDetails === undefined ? <Skeleton className="mt-[1.6rem] w-full h-[70px] rounded-lg"/> : <div className="mt-[1.8rem] gradient-bg rounded-lg overflow-hidden shadow-lg">
                        <div className="px-[0.4rem] py-[0.2rem] bg-green-900 border-[1px] border-green-600 border-b-0 rounded-t-lg">
                            <p className="text-[#fff] text-[1.1rem] font-[600]">Payment Info</p>
                        </div>

                        <div className="px-[0.4rem] py-[0.2rem] border-[1px] border-[#ccc] border-t-0 rounded-b-lg">
                            <p className="py-[0.1rem] flex flex-col sm:flex-row sm:items-center border-b-[1px] border-b-[#ccc] border-dashed sm:border-b-0 last:border-b-0">
                                <strong className="text-[1.1rem] font-[600] text-green-900 w-full sm:w-[150px]">Method</strong>
                                <span className="text-[1.1rem]">COD</span>
                            </p>
                        </div>
                    </div>}

                    {orderDetails === undefined ? <Skeleton className="mt-[2rem] w-[140px] h-[28px] rounded-lg"/> : <button onClick={handleCancelOrder} className="mt-[2rem] px-[0.8rem] py-[0.2rem] text-[#fff] text-[1rem] bg-red-800 rounded-md" disabled={(orderDetails.status === 'canceled') ? true : false}>{(orderDetails.status === 'canceled') ? 'Canceled' : 'Cancel Order'}</button>}
                </div>}
            </ProfileLayout>
        </AppLayout>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        </>
    );
}

export default OrderDetails;