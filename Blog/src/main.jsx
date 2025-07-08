import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/fonts.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  cache: new InMemoryCache()
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);