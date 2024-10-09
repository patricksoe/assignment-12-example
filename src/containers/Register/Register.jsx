import { useForm } from "react-hook-form";

import config from "./Register.config";
import handlers from "./Register.handler";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const { defaultFormValues } = config;
const { registerUser } = handlers;

const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
  });

  const onSubmit = async (data) => {
    try {
      const registeredUser = await registerUser(data);
      const userData = {
        email: registeredUser.user.email,
        username: registeredUser.user.username,
        token: registeredUser.accessToken,
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
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("username", { required: true })}
          placeholder="username"
        />
        {errors.username && <p>Please input username</p>}
        <br />
        <br />
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="email"
        />
        {errors.email && <p>Please input email</p>}
        <br />
        <br />
        <input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        />
        {errors.password && <p>Please input password</p>}
        <br />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
