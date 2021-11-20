import { useContext, useEffect, useState } from "react";
import { AppbarContext } from "components/ViewportProvider";
import BackButton from "components/BackButton";
import { useParams } from "react-router-dom";
import { generatePost } from "../data/posts";
import { styled } from "@mui/material";
import PostHeader from "components/post/PostHeader";
import PostActions from "components/post/PostActions";
import RelatedProducts from "components/post/RelatedProducts";

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
      <PostHeader {...post} />
      <StyledImage src={post.imageUrl && `${post.imageUrl}&${q}`} />
      <PostActions likes={post.likes} />
      <p style={{ marginLeft: "20px", fontSize: "16px" }}>Ready to discover a world of creativity?</p>
      <RelatedProducts />
    </>
  );
}
