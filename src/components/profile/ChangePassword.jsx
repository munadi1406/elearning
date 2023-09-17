import PropTypes from "prop-types";
import ButtonPure from "../ButtonPure";
import { useState } from "react";

export default function ChangePassword({ style,handleChangePassword }) {

    const [newPassword,setNewPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [isShowPassword,setIsShowPassword] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            await handleChangePassword.mutate({password:newPassword,confirmPassword})
            setNewPassword(null)
            setConfirmPassword(null)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <form className="w-full grid grid-cols-1 gap-2" onSubmit={handleSubmit}>
      <div className="flex justify-center items-start flex-col w-full gap-2">
        <label htmlFor="password" className={style.label}>
          New Password
        </label>
        <input type={`${isShowPassword ? 'text' :'password'}`} id="password" className={style.input} onChange={(e)=>setNewPassword(e.target.value)} required/>
      </div>
      <div className="flex justify-center items-start flex-col w-full gap-2">
        <label htmlFor="confirmPassword" className={style.label} >
          Confirm Password
        </label>
        <input type={`${isShowPassword ? 'text' :'password'}`} id="confirmPassword" className={style.input} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
      </div>
      <div className="flex gap-2 text-xs font-sans text-blue1">
        <input type="checkbox" id="showPassword" onChange={()=>setIsShowPassword(!isShowPassword)}/>
        <label htmlFor="showPassword" >Show Password</label>
      </div>
      <div className="w-full flex">
      <ButtonPure
          text={`${handleChangePassword.isLoading ? "Loading..." : "Save"}`}
          disabled={handleChangePassword.isLoading}
          style={`${handleChangePassword.isLoading && "opacity-70 cursor-not-allowed"}`}
        />
      </div>
    </form>
  );
}

ChangePassword.propTypes = {
  style: PropTypes.object.isRequired,
  handleChangePassword: PropTypes.object.isRequired,
};
