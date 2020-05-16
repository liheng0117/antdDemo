
import Loadable from '../components/Loadable';

const Home = Loadable( () =>import ('../pages/Home'))
const Detail = Loadable( () =>import ('../pages/Detail'))

export {
  Home,
  Detail,
}