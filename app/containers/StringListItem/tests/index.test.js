/**
 * Test the string list item
 */

import React from 'react';
import { getByText, render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import StringListItem from '../index';

const renderComponent = (props = {}) =>
  render(
    <IntlProvider locale="en">
      <StringListItem {...props} />
    </IntlProvider>,
  );

describe('<StringListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      id: 1,
      message: 'TEST',
    };
  });

  it('should render a ListItem', () => {
    const { container } = renderComponent({ item });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the string message', () => {
    const { container } = renderComponent({ item });
    expect(
      getByText(container, content => content.endsWith(item.message)),
    ).not.toBeNull();
  });
});
