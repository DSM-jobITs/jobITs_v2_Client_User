import React from 'react';
import Header from '../../header/Header';
import * as S from './style';

const EmploymentDetailView = () => {
  return (
    <div>
      <Header />
      <S.Main>
        <S.Name>노티플러스</S.Name>
        <S.CompanyNumber>(12345)</S.CompanyNumber> {/* 회사 일련번호 */}
        <hr style={{width:"100%",height:"0.2rem",border:"2px double #D5D5D5",margin:"30px"}}/>
        <S.DeadLine>2021.05.28 까지</S.DeadLine>
        <S.Introduce>
          <S.Text>기업 소개</S.Text>
          <div>
            이 부분은 길어지면 길어질수록 height가 그에 맞춰서 늘어납니다 참고하세요
          </div>
        </S.Introduce>
        <S.Introduce>
          <S.Text>업무 내용</S.Text>
          <div>
            이 부분은 길어지면 길어질수록 height가 그에 맞춰서 늘어납니다 참고하세요
          </div>
        </S.Introduce>
        <S.ComplexBox>
          <S.Text>자격 요건</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>자격증</S.InnerText><S.InnerText>SQLD</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>성적</S.InnerText><S.InnerText>10% 이내</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>특기사항</S.InnerText><S.InnerText>파이썬, AI</S.InnerText>
            </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>근무 조건 및 복지</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>급여</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 기간</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>식비지원</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>복지</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기업 정보</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>근로자 수</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연락처</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연 매출액</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>주소</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>설립 일자</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>근무 일자</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기타</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>모집 인원</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 후 채용 계획</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>접수 일자</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>첨부 파일</S.InnerText><S.InnerText>SQLD</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.MarginDiv />
      </S.Main>
    </div>
  );
};

export default EmploymentDetailView;