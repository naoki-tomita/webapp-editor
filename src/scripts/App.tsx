import * as React from "react";
import { HTMLInput, JavaScriptInput, TypeScriptInput, CSSInput } from "./CodeInput";

export class App extends React.Component {
  render() {
    return (
      <div style={{
        display: "grid",
        gridTemplateAreas: `"a b c" "d d d"`,
      }}>
        <HTMLInput style={{ gridArea: "a" }} />
        <JavaScriptInput style={{ gridArea: "b" }} />
        <TypeScriptInput style={{ gridArea: "c" }} />
        <CSSInput style={{ gridArea: "d" }} />
      </div>
    );
  }
}
