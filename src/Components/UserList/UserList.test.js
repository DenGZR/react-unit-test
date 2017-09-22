import React from 'react';
import { mount } from 'enzyme';
import UserList from './UserList';

describe('<UserList />', () => {
  // Render a checkbox with label in the document
  const users = [{
      id: 1,
      name: 'abc',
      email: 'test1@test.com',
      phone: '123123123'
    },{
      id: 2,
      name: 'dfg',
      email: 'test2@test.com',
      phone: '123123123'
  }];
  const wrapper = mount(
    <UserList data={users}/>
  );

  console.log(wrapper.debug());

  describe('renders correctly ', () => {
    it('should be table ', () => {
      expect(wrapper.find('table.table-inverse')).toHaveLength(1);
    });

    it('should render props ', () => {
      expect(wrapper.find('table.table-inverse')).toHaveLength(1);
    });
  });






});
