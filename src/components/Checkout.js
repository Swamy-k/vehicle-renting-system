import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CheckoutCard from './CheckoutCard'

class Checkkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            license: '',
            aadhaar: '',
            days: '1',
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
        console.log(this.state)
    }

    render() {
        return(
            <div className='container my-5'>
                <div className='row'>
                    <form className='col-md-9'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input type='text' name='name' className='form-control' 
                            onChange={(e) => this.handleChange(e)} value={this.state.name}></input>

                        </div>
                        <div className='form-group'>
                            <label>Age</label>
                            <input type='text' name='age' className='form-control'
                            onChange={(e) => this.handleChange(e)} value={this.state.age}></input>

                        </div>
                        <div className='form-group'>
                            <label>License</label>
                            <input type='text' name='license' className='form-control'
                            onChange={(e) => this.handleChange(e)} value={this.state.license}></input>

                        </div>
                        <div className='form-group'>
                            <label>Aadhaar</label>
                            <input type="text" name='aadhaar' className='form-control'
                            onChange={(e) => this.handleChange(e)} value={this.state.aadhaar}></input>

                        </div>
                        <div className='form-group'>
                            <label>Number of Days</label>
                            <select className='custom-select' name='days' onChange={(e) => this.handleChange(e)} value={this.state.days}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </div>
                        <Link className='btn btn-success' to='/invoice' onClick={() => this.props.func(this.state)}>Finish Booking</Link>

                    </form>
                    <div className='col-md-3'>
                        <CheckoutCard data={this.props.data} />
                    </div>

                </div>

            </div>
        )
    }
}

export default Checkkout;
