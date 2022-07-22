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
  // search 
  // search에 값을 입력시 아이템 정렬을 바꿔주는 스테이트
  const [query,setQuery] = useState('')
  // search의 정리, 차순
  const [sortBy,setSortBy] = useState('petName')
  const [orderBy,setOrderBy] = useState('asc')



  // 함수
  // search 필터
  // search의 input에 값이 들어가면 리스트 필터를 변경하여
  // 새롭게 배열시켜주는 필터
  // .sort()안에 orderBy,sortBy값으로 논리를 만들어준다
  // .sort()가 끝나면 예약하기에 정보입력시 추가단계로 이동
  const filterAppointments = appointList.filter(
    (item)=>{return(
      item.petName.toLowerCase().includes(query.toLowerCase()) ||
      item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
      item.aptNotes.toLowerCase().includes(query.toLowerCase())
    )}
  ).sort(
    (a,b)=>{
      let order = (orderBy === 'asc' ? 1 : -1)
      return(
        a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order : 1 * order
      )
    }
  )


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
      
      <AddAppointment 
      // onSendAppointment를 받아와서 받아온값이름myAppointment를
      // setAppointList중에 넣어준다
      // 받아온 값은 리스트에 추가하는거임
      onSendAppointment={
        myAppointment => setAppointList(
          [...appointList,myAppointment]
        )
      }
      // lastId값을 만들고 reduce()해준다
      // 이 값을 AddAppointment에 보내면 끝이다
      // 끝.
      lastId={
        appointList.reduce((max,item)=>Number(item.id) > max ? Number(item.id) : max , 0)
      }
      />


      <Search 
      query={query}
      onQueryChange={myQuery=>setQuery(myQuery)}
      /* 스테이트 만든거 search로 보내고 드랍다운으로 다시보냄*/
      orderBy={orderBy}
      sortBy={sortBy}
      /* onSortByChange onOrderByChange를 받아준다 */
      /* 받아온 값을 함수로 set값에 넣어준다 */
      /* 그리고 필터에 sort()안에 정리,차순의 논리를 만들어준다 */
      onOrderByChange={myOrder=>setOrderBy(myOrder)}
      onSortByChange={mySort=>setSortBy(mySort)}
      />

      <div id='list'>
        <ul>
          {
            /* 반복문 */
            // AppointData.map(
              // appointList.map(
                filterAppointments.map(
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
