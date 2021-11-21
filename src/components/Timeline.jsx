import TimelineItem from "./TimelineItem";
import requestPosts from "../data/posts";
import { styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ScrollContext } from "./ViewportProvider";
import { LoadingContext } from "./LoadingProvider";

const StyledImageList = styled("div")({
  display: "flex",
  flexDirection: "row",
  "&>:not(:last-child)": {
    marginRight: 5,
  },
});

const StyledImageColumn = styled("div")({
  maxWidth: 168,
  display: "flex",
  flexDirection: "column",
  "&>*": {
    marginBottom: 5,
  },
});

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const { isScrollEnds } = useContext(ScrollContext);
  const [isFetching, setIsFetching] = useState(false);
  const { setLoading } = useContext(LoadingContext);
  useEffect(() => {
    if (posts.length === 0) {
      loadItems(0);
    }
  }, [posts]);
  const loadItems = (lastIdx) => {
    if (isFetching) return;
    requestPosts(lastIdx, 15, 500).then((data) => {
      setPosts([...posts, ...data]);
      setIsFetching(false);
      setLoading(false);
    });
    setIsFetching(true);
    setLoading(true);
  };
  useEffect(() => {
    if (isScrollEnds) {
      loadItems(posts.length);
    }
  }, [isScrollEnds]);
  return (
    <StyledImageList>
      <StyledImageColumn>
        {posts.map(
          (post, index) =>
            index % 3 === 0 && <TimelineItem {...post} key={post.id} />
        )}
      </StyledImageColumn>
      <StyledImageColumn>
        {posts.map(
          (post, index) =>
            index % 3 === 1 && <TimelineItem {...post} key={post.id} />
        )}
      </StyledImageColumn>
      <StyledImageColumn>
        {posts.map(
          (post, index) =>
            index % 3 === 2 && <TimelineItem {...post} key={post.id} />
        )}
      </StyledImageColumn>
    </StyledImageList>
  );
}
