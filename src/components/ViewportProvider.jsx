import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
  Toolbar,
} from "@mui/material";
import { createContext, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";

const fixedAppbarHeight = 50;
const fixedNavbarHeight = 56;

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  maxHeight: "100vh",
});

const StyledAppbarContainer = styled(Box)(({ theme }) => ({
  flexBasis: fixedAppbarHeight,
  flexShrink: 0,
  zIndex: theme.zIndex.appBar,
  boxShadow: theme.shadows[5],
}));

const StyledNavbarContainer = styled(BottomNavigation)(({ theme }) => ({
  flexBasis: fixedNavbarHeight,
  flexShrink: 0,
  overflowY: "hidden",
  zIndex: theme.zIndex.appBar,
}));

const StyledContentsContainer = styled(Box)({
  maxHeight: "100vh",
  overflowY: "auto",
  flexGrow: 1,
});

const StyledLogo = styled("img")({
  position: "absolute",
  width: 200,
  left: 0,
  right: 0,
  margin: "auto",
});

let AppbarContext;
const AppbarProvider = (AppbarContext = createContext({
  setAppbarContents: () => {},
  setVisible: () => {},
})).Provider;

let ScrollContext;
const ScrollProvider = (ScrollContext = createContext({ isScrollEnds: false }))
  .Provider;

function ViewportProvider({ children }) {
  const [appbarContents, setAppbarContents] = useState(null);
  const [visible, setVisible] = useState(true);
  const [isScrollEnds, setScrollEnds] = useState(false);

  const handleScroll = useCallback((event) => {
    setScrollEnds(
      event.target.scrollTop + event.target.offsetHeight >=
        event.target.scrollHeight
    );
  }, []);

  return (
    <ScrollProvider value={{ isScrollEnds }}>
      <AppbarProvider value={{ setAppbarContents, setVisible }}>
        <StyledContainer>
          {visible && (
            <StyledAppbarContainer>
              <Toolbar
                sx={{
                  display: "flex",
                }}
              >
                {appbarContents}
                <StyledLogo src="https://marimekko.kr/wib/img/logo.svg" />
              </Toolbar>
            </StyledAppbarContainer>
          )}
          <StyledContentsContainer onScroll={handleScroll}>
            {children}
          </StyledContentsContainer>
          <StyledNavbarContainer>
            <BottomNavigationAction
              component={NavLink}
              icon={<HomeOutlined />}
              to={"/"}
              exact
            />
            <BottomNavigationAction
              component={NavLink}
              icon={<StarOutlined />}
              to={"/posts/1"}
            />
            <BottomNavigationAction
              component={NavLink}
              icon={<UserOutlined />}
              to={"/user"}
            />
          </StyledNavbarContainer>
        </StyledContainer>
      </AppbarProvider>
    </ScrollProvider>
  );
}

export { AppbarContext, ViewportProvider, ScrollContext };
