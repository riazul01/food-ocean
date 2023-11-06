import React from 'react';
import AppLayout from '../layouts/AppLayout';
import ProfileLayout from '../layouts/ProfileLayout';

const Orders = () => {
    let ordersList = [];

    let totalOrders = 0;
    let pendingOrders = 0;
    let shippedOrders = 0;
    let paymentDeu = 0;

    for (let i = 0; i < ordersList.length; i ++) {
        if (ordersList[i].status !== 'canceled') {
            totalOrders ++;
        }

        if (ordersList[i].status === 'pending') {
            pendingOrders ++;
        }

        if (ordersList[i].status === 'delivered') {
            shippedOrders ++;
        }

        if (ordersList[i].status !== 'delivered' && ordersList[i].status !== 'canceled') {
            paymentDeu ++;
        }
    }

    return (
        <AppLayout>
            <ProfileLayout>
                {/* title */}
                <h1 className="pb-[0.2rem] text-[#173334] text-[1.6rem] font-[500] border-b-[1px] border-dashed border-[#ddd]">My Orders</h1>
                               
                <div className="mt-[1rem] w-full grid grid-cols-4 gap-[1rem]">
                    <div className="w-full h-[120px] flex flex-col items-center justify-center bg-purple-500 rounded-lg">
                        <p className="text-[#fff] text-[1.8rem] font-[700] drop-shadow-lg">{totalOrders < 10 ? `0${totalOrders}` : totalOrders}</p>
                        <p className="text-[#fff] text-[1.2rem] font-[500] drop-shadow-lg">Total Orders</p>
                    </div>
                    <div className="w-full h-[120px] flex flex-col items-center justify-center bg-blue-500 rounded-lg">
                        <p className="text-[#fff] text-[1.8rem] font-[700] drop-shadow-lg">{pendingOrders < 10 ? `0${pendingOrders}` : pendingOrders}</p>
                        <p className="text-[#fff] text-[1.2rem] font-[500] drop-shadow-lg">Pending Orders</p>
                    </div>
                    <div className="w-full h-[120px] flex flex-col items-center justify-center bg-green-500 rounded-lg">
                        <p className="text-[#fff] text-[1.8rem] font-[700] drop-shadow-lg">{shippedOrders < 10 ? `0${shippedOrders}` : shippedOrders}</p>
                        <p className="text-[#fff] text-[1.2rem] font-[500] drop-shadow-lg">Shipped Orders</p>
                    </div>
                    <div className="w-full h-[120px] flex flex-col items-center justify-center bg-red-500 rounded-lg">
                        <p className="text-[#fff] text-[1.8rem] font-[700] drop-shadow-lg">{paymentDeu < 10 ? `0${paymentDeu}` : paymentDeu}</p>
                        <p className="text-[#fff] text-[1.2rem] font-[500] drop-shadow-lg">Payment Deu</p>
                    </div>
                </div>

                <table className="mt-[2rem] w-full bg-gray-200 rounded-lg overflow-hidden">
                    <thead>
                        <tr>
                            <th className="py-[0.4rem]">Order Id</th>
                            <th className="py-[0.4rem]">Date</th>
                            <th className="py-[0.4rem]">Total Cost</th>
                            <th className="py-[0.4rem]">Status</th>
                            <th className="py-[0.4rem]">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersList.map((elem) => {
                            return (
                                <tr className="" key={elem.orderId}>
                                    <td>td1</td>
                                    <td>td2</td>
                                    <td>td3</td>
                                    <td>td4</td>
                                    <td>td5</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </ProfileLayout>
        </AppLayout>
    );
}

export default Orders;