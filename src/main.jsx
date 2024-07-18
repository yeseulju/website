import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
//import Booking from './Components/Booking/Booking';
import About from './Components/About/About';
import Instructor from './Components/Instructor/Instructor';
import Hero from './Components/Hero/Hero'; // Import Hero component
import Programs from './Components/Programs/Programs';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testmonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = () => (
  <>
    <Hero />
    <div className="container">
      <Title subTitle="Our program" title="What we offer" />
      <section id="program"><Programs /></section>
      <Title subTitle="Gallery" title="Campus Photos" />
      <section id="campus"><Campus /></section>
      <Title subTitle="TESTIMONIALS" title="What Students Say" />
      <section id="testimonials"><Testimonials /></section>
      <Title subTitle="Contact Us" title="Get in Touch" />
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      //{ path: 'bookings', element: <Booking /> },
      { path: 'about', element: <About /> },
      { path: 'instructor', element: <Instructor /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
