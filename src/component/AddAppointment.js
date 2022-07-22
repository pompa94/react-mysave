import { useState } from 'react'
import {BiCalendarPlus} from 'react-icons/bi'


// 
function AddWrite({toggleForm,formData,setFormData,formDataPublish}){
    if(!toggleForm){
        return null
    }
    // formData값 (clearData)값을 가져오고
    // input에 onChange를 만들어 그 안에 setformData를
    // onChange이벤트를받으면 target.value값을 넣어준다
    // 그다음 제출 button을 누르면 AddInfo에 추가되는 함수를 넣음
    // onClick사용 함수 이름은 formDataPublis고 이걸 
    // AddAppointment로 보냄
    return(
        <>
        <ul>
            <li>
                <label htmlFor='userName'>집사명</label>
                <input 
                id='userName' 
                type='text'
                onChange={
                    (event)=>{setFormData(
                        {...formData,ownerName:event.target.value}
                    )}
                }
                />
            </li>
            <li>
                <label htmlFor='petName'>애기명</label>
                <input 
                id='petName' 
                type='text' 
                onChange={
                    (event)=>{setFormData(
                        {...formData,petName:event.target.value}
                    )}
                }
                />
            </li>
            <li>
                <label htmlFor='userDate'>예약일</label>
                <input 
                id='userDate'
                type='date' 
                onChange={
                    (event)=>{setFormData(
                        {...formData,userDate:event.target.value}
                    )}
                }
                />
            </li>
            <li>
                <label htmlFor='userTime'>예약시간</label>
                <input 
                id='userTime' 
                type='time'
                onChange={
                    (event)=>{setFormData(
                        {...formData,userTime:event.target.value}
                    )}
                }
                />
            </li>
            <li>
                <label htmlFor='userDesc'>기타설명</label>
                <input 
                id='userDesc'
                type='textarea' cols='30' rows='10' placeholder='기타설명' 
                onChange={
                    (event)=>{setFormData(
                        {...formData,userDesc:event.target.value}
                    )}
                }
                />
            </li>
        </ul>

    <p>
       <input type='submit' value='제출'
       onClick={formDataPublish}
       /> 
    </p>
        
        </>
    )
}

// sort()작업이 끝나면 마지막 단계로 
// 예약하기 창에 사용자가 데이터를 입력하면 입력 받은값을
// Addinfo에 추가해주는 작업을 시작한다
function AddAppointment({onSendAppointment,lastId}){
    // clearData 변수를 만들에 스테이트에 기본 값으로 넣음
    // 모든 정로를 비어있게 만들어준다
    // json데이터를 스크립트에 작성하는것 유의한다
    // 스테이트보다 위에 만들어 준다
    const clearData = {
        petName : '',
        ownerName : '',
        aptNotes : '',
        aptDate : ''
    }

    const [toggleForm,setToggleForm] = useState(false)
    // clearData변수가 들어갈 스테이트를 만들고 넣어준다
    // 다음 formData를 AddWrite에 보내준다
    const [formData,setFormData] = useState(clearData)


    // formDataPublis 함수만들기
    function formDataPublish(){
        // 변수를 만든다 변수이름 appointMentInfo
        // 그값은 사용자에게 입력받은 값이 formData에 있다
        const appointMentInfo = {
            id : lastId + 1,
            petName : formData.petName,
            ownerName : formData.ownerName,
            aptNotes : formData.aptNotes,
            aptDate : formData.aptDate +''+ formData.aptTime
        }

        // 제출버튼을 누르면 토글은 사라진다
        setToggleForm(!toggleForm)
        // 제출버튼을 누르면 입력창이 초기화된다
        setFormData(clearData)
        // appointMentInfo를 onSendAppointment란 이름에 넣어준다
        onSendAppointment(appointMentInfo)

        // 제출버튼을 누르면 토글이 사라지고 입력창이 비워지고
        // 입력 받은 데이터는 onSendAppointment란 이름으로
        // index.js에 보내주고 lastId값을 받아온다
    }

    return(
        <div id="appoint">
            <h4 onClick={
                ()=>{setToggleForm(!toggleForm)}
            }>
                <BiCalendarPlus />
                예약 하기
            </h4>

            <AddWrite 
            toggleForm={toggleForm}
            /* formData과 setFormData과를 보내준다 */
            formData={formData}
            setFormData={setFormData}
            /* formDataPublis를 받아와서 formDataPublis함수를 만듬 */
            formDataPublish={formDataPublish}
            />
            
        </div>
    )
}


export default AddAppointment