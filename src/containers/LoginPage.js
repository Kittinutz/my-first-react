import React,{Component} from 'react';
import PanelLogin from '../components/PanelLogin';
import {connect} from 'react-redux';
class LoginPage extends Component{

    render(){
        if(this.props.user){
            return(
                <div>
                    <h1>Helloworld</h1>
                    <h1>{this.props.user.name}</h1>
                    <h2></h2>
                    <PanelLogin/>
                </div>
            );
        }
        return (
            <div>
                <PanelLogin/>
            </div>
        )


    }
}
function mapStateToProps(state) {
    return{
        user:state.foo.users
    }
}
export default connect(mapStateToProps,null)(LoginPage);
