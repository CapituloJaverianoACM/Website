import React from 'react';

class Item extends React.Component {
	static defaultProps = {
		placeholder: "",
		message: null,
		value: "",
		options: [],
		isRequired: false
	};

	getField = () => {
		const { type, name, placeholder, value, options, handleInput, isRequired } = this.props;
		if(type === "textarea") {
			return <textarea name={name} placeholder={placeholder} onChange={handleInput} rows="3" defaultValue={value} required={isRequired}></textarea>;
		} else if (type === "select") {
			return (
				<select name={name} onChange={handleInput}>
					{options.map((option, i) => {
						const { value, text } = option;
						return (
							<option key={i} value={value}>{text !== undefined ? text : value}</option>
						);
					})}
				</select>
			);
		} else {
			return <input type={type} name={name} placeholder={placeholder} onChange={handleInput} value={value}/>
		}
	};

	render() {
		const { label, message, handleInput } = this.props;
		return (
			<section className="acm-form_field">
				<label className="acm-form_label">{label}</label>
				{this.getField()}
				<label className="acm acm-inbox"/>
				{message !== null ? <label className="acm-form_message" onSuccess={message.onSuccess} onFail={message.onFail} /> : null }
			</section>
		);
	}
}

export default class Form extends React.Component {
	render() {
		const { handleSubmit, handleInput, data } = this.props;
		return (
			<form className="acm-form" onSubmit={handleSubmit}>
				{data.map((item, i) => {
					return <Item key={i} {...item} handleInput={handleInput}/>;
				})}
			</form>
		);
	}
}
