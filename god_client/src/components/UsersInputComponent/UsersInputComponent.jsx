import React  from "react";
import  {Button}  from "antd";
import './UsersInputComponent.css';
import '../../../node_modules/antd/lib/button/style/index.css';



const UsersInputComponent = (props) => {
        let Player1 = "";
        let Player2 = "";

        const handleOnClick = () => {
            props.OnStart(Player1, Player2);
        }

        return(
            <div className='uinpt-component-container'>
                <div className='uinpt-title-container'>
                    <h2>Enter Player's Names</h2>
                </div>

                <div className='uinpt-input-container'>
                    <input type='text'  placeholder="Player 1" onChange={(event => Player1 = event.target.value)}/>
                </div>

                <div className='uinpt-input-container'>   
                    <input type='text' placeholder="Player 2" onChange={(event)=>{ Player2 = event.target.value}}/>
                </div>

                <div className='uinpt-button-container'>   
                    <Button type='primary' className="uinpt-start-btn" onClick={handleOnClick}>Start</Button>
                </div>
            </div>
        )
}

export default UsersInputComponent;