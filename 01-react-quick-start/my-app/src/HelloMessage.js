/**
 * @Author itclancoder
 * @Descortaion HelloMessage
 * @Date 2019/5/2
 * @param
 * @return
 *
 * */
import React from 'react';
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>
        )
    }
}

export default HelloMessage;