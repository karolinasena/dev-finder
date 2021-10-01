import React, { useState } from 'react'
import { Search } from './components/Search';
import { Header } from '././components/Header';
import { Profile } from '././components/Profile';
import { GlobalStyle } from './styles/GlobalStyle.js'
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [username, setUsername] = useState('');

  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'dark' ? light : dark)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />

        <div className="container">
          <div className="box">
            <Header toggleTheme={toggleTheme}/>
            <Search setUsername={setUsername} />
            <Profile username={username} />
          </div>
        </div>
      </div>
    </ThemeProvider>

  );
}

export default App;
