import * as React from "react";
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
  style?: React.CSSProperties;
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
    const { language, style } = this.props;
    return (
      <div
        style={{
          ...style,
          position: "relative",
          resize: "both",
          overflow: "scroll",
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
}

interface StyleProps {
  style?: React.CSSProperties;
}

export const HTMLInput: React.StatelessComponent<StyleProps> = ({ style }) => {
  return <CodeInput style={style} language={LanguageTypes.Markup} />
}

export const JavaScriptInput: React.StatelessComponent<StyleProps> = ({ style }) => {
  return <CodeInput style={style} language={LanguageTypes.JavaScript} />
}

export const TypeScriptInput: React.StatelessComponent<StyleProps> = ({ style }) => {
  return <CodeInput style={style} language={LanguageTypes.TypeScript} />
}

export const CSSInput: React.StatelessComponent<StyleProps> = ({ style }) => {
  return <CodeInput style={style} language={LanguageTypes.CSS} />
}
