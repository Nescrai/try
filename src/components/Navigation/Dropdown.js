import "./NavBar.css";

function Dropdown() {
  
  const handleButton = (event) => {
    event.preventDefault();
  };

  return (
    <div onClick={handleButton} className="dropdown open">
      <li>
        <a href="home">Home</a>
      </li>
      <li>
        <a href="about">About</a>
      </li>
      <li>
        <a href="services">Services</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      <li>
        <a href="signin">Signin</a>
      </li>
      
     
    </div>
  );
}
export default Dropdown;
