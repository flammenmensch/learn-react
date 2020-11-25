import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
    const { theme, changeTheme } = useTheme();

    const handleClick = React.useCallback(() => {
        if (theme === 'light') {
            changeTheme('dark');
        } else {
            changeTheme('light')
        }
    }, [theme, changeTheme]);

    return (
        <button type="button" onClick={handleClick}>{theme}</button>
    );
};

export default ThemeSwitcher;