import { useState } from 'react'
import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'


function DropDown({toggleSort,orderBy,sortBy,onOrderByChange,onSortByChange}){
    // toggleSort 스테이트 기본값(false)을 받아서
    // if문을 사용하여 리턴 출력을 해준다
    if(toggleSort){
        return null
    } 
    // 리턴안에 차순 스테이트 가져온걸 {}안에 논리로 넣어준다
    // 그리고 li에 onClick을 넣어 onSortByChange함수로 
    // 각각의 이름 넣어준다 클릭시 그 이름으로 아이콘 표시
    // orderBy는 onOrderByChange로 해준다
    // onSortByChange onOrderByChange를 search에 보내준다
    return(
        <ul>
            <li
            onClick={
                ()=>{onSortByChange('petName')}
            }
            >
                애기명
                
                {(sortBy === 'petName') && <BiCheck />}
            </li>

            <li
            onClick={
                ()=>{onSortByChange('ownerName')}
            }
            >
                예약자명
                {(sortBy === 'ownerName') && <BiCheck />}
            </li>

            <li
            onClick={
                ()=>{onSortByChange('aptDate')}
            }
            >
                날짜
                {(sortBy === 'aptDate') && <BiCheck />}
            </li>

            <li
            onClick={
                ()=>{onOrderByChange('asc')}
            }
            >
                올림차순
                {(orderBy === 'asc') && <BiCheck />}
            </li>

            <li
            onClick={
                ()=>{onOrderByChange('desc')}
            }
            >
                내림차순
                {(orderBy === 'desc') && <BiCheck />}
            </li>
        </ul>
    )
}

function Search({query,onQueryChange,orderBy,sortBy,onOrderByChange,onSortByChange}){
    // 정렬하기 끄고 켜기 스테이트 만들기
    // false값을 기본으로하고 드롭 함수로 보냄
    // setToggleSort를 버튼의 onClick에 넣준다 
    // !toggleSort 클릭시 반대값을 실행하게 해준다
    const [toggleSort, setToggleSort] = useState(true)


    // 리턴
    return(
        <div id='search'>
            <p>
                <BiSearch />
                <input 
                type='text'
                placeholder='search'
                value={query}
                onChange={
                    (event)=>{onQueryChange(event.target.value)}
                }
                />
                <button type='button'
                onClick={
                    ()=>{setToggleSort(!toggleSort)}
                }>
                    정렬하기
                </button>
                <BiCaretDown />
            </p>
            <DropDown
            toggleSort={toggleSort} 
            // 정리,차순 스테이트 드랍으로 보내주기
            orderBy={orderBy}
            sortBy={sortBy}
            //onSortByChange onOrderByChange를 받아준다
            onOrderByChange={onOrderByChange}
            onSortByChange={onSortByChange}
            // 받은걸 다시 index.js로 보내준다
            />
        </div>
    )
}


export default Search