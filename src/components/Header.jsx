import logo from '../assets/investment-calculator-logo.png';
// logo image with app name
export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
