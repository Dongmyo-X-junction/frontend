import { styled } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Image, Tag } from 'antd';

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
  border: 1px solid rgba(0,0,0,0.1);
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

const tags = ["Free Shipping", "Resell"];

export default function RelatedProducts() {
  return (
    <StyledContainer>
      <StyledTitle>
        <ShoppingBagIcon />
        Related Product
      </StyledTitle>
      <StyledCard>
        <Image 
          src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
          height="100%" />
        <StyledDescriptionContainer>
          <h4>Awesome wonderful Jean</h4>
          <div>$500</div>
          <div>
            {tags.map((tag, index) => <Tag key={`related_product_tag_${index}`} style={{ fontSize: "11px", textTransform: "uppercase"}}>{tag}</Tag>)}
          </div>
        </StyledDescriptionContainer>
      </StyledCard>
      <StyledCard>
        <Image 
          src="https://images.unsplash.com/photo-1618354691321-e851c56960d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
          height="100%" />
        <StyledDescriptionContainer>
          <h4>Awesome wonderful Jean</h4>
          <div>$500</div>
          <div>
            {tags.map((tag, index) => <Tag key={`related_product_tag_${index}`} style={{ fontSize: "11px", textTransform: "uppercase"}}>{tag}</Tag>)}
          </div>
        </StyledDescriptionContainer>
      </StyledCard>
    </StyledContainer>
  );
}