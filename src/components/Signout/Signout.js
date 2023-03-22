import "./Signout.css";

const Signout = ({ onRouteForm, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <div className="signout-container">
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteForm('signout')} className='button'>Sign Out</p>
        </nav>
        </div>
      );
    } else {
      return (
        <div className="signout-container">
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteForm('signin')} className='button'>Sign In</p>
          <p onClick={() => onRouteForm('register')} className='button'>Register</p>
        </nav>
        </div>
      );
    }
}

export default Signout;