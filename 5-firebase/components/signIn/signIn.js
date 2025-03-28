import { View, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import styles from "./signInStyles";
import CustomInput from "../customInput/customInput";
import CustomButton from "../customButton/customButton";
import LoginFooter from "../loginFooter/loginFooter";
import { toggleAuthScreen } from "../../redux/uiSlice";
import { signInInputs } from "../../constants/inputData";
import { AuthSchema } from "../../constants/validationSchemas";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import useNotificationModal from "../../hooks/useNotification";
import authErrorMessageParser from "../../utils/authErrorMessageParser";
import { useRouter } from "expo-router";

export default function SignIn() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { openNotification } = useNotificationModal();

  const signInValues = { email: "", password: "" };

  const renderInput = ({ item }, formikProps) => {
    const { values, handleChange, handleBlur, errors, touched } = formikProps;
    return (
      <View>
        <CustomInput
          placeholder={item.placeholder}
          secureTextEntry={item.secureTextEntry}
          value={values[item.name]}
          onChangeText={handleChange(item.name)}
          onBlur={handleBlur(item.name)}
          error={touched[item.name] && errors[item.name]}
        />
      </View>
    );
  };

  const handleClick = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      openNotification("Login successful", "success");
      router.push("/chatrooms");
    } catch (error) {
      openNotification(authErrorMessageParser(error.code), "error");
    }
  };

  const onSignUpPress = () => {
    dispatch(toggleAuthScreen());
  };
  return (
    <Formik
      initialValues={signInValues}
      validationSchema={AuthSchema}
      onSubmit={handleClick}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <FlatList
            data={signInInputs}
            renderItem={(item) => renderInput(item, formikProps)}
            keyExtractor={(item) => item.id}
          />
          <CustomButton
            title="Sign In"
            backgroundColor="secondary"
            onPress={() => {
              formikProps.handleSubmit();
            }}
          />
          <LoginFooter
            onPress={onSignUpPress}
            message="Don't have an account?"
            linkText="Sign Up"
          />
        </View>
      )}
    </Formik>
  );
}
