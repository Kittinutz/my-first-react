import React, {Component} from 'react';
import {sendName} from "../actions";
import {connect} from 'react-redux';
class PanelLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: ''
        }
    }

    handleChange = (e) => {
        var foo = e.target.name;
        var value = e.target.value;
        // this.setState({[name]:value},()=>{console.log(this.state)});
        this.setState({[foo]:value},()=>{console.log(this.state)});

    };

    handleClick = (e)=>{
        e.preventDefault();
        var user ={
            "name":this.state.name,
            "surname":this.state.surname
        }
        this.setState({name:'',surname:''});
        this.props.sendName(user);
    };
    render() {
        if(this.props.user){
            console.log(this.props.user);
        }
        return (
            <div>
                <form>
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <label htmlFor="">Surname</label>
                    <input type="text" name="surname" onChange={this.handleChange}/>
                    <button  onClick={this.handleClick}>Submit</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return{
        user:state.foo
    }
}
export default connect(mapStateToProps,{sendName}) (PanelLogin);
