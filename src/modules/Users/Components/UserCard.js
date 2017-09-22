import React from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, Button } from 'reactstrap';

const UserCard = ({ name, email, address, phone }) => {
  return (
    <Card>
        <CardImg top width="100%" src="http://blog.sfgate.com/49ers/wp-content/plugins/author-social-info/default-avatar.png" alt="Card image cap" />
        <CardBlock>
          <CardTitle>User info:</CardTitle>
          <CardText>Name: {name}</CardText>
          <CardText>Email: {email}</CardText>
          <CardText>Phone: {phone}</CardText>
          <CardText>Address: {`${address.city},${address.street}`}</CardText>
          <Button>Button</Button>
        </CardBlock>
    </Card>
  )
};

export default UserCard;
