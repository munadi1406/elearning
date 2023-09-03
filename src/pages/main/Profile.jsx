import { useState, lazy, Suspense } from "react";
import ButtonPure from "../../components/ButtonPure";
import UploadImage from "../../components/UploadImage";
import { useDataUser } from "../../store/auth";
import { useQuery } from "react-query";
import { getUsersById } from "../../api/users";
const BannerProfile = lazy(() =>
  import("../../components/profile/BannerProfile")
);

const Profile = () => {
  const [subMenuActive, setSubMenuActive] = useState(0);
  const [isUploadImage, setIsUploadImage] = useState(false);
  const { idUsers } = useDataUser((state) => state);
  const { setImage } = useDataUser();
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
          {subMenuActive === 0 && (
            <>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="username" className={style.label}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  defaultValue={data.username}
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
                <ButtonPure text={"save"} />
              </div>
            </>
          )}
          {subMenuActive === 1 && (
            <>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="password" className={style.label}>
                  New Password
                </label>
                <input type="password" id="password" className={style.input} />
              </div>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="confirmPassword" className={style.label}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={style.input}
                />
              </div>
              <div className="w-full flex">
                <ButtonPure text={"save"} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
