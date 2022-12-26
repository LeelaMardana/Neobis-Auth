import { Link } from 'react-router-dom';

export const Notfound = () => {
  return (
    <div className='notfound'>
      <p>404... This page actually doesn't exist.</p>
      <p>
        <Link className='link' to='/'>
          Go Home
        </Link>
      </p>
    </div>
  );
};
