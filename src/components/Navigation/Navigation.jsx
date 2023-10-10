import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import styles from './Navigation.module.css';

import UserMenu from 'components/UserMenu/UserMenu';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Box
        bgGradient="linear(to-r, purple.500, red.500)"
        boxShadow="2xl"
        height="100px"
        py={4}
      >
        <NavLink className={styles.link} to="/">
          <Button colorScheme="green" variant="outline">
            Home
          </Button>
        </NavLink>
        {isLoggedIn ? (
          <NavLink className={styles.link} to="/contacts">
            <Button colorScheme="yellow" variant="outline">
              Contacts
            </Button>
          </NavLink>
        ) : (
          <>
            <NavLink className={styles.link} to="/register">
              <Button colorScheme="red" variant="outline">
                Register
              </Button>
            </NavLink>
            <NavLink className={styles.link} to="/login">
              <Button colorScheme="pink" variant="outline">
                Log In
              </Button>
            </NavLink>
          </>
        )}
        {}
      </Box>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation;
