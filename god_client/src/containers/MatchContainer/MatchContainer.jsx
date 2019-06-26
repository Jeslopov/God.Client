import React, { Component } from "react";
import { connect } from 'react-redux';
import { UsersInputComponent, ScoreComponent, MoveSelectionComponent, WinnerComponent } from "../../components";
import './MatchContainer.css';
import { Helpers } from "../../services";
import { showStatisticsAsync, hideStatistics, endMatch, startMatch, endRound, moveSelected, restartGame } from "../../rdux";
import { Modal, Button } from 'antd';
import '../../../node_modules/antd/lib/button/style/index.css';
import '../../../node_modules/antd/lib/modal/style/index.css';
import { StatisticsContainer } from "../StatisticsContainer";


class MatchContainer extends Component {


    SelectChildComponent() {
        const {
            P1Name,
            P2Name,
            Rounds,
            Player1Score,
            Player2Score,
            CurrentRound,
            Winner
        } = this.props;

        const Player1Move = CurrentRound.Player1Move;
        const Player2Move = CurrentRound.Player2Move;

        if (Winner != "") {
            return this.renderWinnerComponent(Winner);
        }

        if (Player1Score == 3 || Player2Score == 3) {
            this.props.OnMatchEnd(Player1Score == 3 ? P1Name : P2Name);
        }

        if (P1Name == "" || P2Name == "") {
            return this.renderUsersInputComponent();

            //For testing only
            // this.props.OnStartMatch("Jesus","Lisania");
        }

        if (Player1Move == "") {
            return this.renderPlayerMoveComponent(P1Name, Rounds.length + 1);
        }

        if (Player2Move == "") {
            return this.renderPlayerMoveComponent(P2Name, Rounds.length + 1);
        }

        if (CurrentRound.Winner == "") {
            let winnerMove = Helpers.getWinnerMove(Player1Move, Player2Move);
            if (winnerMove == "Tie") {
                this.props.OnRoundEnd(winnerMove);
            } else {
                if (Player1Move == winnerMove) {
                    this.props.OnRoundEnd(P1Name);
                } else {
                    this.props.OnRoundEnd(P2Name);
                }
            }
        }

    }

    renderWinnerComponent(winnerName) {
        return <WinnerComponent playerName={winnerName} OnMatchRestart={this.props.OnMatchRestart} />
    }

    renderUsersInputComponent() {
        return <UsersInputComponent OnStart={this.props.OnStartMatch} />
    }

    renderPlayerMoveComponent(playerName, round) {
        if (round > 1) {
            return <div>
                <MoveSelectionComponent style={{ left: '37.5%' }} RoundNumber={round} PlayerName={playerName} OnMoveSelected={this.props.OnMoveSelected} />
                <ScoreComponent rounds={this.props.Rounds} />
            </div>
        } else {
            return <MoveSelectionComponent RoundNumber={round} PlayerName={playerName} OnMoveSelected={this.props.OnMoveSelected} />
        }
    }

    render() {
        const {
            show,
            Page,
            Data
        } = this.props.Statistics;
        const selectedChild = this.SelectChildComponent();

        return (
            
            <div className='match-container'>
                <div className='statistics-button-container'>
                    <Button type='primary' onClick={() => this.props.OnShowStatisticsAsync(Page)}> Statistics </Button>
                </div>
                <Modal
                    title=""
                    visible={show}
                    onOk={this.props.OnHideStatistics}
                    onCancel={this.props.OnHideStatistics}
                    >
                    <StatisticsContainer Data={Data} currentPage={Page} />
                </Modal>    
                {selectedChild}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        //The names
        P1Name: state.match.Player1,
        P2Name: state.match.Player2,
        //All Rounds
        Rounds: state.match.Rounds,
        //Current Round
        CurrentRound: state.match.CurrentRound,
        //Moves
        Player1Move: state.match.CurrentRound.Player1Move,
        Player2Move: state.match.CurrentRound.Player1Move,
        //Scores
        Player1Score: state.match.Player1Score,
        Player2Score: state.match.Player2Score,
        //Match Winner
        Winner: state.match.Winner,
        //The Statistics State Chunk
        Statistics: state.match.Statistics
    }
};

const mapDispatchToProps = dispatch => {
    return {
        OnStartMatch: (p1Name, p2Name) => dispatch(startMatch(p1Name, p2Name)),
        OnMoveSelected: (playerName, move) => dispatch(moveSelected(playerName, move)),
        OnRoundEnd: (roundWinner) => dispatch(endRound(roundWinner)),
        OnMatchEnd: (winnerName) => dispatch(endMatch(winnerName)),
        OnMatchRestart: () => dispatch(restartGame()),
        OnShowStatisticsAsync: (page) => dispatch(showStatisticsAsync(page)),
        OnHideStatistics: () => dispatch(hideStatistics())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MatchContainer);