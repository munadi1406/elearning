import { useState, lazy, Suspense } from "react";
import UploadImage from "../../components/UploadImage";
import { useDataUser } from "../../store/auth";
import { useMutation, useQuery } from "react-query";
import { changePassword, changeUsername, getUsersById } from "../../api/users";
import { useNotification } from "../../store/strore";
const ChangePassword = lazy(() =>
  import("../../components/profile/ChangePassword")
);
const ProfileData = lazy(() => import("../../components/profile/ProfileData"));
const BannerProfile = lazy(() =>
  import("../../components/profile/BannerProfile")
);
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [subMenuActive, setSubMenuActive] = useState(0);
  const {setUsername} = useDataUser()
  const {setStatus,setStatusType,setMsgNotification} = useNotification()
  const [isUploadImage, setIsUploadImage] = useState(false);
  const { idUsers } = useDataUser((state) => state);
  const { setImage } = useDataUser();
  const navigate = useNavigate()
  const style = {
    input:
      "w-full outline-none border-blue1 rounded-md p-2 border-2 text-sm text-blue1",
    label: "text-blue1 text-xs font-sans font-semibold",
    text: "text-white capitalize font-sans",
    submenu:
      "bg-blue1 p-2 text-sm font-sans font-semibold  text-white cursor-pointer shadow-[2px_2px_1px_white] ",
  };

  const { data, isLoading } = useQuery(`user${idUsers}`, {
    queryFn: async () => {
      const datas = await getUsersById();
      return datas.data.data;
    },
    onSuccess: (data) => {
      setImage(
        data.image &&
          `${import.meta.env.VITE_SOME_ENDPOINT_API}/image/${idUsers}/${
            data.image
          }`
      );
    },
  });
  let username = '';
  const handleChangeUsername  = useMutation({mutationFn:async(payload)=>{
    const data = await changeUsername(payload)
    username=payload.username
    return data
  },
  onSuccess:(data)=>{
    setUsername(username)
    setStatus(true)
    setStatusType(true)
    setMsgNotification(data.data.message)
  },onError:(error)=>{
    setStatus(true)
    setStatusType(true)
    setMsgNotification(error.response.data.message)
  }
})

  const handleChangePassword  = useMutation({mutationFn:async(payload)=>{
    const data = await changePassword(payload)
    return data
  },
  onSuccess:(data)=>{
    setStatus(true)
    setStatusType(true)
    setMsgNotification(data.data.message)
    sessionStorage.setItem('rt',null)
    sessionStorage.setItem('at',null)
    navigate('/login')
  },onError:(error)=>{
    setStatus(true)
    setStatusType(false)
    setMsgNotification(error.response.data.message)
  }
})

  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      {isUploadImage && <UploadImage handleClose={setIsUploadImage} />}
      <div className="w-full  flex justify-center items-center gap-2 flex-col">
        <div className="lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-2 bg-gradient-to-r from-blue1 to-cream1 rounded-md p-2">
          <Suspense fallback={<>Please Wait</>}>
            <BannerProfile {...data} handleUploadImgae={setIsUploadImage} />
          </Suspense>
          <div className=" flex justify-end items-end  px-2">
            <div
              className={`${style.submenu} ${
                subMenuActive === 0 ? "bg-cream1" : "bg-blue1"
              }`}
              onClick={() => setSubMenuActive(0)}
            >
              Account
            </div>
            <div
              className={`${style.submenu} ${
                subMenuActive === 1 ? "bg-cream1" : "bg-blue1"
              }`}
              onClick={() => setSubMenuActive(1)}
            >
              Change Password
            </div>
          </div>
        </div>
        <div className="md:w-2/3 w-full  grid grid-cols-1 gap-2">
        <Suspense fallback={<>Loading...</>}>
          {subMenuActive === 0 && <ProfileData data={data} style={style} handleChangeUsername={handleChangeUsername}/>}
          {subMenuActive === 1 && <ChangePassword style={style} handleChangePassword={handleChangePassword}/>}
        </Suspense>
        </div>
      </div>
    </>
  );
};

export default Profile;
