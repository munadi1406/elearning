import { useReducer } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { auth } from "../../api/authRegister";
import PropTypes from "prop-types";

export default function Login({ setMsg }) {
  const navigate = useNavigate();
  const style = {
    input:
      "w-full rounded-md bg-slate-200 outline-none border-none h-10 px-2 placeholder:italic text-sm",
    button:
      "capitalize text-white active:scale-95 hover:bg-cream1 transition-all duration-300 ease-in-out  shadow-[3px_3px_1px_#F4D160] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans w-full",
  };
  const initialState = {
    email: "",
    password: "",
  };

  const loginReducer = (state, action) => {
    if (action.type === "email") {
      return { ...state, email: action.email };
    } else if (action.type === "password") {
      return { ...state, password: action.password };
    }
  };

  const [state, dispacth] = useReducer(loginReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispacth({ type: `${name}`, email: value, password: value });
  };

  const { isLoading, mutate, } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      const { email, password } = state;
      return await auth(email, password);
    },
    onSuccess:(data)=>{
        const datas = data.data.data;
        sessionStorage.setItem('rt',datas.refresh_token)
        sessionStorage.setItem('at',datas.access_token)
        navigate('/home/')
    },
    onError:(error)=>{
        const { response } = error;
        const errorMessage = response.data.msg || response.data.message;
        setMsg(errorMessage);
    }
  });

  return (
    <>
      <motion.div
        className="w-full"
        initial={{ opacity: 0, translateX: -200 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <form
          action=""
          onSubmit={(e) => mutate(e)}
          className="flex h-max justify-start py-5 gap-2 items-start flex-col w-full "
        >
          <input
            type="email"
            required
            placeholder="Email"
            className={`${style.input}`}
            defaultValue={state.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className={`${style.input} `}
            defaultValue={state.password}
            onChange={handleChange}
            name="password"
          />
          <button
            type="submit"
            className={`${style.button} ${isLoading && "disabled:opacity-50 cursor-not-allowed"}`}
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Sign-in"}
          </button>
        </form>
      </motion.div>
    </>
  );
}
Login.propTypes = {
    setMsg:PropTypes.func.isRequired
}