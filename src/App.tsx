import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/globals';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
