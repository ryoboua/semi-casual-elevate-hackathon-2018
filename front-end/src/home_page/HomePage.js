import React, { Component } from 'react';
import dad from './dad.jpg'
import './home_page.css';
import search from './search.svg'


const dadPic = {
    title: 'Picture of dad and son reading a book',
    url: dad,
}

export default class HomePage extends Component {
    state = {
        program: '',
        location: '',
    }

    handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        const { program, location } = this.state
        console.log(program, location)
    }

    render() {
        return(
            <div className="home-page">
                <div className="card-container-h">
                    <h5>I know what I'm looking for</h5>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={`${search}`} height="142" style={{padding: '2em'}} alt={dadPic.title}/>
                        <div className="card-body" style={{textAlign: 'left'}} >
                            <h6 className="text-left margin16">Program Search</h6>
                            <input 
                                name="program"
                                className="input margin16" 
                                placeholder="Find a program"
                                onChange={this.handleChange}
                            ></input>
                            <br />
                            <h6 className="text-left margin16">Which locations(s)?</h6>
                            <input
                                name="location"
                                style={{
                                    borderStyle: 'none none solid none'
                                }} 
                                className="input margin16" 
                                placeholder="Parkdale"
                                onChange={this.handleChange}
                            ></input>
                            <br />
                            <br />
                            <div style={{textAlign: 'center'}} >
                                <button 
                                    type="button" 
                                    className="btn btn-primary" 
                                    onClick={this.handleSubmit}
                                    >Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-container-h">
                    <h5>Help me find programs</h5>
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src={`${dadPic.url}`} alt={dadPic.title}/>
                        <div className="card-body">
                            <p className="card-text">
                                Take 30 seconds to answer a few questions,we'll help find programs based on your answers
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}