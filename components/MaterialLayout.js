import { Paper, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme, useStyle } from './styles/materialStyles';

export default function MaterialLayout({ children }) {
  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <div className={classes.root}>
        <Paper className={classes.paper}>{children}</Paper>
      </div>
    </ThemeProvider>
  );
}
