import React from 'react';
import styled from 'styled-components';

const AnimateLoad = (WrappedComponent) => {
    return class extends React.Component {
        state = {didMount: false}
        componentDidMount(){
           setTimeout(() => {
                this.setState({didMount: true})
            }, 0)
        }
        render(){
            const {didMount} = this.state;
            return (
                <Load className={`fade-in ${didMount && 'visible'}`}>
                   <WrappedComponent  {...this.props} />
                </Load>
            );
        }
    }
}

const Load = styled.div`
.fade-in {
    opacity: 0;
}
.fade-in.visible {
    transition: opacity 1s ease-in;
    opacity: 1;
}
`;

export default AnimateLoad;