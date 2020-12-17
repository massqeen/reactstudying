import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyled = styled.a`
  padding: 4px;
`;
const Span = styled.span`
  padding: 4px;
`;

const Link = React.memo(({ active, children, onClick }) => {
  if (active) {
    return <Span>{children}</Span>;
  }

  return (
    <LinkStyled
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </LinkStyled>
  );
});

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
