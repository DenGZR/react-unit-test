import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import UserCard from './Components/UserCard.js';
import UserForm from './Form/UserForm.js';
import { fetchAllUsers, fetchShearchUser } from './UsersActions';

const mapStateToProps = (state) => ({
  usersList: state.users.data
});

const mapDispatchToProps = {
  fetchUsers: () => fetchAllUsers(),
  searchUser: (id) => fetchShearchUser(id)
};

class Users extends Component {
  static defaultProps = {
    usersList: [],
    fetchUsers() {},
    searchUser() {},
  };

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers();
  }

  onSubmitUserForm = ({userId}) => {
    console.log(userId);
    const { searchUser } = this.props;
    searchUser(userId);
  }

  render() {
    const { usersList } = this.props;

    return (
      <Container>
        <Row>
          <Col xs={{ size: 10, offset: 1 }}>
            <h1>JSONPlaceholder</h1>
            <p>Fake Online REST API for Testing and Prototyping</p>
            <p>powered by JSON Server and lowdb </p>
            <hr/>
          </Col>
        </Row>
        <Row>
          <Col xs={{ size: 6, offset: 3 }}>
              <UserForm onSubmit={this.onSubmitUserForm}/>
           </Col>
        </Row>
        <Row>
           {
             usersList.map((user, index) => (
                  <Col xs="4" key={index}>
                    <UserCard {...user}/>
                 </Col>
             ))
           }
         </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
