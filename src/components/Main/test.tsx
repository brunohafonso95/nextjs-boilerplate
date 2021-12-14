import { screen, render } from '@testing-library/react';

import Main from '.';

describe('Unit tests for Main Component', () => {
  it('should render a header element', () => {
    const { container } = render(<Main />);
    expect(screen.getByRole('heading', { name: /NextJS Boilerplate/ })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyle({ 'background-color': 'aliceblue' });
  });
});
