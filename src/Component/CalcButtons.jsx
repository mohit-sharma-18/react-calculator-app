import { Component } from "react";

class KeyPadButoon extends Component {
  render() {
    const { dynamicClass, themeClass, buttonBoxCls } = this.props;
    // const classes = this.props.themeClass;
    return (
      <div className={`buttons ${buttonBoxCls}`}>
        <div>
          <button
            name="C"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            C
          </button>
          <button
            name="CE"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            CE
          </button>
          <button
            name="%"
            className={`${dynamicClass}  ${themeClass}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            %
          </button>
          <button
            name="/"
            className={`${dynamicClass}  ${themeClass}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            /
          </button>
        </div>
        <div>
          <button
            name="1"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            1
          </button>
          <button
            name="2"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            2
          </button>
          <button
            name="3"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            3
          </button>
          <button
            name="+"
            className={`${dynamicClass}  ${themeClass}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            +
          </button>
        </div>
        <div>
          <button
            name="4"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            4
          </button>
          <button
            name="5"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            5
          </button>
          <button
            name="6"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            6
          </button>
          <button
            name="-"
            className={`${dynamicClass}  ${themeClass}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            -
          </button>
        </div>
        <div>
          <button
            name="7"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            7
          </button>
          <button
            name="8"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            8
          </button>
          <button
            name="9"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            9
          </button>
          <button
            name="*"
            className={`${dynamicClass}  ${themeClass}`}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            X
          </button>
        </div>
        <div>
          <button
            name="."
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            .
          </button>
          <button
            name="0"
            className={themeClass}
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            0
          </button>
          <button
            name="="
            className={`${dynamicClass}  ${themeClass}`}
            id="equalBtn"
            onClick={(e) => this.props.onClick(e.target.name)}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default KeyPadButoon;
