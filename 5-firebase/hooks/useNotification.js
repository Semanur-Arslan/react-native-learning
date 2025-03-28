import { useDispatch } from "react-redux";
import { showModal, hideModal } from "../redux/notificationSlice";

const useNotificationModal = () => {
  const dispatch = useDispatch();

  const openNotification = (message, type = "info") => {
    dispatch(showModal({ message, type }));
  };

  const closeNotification = () => {
    dispatch(hideModal());
  };

  return {
    openNotification,
    closeNotification,
  };
};

export default useNotificationModal;
