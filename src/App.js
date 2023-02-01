import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound';
import Intro_FirstPage from './pages/Intro_FirstPage';
import MyPage_Main from './pages/MyPage_Main';
import SignIn_SignUp from './pages/SignIn_SignUp';
import Universe_Main from './pages/Universe/Universe_Main';
import Universe_HM from './pages/Universe/Universe_HM';
import Window_Upload from './pages/Window_Upload/Window_Upload';
import Window_PostEdit from './pages/Window_Upload/Window_PostEdit';
import Window_Map from './pages/Window_Main/Window_Map';
import Window_Posts from './pages/Window_Main/Window_Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro_FirstPage />} />
        <Route path="/signin_up" element={<SignIn_SignUp />} />
        <Route path="/universe" element={<Universe_Main />} />
        <Route path="/universe/hangman" element={<Universe_HM />} />
        <Route path="/window/" element={<Window_Map />} />
        <Route path="/window/tag" element={<Window_Posts />} />
        <Route path="/window/upload" element={<Window_Upload />} />
        <Route path="/window/postedit" element={<Window_PostEdit />} />
        <Route path="/mypage" element={<MyPage_Main />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
