import React, {useContext} from 'react';
import Switch from "react-switch";
import {ThemeContext} from 'styled-components';
import {Container} from './styles';

export function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h4 className="title">devfinder</h4>

      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={36}
        handleDiameter={20}
        offColor="#ADB5BD"
        onColor={colors.text_light}
      />
    </Container>
    
  );
}