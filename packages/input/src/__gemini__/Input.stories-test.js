import React from "react";
import { storiesOf } from "@storybook/react";
import {
  ThemeContext,
  HIGLightTheme,
  HIGLightGrayTheme,
  HIGDarkBlueTheme,
  HIGLightGrayHighDensityTheme,
  HIGDarkBlueHighDensityTheme
} from "@hig/themes-poc";

import InputPresenter from "@hig/input/src/presenters/InputPresenter";
import InputHaloPresenter from "@hig/input/src/presenters/InputHaloPresenter";

const themes = [
  { name: "Light gray, medium density", theme: HIGLightGrayTheme },
  { name: "Light gray, high density", theme: HIGLightGrayHighDensityTheme },
  { name: "Dark blue, medium density", theme: HIGDarkBlueTheme },
  { name: "Dark blue, high density", theme: HIGDarkBlueHighDensityTheme },
  { name: "Web light", theme: HIGLightTheme }
];

function Example({ theme, name }) /* eslint-disable-line react/prop-types */ {
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor: theme.themeData["colorScheme.surfaceLevel1Color"],
          padding: theme.themeData["density.spacings.M"],
          width: "300px"
        }}
      >
        <InputHaloPresenter type="line">
          <InputPresenter value={`Line, Default - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputHaloPresenter type="box">
          <InputPresenter value={`Default, Box - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputPresenter value={`Default - ${name}`} />
        <div style={{ height: theme.themeData["density.spacings.M"] }} />

        <InputHaloPresenter hasHover type="line">
          <InputPresenter hasHover value={`Line, Hover - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputHaloPresenter hasHover type="box">
          <InputPresenter hasHover value={`Hover, Box - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputPresenter hasHover value={`Hover - ${name}`} />
        <div style={{ height: theme.themeData["density.spacings.M"] }} />

        <InputHaloPresenter hasFocus type="line">
          <InputPresenter hasFocus value={`Line, Focus - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputHaloPresenter hasFocus type="box">
          <InputPresenter hasFocus value={`Focus, Box - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputPresenter hasFocus value={`Focus - ${name}`} />
        <div style={{ height: theme.themeData["density.spacings.M"] }} />

        <InputHaloPresenter isDisabled type="line">
          <InputPresenter disabled value={`Line, Disabled - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputHaloPresenter isDisabled type="box">
          <InputPresenter disabled value={`Disabled, Box - ${name}`} />
        </InputHaloPresenter>
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
        <InputPresenter disabled value={`Disabled - ${name}`} />
        <div style={{ height: theme.themeData["density.spacings.M"] }} />
      </div>
    </ThemeContext.Provider>
  );
}

const inputStories = storiesOf("Input", module);

themes.forEach(({ theme, name }) => {
  inputStories.add(name, () => <Example theme={theme} name={name} />);
});
