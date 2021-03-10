const Button = ({ theme, children, className = '' }) => {
  const themeClassNames = {
    primary: 'button-primary',
    accent: 'button-accent',
    warn: 'button-warn',
  };

  return (
    <button className={`${themeClassNames[theme]} ${className}`}>{children}</button>
  );
};

export default Button;
