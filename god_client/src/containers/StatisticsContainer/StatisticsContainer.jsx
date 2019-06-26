import React, { Component } from "react";
import './StatisticsContainer.css';

import { List, Pagination } from 'antd';
import '../../../node_modules/antd/lib/list/style/index.css';
import '../../../node_modules/antd/lib/pagination/style/index.css';


const seed = [
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
    {
        userName: 'Jesus',
        matchesWon: 10,
    },
  
]
    

class StatisticsContainer extends Component {
    state = {
        pagesNumber: 0,
        currentPage: -1,
        pageSize: 10,
    }

    handlePageChange = () => {

    } 

    render(){

        const {
            pagesNumber,
            currentPage,
            pageSize,
        } = this.state;

        let {
            Data
        } = this.props

        debugger;

        return(
            <div className='statistics-container'>
                <div className='statistics-header-container'>
                    <h1>
                        Game Statistics
                    </h1>
                </div>
                <div className='statistics-table-container'>
                    <List
                        bordered
                        dataSource={Data}
                        renderItem={item => (<List.Item>{ item.userName } has Won { item.score } Games</List.Item>)}
                    />
                </div>
                <div className='statistics-paginator-container'>
                    <Pagination 
                        defaultCurrent={1} 
                        total={50} 
                        onChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }

}

export default StatisticsContainer