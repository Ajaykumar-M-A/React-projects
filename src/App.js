import logo from './logo.svg';
import './App.css';
import AddCompanyEmployee from './components/AddCompanyEmployee';
import SearchCompanyemployee from './components/SearchCompanyemployee';
import DeleteCompanyemployee from './components/DeleteCompanyemployee';
import ViewCompnayEmployee from './components/ViewCompnayEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

<BrowserRouter>

<Routes>
<Route path=''    element={<AddCompanyEmployee/>}/>
<Route path='search' element={<SearchCompanyemployee/>}/>
<Route path='view'   element={<ViewCompnayEmployee/>}/>
<Route path='delete'   element={<DeleteCompanyemployee/>}/>

</Routes>


</BrowserRouter>
    </div>
  );
}

export default App;
