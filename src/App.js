import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Dashboard} from './component/pages/Dashboard'
import { Login } from './component/pages/Login'
import { ForgotPassword } from './component/pages/ForgotPassword'
import { ResetPassword } from './component/pages/ResetPassword'
import { MainLayout } from './component/MainLayout';
import { Enquiries } from './component/pages/Enquiries';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/admin" element={<MainLayout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="enquiries" element={<Enquiries/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
