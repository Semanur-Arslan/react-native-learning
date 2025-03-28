export default function (errorCode) {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid credentials. Please check your email and password and try again.";
    case "auth/invalid-email":
      return "Invalid email address. Please enter a valid email address.";
    case "auth/user-not-found":
      return "User not found. Please check your information.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/email-already-in-use":
      return "This email address is already in use. Please enter another email address.";
    case "auth/weak-password":
      return "Your password is too weak. Please choose a stronger password.";
    default:
      return "An unknown error occurred. Please try again.";
  }
}
