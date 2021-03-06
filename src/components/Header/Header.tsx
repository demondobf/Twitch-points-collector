import './Header.css';

interface HeaderProps {
  text: string;
}

const Header = ({ text }: HeaderProps) => {
  return (
    <header className="header">
      <h1>{text}</h1>
    </header>
  );
};

export default Header;
