import { Component } from "react";
import "./App.css";
import KeyPadButoon from "./Component/CalcButtons";
import Output from "./Component/Output";
import Container from "./Component/Container";
class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
      dynamicClass: "enabledBtn",
      operatorSign: "",
      themeClass: "",
      buttonBoxCls: "buttonBoxNight",
      calcBoxTheme: "",
    };
  }

  onClick = (clickedVal) => {
    if (clickedVal === "=") {
      this.calc();
    } else if (clickedVal === "CE") {
      this.backSpace();
    } else if (clickedVal === "C") {
      this.reset();
    } else if (clickedVal === "Day" || clickedVal === "Night") {
      this.themeHandler(clickedVal);
    } else {
      this.setState({
        result: this.state.result + clickedVal,
      });
    }

    let x = this.state.result + clickedVal;
    ["+", "-", "*", "/", "%"].indexOf(x.at(-1)) !== -1
      ? this.setState({
          dynamicClass: "disabled",
        })
      : this.setState({
          dynamicClass: "enabledBtn",
        });

    // console.log(clickedVal);
  };

  calc = () => {
    let totalResult = this.state.result;
    this.setState({
      result: eval(totalResult).toString(),
    });
  };

  backSpace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  themeHandler = (clickedVal) => {
    if (clickedVal == "Day") {
      this.setState({
        themeClass: "buttonDay",
        buttonBoxCls: "buttonBoxDay",
        calcBoxTheme: "calcBoxDay",
      });
      document.getElementsByClassName("resultFinal ")[0].style.color = "#000";
      document.getElementsByClassName("fa-sun")[0].classList.add('iconDay')
    } else {
      this.setState({
        themeClass: "buttonNight",
        buttonBoxCls: "buttonBoxNight",
        calcBoxTheme: "calcBoxNight",
      });
      document.getElementsByClassName("resultFinal ")[0].style.color = "#fff";
      document.getElementsByClassName("fa-sun")[0].classList.remove('iconDay')
    }
  };

  // componentDidUpdate(prevProp, prevState) {
  //   if (prevState.operatorSign !== this.state.operatorSign) {
  //     console.log('cycle run')
  //     this.setState({
  //       operatorSign: this.state.clickedVal,
  //     });
  //   }
  // }

  render() {
    return (
      <Container>
        <Output
          result={this.state.result}
          onClick={this.onClick}
          calcBoxTheme={this.state.calcBoxTheme}
        >
          <KeyPadButoon
            onClick={this.onClick}
            dynamicClass={this.state.dynamicClass}
            buttonBoxCls={this.state.buttonBoxCls}
            themeClass={this.state.themeClass}
          />
        </Output>
      </Container>
    );
  }
}

export default App;
