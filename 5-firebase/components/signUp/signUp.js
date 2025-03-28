import { View, FlatList, Text } from "react-native";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import styles from "./signUpStyles";
import CustomInput from "../customInput/customInput";
import CustomButton from "../customButton/customButton";
import LoginFooter from "../loginFooter/loginFooter";
import { toggleAuthScreen } from "../../redux/uiSlice";
import { signUpInputs } from "../../constants/inputData";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthSchema } from "../../constants/validationSchemas";
import useNotificationModal from "../../hooks/useNotification";
import authErrorMessageParser from "../../utils/authErrorMessageParser";
import { useRouter } from "expo-router";

export default function SignUp() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { openNotification } = useNotificationModal();

  const signUpValues = { email: "", password: "", confirmPassword: "" };

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
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      openNotification("Account Creation successful", "success");
      router.push("/chatrooms");
    } catch (error) {
      openNotification(authErrorMessageParser(error.code), "error");
    }
  };

  const onSignInPress = () => {
    dispatch(toggleAuthScreen());
  };

  return (
    <Formik
      initialValues={signUpValues}
      validationSchema={AuthSchema}
      onSubmit={handleClick}
    >
      {(formikProps) => (
        <View style={styles.container}>
          <FlatList
            data={signUpInputs}
            renderItem={(item) => renderInput(item, formikProps)}
            keyExtractor={(item) => item.id}
          />
          <CustomButton
            title="Sign Up"
            backgroundColor="secondary"
            onPress={() => {
              formikProps.handleSubmit();
            }}
          />
          <LoginFooter
            onPress={onSignInPress}
            message="Already have an account?"
            linkText="Sign In"
          />
        </View>
      )}
    </Formik>
  );
}
