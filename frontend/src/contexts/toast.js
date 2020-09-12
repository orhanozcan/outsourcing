import React, { useState, createContext, useContext, useCallback } from 'react';
import Toast from 'react-bootstrap/Toast'

export const ToastContext = createContext({});

export function ToastProvider({ children }) {
    const [toastShow, setToastShow] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const toastMessageStack = useCallback((message) => {
        setToastShow(true)
        setToastMessage(message)
    }, []);

    const closeToast = () => {
        setToastShow(false)
        setToastMessage('')
    };

    return (
        <ToastContext.Provider value={toastMessageStack}  >
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    position: 'relative',
                }}
            >
                <Toast show={toastShow} onClose={closeToast}
                    style={{
                        position: 'absolute',
                        top: 50,
                        right: 10,
                        width: 220,
                    }} delay={5000} autohide>
                    <Toast.Header>
                        <strong className="mr-auto">outSourcing</strong>
                        <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{toastMessage}</Toast.Body>
                </Toast>
            </div>
            <div>
                {children}
            </div>

        </ToastContext.Provider>
    );
}



export function useToast() {
    return useContext(ToastContext)
}


