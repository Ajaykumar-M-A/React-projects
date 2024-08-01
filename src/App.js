import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import SearchPost from './components/SearchPost';
import DeletePost from './components/DeletePost';
import ViewBlog from './components/ViewBlog';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='blogpost' element={<BlogPost/>}/>
        <Route path='search'   element={<SearchPost/>}/>
        <Route path='delete'   element={<DeletePost/>}/>
        <Route path='view'   element={<ViewBlog/>}/>

      </Routes>
      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
