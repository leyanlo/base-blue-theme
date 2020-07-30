import React from "react";
import ReactDOM from "react-dom";

import { BaseProvider, createTheme, LightTheme } from "baseui";
import { Heading, HeadingLevel } from "baseui/heading";
import { colors } from "baseui/tokens";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import Buttons from "./buttons";
import Checkboxes from "./checkboxes";
import Radios from "./radios";

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
    primary700: colors.blue700,
  },
  {
    colors: {
      buttonSecondaryFill: colors.blue50,
      buttonSecondaryHover: colors.blue100,
      buttonSecondaryActive: colors.blue200,
      buttonSecondarySelectedFill: colors.blue200,

      buttonTertiarySelectedFill: colors.blue50,

      buttonMinimalSelectedFill: colors.blue50,

      tickFillSelected: colors.black,
      tickFillSelectedHover: colors.gray700,
      tickFillSelectedHoverActive: colors.gray600,
    },
  }
);

function App() {
  return (
    <HeadingLevel>
      <Heading>Base Web Blue Theme</Heading>
      <HeadingLevel>
        <Heading>Buttons</Heading>
        <Buttons />
        <Heading>Checkboxes</Heading>
        <Checkboxes />
        <Heading>Radios</Heading>
        <Radios />
      </HeadingLevel>
    </HeadingLevel>
  );
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
