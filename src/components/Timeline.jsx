import TimelineItem from "./TimelineItem";
import requestPosts from "../data/posts";
import { ImageList, styled } from "@mui/material";
import { useCallback, useContext, useEffect, useState } from "react";
import { ScrollContext } from "./ViewportProvider";
import { LoadingContext } from "./LoadingProvider";

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
    <ImageList
      variant="standard"
      cols={3}
      gap={8}
      sx={{
        width: "100%",
        "& img": {
          width: "100%",
          height: "auto",
        },
      }}
    >
      {posts.map((post) => (
        <TimelineItem {...post} key={post.id} />
      ))}
    </ImageList>
  );
}
