import { useContext, useEffect } from "react";
import { AppbarContext } from "../components/ViewportProvider";
import { styled, Avatar } from "@mui/material";
import { Person } from '@mui/icons-material';
import { Timeline } from 'antd';

const StyledHeaderContainer = styled("div")`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledInfoContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
`;
const StyledPointsContainer = styled("div")`
  padding: 20px 30px;
  h3 {
    margin-bottom: 15px;
  }
`;

export default function User() {
  const { setAppbarContents, setVisible } = useContext(AppbarContext);
  useEffect(() => {
    setAppbarContents(null);
    setVisible(true);
  }, [setAppbarContents, setVisible]);
  return (
    <>
      <StyledHeaderContainer>
        <Avatar sx={{ width: 56, height: 56 }}>
          <Person></Person>
        </Avatar>
        <strong>John Doe</strong>
        <StyledInfoContainer>
          <div>
            <strong>Posts</strong> <br />4
          </div>
          <div>
            <strong>Points</strong> <br />500
          </div>
        </StyledInfoContainer>
      </StyledHeaderContainer>
      <StyledPointsContainer>
        <h3>Recent Earn Points</h3>
        <Timeline>
        <Timeline.Item>
          Earn <strong>30</strong> Points.<br/>
          You sell <a>Awesome Red T-Shirts</a>.<br/>
          <span style={{ fontSize: "12px", color: "gray", letterSpacing: "-0.5px"}}>2021-11-14</span>
        </Timeline.Item>
        <Timeline.Item>
          Earn <strong>28</strong> Points.<br/>
          You sell <a>Black Pants</a>.<br/>
          <span style={{ fontSize: "12px", color: "gray", letterSpacing: "-0.5px"}}>2021-11-14</span>
        </Timeline.Item>
        <Timeline.Item color="red">
          Cancel <strong>13</strong> Points.<br></br>
          <span style={{ fontSize: "12px", color: "gray", letterSpacing: "-0.5px"}}>2021-11-13</span>
        </Timeline.Item>
      </Timeline>
      </StyledPointsContainer>
    </>
  );
}
