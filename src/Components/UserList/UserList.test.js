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
      id: 3,
      name: 'cdf',
      email: 'test3@test.com',
      phone: '344567678'
    },{
      id: 2,
      name: 'dfg',
      email: 'test2@test.com',
      phone: '123123123'
  }];

  const userSortedASC =  [{
        id: 1,
        name: 'abc',
        email: 'test1@test.com',
        phone: '123123123'
      },{
        id: 2,
        name: 'dfg',
        email: 'test2@test.com',
        phone: '123123123'
      },{
        id: 3,
        name: 'cdf',
        email: 'test3@test.com',
        phone: '344567678'
      }];

  const userSortedDESC =  [{
        id: 3,
        name: 'cdf',
        email: 'test3@test.com',
        phone: '344567678'
      },{
        id: 2,
        name: 'dfg',
        email: 'test2@test.com',
        phone: '123123123'
      },{
        id: 1,
        name: 'abc',
        email: 'test1@test.com',
        phone: '123123123'
      }];


  const wrapper = mount( <UserList data={users}/> );
  
  describe('renders correctly ', () => {
    it('should be table ', () => {
      expect(wrapper.find('table.table-inverse')).toHaveLength(1);
    });

    it('renders properly items amount ', () => {
      expect(wrapper.find('table.table-inverse tbody tr').length).toBe(3);
    });
  });

  describe('test sort ', () => {
    it('default ASC ', () => {
      // toBe uses === to test exact equality. If you want to check the value of an object, use toEqual:
      // toEqual recursively checks every field of an object or array.
      expect(wrapper.instance().sortFn(users, true)).toEqual(userSortedASC);
    });

    it('handles setState on click', () => {
      wrapper.find('table.table-inverse .user-list__theader').simulate('click');
      expect(wrapper.state(['isASC'])).toBe(false);
    });

    // spyOn
    it('click and call sortFn ', () => {
      // https://github.com/airbnb/enzyme/issues/944
      const spy = jest.spyOn(wrapper.instance(), 'onChangeSort');
      wrapper.update();
      wrapper.find('table.table-inverse .user-list__theader').simulate('click');
      expect(spy).toHaveBeenCalled();
    });

  });

});
