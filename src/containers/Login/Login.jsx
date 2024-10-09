import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import handlers from "./Login.handler";

const { loginUser } = handlers;

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const loggedInUser = await loginUser(data);
      const userData = {
        email: loggedInUser.user.email,
        username: loggedInUser.user.username,
        token: loggedInUser.accessToken,
        isLoggedIn: true,
      };
      setUser(userData);
      sessionStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("email")} />
        <br />
        <br />
        <input type="text" {...register("password")} />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
