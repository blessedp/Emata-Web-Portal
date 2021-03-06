import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
//import {PostData} from './PostData.js'

class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username: 'ciustudents',
            password:'Pass123$',
            clientId:'backoffice',
            clientSecret:'backoffice@lug',
        }

        this.login=this.login.bind(this);
        this.onChange=this.onChange.bind(this); 
    }

    login(){
       console.log("Login function");
        fetch('https://emata-authservice-test.laboremus.no/users/login',{
           headers: {
                'Access-Control-Allow-Origin':'https://emata-authservice-test.laboremus.no/users/login',
                'Transfer-Encoding': 'chunked',
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'Content-Encoding': 'gzip',
                'Vary':'Accept-Encoding',
                'X-Content-Type-Options':'nosniff',
            },
            method:'POST',
            mode: 'no-cors',
            body:{
                    "username": "ciustudents",
                    "password": "Pass123$",
                    "clientId": "backoffice",
                    "clientSecret": "backoffice@lug"
            }
        })
        .then(response=>response.json())
        .then(res=>{console.log(res);})
        /*
        PostData('login',this.state).then ((result) =>{
            let responseJSON = result;
            console.log(responseJSON);
        });//*/
    }

    posting(userData){
        fetch('https://emata-authservice-test.laboremus.no/users/login',{
            //*
            headers: {
                'Authorization': '*',//'Authorization': 'bearer ${token}',
                'Content-Type': 'application/json;charset=UTF-8',
            },//*/
            method: 'POST',
            //mode: 'no-cors',
            body: {
                    "username": "ciustudents",
                    "password": "Pass123$",
                    "clientId": "backoffice",
                    "clientSecret": "backoffice@lug"
            }
        })
        .then((response)=>console.log(response))
        .then((responseJson)=>{
            console.log(responseJson);
        })
        .catch((error)=>{
            return(error);//reject(error);
        });
        //console.log(JSON.stringify(this.userData));
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <div>
                    <h2>Login Page</h2>
                        <label>Username</label>
                        <input type="text" name="Username" value="ciustudents" placeholder="Username" onChange={this.onChange}/>
                        <label>password</label>
                        <input type="password" name="password" value="Pass123$" placeholder="password" onChange={this.onChange}/>
                        <input type="submit" value="login" className="button" onClick={this.login}/>
                </div>
                <button className="btn-primary" onClick={this.login}>click</button>
            </div>
        );
    } 
}

ReactDOM.render(<Login />, document.getElementById('just'));
serviceWorker.unregister();

























    /*
    posting(userData){
        fetch('https://emata-authservice-test.laboremus.no/users/login',{
            headers: {
                'Accept': '*//*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            console.log(responseJson);
        })
        .catch((error)=>{
            console.error(error);//reject(error);
        });
    }//*/