import { BrowserRouter } from "react-router-dom";

const Router = ({ children }) => {
  return (
    <BrowserRouter
      getUserConfirmation={(message, callback) => {
        callback(true);
        /*handleDialog({
          content: message,
          handleAgreementCallback: () => {
            callback(true);
          },
          handleDisagreementCallback: () => {
            callback(false);
          },
        });*/
      }}
    >
      {children}
    </BrowserRouter>
  );
};

export default Router;
