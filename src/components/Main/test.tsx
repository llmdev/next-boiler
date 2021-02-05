import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main Component', () => {
  it('should render the header', () => {
    const { container } = render(<Main></Main>)

    expect(
      screen.getByRole('heading', { name: /react avancado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('shoudl render the corlors correct', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#c0c' })
  })
})
