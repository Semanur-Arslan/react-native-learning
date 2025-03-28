import * as Yup from "yup";

export const AuthSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .when("password", (password, schema) =>
      password
        ? schema.oneOf([Yup.ref("password"), null], "passwords don't match")
        : schema
    )
    .notRequired(),
});
