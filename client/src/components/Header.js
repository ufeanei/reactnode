import React, { Component } from 'react'
import {connect} from 'react-redux'

class Header extends Component{

    renderContent(){
        
        switch(this.props.auth.data){
            case null:
                return 'still deciding'
            case "":
                return <li><a href="/auth/google"> Login with Google</a></li>
            default:
                return <li><a href="/api/logout">Logg out</a></li>
        }
    }


    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="left brand-logo">FullReact</a>
                    <ul className="right">

                       {this.renderContent()}

                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}
export default connect(mapStateToProps)(Header)