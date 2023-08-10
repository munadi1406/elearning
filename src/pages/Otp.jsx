import { useRegisterMessage } from "../store/auth";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { otpVerification, requestNewOtp } from "../api/authRegister";
import { useNavigate } from "react-router-dom";

export default function Otp() {
  const registerMessage = useRegisterMessage((state) => state.registerMessage);
  const [msg, setMsg] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      return await otpVerification(otp);
    },
    onSuccess: (data) => {
      console.log(data);
      localStorage.removeItem("register");
      navigate("/login");
    },
    onError: (error) => {
      console.log(error);
      setDisabled(true);
      setMsg(error.response.data.msg);
    },
  });

  const newOtp = useMutation({
    mutationFn: async () => {
      return await requestNewOtp(localStorage.getItem('register'));
    },
    onSuccess: (data) => {
      console.log(data);
      setMsg(data.response.data.msg);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [disabled, setDisabled] = useState(true);
  const [countdown, setCountdown] = useState(600);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else {
      setDisabled(false);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [countdown, disabled]);

  const style = {
    button:
      "capitalize text-white  active:scale-95 hover:bg-cream1 transition-all duration-300 ease-in-out  shadow-[3px_3px_1px_#F4D160] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans w-full",
  };

  return (
    <div className="w-screen min-h-screen flex justify-center items-center bg-blue1">
      <div className=" bg-white rounded-md p-2 md:w-4/12 sm:w-8/12 h-5/6 w-11/12">
        <div className="text-2xl font-sans font-semibold text-blue1 w-full text-center">
          OTP Verification
        </div>
        <div className="text-red-500 text-xs font-sans  w-full text-center">
          {msg}
        </div>
        <div className="text-blue1 font-sans font-semibold text-xs">
          {registerMessage}
        </div>
        <form
          action=""
          onSubmit={mutate}
          className="grid grid-cols-1 gap-2 w-full flex-col p-2"
        >
          <label
            htmlFor="otp"
            className="text-xs font-sans text-blue1 font-semibold capitalize"
          >
            Your OTP
          </label>
          <input
            type="number"
            name="otp"
            id="otp"
            className="w-full outline-none border-blue1 rounded-md p-1 border"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button
            type="button"
            onClick={() => newOtp.mutate()}
            className={`text-xs font-sans ${
              disabled ? "cursor-not-allowed" : "cursor-pointer"
            } font-semibold text-blue1`}
            disabled={disabled}
          >
            {disabled ? `New OTP ${formatTime(countdown)}` : "Request OTP"}
          </button>
          <button
            className={`${style.button} ${
              isLoading ? "disabled:opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Verifation"}
          </button>
        </form>
      </div>
    </div>
  );
}
