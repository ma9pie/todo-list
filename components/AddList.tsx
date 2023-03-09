import styled from "@emotion/styled";
import React, { useState } from "react";

import ColorSet from "@/components/ColorSet";
import Done from "@/components/shared/buttons/Done";
import localUtils from "@/utils/localUtils";
import modalUtils from "@/utils/modalUtils";

const colorList = [
  "#64a8ff",
  "#fb8890",
  "#ffbd51",
  "#ffdd78",
  "#c770e4",
  "#58c7c7",
  "#3fd599",
  "#d1d6db",
  "#4d4d59",
];

const AddList = () => {
  const [title, setTitle] = useState("");
  const [colorNum, setColorNum] = useState(0);
  const [color, setColor] = useState(colorList[0]);

  const onChange = (e: any) => {
    setTitle(e.target.value);
  };

  const addList = () => {
    if (title === "") {
      modalUtils.openToastPopup({
        type: "warn",
        message: "Please input list name",
      });
    } else {
      localUtils.addCluster(title, color);
      modalUtils.openToastPopup({
        type: "success",
        message: "List added",
      });
      modalUtils.close("addList");
    }
  };

  return (
    <Wrapper>
      <Content>
        <Input
          type="text"
          value={title}
          placeholder="List name"
          onChange={onChange}
        ></Input>
      </Content>

      <Content>
        <ColorSet
          color={color}
          colorList={colorList}
          setColor={setColor}
        ></ColorSet>
      </Content>

      <DoneWrapper>
        <Done onClick={addList}></Done>
      </DoneWrapper>
    </Wrapper>
  );
};

export default AddList;

const Wrapper = styled.div`
  position: relative;
  height: 300px;
`;
const Content = styled.div`
  padding: 8px 0px;
  border-bottom: 1px solid var(--sectionLine);
`;
const Input = styled.input`
  font: var(--normal16);
  width: 100%;
  border: 0px;
`;
const DoneWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
`;
