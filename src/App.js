import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register';
import Kitchenform from './pages/Boarding/Kitchenform';
import Medicalform from './pages/Boarding/Medicalform';
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
import Exammarkentry from './pages/exam/Exammarkentry';
import Studentstokens from './pages/exam/Studentstokens';


import Storesupplies from './pages/Store/Storesupplies';
import Storeissues from './pages/Store/Storeissues';
import BooksIn from './pages/Reports/library/Booksin';
import Exams from './pages/Reports/Exams/Exams';
import MainMarks from './pages/Reports/Exams/MainMarks';
import Tokens from './pages/Reports/Exams/Tokens';
import MainFinanace from './pages/Reports/Finance/MainFinanaceReport';
import StudentFees from './pages/Reports/Finance/StudentFees';
import Boardingbgt from './pages/Reports/Finance/Boardingbgt';
import LibraryReport from './pages/Reports/Finance/LibraryReport';
import ClinicReport from './pages/Reports/Finance/ClinicReport';
import Addmission from './pages/Addmission';
import MainAdmission from './pages/Reports/admission/MainAdmission';
import Class4 from './pages/Reports/admission/Class4';
import Class1 from './pages/Reports/admission/Class1';
import Class2 from './pages/Reports/admission/Class2';
import Class3 from './pages/Reports/admission/Class3';
import Class5 from './pages/Reports/admission/Class5';
import Class6 from './pages/Reports/admission/Class6';
import Class7 from './pages/Reports/admission/Class7';
import Class8 from './pages/Reports/admission/Class8';
import Staff from './pages/Reports/Finance/Staff';
import MainBoarding from './pages/Reports/Boarding/MainBoarding';
import Medical from './pages/Reports/Boarding/Medical';
import Kitchen from './pages/Reports/Boarding/Kitchen';
import Issues from './pages/Reports/store/Issues';
import Supplies from './pages/Reports/store/Supplies';
import MainStore from './pages/Reports/store/MainStore';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setUser } from './redux/features/authSlice';
import Footer from './pages/Footer';
// import Info from './pages/Information/Info';

function App() {

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    {/* boarding */}
    
    
        <Route path={"/Kitchenform" } element={<Kitchenform/>} exact/>
        <Route path={"/Medicalform"} element={<Medicalform/>} exact/>
    {/* exam */}

    <Route path={"/Exammarkentry" } element={<Exammarkentry/>} exact/>
        <Route path={"/Studentstokens"} element={<Studentstokens/>} exact/>

        {/* store*/}
        <Route path={"/Storesupplies" } element={<Storesupplies/>} exact/>
        <Route path={"/Storeissues"} element={<Storeissues/>} exact/>
          
        {/* <Route path={"/Info"} element={<Info/>} exact/> */}
       

{/* AllReports */}

<Route path={'/booksin'} element={<BooksIn/>} />
<Route path={'/examsreport'} element={<Exams/>} />
<Route path={'/mainmarks'} element={<MainMarks/>} />
<Route path={'/tokens'} element={<Tokens/>} />
<Route path={'/mainfinance'} element={<MainFinanace/>} />
<Route path={'/studentfeesreport'} element={<StudentFees/>} />
<Route path={'/bordingbudget'} element={<Boardingbgt/>} />
<Route path={'/librarybudget'} element={<LibraryReport/>} />
<Route path={'/clinicbudget'} element={<ClinicReport/>} />
<Route path={'/staffreport'} element={<Staff/>} />
<Route path={'/mainboarding'} element={<MainBoarding/>} />
<Route path={'/medical'} element={<Medical/>} />
<Route path={'/kitchen'} element={<Kitchen/>} />
<Route path={'/mainstore'} element={<MainStore/>} />
<Route path={'/issues'} element={<Issues/>} />
<Route path={'/supplies'} element={<Supplies/>} />

{/* ADDMission */}
<Route path={'admission'} element={<Addmission/>} />
<Route path={'admissionreport'} element={<MainAdmission/>} />
<Route path={'class4'} element={<Class4/>} />
<Route path={'class1'} element={<Class1/>} />
<Route path={'class2'} element={<Class2/>} />
<Route path={'class3'} element={<Class3/>} />
<Route path={'class5'} element={<Class5/>} />
<Route path={'class6'} element={<Class6/>} />
<Route path={'class7'} element={<Class7/>} />
<Route path={'class8'} element={<Class8/>} />

       
       
    
   
   </Routes>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
