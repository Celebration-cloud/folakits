import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
export default function WishList() {
  return (
    <Stack spacing={5} direction="row" sx={{ color: "action.active" }}>
      <Badge color="secondary" badgeContent={0} showZero>
        <i className="fa-regular fa-heart"></i>
      </Badge>
    </Stack>
  );
}
