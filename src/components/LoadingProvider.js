import { createContext, useState } from "react";
import { Backdrop, CircularProgress, Portal, styled } from "@mui/material";

const StyledBackdropContainer = styled(Backdrop)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  zIndex: theme.zIndex.drawer + 1,
  color: theme.palette.darkGrey[20],
}));

let LoadingContext;
const { Provider } = (LoadingContext = createContext({
  setLoading: () => {},
}));

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <Provider value={{ setLoading }}>
      <StyledBackdropContainer open={loading}>
        <CircularProgress color="inherit" />
      </StyledBackdropContainer>
      {children}
    </Provider>
  );
}
export { LoadingContext };
