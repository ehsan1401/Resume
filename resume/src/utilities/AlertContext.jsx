import React, { createContext, useState, useCallback } from "react";
import AlertAss from "./AlertAss";

export const AlertContext = createContext();

export function AlertProvider({ children }) {
  const [alert, setAlert] = useState({ message: "", type: "info", classNameadd: "", visible: false });
  const [timeoutId, setTimeoutId] = useState(null);
  const [animate, setAnimate] = useState(false);

  const showAlert = useCallback((message, type = "info", classNameadd = "") => {
    setAlert({ message, type, classNameadd, visible: true });
    setAnimate(true);
    if (timeoutId) clearTimeout(timeoutId);
    const id = setTimeout(() => {
      setAnimate(false); // Start slide-out
      setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
      }, 300); // Match the animation duration
    }, 3000);
    setTimeoutId(id);
  }, [timeoutId]);

  const hideAlert = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 300);
    if (timeoutId) clearTimeout(timeoutId);
  }, [timeoutId]);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {alert.visible && (
        <div
          className={`fixed z-50 top-10 right-10 transition-transform duration-300 ease-in-out ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
        >
          <AlertAss message={alert.message} type={alert.type} classNameadd={alert.classNameadd} />
        </div>
      )}
      {children}
    </AlertContext.Provider>
  );
} 