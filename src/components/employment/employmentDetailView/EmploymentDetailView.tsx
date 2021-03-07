import React, { useState,useEffect } from 'react';
import Header from '../../header/Header';
import axios from 'axios';
import * as S from './style';

const EmploymentDetailView = ({ entName, entNo, deadline, introduction, workContent, qualification, workingConditions }: any) => {
  const [id, setId] = useState(0);
  const [datas,setDatas] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('주소/${id}');
      setDatas(response.data)
    }
    fetchData();
  },[]);

  return (
    <div>
      <Header />
      <S.Main>
        <S.Name>{entName}</S.Name>
        <S.CompanyNumber>({entNo})</S.CompanyNumber> {/* 회사 일련번호 */}
        <hr style={{width:"100%",height:"0.2rem",border:"2px double #D5D5D5",margin:"30px"}}/>
        <S.DeadLine>{deadline} 까지</S.DeadLine>
        <S.Introduce>
          <S.Text>기업 소개</S.Text>
          <div>
            {introduction}
          </div>
        </S.Introduce>
        <S.Introduce>
          <S.Text>업무 내용</S.Text>
          <div>
            {workContent}
          </div>
        </S.Introduce>
        <S.ComplexBox>
          <S.Text>자격 요건</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>자격증</S.InnerText><S.InnerText>{qualification.certificate}</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>성적</S.InnerText><S.InnerText>{qualification.grade}</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>특기사항</S.InnerText><S.InnerText>{qualification.speciality}</S.InnerText>
            </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>근무 조건 및 복지</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>급여</S.InnerText><S.InnerText>{workingConditions.salary}원</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 기간</S.InnerText><S.InnerText>{workingConditions.period}개월</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>식비지원</S.InnerText>
            <S.InnerText>
              { workingConditions.meal.breakfast ? "조식제공" : "" }
              { workingConditions.meal.lunch ? "중식제공" : "" }
              { workingConditions.meal.dinner ? "석식제공" : "" }
              { workingConditions.meal.includeSalary ? "급여 포함" : "" }
            </S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>복지</S.InnerText>
            <S.InnerText>
              { workingConditions.welfare.fourMajor ? "4대 보험" : "" }
              { workingConditions.welfare.selfDevelop ? "자기 개발비" : "" }
              { workingConditions.welfare.labtop ? "노트북 지급" : "" }
              { workingConditions.welfare.etc }
            </S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기업 정보</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>근로자 수</S.InnerText>
            <S.InnerText>
            { workingConditions.entInfo.numOfWorker }명
            </S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연락처</S.InnerText><S.InnerText>{ workingConditions.entInfo.entPhone }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연 매출액</S.InnerText><S.InnerText>{ workingConditions.entInfo.entSales }(억)</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>주소</S.InnerText><S.InnerText>{ workingConditions.entInfo.address }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>설립 일자</S.InnerText><S.InnerText>{ workingConditions.entInfo.establishmentDate }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>근무 일자</S.InnerText><S.InnerText>{ workingConditions.entInfo.startTime } ~ { workingConditions.entInfo.endTime }</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기타</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>모집 인원</S.InnerText><S.InnerText>{ workingConditions.other.personnel }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 후 채용 계획</S.InnerText><S.InnerText>{ workingConditions.other.recuritPlan ? "있음" : "없음" }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>접수 일자</S.InnerText><S.InnerText>{ workingConditions.other.reception }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>첨부 파일</S.InnerText><S.File href={"https://google.com"+workingConditions.other.file.url}>{ workingConditions.other.file.name }</S.File>
          </S.BoxInner>
        </S.ComplexBox>
        <S.MarginDiv />
      </S.Main>
    </div>
  );
};

export default EmploymentDetailView;