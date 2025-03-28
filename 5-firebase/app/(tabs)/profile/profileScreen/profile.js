import { SafeAreaView, Text } from "react-native";
import styles from "./profileStyles";
import CustomButton from "../../../../components/customButton";
import { auth } from "../../../../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Profile() {
  function handleClick() {
    signOut(auth);
  }
  return (
    <SafeAreaView>
      <Text style={styles.container}>Profile</Text>
      <CustomButton
        backgroundColor="primary"
        title="Log out"
        onPress={handleClick}
      />
    </SafeAreaView>
  );
}
