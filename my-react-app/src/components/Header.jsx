import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/actions/authActions';
import Logo from '../assets/img/argentBankLogo.png';
import '../css/main.css';
import { Settings } from 'lucide-react';
import { User } from 'lucide-react';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);

  const handleLogout = () => {
    dispatch(logout());
    sessionStorage.clear();
    localStorage.clear();
    navigate('/home'); 
  };

  
  if (!user) {
    return (
      <nav className="main-nav">
        <Link to="/home" className="main-nav-logo">
          <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          {token ? (
            <span className="main-nav-item">Chargement des données...</span>
          ) : (
            <Link to="/signin" className="main-nav-item">
              <i className="fa fa-user-circle"></i> Sign in
            </Link>
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className="main-nav">
      <Link to="/home" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div className="main-nav-div">
        {token ? (
          <>
            <div className='user-button'>
              <Link to="/user" style={{ textDecoration: 'none' }}><span className="main-nav-item">{user.firstName}</span>  </Link>
              <button className="user"> <User/></button>
            </div>
            
            <button className="parametre"> <Settings size={30}/></button>
            
            <button onClick={handleLogout} className="main-nav-item logout-button">
            ⏻
            </button>
          </>
        ) : (
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
