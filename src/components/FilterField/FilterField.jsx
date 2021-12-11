import s from './FilterField.module.css';
import PropTypes from 'prop-types';

const FilterField = ({ value, onChange }) => {
  return (
    <label className={s.filterTitle}> Find contacts by name
      <input className={s.filterInput} type="text" value={value} onChange={onChange}/>
    </label>
  )
}

FilterField.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default FilterField;