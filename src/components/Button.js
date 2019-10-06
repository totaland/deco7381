import React, {useState} from 'react';
import styled from 'styled-components'
import DisplayButton from "./DisplayButton";

const NewButton = styled(DisplayButton)`
  background-color: ${props=> props.active? "red": null};
`;
function Button(props) {
    const initialState = [0, 0, 0, 0];
    const buttonValue = ["check up", "abc", "adsfasd"];
    const [state, setState] = useState(initialState);

    function clickHandler(event) {
        var arr = [0, 0, 0, 0];
        arr[event.currentTarget.id] = 1;
        setState(arr);
    }

    return (
        <div>
            {buttonValue.map((value, index) => (
                <NewButton key={index} id={index} active={state[index]} onClick={clickHandler}>{value}</NewButton>)
            )}
            {/*<NewButton id={0} active={state[0]} onClick={clickHandler}>1</NewButton>*/}
            {/*<NewButton id={1} active={state[1]} onClick={clickHandler}>2</NewButton>*/}
            {/*<NewButton id={2} active={state[2]} onClick={clickHandler}>3</NewButton>*/}
            {/*<NewButton id={3} active={state[3]} onClick={clickHandler}>4</NewButton>*/}
        </div>
    )
}

export default Button;
