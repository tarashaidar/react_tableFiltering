import React from 'react';
import TableData from './table.view.js';
import axios from 'axios';

export default class TableList extends React.Component{
    
    state = {
        data : [],
        term: ''
    }

    loadPage = async () => { 
        const response = await axios.get('data.json')
        const data = response.data
        this.setState({
            data
        }) 
    }

    componentDidMount(){
        this.loadPage();
    }

    searchingFor(term) {
        return function (x){
            return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    searchHandler = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    render() {
        return (
          <TableData.Wrapper>
              <h1>Table Filtering</h1>
          <TableData.Form>
          <input type="search" placeholder="Search . . ."  onChange = {this.searchHandler} value={this.state.term}/>
          </TableData.Form>
          <TableData.Table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    </tr>
                </thead>
                {this.state.data.filter(this.searchingFor(this.state.term)).map(item => 
                <tbody>
                <tr key = {item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                </tr>
                </tbody>
                )
                }
          </TableData.Table>
          </TableData.Wrapper>
        );
      }
}