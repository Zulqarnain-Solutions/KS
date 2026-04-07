import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './component/Profile/Profile.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import About from './component/About/About.jsx';
import Enrollment from './pages/Enrollment/Enrollment.jsx';
import { CourseProvider } from './contexts/CourseContext.jsx';
import Courses from './component/Courses/Courses.jsx';
import ContactForm from './component/ContactForm/ContactForm.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <ProtectedRoutes> < Profile/> </ProtectedRoutes>
      },
       {
        path: "/contact",
        element:  <ContactForm />
      },
      {
        path: "/courses/enroll",
        element:  <Enrollment />
      },
      {
        path: "/courses",
        element: <CourseProvider><Courses /></CourseProvider>
      },
      {
        path: "/about",
        element: <About />
      },
    ]
  }
  
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
