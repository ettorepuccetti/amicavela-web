import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  type SxProps,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import React from "react";
import Link from "../Link";
import DrawerWrapper from "./DrawerWrapper";

export const headerHeight = "calc(max(10vh, 64px))";

const toolbarStyle: SxProps = {
  backgroundColor: "white",
  paddingX: "20px",
  height: headerHeight,
  justifyContent: "space-between",
  display: "flex",
};

const links = [
  { id: 0, route: "Home", url: "/", icon: HomeOutlinedIcon },
  { id: 1, route: "Corsi di vela", url: "/corsi", icon: SchoolOutlinedIcon },
  { id: 2, route: "Regate", url: "/regate", icon: SailingOutlinedIcon },
  {
    id: 3,
    route: "Navigazione assistita",
    url: "/navigazione-assistita",
    icon: NavigationOutlinedIcon,
  },
  {
    id: 4,
    route: "Foto",
    url: "https://photos.app.goo.gl/OZuaH2dSTmejeHBk1",
    icon: PhotoLibraryOutlinedIcon,
  },
  {
    id: 5,
    route: "Documenti",
    url: "https://drive.google.com/drive/folders/1dkhBGIxtmX-ngm5adFuYwyUmDMI-LFS1?usp=sharing",
    icon: ArchiveOutlinedIcon,
  },
  {
    id: 6,
    route: "Sponsor",
    url: "/sponsor",
    icon: MonetizationOnOutlinedIcon,
  },
];

export default function Header() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const logoStyle = {
    cursor: "pointer",
    fontWeight: 500,
  };

  return (
    <>
      <AppBar position={"fixed"}>
        <Toolbar sx={toolbarStyle} disableGutters>
          {/* Logo */}
          <Box display={"flex"} flex={1} justifyContent={"flex-start"}>
            <Link href={"/"} underline="none">
              <Box display="flex" height={headerHeight} width={headerHeight}>
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  width={0} //for not specify width and height and make the Image fit the container
                  height={0}
                  sizes={headerHeight} //needed for not blurry image
                  style={{ height: "100%", width: "auto" }}
                />
              </Box>
            </Link>
          </Box>

          {/* Name */}
          <Typography variant="h5" sx={logoStyle}>
            {""}
          </Typography>

          {/* Links or Drawer */}
          {smallScreen ? (
            <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                onClick={(_e) => setOpenDrawer(!openDrawer)}
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <DrawerWrapper
                open={openDrawer}
                setOpen={setOpenDrawer}
                list={links}
              />
            </Box>
          ) : (
            <Box display={"flex"} gap={"1.5rem"}>
              {links.map((link) => (
                <Link href={link.url} key={link.id} underline="none">
                  <Typography>{link.route}</Typography>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* empty toolbar for prevent page content going behind the real toolbar */}
      <Toolbar sx={toolbarStyle} />
    </>
  );
}
