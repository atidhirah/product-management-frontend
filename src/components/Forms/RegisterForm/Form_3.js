import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../Input";
import { Button } from "../../GlobalElements";
import { BeatLoader } from "react-spinners";
import { SubmitWrapper } from "../LoginForm/LoginFormElements";
import { PASSWORD_NOT_MATCH } from "../../../constants/Auth";
import { register } from "../../../actions/auth";

const Form_3 = ({ setFormNum, formData, handleChange }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      setError(PASSWORD_NOT_MATCH);
      setLoading(false);
    } else {
      console.log("SUBMIT");
      setError("");
      dispatch(register(formData, history));
    }
  };

  return (
    <>
      <Input
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        disabled
      />
      <Input
        type="password"
        name="password"
        label="Password"
        handleChange={handleChange}
        value={formData.password}
      />
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        handleChange={handleChange}
        value={formData.confirmPassword}
        error={error === PASSWORD_NOT_MATCH && PASSWORD_NOT_MATCH}
      />
      <SubmitWrapper>
        <Button onClick={() => setFormNum(1)}>Back</Button>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          {loading ? <BeatLoader size={6} /> : "Submit"}
        </Button>
      </SubmitWrapper>
    </>
  );
};

export default Form_3;
