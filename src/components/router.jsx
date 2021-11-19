import { BrowserRouter } from "react-router-dom";

const Router = ({ children }) => {
  return (
    <BrowserRouter
      getUserConfirmation={(message, callback) => {
        callback(true);
      }}
    >
      {children}
    </BrowserRouter>
  );
};

export default Router;
