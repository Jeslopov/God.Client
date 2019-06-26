import React from "react";
import  {Button}  from "antd";
import '../../../node_modules/antd/lib/button/style/index.css';
import './WinnerComponent.css';

export const WinnerComponent = (props) => {
    const {
        playerName
    } = props;

    const handleOnClick = () => {
        props.OnMatchRestart();
    }

    return(
        <div className='winner-component-container'>
            <h1>
                We have a Winner!!
            </h1>
            <h1>
                { playerName } is the new Emperor
            </h1>
            <div className='winner-component-button-container'>
                <Button type='primary' className="winner-component-button" onClick={handleOnClick}>Ok</Button>
            </div>
        </div>
    ) ;
}