function ThemeToggle() {
  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      🌙 / ☀️
    </button>
  );
}

export default ThemeToggle;
