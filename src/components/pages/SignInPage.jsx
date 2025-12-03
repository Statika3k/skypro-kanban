import AuthForm from "../AuthForm/AuthForm";

const SignInPage = ({ setIsAuth }) => {
  return <AuthForm isSignUp={false} setIsAuth={setIsAuth} />;
};

export default SignInPage;
