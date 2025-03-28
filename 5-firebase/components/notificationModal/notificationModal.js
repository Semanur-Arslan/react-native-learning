import { Modal, Text, Pressable, View, SafeAreaView } from "react-native";
import styles from "./notificationModalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import { useSelector } from "react-redux";
import useNotificationModal from "../../hooks/useNotification";
import { useEffect } from "react";

export default function NotificationModal() {
  const { isVisible, message, type } = useSelector(
    (state) => state.notification
  );

  const { closeNotification } = useNotificationModal();

  const getIconDetails = () => {
    switch (type) {
      case "success":
        return { name: "checkcircle", color: Colors.success };
      case "warning":
        return { name: "exclamationcircle", color: Colors.warning };
      case "error":
        return { name: "closecircle", color: Colors.danger };
      default:
        return { name: "infocirlceo", color: Colors.light.icon };
    }
  };

  const { name, color } = getIconDetails();

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(closeNotification, 2000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, closeNotification]);

  return (
    <Modal animationType="none" transparent={true} visible={isVisible}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable style={styles.buttonClose} onPress={closeNotification}>
            <AntDesign name="close" size={14} color={Colors.light.icon} />
          </Pressable>
          <View style={styles.contentWrapper}>
            <AntDesign name={name} size={24} color={color} />
            <Text style={styles.modalText}>{message}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
