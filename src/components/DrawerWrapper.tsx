import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import Link from "../Link";

interface DrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  list: {
    id: number;
    route: string;
    url: string;
    icon?: React.ElementType;
  }[];
}

export const ListItemButtonStyled = styled(ListItemButton)(() => ({
  gap: "1rem",
}));

export default function DrawerWrapper(props: DrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={(_e) => props.setOpen(false)}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={(_e) => props.setOpen(false)}
      >
        <List>
          {props.list.map((link) => (
            <Link href={link.url} key={link.id} underline="none">
              <ListItemButtonStyled>
                {link.icon && <link.icon />}
                <ListItemText primary={link.route} />
              </ListItemButtonStyled>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
