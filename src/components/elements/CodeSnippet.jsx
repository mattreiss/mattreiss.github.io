import React from 'react';
import Prism from 'prismjs';

class CodeSnippet extends React.Component {
  state = {
  }

  componentDidMount() {
    this._mounted = true;
    let { url } = this.props;
    fetch(url).then(res => res.text()).then(code => {
      if (!this._mounted) return;
      this.setState({code}, () => Prism.highlightElement(this.code));
    }).catch(e => {
      console.log("fetch error", e);
    })
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    let { start, end, showLines } = this.props;
    let { code } = this.state;
    let codeLines = code ? code.split('\n') : [];
    let codeString = '';
    for (let i = start; i < codeLines.length && i < end; i++) {
      if (showLines) codeString += `${i} `;
      codeString += `${codeLines[i]}\n`
    }
    return (
      <pre>
        <code className="language-javascript" ref={ref => this.code = ref} >
          {codeString}
        </code>
      </pre>
    )
  }
}

export default CodeSnippet;
