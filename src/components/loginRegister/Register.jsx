import { useReducer, useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { register } from "../../api/authRegister";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useRegisterMessage } from "../../store/auth";

export default function Register({ setMsg }) {
  const [signIn, setSignIn] = useState(0);
  const navigate = useNavigate();
  const {setRegisterMessage} = useRegisterMessage();
  const [isShowPassword,setIsShowPassword] = useState(false);
  const intialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    confirmPassword: "",
  };
  const style = {
    input:
      "w-full rounded-md bg-slate-200 outline-none border-none h-10 px-2 placeholder:italic text-sm",
    button:
      "capitalize text-white cursor-pointer active:scale-95 hover:bg-cream1 transition-all duration-300 ease-in-out  shadow-[3px_3px_1px_#F4D160] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans w-full",
  };

  const loginRegisterReducer = (state, action) => {
    if (action.type === "email") {
      return { ...state, email: action.email };
    } else if (action.type === "password") {
      return { ...state, password: action.password };
    } else if (action.type === "firstName") {
      return { ...state, firstName: action.firstName };
    } else if (action.type === "lastName") {
      return { ...state, lastName: action.lastName };
    } else if (action.type === "phoneNumber") {
      return { ...state, phoneNumber: action.phoneNumber };
    } else if (action.type === "confirmPassword") {
      return { ...state, confirmPassword: action.confirmPassword };
    }
  };

  const [state, dispacth] = useReducer(loginRegisterReducer, intialState);

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    dispacth({
      type: `${name}`,
      email: value,
      password: value,
      firstName: value,
      lastName: value,
      phoneNumber: value,
      confirmPassword: value,
    });
  };

  const { isLoading, mutate } = useMutation({
    mutationFn: async () => {
      return await register(state);
    },
    onSuccess: (data) => {
      setRegisterMessage(data.data.message)
      localStorage.setItem('register',state.email)
      navigate("/otp");
    },
    onError: (error) => {
      setMsg(error.response.data.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber } = state;
    if (!firstName || !lastName) {
      return setSignIn(0);
    } else if (!email || !phoneNumber) {
      return setSignIn(1);
    }
    mutate(state);
  };

  const handleShowPassword = ()=>{
    setIsShowPassword(!isShowPassword)
  }
  return (
    <motion.form
      initial={{ opacity: 0, translateX: -200 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      action=""
      onSubmit={handleSubmit}
      className="  flex h-max justify-start py-5 gap-2 items-start flex-col w-full "
    >
      {signIn == 0 && (
        <>
          <input
            type="text"
            placeholder="Fisrt Name"
            className={`${style.input}`}
            name="firstName"
            onChange={handleChangeLogin}
            defaultValue={state.firstName}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={`${style.input} `}
            name="lastName"
            onChange={handleChangeLogin}
            defaultValue={state.lastName}
          />
        </>
      )}
      {signIn == 1 && (
        <>
          <input
            type="email"
            placeholder="Email"
            className={`${style.input}`}
            name="email"
            onChange={handleChangeLogin}
            defaultValue={state.email}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className={`${style.input} `}
            name="phoneNumber"
            onChange={handleChangeLogin}
            defaultValue={state.phoneNumber}
          />
        </>
      )}
      {signIn == 2 && (
        <>
          <input
            type={isShowPassword ? 'text': 'password'}
            placeholder="Password"
            className={`${style.input}`}
            name="password"
            onChange={handleChangeLogin}
            defaultValue={state.password}
          />
          <input
            type={isShowPassword ? 'text': 'password'}
            placeholder="Confirm Password"
            className={`${style.input} `}
            name="confirmPassword"
            onChange={handleChangeLogin}
            defaultValue={state.confirmPassword}
          />
          <div className="text-blue1 text-xs font-sans font-semibold cursor-pointer active:underline" onClick={handleShowPassword}>Show Password ?</div>
          <button type="submit" className={`${style.button} ${isLoading&& 'disabled:opacity-10 cursor-none'}`} disabled={isLoading}>
            {isLoading ? "loading" : "sign-up"}
          </button>
        </>
      )}
      <div
        className={`grid ${
          signIn == 2 ? "grid-cols-1" : "grid-cols-2"
        } w-full gap-2`}
      >
        <input
          type="button"
          value={"Next"}
          onClick={() => setSignIn(signIn + 1)}
          className={`${style.button} ${signIn == 2 && "hidden"}`}
          disabled={signIn == 2}
        />
        <input
          type="button"
          value={"Back"}
          onClick={() => setSignIn(signIn - 1)}
          className={`${style.button} ${signIn == 0 && "disabled:opacity-70"}`}
          disabled={signIn == 0}
        />
      </div>
    </motion.form>
  );
}
Register.propTypes = {
  setMsg: PropTypes.func.isRequired,
};
