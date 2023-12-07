import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Dashboard} from './component/pages/Dashboard'
import { Login } from './component/pages/Login'
import { ForgotPassword } from './component/pages/ForgotPassword'
import { ResetPassword } from './component/pages/ResetPassword'
import { MainLayout } from './component/MainLayout';
import { Enquiries } from './component/pages/Enquiries';
import { BlogList } from './component/pages/BlogList';
import { Orders } from './component/pages/Orders';
import { Customers } from './component/pages/Customers';
import { ColorList } from './component/pages/ColorList';
import { CategoryList } from './component/pages/CategoryList';
import { BrandList } from './component/pages/BrandList';
import { ProductList } from './component/pages/ProductList';
import { AddBlog } from './component/pages/AddBlog';

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
          <Route path="list-blog" element={<BlogList/>}/>
          <Route path="orders" element={<Orders/>}/>
          <Route path="customers" element={<Customers/>}/>
          <Route path="list-color" element={<ColorList/>}/>
          <Route path="list-category" element={<CategoryList/>}/>
          <Route path="list-brand" element={<BrandList/>}/>
          <Route path="list-product" element={<ProductList/>}/>
          <Route path="blog" element={<AddBlog/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
