import Button from './Button'

const Header = ({title, onAdd, showAddBtn}) => {
  return (
    <header className="header-style">
        <h1>{title}</h1>
        <Button color={showAddBtn ? 'red' : 'steelblue'} text={showAddBtn ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

export default Header