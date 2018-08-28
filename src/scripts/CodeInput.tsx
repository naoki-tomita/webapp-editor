import * as React from "react";
import { highlight, languages } from "prismjs";

export enum LanguageTypes {
  Markup = "markup",
  JavaScript = "javascript",
  TypeScript = "typescript",
  CSS = "css",
}

interface Props {
  language: LanguageTypes;
}

interface State {
  inputText: string;
}

export class CodeInput extends React.Component<Props, State> {
  constructor(p: Props, c: any) {
    super(p, c);
    this.state = { inputText: "" };
  }
  render() {
    const { language } = this.props;
    const spreadStyle: React.CSSProperties = {
      fontSize: "12px",
      fontFamily: "Consolas",
      position: "absolute",
      border: "none",
      width: "100%",
      height: "100%",
      wordWrap: "break-word",
    };
    return (
      <div className={`language-${language}`}
        style={{
          position: "relative",
          resize: "both",
          height: "200px",
          width: "200px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            ...spreadStyle,
            backgroundColor: "black",
            color: "white",
            userSelect: "none",
          }}
          ref={el => el && (el.innerHTML = this.renderHighlightedHtml())}
        />
        <textarea
          style={{
            ...spreadStyle,
            backgroundColor: "transparent",
            caretColor: "white",
            color: "transparent",
            resize: "none",
            padding: "0",
          }}
          onChange={this.onChangeText}
        />
      </div>
    );
  }

  onChangeText: React.ChangeEventHandler<HTMLTextAreaElement> = e => this.setState({ inputText: e.target.value });
  renderHighlightedHtml = () => {
    const { inputText } = this.state;
    const { language } = this.props;
    return this.escapeHtml(
      highlight(inputText, languages[language]),
    );
  }
  escapeHtml(text: string) {
    return text
      .replace(/\r?\n/ig, "<br>")
      .replace(/ /g, "&nbsp;");
  }

}
