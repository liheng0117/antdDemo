import Loadable from "../components/Loadable";

const Home = Loadable(() => import("../pages/Home"));
const Login = Loadable(() => import("../pages/Login"));
const Reg = Loadable(() => import("../pages/Reg"));

export { Home, Login, Reg };
