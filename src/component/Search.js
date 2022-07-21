import {BiSearch,BiCaretDown,BiCheck} from 'react-icons/bi'


function DropDown(){
    return(
        <ul>
            <li>
                애기명
                <BiCheck />
            </li>
            <li>
                예약자명
                <BiCheck />
            </li>
            <li>
                날짜
                <BiCheck />
            </li>
            <li>
                올림차순
                <BiCheck />
            </li>
            <li>
                내림차순
                <BiCheck />
            </li>
        </ul>
    )
}

function Search(){
    return(
        <div id='search'>
            <p>
                <BiSearch />
                <input 
                type='text'
                placeholder='search'
                />
                <button type='button'>
                    정렬하기
                </button>
                <BiCaretDown />
            </p>
            <DropDown />
        </div>
    )
}


export default Search