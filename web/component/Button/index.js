import React, {PropTypes} from 'react'
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const {title} = this.props
        return <button>{title || '按钮'}</button>
    }
}

export default Button;
