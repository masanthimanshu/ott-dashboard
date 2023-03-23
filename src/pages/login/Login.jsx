import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Grid,
  Alert,
  Button,
  Snackbar,
  Container,
  TextField,
  IconButton,
  InputLabel,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "admin@gmail.com" && pass === "admin@1234") {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setShowAlert(true);
    }
  };

  return (
    <Grid container>
      <Grid item md={6}>
        <Box bgcolor="black" height="100vh">
          <br />
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box display="flex" height="100vh" alignItems="center">
          <Container maxWidth="xs">
            <Box textAlign="center" m={4}>
              <img
                style={{ height: "6rem", width: "6rem" }}
                src="/images/logo.png"
                alt="Logo"
              />
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Username"
                placeholder="Enter Your Username"
                type="email"
                sx={{ mb: 2 }}
                fullWidth
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <FormControl sx={{ mb: 4 }} fullWidth>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  label="Password"
                  placeholder="Enter Your Password"
                  type={showPass ? "text" : "password"}
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPass(!showPass)}>
                        {showPass ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                LOGIN
              </Button>
            </form>
          </Container>
        </Box>

        <Snackbar
          open={showAlert}
          autoHideDuration={2500}
          onClose={() => setShowAlert(!showAlert)}
        >
          <Alert
            severity="error"
            sx={{ width: "100%" }}
            onClose={() => setShowAlert(!showAlert)}
          >
            <Typography>
              <b>Incorrect Username or Password</b>
            </Typography>
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};
