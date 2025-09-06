import { createContext, useCallback, useContext, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faCheck } from '@fortawesome/free-solid-svg-icons';

const NotificationContext = createContext();

export const useNotificationContext = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {

    const [notification, setNotification] = useState([]);

    const showNotification = useCallback((msg, type, duration = 3000) => {
        const id = Date.now()

        if (notification.length >= 3){
            return
        };

        setNotification((prev) => [...prev, {msg, id, type, visible: true}]);

        setTimeout(() => {
            setNotification((prev) => prev.map((element) => element.id === id ? {...element, visible: false} : element));
        }, duration)

        setTimeout(() => {
            setNotification((prev) => prev.filter((element) => element.id !== id))
        }, duration + 400)
    })

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <ul className="notificationContainer">
                { notification.map((element, index) => (
                    <li key={element.id} style={{top: `${(index + 1) * 4}rem`}}>
                        <div key={element.id} className={`notification ${element.visible ? "slideIn" : "slideOut"} ${element.type === "success" ? "success" : ""}`}>
                            <div className="notificationContent">
                            <FontAwesomeIcon icon={element.type === "success" ? faCheck : faTriangleExclamation } />
                            <span>{element.msg}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </NotificationContext.Provider>
    )
};