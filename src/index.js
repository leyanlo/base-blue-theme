import React from "react";
import ReactDOM from "react-dom";

import { BaseProvider, createTheme, LightTheme } from "baseui";
import { colors } from "baseui/tokens";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Example from "./example";

const engine = new Styletron();

const theme = createTheme(
  {
    primary: colors.blue400,
    primary50: colors.blue50,
    primary100: colors.blue100,
    primary200: colors.blue200,
    primary300: colors.blue300,
    primary400: colors.blue400,
    primary500: colors.blue500,
    primary600: colors.blue600,
    primary700: colors.blue700
  },
  {
    colors: {
      buttonSecondaryFill: colors.blue50,
      buttonSecondaryHover: colors.blue100,
      buttonSecondaryActive: colors.blue200,
      buttonSecondarySelectedFill: colors.blue200,

      buttonTertiarySelectedFill: colors.blue50,

      buttonMinimalSelectedFill: colors.blue50,
    }
  }
);

function App() {
  return <Example />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={theme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  rootElement
);
