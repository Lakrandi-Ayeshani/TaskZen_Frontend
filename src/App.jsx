import { Outlet } from "react-router-dom";
import Header from "./components/Headers";
import { Container } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Container classname='my-2'>
        <Outlet />
      </Container>
    </div>
  )
}

export default App