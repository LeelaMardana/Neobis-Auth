import { FaSignInAlt, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, selectAuthorization } from '../features/authorize-slice';

const TitleStyled = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  color: #8cc832;
  font-family: 'Quicksand';
  font-weight: 400;
  display: flex;
  justify-content: center;
`;
const LogoStyled = styled.header`
  padding: 80px 0 30px;
`;

const ModalStyled = styled.div`
  font-family: 'Roboto';
  color: #fff;
  font-size: 1.3rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 50px;
`;

function Header() {
  const token = useSelector(selectAuthorization);
  const dispatch = useDispatch();
  // logOut;
  return (
    <>
      <LogoStyled>
        <NavLink to='/'>
          <TitleStyled>Neobis Auth</TitleStyled>
        </NavLink>
      </LogoStyled>
      <ModalStyled>
        {token ? (
          <NavLink
            to='/signin'
            onClick={() => {
              dispatch(logOut());
            }}
          >
            <span>
              <FaSignInAlt /> Sign out
            </span>
          </NavLink>
        ) : (
          <NavLink to='/signin'>
            <span>
              <FaSignInAlt /> Sign in
            </span>
          </NavLink>
        )}

        <NavLink to='/signup'>
          <span>
            <FaUser /> Sign up
          </span>
        </NavLink>

        <NavLink to='/users'>
          <span>All Users</span>
        </NavLink>
      </ModalStyled>
    </>
  );
}

export default Header;
