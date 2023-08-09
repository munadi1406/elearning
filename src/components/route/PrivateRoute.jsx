import { useToken } from "../../store/auth";

export default function PrivateRoute({children}) {
  const { accessToken } = useToken();
  console.log(accessToken);
  return children;
}
