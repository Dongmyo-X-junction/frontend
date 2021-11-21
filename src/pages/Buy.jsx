import { useContext, useEffect, useState } from "react";
import { AppbarContext } from "components/ViewportProvider";
import BackButton from "components/BackButton";
import BuyProducts from "components/post/BuyProducts";
import { purchase } from "../data/posts_detail";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function totalCost(purchase) {
  console.log(purchase);
  const reducer = (accumulator, curr) => accumulator + curr;
  return purchase
    .filter((item, idx, array) => {
      return item.checked;
    })
    .map((item, idx) => {
      return item.cost;
    })
    .reduce(reducer);
}

export default function Buy() {
  return (
    <>
      <BuyProducts purchase={purchase} />

      <div style={{ marginTop: "10px", display: "flex" }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          style={{ margin: "auto", width: "90%" }}
          component={Link}
          to={"/posts/buy/done"}
        >
          Buy $ {totalCost(purchase)}
        </Button>
      </div>
    </>
  );
}
