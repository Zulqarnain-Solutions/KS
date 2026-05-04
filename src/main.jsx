import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './component/Profile/Profile.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import About from './features/About/About.jsx';
import Enrollment from './pages/Enrollment/Enrollment.jsx';
import { CourseProvider } from './contexts/CourseContext.jsx';
import ContactForm from './component/ContactForm/ContactForm.jsx';
import Home from './pages/Home/Home.jsx';
import Error from './component/Error/Error.jsx';
import AdminLayoutUI from './AdminLayoutUI.jsx';
import Dashboard from './pages/Admin/Dashboard.jsx';
import User from './pages/Admin/UserPage/User.jsx';
import FeesPage from './pages/Admin/FeePage/FeesPage.jsx';
import Courses from './features/Courses/Courses.jsx';
import Course from './pages/Admin/CoursePage/Course.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
  },
    {
      path: "/admin",
      element: <AdminLayoutUI />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />
        },
        {
          path: "/admin/user",
          element: <User />
        },
        {
          path: "/admin/fee",
          element: <FeesPage />
        },
        {
          path: "/admin/courses",
          element: <Course />
        }
      ]
    },
]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
