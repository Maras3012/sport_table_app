import { useEffect, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Comments from '../CommentExampleComment';

const Body = () => {
  const login = useRef(1);
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (user !== undefined) {
      if (user.email === 'admin@maildrop.cc' || 'marasovi1@gmail.com') {
        login.current = 1;
        localStorage.setItem('user', user.email);
      } else if (user.email === 'user@maildrop.cc') login.current = 2;
    } else login.current = 3;
    console.log(user);
  }, [user]); // adjust dependencies to your needs
  return isAuthenticated && login.current === 1 && <Comments />;
};

export default Body;
