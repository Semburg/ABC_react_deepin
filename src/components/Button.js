import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    // function declaration moved to header and getting from props
    // const onClick = (e) => {
    //     console.log('click')
    //     console.log(e)
    // }

    return (<button onClick={onClick} style={{ backgroundColor : color}} className='btn'>{text}</button>)
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
