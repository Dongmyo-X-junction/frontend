import { withRouter } from "react-router-dom";
import { IconButton } from "@mui/material";
import { ArrowLeftOutlined } from "@ant-design/icons";

export default withRouter(({ history }) => (
  <IconButton
    onClick={() => {
      history.goBack();
    }}
  >
    <ArrowLeftOutlined />
  </IconButton>
));
