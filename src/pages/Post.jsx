import { useContext, useEffect, useState } from "react";
import { AppbarContext } from "components/ViewportProvider";
import BackButton from "components/BackButton";
import { useParams } from "react-router-dom";
import { generatePost } from "../data/posts";
import { styled } from "@mui/material";

const thumbnailOptions = {
  // 최대 화면에 160px 정도 크기로 나오는데
  // 레티나 디스플레이 고려해서 대략 2배 크기로 요청함
  w: 500,
  fit: "crop",
  crop: "faces",
};

const q = new URLSearchParams(thumbnailOptions).toString();

const StyledImage = styled("img")`
  width: 500px;
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
      <StyledImage src={post.imageUrl && `${post.imageUrl}&${q}`} />
    </>
  );
}
