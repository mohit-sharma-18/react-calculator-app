import { Component } from "react";
class Output extends Component {
  render() {
    let { result, calcBoxTheme } = this.props;
    return (
      <div className={`calcBox ${calcBoxTheme}`}>
        <div className="themeColor">
          <span
            onClick={(e) => this.props.onClick(e.target.getAttribute("value"))}
          >
            {<i className="fas fa-sun" value="Day"></i>}
          </span>
          <span
            onClick={(e) => this.props.onClick(e.target.getAttribute("value"))}
          >
            {<i className="fas fa-moon" value="Night"></i>}
          </span>
        </div>
        <p className="resultFinal">{result}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Output;
