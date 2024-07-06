import { useEffect, useState } from "react";

interface AlertProps {
  message: string;
  duration: number;
  onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, duration, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-4 right-4 max-w-sm p-4 text-white bg-blue-500 rounded-lg shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
