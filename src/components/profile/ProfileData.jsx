import PropTypes from "prop-types";
import ButtonPure from "../ButtonPure";
import { useState } from "react";

export default function ProfileData({ data, style, handleChangeUsername }) {
  const [username, setUsername] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (username.length < 6) return;
      handleChangeUsername.mutate({ username });
      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className="w-full grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <div className="flex justify-center items-start flex-col w-full gap-2">
        <label htmlFor="username" className={style.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          defaultValue={data.username}
          onChange={(e) => setUsername(e.target.value)}
          className={`${style.input}`}
        />
      </div>
      <div className="flex justify-center items-start flex-col w-full gap-2">
        <label htmlFor="email" className={style.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          defaultValue={data.email}
          className={`${style.input} bg-cream1/50 cursor-not-allowed`}
          readOnly
        />
      </div>
      <div className="flex justify-center items-start flex-col w-full gap-2">
        <label htmlFor="phoneNumber" className={style.label}>
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          defaultValue={data.phoneNumber}
          className={`${style.input} bg-cream1/50 cursor-not-allowed`}
          readOnly
        />
      </div>
      <div className="w-full flex">
        <ButtonPure
          text={`${handleChangeUsername.isLoading ? "Loading..." : "Save"}`}
          disabled={handleChangeUsername.isLoading}
          style={`${handleChangeUsername.isLoading && "opacity-70 cursor-not-allowed"}`}
        />
      </div>
    </form>
  );
}

ProfileData.propTypes = {
  data: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  handleChangeUsername: PropTypes.object.isRequired,
};
