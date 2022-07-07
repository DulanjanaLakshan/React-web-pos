import { withStyles } from "@mui/styles";
import { Component, Fragment } from "react";
import { styleSheet } from "./style";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import CButton from "../../components/common/Button";
import CSnackBar from "../../components/common/snackBar/insex";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "admin",
      password: "admin",
      formData: {
        user_name: "",
        pass: "",
      },
    };
  }

  checkLogin() {
    let formData = this.state.formData;
    if (
      formData.user_name === this.state.userName &&
      formData.pass === this.state.password
    ) {
      this.setState({
        open: true,
        message: "Login Sucess..!",
        severity: "success",
      });
    } else {
      this.setState({
        open: true,
        message: "Pless Check Your Username Or Password..!",
        severity: "error",
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div>
          <CSnackBar
            open={this.state.open}
            onClose={() => {
              this.setState({ open: false });
            }}
            message={this.state.message}
            autoHideDuration={3000}
            severity={this.state.severity}
            variant="filled"
          />
        </div>
        <div className={classes.loginCon}>
          <div className={classes.title_container}>
            <div className={classes.userIcon}></div>
            <Typography variant="h6">WELCOME</Typography>
          </div>
          <div className={classes.form_container}>
            <TextField
              id="standard-basic"
              label="User Name"
              variant="standard"
              onChange={(e) => {
                let formData = this.state.formData;
                formData.user_name = e.target.value;
                this.setState({ formData });
              }}
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              onChange={(e) => {
                let formData = this.state.formData;
                formData.pass = e.target.value;
                this.setState({ formData });
              }}
            />
            <CButton
              variant="contained"
              label="Login"
              onClick={() => {
                this.checkLogin();
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styleSheet)(LoginPage);
