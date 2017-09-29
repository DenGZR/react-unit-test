import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class UserList extends Component {
  state = {
    isASC: true
  };

  onChangeSort = () => {
    const { isASC } = this.state;
    this.setState({ isASC : !isASC });
  }

  sortFn(arr, isASC) {
    return arr = isASC ? arr.sort((a,b) => a.id > b.id) : arr.sort((a,b) => a.id < b.id);
  }

  render() {
    const { isASC } = this.state;
    const { data } = this.props;
    const users = this.sortFn(data,isASC);

    return (
      <Table inverse className="user-list">
       <thead>
         <tr>
           <th className="user-list__theader" onClick={this.onChangeSort}>id</th>
           <th>name</th>
           <th>email</th>
           <th>phone</th>
         </tr>
       </thead>
       <tbody>
         {
           users.map((user,index) => (
             <tr key={index}>
               <th scope="row">{user.id}</th>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
             </tr>
           ))
         }
       </tbody>
     </Table>
    );
  }

}
