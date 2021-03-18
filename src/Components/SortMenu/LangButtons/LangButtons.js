import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { createLang } from "../../../Action/actions";
import CONSTANTS from "../../../lib/constans";
import "./LangButtons.css";
import Button from "../../Button/Button";

function LangButtons({ createLang, language }) {
  let eng = true;
  let rus = false;

  if (language !== CONSTANTS.ENG) {
    rus = true;
    eng = false;
  }
  return (
    <div className="lang_buttons">
      <Button
        onClick={() => {
          createLang(CONSTANTS.RUS);
        }}
        className={classnames("button-rus_lang", { isActive: rus })}
      >
        Russian
      </Button>
      <Button
        onClick={() => {
          createLang(CONSTANTS.ENG);
        }}
        className={classnames("button-eng_lang", { isActive: eng })}
      >
        Английский
      </Button>
    </div>
  );
}
const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = {
  createLang,
};

export default connect(mapStateToProps, mapDispatchToProps)(LangButtons);
