import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, showAddFields, showAdd}) => {

    return (
        <header className= 'header'>
            <h1> {title} </h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={showAddFields}/>
            {/* <Button color='blue' text='self'/>
            <Button color='gold' text='hello2'/> */}

        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
