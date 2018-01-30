import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 0
		};
		this.handleKeys();
	}

	handleKeys = () => {
		document.addEventListener('keydown', (event) => {
			const key = event.keyCode;
			if(key === 37) {
				this.previousSlide();
			} else if(key === 39) {
				this.nextSlide();
			}
		});
	};

	previousSlide = () => {
		const lastIndex = this.props.children.length - 1;
		let index = this.state.index;
		index--;
		if(index === -1) index = lastIndex;

		this.setState({
			index: index
		});
	};

	nextSlide = () => {
		const size = this.props.children.length;
		let index = this.state.index;
		index++;
		if(index === size) index = 0;

		this.setState({
			index: index
		});
	};

	setSlide = (i) => {
		this.setState({
			index: i
		});
	};

	render() {
		const { index } = this.state;
		const { children, className } = this.props;

		return (
			<section className={`slider ${className}`}>
				<section className="slider-content">
					<span className="slider-precaret" onClick={this.previousSlide}/>
					<section className="slider-slides">
						{children.map((child, i) => {
							return (
								<section className={`slider-slide ${i === index ? "visible" : ""}`}>
									{child}
								</section>
							);
						})}
					</section>
					<span className="slider-postcaret" onClick={this.nextSlide}/>
				</section>
				<section className="slider-dots">
					{children.map((child, i) => {
						const className = "slider-dot" + (i === index ? " current" : "");
						const onClick = i === index ? null : () => this.setSlide(i);
						return <span className={className} onClick={onClick}/>
					})}
				</section>
			</section>
		);
	}
}
