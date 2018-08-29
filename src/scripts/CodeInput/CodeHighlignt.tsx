import * as React from "react";
import { highlight, languages } from "prismjs";
import styled from "styled-components";

export enum LanguageTypes {
  Markup = "markup",
  JavaScript = "javascript",
  TypeScript = "typescript",
  CSS = "css",
}

interface Props {
  language: LanguageTypes;
  text: string;
  style?: React.CSSProperties;
}

const PrismPre = styled.pre`
  margin: 0;
  padding: 0;
  user-select: none;
  background-color: #272822;
  color: #f8f8f2;
  font-size: 12px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
`;

export class CodeHighlight extends React.Component<Props> {
  render() {
    const { style, language } = this.props;
    return (
      <div style={{ ...style, userSelect: "none" }} className={`language-${language}`}>
        <PrismPre
          style={style}
          innerRef={el => el && (el.innerHTML = this.renderHighlightedHtml())}
        />
      </div>
    );
  }

  renderHighlightedHtml = () => {
    const { language, text } = this.props;
    return highlight(text, languages[language]);
  }
}
