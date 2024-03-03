import theme from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import AppSidebar from "./scenes/global/SideBar.jsx";
import TopBar from "./scenes/global/TopBar.jsx";
import Dashboard from "./scenes/dashboard"
import UserListTable from "./scenes/users";
import UserProfile from "./scenes/users/profile";
import CoursesTable from "./scenes/courses/index.jsx";
import NewCourse from "./scenes/courses/new/index.jsx";
import Edit from "./scenes/users/edit_user/index.jsx"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <AppSidebar />
        <main className="content">
          <TopBar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<UserListTable />} />
            <Route path="/courses" element={<CoursesTable />} />
            <Route path="/user/profile" element={<UserProfile />} />
            <Route path="/user/profile/edit" element={<Edit />} />
            <Route path="/courses/new" element={<NewCourse />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
