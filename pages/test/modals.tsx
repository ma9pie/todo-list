import styled from "@emotion/styled";
import type { ReactElement } from "react";
import React, { useEffect, useState } from "react";

import Button from "@/components/shared/buttons/index";
import TestLayout from "@/layouts/TestLayout";
import modalUtils from "@/utils/modalUtils";

function Components() {
  return (
    <Wrapper>
      <Content>
        <Title>Alert</Title>
        <Button
          onClick={() =>
            modalUtils.openAlert({
              title: "Alert",
              message: `message\n message\n message`,
              confirmBtnText: "yes",
              onAfterOpen: () => {
                console.log("onAfterOpen");
              },
              onAfterClose: () => {
                console.log("onAfterClose");
              },
            })
          }
        >
          Alert
        </Button>
        <Button
          onClick={() =>
            modalUtils.openAlert({
              component: () => <TestComponent></TestComponent>,
            })
          }
        >
          Component Alert
        </Button>
      </Content>

      <Content>
        <Title>Confirm</Title>
        <Button
          onClick={() =>
            modalUtils.openConfirm({
              title: "Confirm",
              message: `message\n message\n message`,
              confirmBtnText: "yes",
              cancleBtnText: "no",
              onAfterOpen: () => {
                console.log("onAfterOpen");
              },
              onAfterClose: () => {
                console.log("onAfterClose");
              },
              onRequestConfirm: () => {
                console.log("onRequestConfirm");
              },
            })
          }
        >
          Confirm
        </Button>
        <Button
          onClick={() =>
            modalUtils.openConfirm({
              component: () => <TestComponent></TestComponent>,
            })
          }
        >
          Component Confirm
        </Button>
      </Content>

      <Content>
        <Title>Toast</Title>
        <Button
          onClick={() => {
            modalUtils.openToastPopup({
              type: "success",
              message: "??????????????? ?????????????????????.",
            });
          }}
        >
          Success Toast
        </Button>
        <Button
          onClick={() => {
            modalUtils.openToastPopup({
              type: "error",
              message: "?????? ????????? ???????????? ????????????.",
            });
          }}
        >
          Error Toast
        </Button>
        <Button
          onClick={() => {
            modalUtils.openToastPopup({
              type: "warn",
              message: "????????? ??? ??????????????????.",
            });
          }}
        >
          Warn Toast
        </Button>
        <Button
          onClick={() => {
            modalUtils.openToastPopup({
              message: `?????? ???????????? ????????? ????????? ?????????.\n ??????????????? ??????????????????.`,
            });
          }}
        >
          Message 2 lines Toast
        </Button>
      </Content>

      <Content>
        <Title>Bottom Sheet</Title>
        <Button
          onClick={() => {
            modalUtils.openBottomSheet({ title: "Setting" });
          }}
        >
          BottomSheet
        </Button>
        <Button
          onClick={() => {
            modalUtils.openBottomSheet({
              component: () => {
                return <TestComponent></TestComponent>;
              },
            });
          }}
        >
          Component BottomSheet
        </Button>
        <Button
          onClick={() => {
            modalUtils.openBottomSheet({ height: "50%" });
          }}
        >
          BottomSheet 50%
        </Button>
        <Button
          onClick={() => {
            modalUtils.openBottomSheet({ height: "100%" });
          }}
        >
          BottomSheet 100%
        </Button>
      </Content>
    </Wrapper>
  );
}

export default Components;

Components.getLayout = function getLayout(page: ReactElement) {
  return <TestLayout>{page}</TestLayout>;
};

const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;
const Title = styled.p`
  font: var(--bold18);
`;

const TestComponent = () => {
  const TextBox = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    padding: 16px;
    background-color: var(--box);
    & * {
      background-color: inherit;
    }
  `;
  const Text = styled.p`
    font: var(--medium14);
  `;

  return (
    <TextBox>
      <Text>?????? 1</Text>
      <Text>?????? 2</Text>
      <Text>?????? 3</Text>
      <Text>?????? 4</Text>
    </TextBox>
  );
};
