import React, { useState,useCallback,useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// 아이콘 연결
import {BiArchive} from 'react-icons/bi'


// component 연결
import AddAppointment from './component/AddAppointment';
import AddInfo from './component/AddInfo';
import Search from './component/Search';

// 소스
// import AppointData from './data.json'


function App(){
  // state
  // 리스트 삭제후 다시 배열하기위한 스테이트
  const [appointList,setAppointList] = useState([])




  // useCallback
  // 데이터 통신으로 가져오기
  const fetchData = useCallback(
    ()=>{
      /* fetch 안에 결로 입력 index.html의 위치에서 찾아가야됨 */
      fetch('./data.json')
      .then(response => response.json())
      .then(data => setAppointList(data))
    },[]
  )

  // useEffect
  useEffect(()=>{fetchData()},[fetchData])

  return(
    <article>
      <h3>
        <BiArchive />
        예약시스템
        </h3>

      <AddAppointment />


      <Search />

      <div id='list'>
        <ul>
          {
            /* 반복문 */
            // AppointData.map(
              appointList.map(
              (appointment)=>
              (<AddInfo
              key={appointment.id} 
              appointment={appointment}
              /* 삭제하기 */
              onDeleteAppoin={
                (appointmentId)=>
                  setAppointList(
                    appointList.filter(
                      appointment => appointment.id !== appointmentId
                    )
                  )
                
              }
              
              />)
            
            )
          }
        </ul>
      </div>
      
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
