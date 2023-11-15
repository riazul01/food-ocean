import React from 'react';

const AlertBox = ({ showAlert, setShowAlert, alertMessage, getAlertResponse }) => {
    
    const handleCancel = () => {
        getAlertResponse(false);
    }

    const handleConfirm = () => {
        getAlertResponse(true);
    }

    // close alert box
    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <div onClick={handleCloseAlert} className={`${showAlert ? 'fixed' : 'hidden'} h-full w-full flex items-center justify-center bg-[#000] bg-opacity-30 z-9999`}>
            <div onClick={(e) => e.stopPropagation()} className="relative mx-[0.4rem] px-[0.8rem] py-[0.6rem] h-auto min-h-[120px] w-full max-w-[380px] bg-blue-200 shadow-xl border-[1px] border-[#ccc] rounded-md">
                <h1 className="text-[1.3rem] sm:text-[1.4rem] font-[700]">{alertMessage}</h1>
                <div className="absolute bottom-[0.8rem] right-[0.8rem]">
                    <button onClick={handleCancel} className="me-[0.5rem] px-[0.8rem] py-[0.2rem] text-[#fff] text-[1.1rem] bg-[#21659c] rounded-sm">Cancel</button>
                    <button onClick={handleConfirm} className="px-[0.8rem] py-[0.2rem] text-[#fff] text-[1.1rem] bg-red-800 rounded-sm">Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default AlertBox;