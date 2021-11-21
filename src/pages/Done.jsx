import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Done() {
  return (
    <>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <img
          style={{ margin: "auto", marginTop: "150px", marginBottom: "150px" }}
          src="img/done.gif"
        />
      </div>

      <div style={{ marginTop: "10px", display: "flex" }}>
        <Button
          variant="contained"
          startIcon={<HomeIcon />}
          style={{ margin: "auto", width: "90%" }}
          component={Link}
          to={"/"}
        >
          Go to Home
        </Button>
      </div>
    </>
  );
}
