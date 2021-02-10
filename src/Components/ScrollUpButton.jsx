import ScrollToTop from "react-scroll-up";
import { Icon } from "react-materialize";
import "materialize-css/dist/css/materialize.min.css";

function ScrollUpButton() {
  return (
    <ScrollToTop
      showUnder={960}
      style={{ right: "20%" }}
      className="scrollUpButtonContainer"
      easing={'easeInOutQuint'}
      duration={800}
      
    >
      <span className="scrollUpButton">
        <Icon>arrow_circle_up</Icon>
      </span>
    </ScrollToTop>
  );
}

export default ScrollUpButton;
