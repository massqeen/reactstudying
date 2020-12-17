import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from '../components/Link';
import setVisibilityFilter from '../redux/actions/setVisibilityFilter';

const FilterLink = ({ filter, children }) => {
  const dispatch = useDispatch();
  const active = useSelector((state) => filter === state.visibilityFilter);
  const onClick = useCallback(() => dispatch(setVisibilityFilter(filter)), [
    dispatch,
    filter,
  ]);

  return (
    <Link active={active} onClick={onClick}>
      {children}
    </Link>
  );
};

FilterLink.propTypes = {
  filter: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FilterLink;
