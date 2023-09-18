import { BsSend } from "react-icons/bs";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import { useMutation } from "react-query";
import { createComment } from "../../api/comments";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNotification } from "../../store/strore";
import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

export default function Comments() {
  const { idPost } = useParams();
  const [comment, setComment] = useState("");
  const { setStatus, setStatusType, setMsgNotification } = useNotification();
  const [showItems, setShowItems] = useState(10);
  const [additionalItems] = useState([]);

  const { mutate, isLoading } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      if (comment.length === 0) return;
      const data = await createComment(idPost, comment);
      return data;
    },
    onSuccess: (data) => {
      setComment("");
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });
  const socketUrl = "wss://elearning.fathullahmunadi.repl.co";
  const [messageHistory, setMessageHistory] = useState([]);

  const { lastJsonMessage, readyState, sendJsonMessage } =
    useWebSocket(socketUrl);

  useEffect(() => {
    if (lastJsonMessage?.action === "comments") {
      setMessageHistory(lastJsonMessage.data);
    } else if (lastJsonMessage?.action === "update") {
      const newData = lastJsonMessage.data;
      setMessageHistory(messageHistory.concat(newData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastJsonMessage, setMessageHistory]);

  useEffect(() => {
    console.log("webscoket connected");
    sendJsonMessage({
      action: "getComments",
      id_post: idPost,
      token: `bearer ${sessionStorage.getItem("at")}`,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyState]);

  return (
    <div className={`px-5 w-full p-2`}>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {messageHistory &&
          [...messageHistory.slice(0, showItems), ...additionalItems].map(
            (e, i) => (
              <div key={i}>
                <h1 className="w-max py-1 text-blue1 font-semibold text-sm rounded-md">
                  {e?.["user.username"]}
                </h1>
                <div className="ml-3 border-l border-blue1 px-2">
                  <div className="text-lg text-blue1 break-words">{e?.comment}</div>
                  <div className="text-blue1 text-[10px]  font-semibold">
                    {new Date(e?.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
            )
          )}
          {messageHistory.length === 0 && (
            <div className="text-blue1 text-center text-xs font-sans">
              Jadilah Yang Pertama Mengomentari Postingan Ini
            </div>
          )}
        <button
          className={`text-blue1 text-xs cursor-pointer ${messageHistory.length < showItems && 'hidden'}`}
          onClick={() => {
            setShowItems((prevShowItems) => prevShowItems + 10); // Menambah 10 item lainnya
          }}
        >
          Tampilkan Lebih Banyak
        </button>
      </div>
      <form
        action=""
        className="flex justify-center items-center w-full p-2"
        onSubmit={mutate}
      >
        <div className="w-full flex bg-white border-blue1 border-2 justify-center items-center rounded-md py-1 px-2">
          <input
            type="text"
            className="w-full bg-transparent text-sm p-1 outline-none rounded-md"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <ScaleEffectMotion>
            <button
              type="submit"
              className="p-1 px-2 rounded-md bg-blue1 text-white"
              disabled={isLoading}
            >
              <BsSend />
            </button>
          </ScaleEffectMotion>
        </div>
      </form>
    </div>
  );
}
