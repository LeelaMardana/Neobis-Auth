import { Link } from 'react-router-dom';

export const Notfound = () => {
  return (
    <div>
      <p>404... This page actually doesn't exist.</p>
      <p>
        Go <Link to='/'>Home</Link>
      </p>
    </div>
  );
};
