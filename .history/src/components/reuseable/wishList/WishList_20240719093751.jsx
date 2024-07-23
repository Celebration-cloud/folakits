import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import { useRef } from "react";
import { useSelector } from "react-redux";
export default function WishList() {
    const { wishlist } = useSelector((state) => state.user);
    const wishlistRef = useRef([]);
    wishlistRef.current = wishlist ? wishlist;
  return (
    <Stack spacing={5} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={wishlistRef.current?.length} >
        <i className="fa-regular fa-heart"></i>
      </Badge>
    </Stack>
  );
}
