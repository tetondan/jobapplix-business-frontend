import React, { useState } from "react";
import { Elements } from "react-stripe-elements";

import PaymentOptions from "./PaymentOptions";
import PaymentForm from "./PaymentForm";
import PaymentModal from "./PaymentModal";
import Progress from "../ProgressBar";

import { Headline, SubHeadline, Instructions } from "../SignUpContainer/styles";

export default function PaymentContainer(props) {
  const [subType, setSubType] = useState("yearly");
  const [screen, setScreen] = useState("options");
  const [modal, setModal] = useState(false);

  return (
    <>
      <Headline>CREATE BUSINESS</Headline>
      <Progress progress={"50%"} />
      <SubHeadline>Select Subscription Plan</SubHeadline>
      <Instructions>
        Reminder: Every subscription comes with a 30 day free trial. Your card
        will only be charged after this trial. Cancel anytime during the trial
        free of charge.
      </Instructions>
      {screen === "options" ? (
        <PaymentOptions
          selectPayment={() => setScreen("form")}
          openModal={() => setModal(true)}
          selectSub={type => setSubType(type)}
          subType={subType}
          nextButtonText={"SET PAYMENT METHOD"}
        />
      ) : null}
      {screen === "form" ? (
        <Elements>
          <PaymentForm
            subType={subType}
            nextScreen={props.next}
            setScreen={setScreen}
          />
        </Elements>
      ) : null}
      {modal ? <PaymentModal closeModal={() => setModal(false)} /> : null}
    </>
  );
}
