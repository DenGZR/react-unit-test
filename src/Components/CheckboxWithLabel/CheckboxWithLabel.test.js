import React from 'react';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';

describe('<CheckboxWithLabel />', () => {
  // Render a checkbox with label in the document
  const labelOnProp = 'On';
  const labelOffProp = 'Off';

  const wrapper = shallow(
    <CheckboxWithLabel labelOn={labelOnProp} labelOff={labelOffProp} />
  );

  // console.log('CheckboxWithLabel -->', wrapper.debug());
  // console.log('--------------------------------------');
  // console.log('checkbox -->', wrapper.props);
  // console.log('checkbox -->', wrapper.instance().props);

  it('changes the text after click',() => {
    expect(wrapper.text()).toEqual(labelOffProp);
    wrapper.find('input').simulate('change');
    expect(wrapper.text()).toEqual(labelOnProp);
  });

  it('should has span with class txt-label ',() => {
    expect(wrapper.find('span').hasClass('txt-label')).toBeTruthy();
  });

  it('should has prop labelOn ',() => {
    expect(wrapper.instance().props.labelOn).toEqual(labelOnProp);
  });

  it('should has prop labelOff ',() => {
    expect(wrapper.instance().props.labelOff).toEqual(labelOffProp);
  });

});
