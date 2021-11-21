import { styled, IconButton, Avatar } from "@mui/material";
import { Person, MoreVert } from "@mui/icons-material";
import { Tag } from "antd";

import { getRandomColor } from "utils/colors";

const StyledContainer = styled("div")`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 5px;
`;

export default function PostHeader({ author, tags }) {
  return (
    <StyledContainer>
      <Avatar sx={{ marginRight: "10px" }}>
        <Person />
      </Avatar>
      <div style={{ textAlign: "left" }}>
        <strong>{author}</strong>
        <div>
          {tags.map((tag, index) => (
            <Tag color={getRandomColor(tag)} key={`tag_${index}`}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <IconButton aria-label="menu" sx={{ padding: 0, marginLeft: "auto" }}>
        <MoreVert />
      </IconButton>
    </StyledContainer>
  );
}
