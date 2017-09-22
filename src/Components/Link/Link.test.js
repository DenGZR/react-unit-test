import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

describe('<Link />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Link page="http://www.facebook.com">Facebook</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders as an anchor when no page is set', () => {
    const tree = renderer.create(<Link>Facebook</Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('properly escapes quotes', () => {
    const tree = renderer
      .create(<Link>{"\"Facebook\" \\'is \\ 'awesome'"}</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('changes the class when hovered', () => {
    const component = renderer.create(
      <Link page="http://www.facebook.com">Facebook</Link>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseEnter();
    // console.log('tree --> ', tree);
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    tree.props.onMouseLeave();
    // console.log('tree --> ', tree);
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
