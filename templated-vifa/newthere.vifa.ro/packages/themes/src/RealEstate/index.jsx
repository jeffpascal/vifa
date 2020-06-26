import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import Global from "packages/common/src/components/Global";
import SvgUtils from "packages/common/src/components/SvgUtils";

import theme from "./theme";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global />
    {children}
    <SvgUtils />
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export { default as theme } from "./theme";
export default Theme;
