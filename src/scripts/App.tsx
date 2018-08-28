import * as React from "react";
import { CodeInput, LanguageTypes } from "./CodeInput";

export class App extends React.Component {
  render() {
    return (
      <CodeInput language={LanguageTypes.Markup} />
    );
  }
}
