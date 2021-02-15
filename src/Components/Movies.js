import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie'
const movieUrl = "http://localhost:8080/movies/";

class Movies extends Component{
    constructor(props){
        super(props);
        this.state={
            moviesData :''
         }
    }

   getData = ()=>{
    if( this.state.moviesData){
        const movie =  this.state.moviesData.map((item,index) =>{

            return(
                <div key={index}>
                    <Movie
                        name = {item.name}
                        hero = {item.hero}
                        category = {item.category}
                        budject = {item.budject}
                    />
                </div>                
            )
    })
    return movie;
    }
     
    }

    render(){
        return(
            <div>
                {this.getData()}
            </div>
        )
    }
    componentDidMount(){
        axios.get(movieUrl,{method : 'GET'})
        .then((response)=> {
            console.log(response.data);
            this.setState({
                moviesData : response.data
            })
        })
        .catch(err => console.log(err.errors))
    }

}

export default Movies;