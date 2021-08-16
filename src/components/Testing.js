import { useEffect, useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 50px;
  margin-top: 150px;
`;

export const Testing = () => {
  const text = () => console.log("텍스트!!");
  const [btn, setBtn] = useState("버튼!");

  const onClick = () => {
    console.log("click");
    setBtn("바뀜!");
  };

  useEffect(() => {
    text();
  }, [btn]);

  return <Button onClick={onClick}>{btn}</Button>;
};
