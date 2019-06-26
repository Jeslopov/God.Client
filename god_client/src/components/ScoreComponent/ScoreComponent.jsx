import React from "react";
import "./ScoreComponent.css"

const roundsSeed = [
    {
        playerName : 'Jesus'
    },
    {
        playerName : 'Jesus'
    },
    {
        playerName : 'Jess'
    },
    {
        playerName : 'Jess'
    }

]

const ScoreComponent = (props) => {
    const {
        className = '',
        rounds = roundsSeed
    } = props;

    const roundsItems = rounds.map( (round, index) => {
        return <div key={index.toString()} className='score-list-row'>
            <div className='score-left-floated-row-element'>
                <div className='score-round-id'>
                    {index + 1}
                </div>
            </div>
            <div className='score-right-floated-row-element'>   
                <div className='score-round-winner-name'>
                    {round.Winner}
                </div>
            </div>
        </div>
    });

    return (
        <div className={`${className} score-component-container`} {...props}>
            <div className='score-component-header '>
                <h1>
                    Score
                </h1>
            </div>

            <div className='score-round-list-header'>
                <div className='score-round-header score-left-floated-row-element'>
                    <h1>
                        Round
                    </h1>
                </div>
                <div className='score-winner-header score-right-floated-row-element'>
                    <h1>
                        Winner
                    </h1>
                </div>
            </div>
            <div className='score-round-list-body'>
                {roundsItems}
            </div>
            
        </div>
    )
}

export default ScoreComponent;