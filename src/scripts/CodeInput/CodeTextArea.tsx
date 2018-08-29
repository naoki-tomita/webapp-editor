import * as React from "react";
import styled from "styled-components";

interface Props {
  style?: React.CSSProperties;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const CodeHighlightStyleTextArea = styled.textarea`
  margin: 0;
  padding: 0;
  color: transparent;
  background-color: transparent;
  caret-color: #f8f8f2;
  font-size: 12px;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  resize: none;
  border: 0;
`;

export class CodeTextArea extends React.Component<Props> {
  render() {
    return (
      <CodeHighlightStyleTextArea {...this.props} />
    );
  }
}
