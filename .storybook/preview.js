import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <div style={{ width: '100%', height: '100vh' }}>
      <GlobalStyles />
      <Story />
    </div>
  )
]
