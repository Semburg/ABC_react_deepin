import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = (e) => {
        console.log('click');
        console.log(e)
    }
    return (
        <header className= 'header'>
            <h1> {title} </h1>
            <Button color='green' text='Add' onClick={onClick}/>
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
