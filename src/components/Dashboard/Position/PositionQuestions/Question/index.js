import React, { useContext } from "react";

import {
  QuestionContainer,
  QuestionCheckBox,
  QuestionText,
  SubQuestionText
} from "./styles";
import { PositionQuestionContext } from "../../PositionContext";
import CheckBoxCheck from "../../../../../assets/checkboxCheck";

export default function Question(props) {
  const positionContext = useContext(PositionQuestionContext);
  const isActive = props.question.isActive
    ? props.question.isActive
    : positionContext.activeQuestions.indexOf(props.question.id) > -1;
  const clickHandler = props.question.toggle
    ? props.question.toggle
    : positionContext.addOrRemoveActiveQuestions;
  return (
    <QuestionContainer>
      <QuestionCheckBox onClick={() => clickHandler(props.question.id)}>
        {isActive ? <CheckBoxCheck /> : null}
      </QuestionCheckBox>
      <div>
        <QuestionText>{props.question.question}</QuestionText>
        {props.question.sub_question && (
          <SubQuestionText>{props.question.sub_question}</SubQuestionText>
        )}
      </div>
    </QuestionContainer>
  );
}
