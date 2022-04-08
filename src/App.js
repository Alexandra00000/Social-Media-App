import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
   <Layout>
     <Routes>
       <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
     </Routes>
   </Layout>
  );
}

export default App;
