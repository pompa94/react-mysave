import { useState } from 'react'
import {BiCalendarPlus} from 'react-icons/bi'


// 
function AddWrite({toggleForm}){
    if(!toggleForm){
        return null
    }
    return(
        <>
        <ul>
            <li>
                <label htmlFor='userName'>집사명</label>
                <input 
                id='userName' 
                type='text' />
            </li>
            <li>
                <label htmlFor='petName'>애기명</label>
                <input 
                id='petName' 
                type='text' />
            </li>
            <li>
                <label htmlFor='userDate'>예약일</label>
                <input 
                id='userDate'
                type='date' />
            </li>
            <li>
                <label htmlFor='userTime'>예약시간</label>
                <input 
                id='userTime' 
                type='time'/>
            </li>
            <li>
                <label htmlFor='userDesc'>기타설명</label>
                <input 
                id='userDesc'
                type='textarea' cols='30' rows='10' placeholder='기타설명' />
            </li>
        </ul>

    <p>
       <input type='submit' value='제출'/> 
    </p>
        
        </>
    )
}


function AddAppointment(){

    const [toggleForm,setToggleForm] = useState(false)

    return(
        <div id="appoint">
            <h4 onClick={
                ()=>{setToggleForm(!toggleForm)}
            }>
                <BiCalendarPlus />
                예약 하기
            </h4>

            <AddWrite 
            toggleForm={toggleForm}/>
            
        </div>
    )
}


export default AddAppointment