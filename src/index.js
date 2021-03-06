import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mediaQuery.css';
import Layout from './Layout';
import Home from './Home';
import AboutUs from './AboutUs';
import Courses from './Courses';
import DownloadApp from './DownloadApp';
import PrivacyPolicy from './PrivacyPolicy';
import Events from './Events';
import News from './News';
import Contact from './Contact';
import Nopage from './Nopage';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/downloadapp' element={<DownloadApp />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/events' element={<Events />} />
          <Route path='/news' element={<News />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
        <Route path='*' element={<Nopage />} />

      </Routes>
    </BrowserRouter>

  </React.StrictMode>

);

reportWebVitals();
