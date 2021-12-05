import React, { useState } from "react";
import { checkEmail } from "../../../api";
import Input from "../Input";
import { Button } from "../../GlobalElements";
import { BeatLoader } from "react-spinners";
import { SubmitWrapper } from "../LoginForm/LoginFormElements";
import { EMAIL_EXIST } from "../../../constants/Auth";

const Form_1 = ({ setFormNum, formData, handleChange }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckEmail = async () => {
    setLoading(true);
    const email = formData.email;
    console.log(email);
    const { data } = await checkEmail({ email: email });
    console.log(data);
    if (data.error) {
      setError(data.error);
    } else {
      setError("");
      setFormNum(1);
    }
    setLoading(false);
  };

  return (
    <>
      <Input
        type="text"
        name="firstName"
        label="First Name"
        handleChange={handleChange}
        value={formData.firstName}
      />
      <Input
        type="text"
        name="lastName"
        label="Last Name"
        handleChange={handleChange}
        value={formData.lastName}
      />
      <Input
        type="email"
        name="email"
        label="Email"
        handleChange={handleChange}
        value={formData.email}
        error={error === EMAIL_EXIST && EMAIL_EXIST}
      />
      <SubmitWrapper>
        <p></p>
        <Button onClick={() => handleCheckEmail()}>
          {loading ? <BeatLoader size={6} /> : "Next"}
        </Button>
      </SubmitWrapper>
    </>
  );
};

export default Form_1;
