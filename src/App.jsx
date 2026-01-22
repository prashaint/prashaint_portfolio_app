import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from './components/ThemeToggle';
import TerminalWindow from './components/TerminalWindow';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TerminalWindow />
      <BackToTop />
      <Routes />
    </ThemeProvider>
  );
}

export default App;