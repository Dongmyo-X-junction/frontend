import { useState } from "react";
import { styled, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, Share } from '@mui/icons-material';

const StyledContainer = styled("div")`
  display: flex;
`;

export default function PostActions({ likes }) {
  const [liked, setLiked] = useState(false);
  return (
    <div style={{ padding: "10px", textAlign: "left" }}>
      <StyledContainer>
        {
          liked ? (
            <IconButton 
              aria-label="selected like"
              onClick={() => setLiked(false)}
              color="primary">
              <Favorite />
            </IconButton>
          ) : (
            <IconButton 
              aria-label="unselected like"
              onClick={() => setLiked(true)}>
              <FavoriteBorder />
            </IconButton>
          )
        }
        <IconButton 
          aria-label="unselected like"
          sx={{ marginLeft: "auto" }}>
          <Share />
        </IconButton>
      </StyledContainer>
      <div style={{ marginLeft: "10px", fontWeight: "bold" }}>
        Likes {likes + (liked ? 1 : 0)}
      </div>
    </div>
  );
}