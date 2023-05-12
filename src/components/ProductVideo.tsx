import * as React from "react";
import { styled } from "@mui/material/styles";
import TextContainer from "@mui/material/Container";
import { CardMedia, useMediaQuery, useTheme } from "@mui/material";

const ProductVideoLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    // minHeight: 500,
    // maxHeight: 1000,
  },
}));

const Video = () => {
  return (
    <CardMedia
      component='video'
      image={"amica-vela-cut.mp4"}
      autoPlay
      muted
      loop
      sx={{
        minHeight: '400px',
        maxHeight: 'calc(100vh - 64px)',
        objectFit: 'cover'
      }}
    />
  )
}

export default function ProductHeroLayout(
  props: React.HTMLAttributes<HTMLDivElement>
) {
  const { children } = props;

  return (
    <ProductVideoLayoutRoot>
      <Video />
      <TextContainer
        sx={{
          position: "absolute",
          top: "20%",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "none",
          textShadow: "0px 0px 10px black",
        }}
      >
        {children}
      </TextContainer>
    </ProductVideoLayoutRoot>
  );
}
