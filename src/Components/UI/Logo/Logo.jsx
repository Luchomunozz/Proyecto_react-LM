import Logo from './../../../images/logo.jpg';
import './../Logo/Logo.css';


function logo() {
  return (
      <header className="image">
        <img src={Logo} className="logo" alt="logo" />
      </header>
  );
}

export default logo;