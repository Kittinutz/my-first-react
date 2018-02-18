import React, {Component} from 'react';

class Foo extends Component {
    handleChange=(e)=>{
        var value = e.target.value;
        this.props.handleClick(value);
    }
    componentWillReceiveProps(nextProps){
       console.log(this.props.bar);
    }
    render() {
        return (
            <div>
                {/*<h1>{this.props.foo}</h1>*/}
                <h1>Hello !! {this.props.name}</h1>
                <input type="text" name={'input'} onChange={this.handleChange}/>
                <button onClick={this.props.handleClick}>Click Me</button>
            </div>
        );
    }
}

export default Foo;
