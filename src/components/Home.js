import React, {Component} from 'react';
import '../App.css';


class Home extends Component {
    render() {
        return (
            <div className='logo-container'>
            <div className="logo">
                <span className="logo__krystiandziuk">Krystian Dziuk</span>
                <span className="logo__text"><span className='logo__text--changeText'></span> <span className='logo__developer'>Developer</span></span>
            </div>
            </div>
        )
    }
}

export default Home;