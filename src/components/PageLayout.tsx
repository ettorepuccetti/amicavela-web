import { Box, Container, useTheme } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Footer from "./Footer";
import Header from "./Header";

interface PageLayoutProps {
  title: string;
  imageSrc: StaticImageData;
  children: React.ReactNode;
}

export default function PageLayout(props: PageLayoutProps) {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box minHeight={"70vh"} mb={5}>
        <Box boxShadow={3} mb={3}>
          <Image
            alt={props.title}
            src={props.imageSrc}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "70vh",
              objectFit: "cover",
              marginBottom: "-0.4rem", //necessary to avoid a white line between the image and the box when applying the shadow
            }}
          />
        </Box>
        <Container>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            {props.children}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
