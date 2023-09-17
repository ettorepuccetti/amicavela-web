// import ArticleIcon from "@mui/icons-material/Article";
import LinkIcon from "@mui/icons-material/Link";
import { Box, Link, Typography, useTheme } from "@mui/material";
import navigazioneSrc from "public/images/assistita.jpg";
import PageLayout from "../src/components/PageLayout";

export default function NavigazioneAssistita() {
  const theme = useTheme();

  return (
    <>
      <PageLayout imageSrc={navigazioneSrc} title="Navigazione Assistita">
        <Typography variant="h2" color={theme.palette.primary.main}>
          Navigazione Assistita
        </Typography>

        <Typography variant="body1">
          Ai principianti che vogliono godersi il piacere di veleggiare davanti
          alle nostre coste oppure fra le isole dell’arcipelago, magari non
          disdegnando qualche bagno rinfrescante, offriamo l’esperienza della
          navigazione assistita dai nostri esperti velisti che vi introdurranno
          all’uso della tecnica della navigazione a vela su un cabinato di 13,5
          m.
        </Typography>

        <Box display={"flex"} alignSelf={"center"} paddingTop={1.5}>
          <Link
            href="https://unipiit-my.sharepoint.com/:b:/g/personal/a008000_unipi_it/EcN3OETPnsZOkclKqf7HVu8BC6OZ7BCTo3ZQ_Yns1zFPnA?e=OEcXHP"
            target="_blank"
          >
            <Box display="flex" gap={0.5}>
              Locandina {new Date().getFullYear()}
              <LinkIcon />
            </Box>
          </Link>
        </Box>
      </PageLayout>
    </>
  );
}
