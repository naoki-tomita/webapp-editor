import * as React from "react";
import { highlight, languages } from "prismjs";
import { CodeHighlight } from "./CodeHighlignt";
import { CodeTextArea } from "./CodeTextArea";

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

const COMMON_STYLE: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
};

export class CodeInput extends React.Component<Props, State> {
  constructor(p: Props, c: any) {
    super(p, c);
    this.state = { inputText: "" };
  }
  render() {
    const { inputText } = this.state;
    const { language } = this.props;
    return (
      <div
        style={{
          position: "relative",
          resize: "both",
          overflow: "auto",
          height: "150px",
        }}
      >
        <CodeHighlight
          style={COMMON_STYLE}
          text={inputText}
          language={language}
        />
        <CodeTextArea
          style={COMMON_STYLE}
          onChange={this.onChangeText}
        />
      </div>
    );
  }

  onChangeText: React.ChangeEventHandler<HTMLTextAreaElement>
    = e => this.setState({ inputText: e.target.value });

  renderHighlightedHtml = () => {
    const { inputText } = this.state;
    const { language } = this.props;
    return highlight(inputText, languages[language]);
  }

  preEscapeHTML(text: string) {
    return text.replace(/ /ig, "__space__");
  }

  escapeHTML(text: string) {
    return text
      .replace(/\r?\n/ig, "<br>")
      .replace(/__space__/ig, "&nbsp;");
  }

}
