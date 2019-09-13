import React, { Component } from 'react'
import { FaAlignRight, FaChevronRight } from 'react-icons/fa';

import LoginModal from './LoginModal'

import { Link } from 'react-router-dom';


export default class Navbar extends Component {

    state = {
        isOpen: false,
        loginModalOpen: false,
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        var loginBtnClass = {
            cursor: 'pointer',
            border: '1px solid var(--primaryColor)',
            background: 'var(--primaryColor)',
            padding: '.5rem 1rem',
            color: 'var(--mainWhite)',
            borderRadius: '10px',
            margin:'0 auto',
            display: 'block'
        };
        var listItemStyle = {
            listStyle: 'none'
        }
        return (
            <nav className="custom-navbar">
                <div className="custom-nav-center">
                    <div className="custom-nav-header">
                        <ul className="custom-nav-logo">
                            <Link to="/">
                                Quillhash
                            </Link>
                        </ul>
                        
                        <button type="button" className="custom-nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="custom-nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "custom-nav-links show-custom-nav" : "custom-nav-links"}>
                        <li> 
                            <Link to="/" >Home</Link>
                        </li>
                        <li>
                            <Link to="/favorite" >Favorite</Link>
                        </li>
                    </ul>
                    <ul style={listItemStyle} className={this.state.isOpen ? "" : "custom-nav-links"}>
                        <li>
                            <button style={loginBtnClass} onClick={() => this.setState({ loginModalOpen: true, isOpen: false })}>
                                <FaChevronRight className="signIn-icon" />
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
                 <LoginModal
                    show={this.state.loginModalOpen}
                    onHide={() => this.setState({ loginModalOpen: false })}
                />
            </nav>
        )
    }
}
