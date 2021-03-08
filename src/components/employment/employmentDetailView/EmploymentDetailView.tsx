import React, { useState,useEffect } from 'react';
import Header from '../../header/Header';
import axios from 'axios';
import * as S from './style';

const EmploymentDetailView = ({ history }: any) => {
  // const [datas,setDatas] = useState([]);

  // 주소에서 id를 가져온다.
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let id = history.location.pathname;
  //     id = id.replace(/[^0-9]/g,'');
  //     const response = await axios.get('주소/'+id);
  //     setDatas(response.data)
  //   }
  //   fetchData();
  // },[]);

  const datas = {
    entName: "노티플러스",   // 기업명
    entNo: "12345",         // 사업자번호
    deadline: "2020.05.24",  // 채용공고 마감기한
    introduction: "주식회사 노티플러스는 ......",  // 기업 소개
    workContent: "파이썬을 이용한 AI",  // 업무 내용
      // 자격 요건
    qualification: {
      certificate: "SQLD",  // 자격증
      grade: "10% 이내",    // 성적
      speciality: "파이썬, AI"  // 특기 사항
    },
      // 근무 조건 및 복지 (이름이 길어질 것 같아서 근무 조건만 키 이름으로 함)
    workingConditions: {
      salary: 1000000,  // 급여
        period: 3,  // 실습 기간
        meal: {  // 식비
          breakfast: true,
          lunch: true,
          dinner: false,
          includeSalary: false  // 급여 포함
        },
        welfare: { 
          fourMajor: true,  // 4대 보험
          selfDevelop: false,  // 자기 개발비
          labtop: false,  // 노트북
          etc: "생일 휴가"  // 기타 복지
        },
        entInfo: {  // 기업 정보
          numOfWorker: 100,  // 근로자 수
          entPhone: "010-0000-0000",  // 기업 전화번호
          entSales: 1.25,  // 기억 연 매출 (억 단위)
          address: "충청북도 청주시 oo동 oo아파트 oo동 oo호",  // 주소
          establishmentDate: "2020.02.03", // 설립 일자
          startTime: "06:00",  // 근무 시작 시간
          endTime: "20:00"  // 근무 종료 시간
        },
      other: {
        personnel: 5,  // 채용 인원
        recuritPlan: true,  // 실습 후 채용 계획
        reception: "2020.03.03",  // 접수 일자
        file: {
          name: "첨부자료",
          url: "https://djiofajeklfjdkjfaec"
        }
      } 
    }
  }


  return (
    <div>
      <Header />
      <S.Main>
        <S.Name>{datas.entName}</S.Name>
        <S.CompanyNumber>({datas.entNo})</S.CompanyNumber> {/* 회사 일련번호 */}
        <hr style={{width:"100%",height:"0.2rem",border:"2px double #D5D5D5",margin:"30px"}}/>
        <S.DeadLine>{datas.deadline} 까지</S.DeadLine>
        <S.Introduce>
          <S.Text>기업 소개</S.Text>
          <div>
            {datas.introduction}
          </div>
        </S.Introduce>
        <S.Introduce>
          <S.Text>업무 내용</S.Text>
          <div>
            {datas.workContent}
          </div>
        </S.Introduce>
        <S.ComplexBox>
          <S.Text>자격 요건</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>자격증</S.InnerText><S.InnerText>{datas.qualification.certificate}</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>성적</S.InnerText><S.InnerText>{datas.qualification.grade}</S.InnerText>
            </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>특기사항</S.InnerText><S.InnerText>{datas.qualification.speciality}</S.InnerText>
            </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>근무 조건 및 복지</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>급여</S.InnerText><S.InnerText>{datas.workingConditions.salary}원</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 기간</S.InnerText><S.InnerText>{datas.workingConditions.period}개월</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>식비지원</S.InnerText>
            <S.InnerText>
              { datas.workingConditions.meal.breakfast ? "조식제공 " : "" }
              { datas.workingConditions.meal.lunch ? "중식제공 " : "" }
              { datas.workingConditions.meal.dinner ? "석식제공 " : "" }
              { datas.workingConditions.meal.includeSalary ? "급여 포함" : "" }
            </S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>복지</S.InnerText>
            <S.InnerText>
              { datas.workingConditions.welfare.fourMajor ? "4대 보험" : "" }
              { datas.workingConditions.welfare.selfDevelop ? "자기 개발비" : "" }
              { datas.workingConditions.welfare.labtop ? "노트북 지급" : "" }
              { datas.workingConditions.welfare.etc }
            </S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기업 정보</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>근로자 수</S.InnerText>
            <S.InnerText>
            { datas.workingConditions.entInfo.numOfWorker }명
            </S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연락처</S.InnerText><S.InnerText>{ datas.workingConditions.entInfo.entPhone }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>연 매출액</S.InnerText><S.InnerText>{ datas.workingConditions.entInfo.entSales }(억)</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>주소</S.InnerText><S.InnerText>{ datas.workingConditions.entInfo.address }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>설립 일자</S.InnerText><S.InnerText>{ datas.workingConditions.entInfo.establishmentDate }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>근무 일자</S.InnerText><S.InnerText>{ datas.workingConditions.entInfo.startTime } ~ { datas.workingConditions.entInfo.endTime }</S.InnerText>
          </S.BoxInner>
        </S.ComplexBox>
        <S.ComplexBox>
          <S.Text>기타</S.Text>
          <S.BoxInner>
            <S.InnerText fixed>모집 인원</S.InnerText><S.InnerText>{ datas.workingConditions.other.personnel }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>실습 후 채용 계획</S.InnerText><S.InnerText>{ datas.workingConditions.other.recuritPlan ? "있음" : "없음" }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>접수 일자</S.InnerText><S.InnerText>{ datas.workingConditions.other.reception }</S.InnerText>
          </S.BoxInner>
          <S.BoxInner>
            <S.InnerText fixed>첨부 파일</S.InnerText><S.File href={"https://google.com"+datas.workingConditions.other.file.url}>{ datas.workingConditions.other.file.name }</S.File>
          </S.BoxInner>
        </S.ComplexBox>
        <S.MarginDiv />
      </S.Main>
    </div>
  );
};

export default EmploymentDetailView;