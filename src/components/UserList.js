import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import './UserList.css';


const getUsersQuery = gql`
    {
        users {
            name
            github
        }
    }
`;

class UserList extends Component {
    displayUsers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading users...</div> );
        } else {
            return (
                data.users.map( user => 
                    <tr>
                        <th >{user.name} </th>
                        <th > {user.github} </th>
                    </tr>
                
                )
            )
        }
    }

    render(){
        return(
            <div align="center">
                { this.displayUsers() }
                
           </div>
        );
    }
}


export default graphql(getUsersQuery)(UserList);