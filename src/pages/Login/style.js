import userIcon from "../../assets/img/user.jpg";
export const styleSheet = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  loginCon: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    height: "40%",
    width: "350px",
    alignItems: "center",
    justifyContent: "center",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    borderRadius:'20px'
    },
  userIcon: {
    position: "relative",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    backgroundImage: `url(${userIcon})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
  },
  titel_container: {
    display: "flex",
    alignItems: "center",
    height: "20%",
  },
  form_container: {
    display: "flex",
    flexDirection: "column",
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
};
