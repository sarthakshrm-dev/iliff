import { useState } from "react";
import {
  Grid,
  Card,
  TableCell,
  TableBody,
  TableRow,
  TableHead,
  Paper,
  Table,
  Avatar,
  IconButton,
  Typography,
  Button,
  TableContainer,
  Modal,
  Box,
} from "@mui/material";
import { tokens } from "../../theme";

const Dashboard = () => {
  const colors = tokens();
  // Dummy user data for demonstration
  const [courseData, setCourseData] = useState([
    {
      id: 1,
      title: "Introduction to React",
      category: "Web Development",
      duration: "4 weeks",
      author: "John Doe",
      isPaid: true,
      creationDate: "2024-02-26",
    },
    {
      id: 2,
      title: "Python for Beginners",
      category: "Programming",
      duration: "6 weeks",
      author: "Jane Doe",
      isPaid: false,
      creationDate: "2024-02-25",
    },
    // Add more course data as needed
  ]);
  const [userData, setUserData] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      status: "Active",
      creationDate: "2024-02-26",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "987-654-3210",
      status: "Inactive",
      creationDate: "2024-02-25",
    },
    // Add more user data as needed
  ]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // State for modal
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenDeleteModal = (userId) => {
    setSelectedUserId(userId);
    setDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedUserId(null);
    setDeleteModalOpen(false);
  };

  const handleDeleteUser = () => {
    // Perform delete action here...
    // For example, filter out the user with the selectedUserId
    setUserData((prevData) =>
      prevData.filter((user) => user.id !== selectedUserId)
    );
    handleCloseDeleteModal();
  };

  return (
    <div className="container">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "25px",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
            }}
          >
            <div className="icon-bg">
              <img
                className="dashboard-icon"
                src={require("../../assets/dashboard-user-icon.png")}
                alt=""
              />
            </div>
            <h2>52.2 k</h2>
            <p>Total user</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "25px",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
            }}
          >
            <div className="icon-bg">
              <img
                className="dashboard-icon"
                src={require("../../assets/dashboard-registration-icon.png")}
                alt=""
              />
            </div>
            <h2>52k</h2>
            <p>Total user</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "25px",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
            }}
          >
            <div className="icon-bg">
              <img
                className="dashboard-icon"
                src={require("../../assets/dashboard-courses-icon.png")}
                alt=""
              />
            </div>
            <h2>52k</h2>
            <p>Total user</p>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderRadius: "25px",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
            }}
          >
            <div className="icon-bg">
              <img
                className="dashboard-icon"
                src={require("../../assets/dashboard-certificate-icon.png")}
                alt=""
              />
            </div>
            <h2>52k</h2>
            <p>Total user</p>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "white",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <h3>User List</h3>
              <a
                href="/user"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "black", // Inherit the color from the parent
                }}
              >
                View All
              </a>
            </div>
            <Grid item xs={12}>
              <TableContainer
                component={Paper}
                sx={{ boxShadow: "none", border: "none" }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>
                        Creation Date
                      </TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((user) => (
                        <TableRow key={user.id}>
                          <TableCell>
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <Avatar
                                alt={user.name}
                                src={`https://api.adorable.io/avatars/40/${user.id}`}
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: 2,
                                  marginRight: 2,
                                }}
                              />
                              {user.name}
                            </div>
                          </TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>{user.status}</TableCell>
                          <TableCell>{user.creationDate}</TableCell>
                          <TableCell>
                            <IconButton
                              onClick={() => console.log("View clicked")}
                              sx={{
                                borderRadius: "10px",
                                backgroundColor: colors.purple,
                                marginRight: "5px",
                                width: "35px",
                                height: "35px",
                              }}
                            >
                              <img
                                src={require("../../assets/view-icon.png")}
                                alt=""
                              />
                            </IconButton>

                            <IconButton
                              onClick={() => console.log("Lock clicked")}
                              sx={{
                                borderRadius: "10px",
                                backgroundColor: colors.olive,
                                marginRight: "5px",
                                width: "35px",
                                height: "35px",
                              }}
                            >
                              <img
                                src={require("../../assets/lock-closed-icon.png")}
                                alt=""
                              />
                            </IconButton>

                            <IconButton
                              onClick={() => handleOpenDeleteModal(user.id)}
                              sx={{
                                borderRadius: "10px",
                                backgroundColor: colors.red,
                                width: "35px",
                                height: "35px",
                              }}
                            >
                              <img
                                src={require("../../assets/delete-icon.png")}
                                alt=""
                              />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography variant="h6" component="div">
                  Confirm Deletion
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Are you sure you want to delete this user?
                </Typography>
                <Button onClick={handleCloseDeleteModal} sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteUser}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Box>
            </Modal>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "white",
              boxShadow: "0px 0px 12px -6px rgba(0,0,0,0.3)",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <h3>Courses</h3>
              <a
                href="/courses"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "black", // Inherit the color from the parent
                }}
              >
                View All
              </a>
            </div>
            <Grid item xs={12}>
        <TableContainer
          component={Paper}
          sx={{ boxShadow: "none", border: "none" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Course Title</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Category</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Duration</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Author</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Paid or Free</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Creation Date</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {courseData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt={user.title}
                          src={`https://api.adorable.io/avatars/40/${user.id}`}
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 2,
                            marginRight: 2,
                          }}
                        />
                        {user.title}
                      </div>
                    </TableCell>
                    <TableCell>{user.category}</TableCell>
                    <TableCell>{user.duration}</TableCell>
                    <TableCell>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          alt={user.author}
                          src={`https://api.adorable.io/avatars/40/${user.id}`}
                          sx={{
                            width: 30,
                            height: 30,
                            borderRadius: 10,
                            marginRight: 1,
                          }}
                        />
                        {user.author}
                      </div>
                    </TableCell>
                    <TableCell>{user.isPaid ? "Paid" : "Free"}</TableCell>
                    <TableCell>{user.creationDate}</TableCell>
                    <TableCell sx={{display: "flex"}}>
                      <IconButton
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: colors.purple,
                          marginRight: "5px",
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src={require("../../assets/edit-icon.png")}
                          alt=""
                        />
                      </IconButton>

                      <IconButton
                        onClick={() => handleOpenDeleteModal(user.id)}
                        sx={{
                          borderRadius: "10px",
                          backgroundColor: colors.red,
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src={require("../../assets/delete-icon.png")}
                          alt=""
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
            <Modal open={deleteModalOpen} onClose={handleCloseDeleteModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  bgcolor: "background.paper",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography variant="h6" component="div">
                  Confirm Deletion
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Are you sure you want to delete this course?
                </Typography>
                <Button onClick={handleCloseDeleteModal} sx={{ mr: 2 }}>
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteUser}
                  variant="contained"
                  color="error"
                >
                  Delete
                </Button>
              </Box>
            </Modal>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
