import { FaSignInAlt, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  color: #909090;
  font-size: 1.3rem;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
export const LinkStyled = styled(Link)`
  color: #8cc832;
`;

function Header() {
  return (
    <header>
      <LogoStyled>
        <Link to='/'>
          <TitleStyled>Neobis Auth</TitleStyled>{' '}
        </Link>
      </LogoStyled>

      <ModalStyled>
        <LinkStyled to='/signin'>
          <span>
            <FaSignInAlt />
            Login
          </span>
        </LinkStyled>
        <LinkStyled to='/signup'>
          <span>
            <FaUser /> Register
          </span>
        </LinkStyled>
      </ModalStyled>
    </header>
  );
}

export default Header;
