import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// layouts
import AppLayout from '../../layouts/AppLayout';
import ProfileLayout from '../../layouts/ProfileLayout';

// context
import { UserDetailsContext } from '../../context/UserDetailsContextProvider';

// icons
import { RxDoubleArrowRight } from 'react-icons/rx';

const Orders = () => {
    const userDetails = useContext(UserDetailsContext);
    const ordersList = userDetails ? (userDetails.ordersList ? userDetails.ordersList : []) : [];
    const navigate = useNavigate();
    
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

                {/* dashboard */}
                <div className="mt-[1rem] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1.2rem]">
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

                {/* orders list */}
                {ordersList && ordersList.length > 0 ? <table className="mt-[1.4rem] w-full rounded-lg overflow-hidden">
                    <thead className="bg-[#333]">
                        <tr className="">
                            <th className="hidden lg:table-cell py-[0.4rem] text-[#fff] text-[1.1rem]">Order Id</th>
                            <th className="py-[0.4rem] text-[#fff] text-[1.1rem]">Date</th>
                            <th className="hidden sm:table-cell py-[0.4rem] text-[#fff] text-[1.1rem]">Total Cost</th>
                            <th className="hidden sm:table-cell py-[0.4rem] text-[#fff] text-[1.1rem]">Status</th>
                            <th className="py-[0.4rem] text-[#fff] text-[1.1rem]">Details</th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#eee]">
                        {ordersList.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()).map((elem) => {
                            return (
                                <tr className="text-center odd:bg-[#eeefef] even:bg-[#dddfef] border-b-[1px] border-b-[#ccc] last:border-b-0" key={elem.orderId}>
                                    <td className="hidden lg:table-cell py-[0.4rem] text-[1.1rem]">{`#${elem.orderId.slice(0, 6)}`}</td>
                                    <td className="py-[0.4rem] text-[1.1rem]">{elem.time.split(' ').slice(1, 4).join(' ')}</td>
                                    <td className="hidden sm:table-cell py-[0.4rem] text-[1.1rem]">{elem.totalCost} Tk</td>
                                    <td className="hidden sm:table-cell py-[0.4rem]"><span className={`${elem.status} px-[0.6rem] py-[0.1rem] text-[#fff] text-[1.1rem] rounded-md shadow-lg`}>{elem.status}</span></td>
                                    <td onClick={() => navigate(`/user/orders/${elem.orderId}`)} className="py-[0.4rem] text-[1.1rem] flex items-center justify-center cursor-pointer">
                                        <span className="text-green-900 text-[1.1rem] font-[600]">view details</span>
                                        <RxDoubleArrowRight className="ml-[0.2rem] text-green-900 text-[1.1rem] font-[600]"/>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table> : null}
            </ProfileLayout>
        </AppLayout>
    );
}

export default Orders;