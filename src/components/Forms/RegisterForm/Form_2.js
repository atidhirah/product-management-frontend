import React, { useState } from "react";
import Input from "../Input";
import { Button } from "../../GlobalElements";
import { BeatLoader } from "react-spinners";
import { SubmitWrapper } from "../LoginForm/LoginFormElements";
import { checkShopName } from "../../../api";
import { SHOP_EXIST } from "../../../constants/Auth";

const Form_2 = ({ setFormNum, formData, handleChange }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCheckShopName = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("CHECK SHOP");
    const { shopName } = formData;
    const { data } = await checkShopName({ shopName });
    if (data.error) {
      setError(data.error);
      setLoading(false);
    } else {
      setError("");
      setFormNum(2);
    }
  };

  return (
    <>
      <Input
        type="text"
        name="shopName"
        label="Shop Name"
        handleChange={handleChange}
        value={formData.shopName}
        error={error === SHOP_EXIST && SHOP_EXIST}
      />
      <Input
        type="text"
        name="currency"
        label="Currency"
        handleChange={handleChange}
        value={formData.currency}
      />
      <Input
        type="text"
        name="money"
        label="Starting Money"
        handleChange={handleChange}
        value={formData.money}
      />
      <SubmitWrapper>
        <Button onClick={() => setFormNum(0)}>Back</Button>
        <Button onClick={(e) => handleCheckShopName(e)}>
          {loading ? <BeatLoader size={6} /> : "Next"}
        </Button>
      </SubmitWrapper>
    </>
  );
};

export default Form_2;
