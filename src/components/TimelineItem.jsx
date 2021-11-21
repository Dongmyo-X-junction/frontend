import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";

// ref: https://unsplash.com/documentation#supported-parameters
const thumbnailOptions = {
  // 최대 화면에 160px 정도 크기로 나오는데
  // 레티나 디스플레이 고려해서 대략 2배 크기로 요청함
  w: 300,
  //h: 300, masonry 모드의 imageList에서 자연스럽게 사이즈가 달라지도록 height는 고정 안하도록 변경
  fit: "crop",
  crop: "faces",
};

const StyledLink = styled(Button)({
  flexShrink: 1,
  flexGrow: 0,
  display: "flex",
  flexDirection: "column",
  "&>*": {
    flexShrink: 1,
    flexGrow: 0,
  },
});

const q = new URLSearchParams(thumbnailOptions).toString();

export default function Thumbnail({ imageUrl, id }) {
  return (
    <StyledLink as={Link} to={`/posts/${id}`}>
      <img src={`${imageUrl}&${q}`} alt="thumbnail"></img>
    </StyledLink>
  );
}
