import * as React from "react";
import { CodeInput, LanguageTypes } from "./CodeInput";

export class App extends React.Component {
  render() {
    return (
      <div style={{ display: "grid" }}>
        <CodeInput language={LanguageTypes.Markup} />
      </div>
    );
  }
}
