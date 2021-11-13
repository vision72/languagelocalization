import React, { Component } from 'react';
import './Form.css';
// import { useTranslation } from 'react-i18next';
// import Submit from './Submit';

class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname: '',
			middlename: '',
			lastname: ''
		};
	}

	handleFirstNameChange = (event) => {
		this.setState({
			firstname: event.target.value
		});
	};

	handleMiddleNameChange = (event) => {
		this.setState({
			middlename: event.target.value
		});
	};

	handleLastNameChange = (event) => {
		this.setState({
			lastname: event.target.value
		});
	};

	handleSubmit = () => {
		alert(`Full Name: ${this.state.firstname} ${this.state.middlename} ${this.state.lastname}`);
	};

	render() {
		const { t, i18n } = this.props;

		return (
			<form onSubmit={this.handleSubmit}>
				<div className="body">
					<h1 className="header">Language</h1>
					<div className="input">
						<label>{(t, 'input')}</label>
						<input type="text" value={this.state.firstname} onChange={this.handleFirstNameChange} />
					</div>
					<div className="input">
						<label>Middle Name</label>
						<input type="text" value={this.state.middlename} onChange={this.handleMiddleNameChange} />
					</div>
					<div className="input">
						<label>Last Name</label>
						<input type="text" value={this.state.lastname} onChange={this.handleLastNameChange} />
					</div>
					<button type="submit">Submit</button>
				</div>
			</form>
		);
	}
}

export default Form;
