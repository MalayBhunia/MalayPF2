import { FaCog } from "react-icons/fa";
import { BsMoon } from "react-icons/bs";
import { ImSun } from "react-icons/im";
import { themes } from "../../Data";
import ThemeItem from "./ThemeItem";
import './themes.css';
import { useEffect, useState } from "react";

const getStorageColor = () => {
  let color = '4';
  if(localStorage.getItem('color')){
    color = localStorage.getItem('color');
  }

  return color;
};

const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }

  return theme;
};

const Themes = () => {
    const [showSwitcher, setShowSwitcher] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    const changeColor = (color) =>{
      setColor(color);
    };

    const toggleTheme = () =>{
      if(theme === 'light-theme'){
        setTheme('dark-theme');
      } else {
        setTheme('light-theme');
      }
    };

    useEffect(() => {
      document.documentElement.style.setProperty('--hue',color);
      localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
    }, [theme]);

    return (
      <div className={`${showSwitcher ? 'show-switcher' : ''} style-switcher`}>
        <div 
          className="switcher-toggler"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          <FaCog />
        </div>

        <div className="theme-toggler" onClick={toggleTheme}>
          {theme === 'light-theme' ? <BsMoon /> : <ImSun/>}
        </div>

        <h3 className="switcher-title">Style Switcher</h3>
        <div className="switcher-item grid">
          {themes.map((theme, index) => {
            return <ThemeItem key={index} {...theme} changeColor=
            {changeColor} />;
          })}
        </div>

        <div 
          className="switcher-close"
          onClick={() => setShowSwitcher(!showSwitcher)}
        >
          &times;
        </div>
      </div>
    );
  };
export default Themes;