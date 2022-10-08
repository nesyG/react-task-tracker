import PropTypes from 'prop-types'

const Button = ({onAdd, showAddBtn, color}) => {
  return <button color={showAddBtn ? 'red' : 'blue'} className="btn" onClick={onAdd}>{showAddBtn ? 'Close' : 'Add Task'}</button>
}

Button.defaultProps = {
    color: 'purple'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button