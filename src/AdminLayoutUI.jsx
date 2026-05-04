import { Outlet } from "react-router-dom";
import Header from "./pages/Admin/Header.jsx";
import Chart from "./pages/Admin/DashboardPage/Chart.jsx";
import SideBar from "./component/layout/SideBar/SideBar.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ModalProvider } from "./contexts/model/modelContext/ModelProvider.jsx";
import { EditCourseProvider } from "./features/Admin/Course/context/EditCourseContext.jsx";

export default function AdminLayoutUI() {
  return (
    <AuthProvider>
      <ModalProvider>
        <EditCourseProvider>
          <div className="flex relative w-full">
            <SideBar />
            <div className="w-full">
              <Header />
              <Outlet />
            </div>
          </div>
        </EditCourseProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

// --theme-sidenav-bg: #ffffff;
//     --theme-sidenav-border-color: #edf2f9;
//     --theme-sidenav-item-color: #6c757d;
//     --theme-sidenav-item-hover-color: #312a2f;
//     --theme-sidenav-item-hover-bg: #f6f6f6;
//     --theme-sidenav-item-active-color: #312a2f;
//     --theme-sidenav-item-active-bg: #f6f6f6;

//     theme-topbar-bg: #ffffff;
//     --theme-topbar-item-color: #6c757d;
//     --theme-topbar-item-hover-color: #d65db1;
//     --theme-topbar-search-bg: transparent;
//     --theme-topbar-search-border: #e7e9eb;
