import React from 'react';
import { Link } from 'react-router-dom';
import { AppButton } from './AppButton';

export const LinkButton = ({ path, ...props}) => {
  return (
    <Link to={path}  {...props}>
        <AppButton />
    </Link>
  );
};