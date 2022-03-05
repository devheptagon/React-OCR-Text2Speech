import {
  Stack,
  Typography,
  Button,
  ButtonGroup,
  AppBar,
  useMediaQuery,
} from "@mui/material";
import styles from "./TopBar.module.scss";

function TopBar(props) {
  const largeScreen = useMediaQuery((theme) => theme?.breakpoints?.up("md"));

  return (
    <AppBar position="sticky" color="primary" className={styles.TopBar}>
      <Stack
        direction={largeScreen ? "row" : "column"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography component="h1" variant={largeScreen ? "h4" : "h6"}>
          OCR and Text 2 Speech Demo
        </Typography>
        <ButtonGroup>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.onCapture}
          >
            Capture Text
          </Button>
          <Button variant="contained" color="error" onClick={props.onReset}>
            Reset
          </Button>
        </ButtonGroup>
      </Stack>
    </AppBar>
  );
}

export default TopBar;