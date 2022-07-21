import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckedIcon } from './assets/icon_checked.svg';
import { ReactComponent as UnCheckedIcon } from './assets/icon_unchecked.svg';

function RadioGroup() {
  const [checkedElement, setCheckedElement] = useState(-1);
  const [checkListData, setCheckListData] = useState([
    { idx: 0, text: "스팸 / 홍보성 게시글이에요" },
    { idx: 1, text: "똑같은 정보를 도배하였어요" },
    { idx: 2, text: "단순 비방으로 불쾌감을 유발해요" },
    { idx: 3, text: "외설적 표현이 담겨있어요" },
    { idx: 4, text: "기타" }
  ])

  const onChangeRadioInput = (e) => {
    setCheckedElement(e.target.value);
  }

  const onClickRegister = () => {
    console.log(checkListData[checkedElement]);
  }

  return (
    <RadioGroupWrap>
      {checkListData.map((data) => (
        <RadioGroupLabel>
           <input 
              type="radio"
              className='input-hidden'
              value={data.idx}
              checked={checkedElement == data.idx}
              onChange={onChangeRadioInput}
            />
            {
              checkedElement == data.idx ?
              (<CheckedIcon/>) :
              (<UnCheckedIcon/>)
            }
             <div className='radio-text'>{data.text}</div>
        </RadioGroupLabel>
      ))}
      <Button onClick={onClickRegister}>등록</Button>
    </RadioGroupWrap>
  );
}

export default RadioGroup;

const RadioGroupWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroupLabel = styled.label`
  display: flex;
  padding: 8px;
  align-items: center;

  .input-hidden {
    display: none;
  }
  .radio-text {
    margin-left: 8px;
  }
`;

const Button = styled.button`
  background-color: #d9d9d9;
  height: 30px;
  border: none;
  font-weight: bold;
`;