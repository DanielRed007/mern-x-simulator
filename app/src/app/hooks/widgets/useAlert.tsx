import { useState, Dispatch, SetStateAction } from "react";

interface UseAlertProps {
  showAlert: boolean;
  handleShowAlert(): void;
  setShowAlert: Dispatch<SetStateAction<boolean>>;
}

const useAlert = (timeout: number): UseAlertProps => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), timeout);
  };

  return { showAlert, handleShowAlert, setShowAlert };
};

export default useAlert;
