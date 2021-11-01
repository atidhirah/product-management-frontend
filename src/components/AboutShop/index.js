import React from "react";
import { useSelector } from "react-redux";
import TextBox1 from "./TextBox_1";

const AboutShop = () => {
  const { authData } = useSelector((state) => state.auth);
  const data = authData.result;

  return (
    <div className="about-shop">
      <TextBox1 label="Owner Name" value={data.fullname} />
      <TextBox1 label="Shop Name" value={data.shop.shopName} />
      <TextBox1 label="Shop Name" value={data.shop.shopName} />
    </div>
  );
};

export default AboutShop;
