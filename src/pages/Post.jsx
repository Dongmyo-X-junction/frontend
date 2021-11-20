import { useContext, useEffect, useState } from "react";
import { AppbarContext } from "components/ViewportProvider";
import BackButton from "components/BackButton";
import { useParams } from "react-router-dom";
import { generatePost } from "../data/posts";
import { styled } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { Person, MoreVert } from '@mui/icons-material';
import { Tag } from 'antd';
import { getRandomColor } from "utils/colors";
import IconButton from '@mui/material/IconButton';

const thumbnailOptions = {
  // 최대 화면에 160px 정도 크기로 나오는데
  // 레티나 디스플레이 고려해서 대략 2배 크기로 요청함
  w: 500,
  fit: "crop",
  crop: "faces",
};

const q = new URLSearchParams(thumbnailOptions).toString();

const StyledImage = styled("img")`
  width: 100%;
`;

const StyledProfileContainer = styled("div")`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-top: 5px;
`;

export default function Post() {
  const { setAppbarContents, setVisible } = useContext(AppbarContext);
  const { postId } = useParams();
  const [post, setPost] = useState({
    id: 0,
    author: "",
    imageUrl: "",
    tags: [],
    likes: 0,
  });
  useEffect(() => {
    setAppbarContents(<BackButton />);
    setVisible(true);
  }, [setAppbarContents, setVisible]);
  useEffect(() => {
    setPost(generatePost(postId));
  }, [postId]);

  return (
    <>
      <StyledProfileContainer>
        <Avatar sx={{ marginRight: "10px" }}>
          <Person />
        </Avatar>
        <div style={{ textAlign: "left" }}>
          <strong>{post.author}</strong>
          <div>
            {post.tags.map(tag => <Tag color={getRandomColor()}>{tag}</Tag>)}
          </div>
        </div>
        <IconButton 
          aria-label="menu"
          sx={{ padding: 0, marginLeft: "auto" }}>
          <MoreVert />
        </IconButton>
      </StyledProfileContainer>
      <StyledImage src={post.imageUrl && `${post.imageUrl}&${q}`} />
    </>
  );
}
