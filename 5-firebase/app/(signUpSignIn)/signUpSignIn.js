import { SafeAreaView, Text, Image, View } from "react-native";
import styles from "./signUpSignInStyles";
import logo from "../../assets/images/logo-codeTalks.png";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";
import { useSelector } from "react-redux";

export default function SignUpSignIn() {
  const isSignIn = useSelector((state) => state.ui.isSignIn);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.title}>CodeTalks</Text>
      </View>
      <View style={styles.wrapper}>{isSignIn ? <SignIn /> : <SignUp />}</View>
    </SafeAreaView>
  );
}
