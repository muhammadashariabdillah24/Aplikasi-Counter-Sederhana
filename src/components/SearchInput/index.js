import PropTypes from 'prop-types';

import styles from './SearchInput.module.css'

const SearchInput = ({ onChange, onSubmit, value }) => {
    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <input
            onChange={onChange}
            value={value}
            className={styles.input}
            type="text"
            placeholder="List"
            />
            <button className={styles.addButton} type="submit">Add</button>
        </form>
    )
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}

export default SearchInput