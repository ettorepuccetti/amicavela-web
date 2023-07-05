import { CardMedia } from "@mui/material";
import TextContainer from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { headerHeight } from "./Header";

const ProductVideoLayoutRoot = styled("section")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const Video = () => {
  return (
    <CardMedia
      component="video"
      image={"video-hero.mp4"}
      autoPlay
      muted
      loop
      sx={{
        minHeight: "60vh",
        height: `calc((100vh - ${headerHeight}) + 1px)`,
        maxHeight: "100vw",
        objectFit: "cover",
      }}
    />
  );
};

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
