import React from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = React.createContext({
    theme: 'light',
    changeTheme: (value: Theme) => {}
});

export const useTheme = () => {
    const value = React.useContext(ThemeContext);

    if (value === undefined) {
        throw new Error('Component should be inside context provider');
    }

    return value;
}

const ThemeProvider = (props: React.PropsWithChildren<any>) => {
    const [theme, setTheme] = React.useState<Theme>('light');

    const changeTheme = React.useCallback((value: Theme) => {
        setTheme(value);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;