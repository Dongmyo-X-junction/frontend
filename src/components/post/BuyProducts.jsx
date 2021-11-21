import { styled } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Image, Tag } from "antd";

const StyledContainer = styled("div")`
  margin: 30px 20px 0;
`;

const StyledTitle = styled("h3")`
  display: flex;
  align-items: center;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: -0.4px;
  margin-bottom: 15px;
  font-size: 13px;
  letter-spacing: 4px;
  gap: 7px;
  & svg {
    margin-right: 5px;
    width: 20px;
  }
`;

const StyledCard = styled("div")`
  height: 100px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  & + & {
    margin-top: 10px;
  }
`;

const StyledDescriptionContainer = styled("div")`
  padding: 10px;
  & h4 {
    margin-bottom: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default function BuyProducts({ purchase }) {
  return (
    <StyledContainer>
      <StyledTitle>
        <ShoppingBagIcon />
        Related Product
      </StyledTitle>
      {purchase.map((item, index) => (
        <StyledCard>
          <Image src={item["image"]} height="100%" />
          <StyledDescriptionContainer>
            <h4>{item["title"]}</h4>
            <div style={{ fontSize: "10px" }}>{item.status} </div>
            <div style={{ fontSize: "10px" }}>{item.cost} </div>
          </StyledDescriptionContainer>
        </StyledCard>
      ))}
    </StyledContainer>
  );
}
