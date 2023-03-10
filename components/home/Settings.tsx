import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

import TermsAndConditions from "@/components/home/TermsAndConditions";
import Theme from "@/components/shared/Theme";
import ForwardSvg from "@/images/arrow_forward_ios.svg";
import CloudDownloadSvg from "@/images/cloud_download.svg";
import CodeSvg from "@/images/code.svg";
import PaintSvg from "@/images/color_lens.svg";
import GithubSvg from "@/images/github.svg";
import EmailSvg from "@/images/mail_outline.svg";
import SubjectSvg from "@/images/subject.svg";
import modalUtils from "@/utils/modalUtils";
import themeUtils from "@/utils/themeUtils";

const Settings = () => {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    if (localStorage.getItem("theme") === "Light") {
      themeUtils.setLight(setTheme);
    } else {
      themeUtils.setDark(setTheme);
    }
  }, []);

  // 테마 변경
  const toggleTheme = () => {
    if (theme === "Dark") {
      themeUtils.setLight(setTheme);
    } else {
      themeUtils.setDark(setTheme);
    }
    modalUtils.close("settings");
  };

  // 백업 및 가져오기
  const backupAndRestore = () => {
    modalUtils.openAlert({
      message: "구글 계정 연동 개발 예정",
    });
  };

  // 문의하기
  const inquiry = () => {
    window.open(
      "https://docs.google.com/forms/d/1eE3KBOtAmtNh5cLHlGyrZC7q5I_rvG0TxwaJ16UiuvI",
      "_blank"
    );
  };

  // 이용약관
  const termsAndCondition = () => {
    modalUtils.openBottomSheet({
      title: "이용약관",
      component: TermsAndConditions,
    });
  };

  // 깃허브
  const github = () => {
    window.open("https://github.com/ma9pie/todo-list", "_blank");
  };

  return (
    <Wrapper>
      <Container>
        <Subtitle>Task</Subtitle>
        <ListContainer>
          <List onClick={toggleTheme}>
            <Content>
              <PaintSvg></PaintSvg>
              <ListTitle>Theme</ListTitle>
            </Content>
            <Theme theme={theme}></Theme>
          </List>
          <List onClick={backupAndRestore}>
            <Content>
              <CloudDownloadSvg></CloudDownloadSvg>
              <ListTitle>Backup / Restore</ListTitle>
            </Content>
            <ForwardSvg></ForwardSvg>
          </List>
        </ListContainer>
      </Container>

      <Container>
        <Subtitle>About service</Subtitle>
        <ListContainer>
          <List onClick={inquiry}>
            <Content>
              <EmailSvg></EmailSvg>
              <ListTitle>Inquiry</ListTitle>
            </Content>
            <ForwardSvg></ForwardSvg>
          </List>
          <List onClick={termsAndCondition}>
            <Content>
              <SubjectSvg></SubjectSvg>
              <ListTitle>Terms & Condition</ListTitle>
            </Content>
            <ForwardSvg></ForwardSvg>
          </List>
          <List onClick={github}>
            <Content>
              <GithubSvg></GithubSvg>
              <ListTitle>Github</ListTitle>
            </Content>
            <ForwardSvg></ForwardSvg>
          </List>
        </ListContainer>
      </Container>

      <Container>
        <Subtitle>Test</Subtitle>
        <ListContainer>
          <List
            onClick={() => {
              window.location.href = "/test";
            }}
          >
            <Content>
              <CodeSvg></CodeSvg>
              <ListTitle>Test</ListTitle>
            </Content>
            <ForwardSvg></ForwardSvg>
          </List>
        </ListContainer>
      </Container>
    </Wrapper>
  );
};

export default Settings;

const Wrapper = styled.div`
  display: grid;
  gap: 24px;
  padding-bottom: 40px;
`;
const Container = styled.div``;
const Subtitle = styled.p`
  font: var(--medium12);
  color: var(--sub);
  margin-bottom: 8px;
`;
const ListContainer = styled.div`
  display: grid;
  gap: 4px;
`;
const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 0px 16px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
  background-color: var(--box);
  & * {
    background-color: inherit;
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const ListTitle = styled.p`
  font: var(--normal12);
`;
