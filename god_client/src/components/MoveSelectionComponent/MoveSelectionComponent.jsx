
import React from "react";

import { Select } from 'antd';
import '../../../node_modules/antd/lib/select/style/index.css';
import  {Button}  from "antd";
import '../../../node_modules/antd/lib/button/style/index.css';

import './MoveSelectionComponent.css';

const MoveSelectionComponent = (props) => {

    const Option = Select.Option;

    const {
        RoundNumber,
        PlayerName,
        PossibleMoves = ['Rock', 'Paper', 'Scissors'],
        OnMoveSelected,
        ...otherProps
    } = props;

    let playerMove = "";
    let key = new Date().toString();

    const handleChange = (value) => {
        playerMove = value;
    }

    const handleOnClick = () => {
        props.OnMoveSelected(PlayerName, playerMove);
    }

    return(
        <div className='move-selection-container' {...otherProps}>
            <div className='move-selection-title-container'>
                <h2>Round {RoundNumber}</h2>
            </div>
            <div className='move-selection-title-container'>
                <h3>{PlayerName}</h3>
            </div>  
            <div className='move-selection-input-container'>
                <Select
                    key={key}
                    style={{ width: 200 }}
                    placeholder="Select a Move"
                    optionFilterProp="children"
                    onChange={handleChange}
                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                    {PossibleMoves.map((move, index) => <Option key={index} value={move}> {move} </Option>)}
                </Select>
            </div>
            
            <div className='move-selection-ok-btn-container'>
                <Button type='primary' className="move-selection-ok-btn" onClick={handleOnClick}>Ok</Button>
            </div>
        </div> 
    )
}

export default MoveSelectionComponent;