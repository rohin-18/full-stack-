import Login from './component/Login'
import AfterLogin from './component/AfterLogin';
function App() {
  let login = true;
  return (
    login ? <AfterLogin /> : <Login />
  )
};
export default App;