import { BsSend } from "react-icons/bs";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import { useMutation } from "react-query";
import { createComment } from "../../api/comments";
import { useParams } from "react-router-dom";
import { useState, useEffect ,lazy,Suspense} from "react";
import { useNotification } from "../../store/strore";
const CommentsCard = lazy(()=>import( "./CommentsCard"));
import { Fragment } from "react";

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
  const wss = new WebSocket(socketUrl);

  useEffect(() => {
    const sendGetCommentsMessage = () => {
      const msg = {
        action: "getComments",
        id_post: idPost,
        token: `bearer ${sessionStorage.getItem("at")}`,
      };
      wss.send(JSON.stringify(msg));
    };

    const handleWebSocketMessage = (e) => {
      const data = e.data;
      if (data !== "web socket connected") {
        const datas = JSON.parse(data);
        if (datas.action === "comments") {
          // Simpan data komentar pertama kali diterima
          setMessageHistory(datas.data);
        } else if (datas.action === "update") {
          setMessageHistory((prevMessageHistory) => {
            if (
              !prevMessageHistory.some(
                (msg) => msg.id_comments === datas.data.id_comments
              )
            ) {
              return [...prevMessageHistory, datas.data];
            }
            return prevMessageHistory;
          });
        }
      }
    };

    wss.addEventListener("open", sendGetCommentsMessage);
    wss.addEventListener("message", handleWebSocketMessage);
    return () => {
      if (wss.readyState === WebSocket.OPEN) {
        wss.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`px-5 w-full p-2`}>
      <div className="text-blue1 font-sans text-xs font-semibold mb-2">{`${messageHistory.length} Komentar`}</div>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto overflow-x-hidden">
      <Suspense fallback={<>Loading...</>}>
        {messageHistory &&
          [...messageHistory.slice(0, showItems), ...additionalItems].map(
            (e, i) => (
              <Fragment key={i}>
                <CommentsCard data={e} />
              </Fragment>
            )
          )}
      </Suspense>
        {messageHistory.length === 0 && (
          <div className="text-blue1 text-center text-xs font-sans">
            Jadilah Yang Pertama Mengomentari Postingan Ini
          </div>
        )}
        <button
          className={`text-blue1 text-xs cursor-pointer ${
            messageHistory.length < showItems && "hidden"
          }`}
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
