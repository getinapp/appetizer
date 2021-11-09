import React from 'react';
import { renderWithTheme } from 'utils/tests/helpers';

import Loading from '.';

describe('<Loading />', () => {
  it('should render the loading spinner', () => {
    const { container } = renderWithTheme(<Loading />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render the loading spinner with other size', () => {
    const { container } = renderWithTheme(<Loading size={25} />);

    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render the loading spinner with other color', () => {
    const { container } = renderWithTheme(<Loading color="red" />);

    expect(container.firstChild).toHaveStyle({
      color: 'red',
    });
  });
});
