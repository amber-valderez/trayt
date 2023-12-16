import { List, ListItem, ListItemButton, ListProps } from "@mui/joy";
import { memo } from "react";
import { Link } from "react-router-dom";

export const Navigation = memo(function Navigation(
  props: NavigationProps,
): JSX.Element {
  const { sx, ...other } = props;

  return (
    <List
      sx={{ "--ListItem-radius": "4px", ...sx }}
      size="sm"
      role="navigation"
      {...other}
    >
      <ListItem component={Link} to="/personal">
        <ListItemButton>Personal</ListItemButton>
      </ListItem>
      <ListItem component={Link} to="/small-business">
        <ListItemButton>Small Business</ListItemButton>
      </ListItem>
      <ListItem component={Link} to="/wealth-management">
        <ListItemButton>Wealth Management</ListItemButton>
      </ListItem>
      <ListItem component={Link} to="/business-and-institutions">
        <ListItemButton>Business and Institutions</ListItemButton>
      </ListItem>
      <ListItem component={Link} to="/about-us">
        <ListItemButton>About Us</ListItemButton>
      </ListItem>
    </List>
  );
});

type NavigationProps = Omit<ListProps, "children">;
