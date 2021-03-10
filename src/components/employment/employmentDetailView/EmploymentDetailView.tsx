import React, { useState,useEffect } from 'react';
import Header from '../../header/Header';
import Qualification from './infoBox/Qualification';
import WorkingConditions from './infoBox/WorkingConditions';
import EmploymentInfo from './infoBox/EmploymentInfo';
import Etc from './infoBox/Etc';
import Wait from './Wait';
import axios from 'axios';
import * as S from './style';

const EmploymentDetailView = ({ history }: any) => {
  const [datas, setDatas] = useState<any>({});
  const config = {
    headers : { Authorization : ""}
  };
  useEffect(() => {
    const fetchData = async () => {
      let id = history.location.pathname;
      id = id.replace(/[^0-9]/g,'');
      const response = await axios.get('http://54.180.2.226/recruit/detail/462889c9252890cd883c18c1fb6abb',config);
      setDatas(response.data);
    }
    fetchData();
  },[]);

  return (
    <div>
      <Header />
      {datas.qualification===undefined?
          <Wait />:
      <S.Main>
        <S.Name>{datas.entName}</S.Name>
        <S.CompanyNumber>({datas.entNo})</S.CompanyNumber>
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

          <Qualification 
            certificate={datas.qualification.certificate}
            grade={datas.qualification.grade}
            specialty={datas.qualification.specialty}
          />

          <WorkingConditions 
            salary={datas.workingConditions.salary}
            period={datas.workingConditions.period}
            meal={datas.workingConditions.meal}
            welfare={datas.workingConditions.welfare}
          />

          <EmploymentInfo
          numOfWorker={datas.entInfo.numOfWorker}
          entPhone={datas.entInfo.entPhone}
          entSales={datas.entInfo.entSales}
          address={datas.entInfo.address}
          establishmentDate={datas.entInfo.establishmentDate}
          startTime={datas.entInfo.startTime}
          endTime={datas.entInfo.endTime}
          />

          <Etc
            personnel={datas.other.personnel}
            recruitPlan={datas.other.recruitPlan}
            reception={datas.other.reception}
            file={datas.other.file}
          />
        <S.Back onClick={()=>history.push('/employment')}>뒤로가기</S.Back>
        <S.MarginDiv />
      </S.Main>
      }
    </div>
  );
};

export default EmploymentDetailView;