import React from 'react';
import Header from '../../header/Header';
import * as S from './style';

const EmploymentDetailView = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.Name>ㅇㅇ회사</S.Name>
        <S.CompanyNumber>(회사일련번호)</S.CompanyNumber> {/* 회사 일련번호 */}
        <hr style={{width:"100%",height:"0.2rem",border:"2px double #D5D5D5",margin:"30px"}}/>
        <S.DeadLine>2021.05.28 까지</S.DeadLine>
        <S.Introduce>
          <S.Text>기업 소개</S.Text>
          <div>
            기업에 대한 소개가 들어갑니다.
          </div>
        </S.Introduce>
        <S.Introduce>
          <S.Text>업무 내용</S.Text>
          <div>
            회사에서 하는 업무를 작성합니다.
          </div>
        </S.Introduce>
        <S.ComplexBox>
          <S.Text>자격 요건</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>자격증</S.InnerText><S.InnerText>SQLD</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>성적</S.InnerText><S.InnerText>상위 20%</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>특기사항</S.InnerText><S.InnerText>파이썬, AI</S.InnerText>
            </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>근무 조건 및 복지</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>급여</S.InnerText><S.InnerText>~~원</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 기간</S.InnerText><S.InnerText>O개월</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>식비지원</S.InnerText><S.InnerText>조식 제공, 중식 제공</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>복지</S.InnerText><S.InnerText>4대 보험</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기업 정보</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>근로자 수</S.InnerText><S.InnerText>52명</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연락처</S.InnerText><S.InnerText>010 - 0000 - 0000</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연 매출액</S.InnerText><S.InnerText>~~원</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>주소</S.InnerText><S.InnerText>어디어디~</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>설립 일자</S.InnerText><S.InnerText>2015.05.25</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>근무 일자</S.InnerText><S.InnerText>10 : 00 시 ~ 7 : 00 시</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기타</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>모집 인원</S.InnerText><S.InnerText>정보보안과 1명</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 후 채용 계획</S.InnerText><S.InnerText>평가 후 일부 채용</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>접수 일자</S.InnerText><S.InnerText>2020.03.03</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>첨부 파일</S.InnerText><S.InnerText>파일</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.MarginDiv />
      </S.Main>
    </div>
  );
};

export default EmploymentDetailView;