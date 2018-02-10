import React from 'react';

class Item extends React.Component {
	static defaultProps = {
		placeholder: null,
		label: null,
		message: null,
		value: "",
		options: [],
		required: false,
		pattern: null
	};

	constructor(props) {
		super(props);
		this.state = {
			state: ""
		};
	}

	onEvent = (e) => {
		console.log(e.type);
		this.setState({
			state: e.type
		});
	};

	getField = () => {
		const { type, name, placeholder, value, options, handleInput, required, pattern } = this.props;
		const events = {
			onFocus: this.onEvent,
			onBlur: this.onEvent,
			onChange: handleInput
		};
		const attr = {
			id: name,
			name: name,
			placeholder: placeholder,
			defaultValue: value,
			required: required
		};
		if(type === "textarea") {
			return <textarea rows="5" {...events} {...attr}></textarea>;
		} else if (type === "select") {
			return (
				<select {...events} {...attr}>
					{options.map((option, i) => {
						const { value, text } = option;
						return <option key={i} value={value}>{text !== undefined ? text : value}</option>;
					})}
				</select>
			);
		} else {
			return <input type={type} {...events} {...attr} pattern={pattern}/>;
		}
	};

	render() {
		const { state } = this.state;
		const { label, message, name} = this.props;
		return (
			<section className={`acm-form_field ${state}`}>
				{label !== null && <label className="acm-form_label acm acm-inbox" htmlFor={name}>{label}</label>}
				{this.getField()}
				{message !== null ? <label className="acm-form_message" onSuccess={message.onSuccess} onFail={message.onFail} /> : null }
			</section>
		);
	}
}

export default class Form extends React.Component {
	render() {
		const { handleSubmit, handleInput, data } = this.props;
		return (
			<form className="acm-form" onSubmit={handleSubmit} autoComplete="off">
				{data.map((item, i) => {
					if(item.type === "button") {
						return <button key={i} className="acm-form-button btn btn_active">{item.value}</button>
					} else {
						return <Item key={i} {...item} handleInput={handleInput}/>;
					}
				})}
			</form>
		);
	}
}
