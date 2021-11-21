import { useCallback, useContext, useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { subItmes } from "../data/posts_detail";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { AppbarContext } from "../components/ViewportProvider";
import BackButton from "../components/BackButton";

const StyledContainer = styled("div")`
  margin: 30px 20px 0;
`;

const StyledTitle = styled("h3")`
  display: flex;
  align-items: center;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: -0.4px;
  margin-bottom: 15px;
  font-size: 13px;
  letter-spacing: 4px;
  gap: 7px;

  & svg {
    margin-right: 5px;
    width: 20px;
  }
`;

const StyledCard = styled("div")`
  height: 100px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
`;

const ItemStatus = {
  new: "New",
  used: "Used",
};

const totalItems = subItmes.reduce(
  (acc, cur) =>
    cur.cost.new && cur.cost.used
      ? [
          ...acc,
          {
            ...cur,
            idx: acc.length,
            cost: cur.cost.new,
            status: ItemStatus.new,
          },
          {
            ...cur,
            idx: acc.length + 1,
            cost: cur.cost.used,
            status: ItemStatus.used,
          },
        ]
      : [
          ...acc,
          {
            ...cur,
            idx: acc.length,
            cost: cur.cost.new ? cur.cost.new : cur.cost.used,
            status: cur.cost.new ? ItemStatus.new : ItemStatus.used,
          },
        ],
  []
);
export default function Buy() {
  const { setAppbarContents, setVisible } = useContext(AppbarContext);
  const [selectedItems, setSelectedItems] = useState([]);
  useEffect(() => {
    setAppbarContents(<BackButton />);
    setVisible(true);
  }, [setAppbarContents, setVisible]);
  useEffect(() => {
    setSelectedItems(
      totalItems.filter((value) => value.status === ItemStatus.new)
    );
  }, []);

  const handleCheck = useCallback(
    (idx) => {
      const filtered = selectedItems.filter((value) => value.idx !== idx);
      setSelectedItems(
        filtered.length !== selectedItems.length
          ? filtered
          : [...selectedItems, totalItems[idx]]
      );
    },
    [selectedItems]
  );

  return (
    <>
      <StyledContainer>
        <StyledTitle>
          <ShoppingBagIcon />
          Buy total styles
        </StyledTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "&>:not(:last-child)": {
              marginBottom: 1,
            },
          }}
        >
          {totalItems.map((item, index) => (
            <StyledCard
              key={`${item.title}-${item.status}`}
              onClick={() => handleCheck(item.idx)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    width: 100,
                    position: "relative",
                  }}
                >
                  {selectedItems.some((value) => value.idx === item.idx) && (
                    <CheckCircleRoundedIcon
                      sx={{
                        position: "absolute",
                        color: (theme) => theme.palette.darkGrey[70],
                        top: 2,
                        left: 2,
                      }}
                    />
                  )}
                  <img src={item.image} height={100} />
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    padding: 1,
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                  }}
                >
                  <h4>{item["title"]}</h4>
                  <Typography
                    sx={{
                      fontSize: 12,
                      marginLeft: "auto",
                      marginTop: "auto",
                    }}
                  >
                    {item.status} ${item.cost}
                  </Typography>
                </Box>
              </Box>
            </StyledCard>
          ))}
        </Box>
      </StyledContainer>
      <div style={{ marginTop: "10px", display: "flex" }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          style={{ margin: "auto", width: "90%" }}
          component={Link}
          to={"/posts/buy/done"}
        >
          {`Buy $ ${selectedItems.reduce((acc, cur) => acc + cur.cost, 0)}`}
        </Button>
      </div>
    </>
  );
}
