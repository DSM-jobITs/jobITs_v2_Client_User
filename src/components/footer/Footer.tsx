import React from 'react';
import * as S from './style';

const Footer = () => {
  return (
    <S.Main>
      <S.Inner>
        <S.DevelopWrap>
          <S.PartInner>
            <S.Text part>Frontend</S.Text>
            <S.Text>배길준</S.Text>
            <S.Text>신서림</S.Text>
          </S.PartInner>
          <S.PartInner>
            <S.Text part>Server</S.Text>
            <S.Text>서민준</S.Text>
            <S.Text>신두평</S.Text>
            <S.Text>양승빈</S.Text>
          </S.PartInner>
          <S.PartInner>
            <S.Text part>Design</S.Text>
            <S.Text>김도희</S.Text>
          </S.PartInner>
          <S.PartInner>
            <S.Text part>PM</S.Text>
            <S.Text>김세준</S.Text>
          </S.PartInner>
        </S.DevelopWrap>
        <hr style={{width:"100%",border:"solid 1px #707070"}}/>
        <S.Information>
          <S.Logo src="/src/assets/images/Logo_Footer.png" />
          <a href="https://github.com/DSM-jobITs" target="_blank"><S.Icon src='src/assets/images/iconGithub.png'/></a>
        </S.Information>
      </S.Inner>
    </S.Main>
  );
};

export default Footer;