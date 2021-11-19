import seedrandom from "seedrandom";
import { authors, hashtags } from "./posts_detail";
const images = [
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1577976658971-c3d0eaf4ef07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1559324926-ad3e8bab9df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1565115021788-6d3f1ede4980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1577976658971-c3d0eaf4ef07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1559324926-ad3e8bab9df1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1520975954732-35dd22299614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1565115021788-6d3f1ede4980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1577976658971-c3d0eaf4ef07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1559127452-829071a09516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1504051898397-67f872da760b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1613552465135-e5bdaada10bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1611676530420-59b93cdbfd1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1532332248682-206cc786359f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1550377485-2124996d6538?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1559127453-76e365460f0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1576841944388-1d1b4b8494fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1466695108335-44674aa2058b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1587590577167-b32f6032dd2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1503342250614-ca440786f637?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1535237232425-ef747e84d31d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1505535762334-d060c7df86e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1524386189627-88c26ac1cc69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1541598609756-e7dfa98d129f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  "https://images.unsplash.com/photo-1561134013-859b398e7f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1",
  "https://images.unsplash.com/photo-1579919211726-386774429d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
];

const MAX_HASH_TAG_LEN = 5;
const MAX_LIKES = 3000;
const MULTIPLIER = 10000;

function getLimitedNumber(seed, max) {
  const t = seedrandom(seed);
  return Math.round(t() * MULTIPLIER) % max;
}

function getPseudoRandom(list, seed, len = 1, needArray = false) {
  if (len === 0) return needArray ? [] : "";
  const t = seedrandom(seed);
  const s = new Set();
  if (list.length <= len) return [...list];
  while (s.size < len) {
    s.add(list[Math.round(t() * MULTIPLIER) % list.length]);
  }
  const result = [...s.values()];
  return needArray ? result : result[0];
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const generatePost = (index) => ({
  id: index,
  author: getPseudoRandom(authors, index),
  imageUrl: images[index % images.length],
  tags: getPseudoRandom(
    hashtags,
    index,
    getLimitedNumber(index, MAX_HASH_TAG_LEN),
    true
  ),
  likes: getLimitedNumber(index, MAX_LIKES),
});

async function requestPosts(lastIdx, requestLen, delay) {
  const popped = [...Array(requestLen).keys()].map((value) =>
    generatePost(value + lastIdx)
  );
  await sleep(delay);
  return popped;
}

export default requestPosts;
