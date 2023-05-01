import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ThemeContextProvider from './data/ThemeContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
)
