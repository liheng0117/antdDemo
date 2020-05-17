import Loadable from "../components/Loadable";

const Home = Loadable(() => import("../pages/Home"));
const Echart = Loadable(() => import("../pages/Echart"));
const MyTable = Loadable(() => import("../pages/MyTable"));
const MyForm = Loadable(() => import("../pages/MyForm"));
const Sample = Loadable(() => import("../pages/Sample"));
const Login = Loadable(() => import("../pages/Login"));
const Reg = Loadable(() => import("../pages/Reg"));

export { Home, Login, Reg, Echart, MyTable, MyForm, Sample };
