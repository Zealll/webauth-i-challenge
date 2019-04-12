import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    





    render(){
        return(
            <div className='login'>
                <form>
                    <div><h3>Type Your Credentials</h3></div>
                    <inpit 
                      type='text'
                      placeholder='UserName'
                      name='username'
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                    <input 
                      type='text'
                      placeholder='Password'
                      name='password'
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <button onClick={this.handleLoginSubmit}>Log In</button>
                    <Link to='/signup'>
                        <button>Sign Up</button>
                    </Link>
                </form> 
            </div>
        )
    }
}



export default Login