import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Library from './pages/Library';
import Store from './pages/Store';
import Boarding from './pages/Boarding';
import Exam from './pages/Exam';
import Queries from './pages/Queries';
import AllReports from './pages/AllReports';
import Finance from './pages/Finance';
import StudentsFees from './pages/Finance/StudentsFees';
import BoardingDpt from './pages/Finance/BoardingDpt';
import LibraryDpt from './pages/Finance/LibraryDpt';
import Procurement from './pages/Finance/Procurement';
import StaffsWorkers from './pages/Finance/StaffsWorkers';
import SchoolClinic from './pages/Finance/SchoolClinic';
import LibRegistration from './pages/library/LibRegistration';
import BorrowBook from './pages/library/BorrowBook';
import Booksin from './pages/library/Booksin';
import BooksOut from './pages/library/BooksOut';
import UsersLib from './pages/library/UsersLib';
import ReturnBook from './pages/library/ReturnBook';
function App() {
  return (
   <BrowserRouter>
   <ToastContainer/>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/library" element={<Library/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/boarding" element={<Boarding/>} />
    <Route path="/exam" element={<Exam/>} />
    <Route path="/queries" element={<Queries/>} />
    <Route path="/allreports" element={<AllReports/>} />
    {/* finance */}
    <Route path="/finance" element={<Finance/>} />
    <Route path="/studentfees" element={<StudentsFees/>} />
    <Route path="/boardingdpt" element={<BoardingDpt/>} />
    <Route path="/libraydpt" element={<LibraryDpt/>} />
    <Route path="/procurement" element={<Procurement/>} />
    <Route path="/staffworkers" element={<StaffsWorkers/>} />
    <Route path="/clinic" element={<SchoolClinic/>} />

    {/* library */}

    <Route path="/registration" element={<LibRegistration/>} />
    <Route path="/borrowbook" element={<BorrowBook/>} />
    <Route path="/returnbook" element={<ReturnBook/>} />
    <Route path="/books" element={<Booksin/>} />
    <Route path="/booksout" element={<BooksOut/>} />
    <Route path="/users" element={<UsersLib/>} />
    <Route path="/registration" element={<LibRegistration/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
