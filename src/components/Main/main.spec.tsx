import { render, screen } from '@testing-library/react';

import Main from './index';

describe('Main Component Unit Tests', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);
    expect(
      screen.getByRole('heading', {
        name: /Typescript, NextJS e Styled Components/i,
      })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ background: '#06092b' });
  });
});
