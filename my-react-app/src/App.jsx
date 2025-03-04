import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import User from './pages/User';
import Layout from './components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginSuccess } from './redux/actions/authActions';
import { fetchUserProfile } from './api/user';
import { setUserProfile } from './redux/actions/userActions';


function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user); 
  
  useEffect(() => {
    if (isAuthenticated && token ) { 
      fetchUserProfile(token).then((userData) => {
        if (userData) {
          dispatch(setUserProfile(userData));
          dispatch(loginSuccess(token));
          
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
      });
    }
  }, [isAuthenticated, token, dispatch]); 


  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={isAuthenticated ? <User user={user} /> : <Navigate to="/home" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
