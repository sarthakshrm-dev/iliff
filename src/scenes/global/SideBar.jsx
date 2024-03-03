import { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { useLocation } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const colors = tokens();

  return (
    <MenuItem
      active={selected.includes(title.toLowerCase())}
      style={{
        color: selected.includes(title.toLowerCase()) ? colors.yellow : "#d2d1be",
        display: "flex",
        marginBottom: "10px",
      }}
      onClick={() => setSelected(title)}
      rootStyles={{
        [`.${menuClasses.label}`]: {
          display: "flex",
          alignItems: "center",
        },
        [`.${menuClasses.button}`]: {
          borderRadius: "20px",
          backgroundColor:
            selected.includes(title.toLowerCase()) ? colors.yellowHover : "transparent",
        },
      }}
      component={<Link to={to} />}
    >
      <div style={{ width: "25px" }}>
        <img
          style={{ opacity: 0.6 }}
          src={require(`../../assets/${icon}.png`)}
          alt=""
        />
      </div>
      <Typography sx={{ marginLeft: "10px" }}>{title}</Typography>
    </MenuItem>
  );
};

const AppSidebar = () => {
  const location = useLocation();
  const colors = tokens();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname])

  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: colors.olive,
          height: "100vh",
          borderRadius: "0 20px 20px 0",
        },
      }}
      width="17rem"
      collapsed={isCollapsed}
    >
      <Menu iconShape="square">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: "25px" }}
        >
          <img src={require("../../assets/logo.png")} alt="" />
        </Box>

        <Box sx={{ margin: "40px 0", px: 2 }}>
          <Item
            title="Dashboard"
            to="/dashboard"
            icon={"dashboard-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="User"
            to="/user"
            icon={"user-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Courses"
            to="/courses"
            icon={"courses-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Instructor"
            to="/instructor"
            icon={"instructor-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Subscriptions"
            to="/subscriptions"
            icon={"subscription-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Resources"
            to="/resources"
            icon={"resources-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Announcement"
            to="/announcement"
            icon={"announcement-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Events"
            to="/events"
            icon={"events-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Advertisers"
            to="/advertisers"
            icon={"advertisers-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Support Chat"
            to="/support"
            icon={"chat-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Push Notification"
            to="/notification"
            icon={"push-notification-icon"}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="All Feedback"
            to="/feedback"
            icon={"feedback-icon"}
            selected={selected}
            setSelected={setSelected}
          />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default AppSidebar;
