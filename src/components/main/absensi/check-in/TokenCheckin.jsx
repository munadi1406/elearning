import ButtonPure from "../../../ButtonPure"

export default function TokenCheckin() {
  const style = {
    input:
      "w-full text-sm outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
    label: "text-sm font-semibold text-blue1",
  };
  return (
    <div className="w-full p-2 flex justify-center items-start flex-col gap-2">
      <div className="w-full">
        <label htmlFor="token" className={style.label}>Token</label>
        <input type="text" placeholder='attedance token' className={style.input} />
      </div>
      <div className="w-full flex justify-start items-center">
        <ButtonPure color={'blue1'} text={"check-in"} />
      </div>
    </div>
  )
}
