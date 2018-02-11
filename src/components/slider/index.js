import $ from 'jquery';
import React from 'react';

export default class Slider extends React.Component {
	static defaultProps = {
		count: 1,
		autoPlay: false,
		timeToSlide: 5000,
		showDots: true,
		pauseOnMouseOver: true,
		responsive: []
	};

	constructor(props) {
		super(props);
		this.state = {
			index: 0,
			count: props.count,
			lastIndex: Math.ceil(props.children.length / props.count) - 1,
			interval: null
		};
		this.handleKeys();
		this.interval = false;
		this.autoPlay();
	}

	autoPlay = () => {
		if(this.props.autoPlay) {
			this.interval = setInterval(() => {
				this.nextSlide();
			}, this.props.timeToSlide);
		}
	};

	stopAutoPlay = () => {
		if(this.props.autoPlay && this.props.pauseOnMouseOver) {
			clearInterval(this.interval);
		}
	}

	handleKeys = () => {
		document.addEventListener('keydown', (event) => {
			const key = event.keyCode;
			switch(key) {
				case 37: this.previousSlide();
					break;
				case 39: this.nextSlide();
					break;
				default:
					break;
			}
		});
	};

	previousSlide = () => {
		let index = this.state.index;
		index--;
		if(index === -1) index = this.state.lastIndex;
		this.setSlide(index);
	};

	nextSlide = () => {
		let index = this.state.index;
		if(index === this.state.lastIndex) index = 0;
		else index++;
		this.setSlide(index);
	};

	setSlide = (i) => {
		this.setState({
			index: i
		});
	};

	getSlides = () => {
		const { children } = this.props;
		let slides = [];
		let i = 0;
		while(i < children.length) {
			let slideItems = [];
			for(var j = 0; j < this.state.count && i < children.length; j++) {
				let slideItem = (
					<section key={i} className="slider-item">
						{children[i]}
					</section>
				);
				slideItems.push(slideItem);
				i++;
			}
			let slide = (
				<section key={i} className="slider-slide">
					{slideItems}
				</section>
			);
			slides.push(slide);
		}
		return slides;
	};

	identifyCount = () => {
		const { responsive, count, children } = this.props;
		let width = $(window).width();
		let currentCount = count;
		let media;
		for(media of responsive) {
			if(media.min_width < width) {
				currentCount = media.count;
			}
		}
		if(currentCount !== this.state.count) {
			this.setState({
				index: 0,
				count: currentCount,
				lastIndex: Math.ceil(children.length / currentCount) - 1
			});
		}
	};

	componentWillMount() {
		this.identifyCount();
		$(window).resize(this.identifyCount);
	}

	render() {
		const { index } = this.state;
		const { showDots } = this.props;
		let contentStyle = { left: index * -100 + "%" };
		const slides = this.getSlides();

		return (
			<section className="slider" onMouseOver={this.stopAutoPlay}>
				<section className="slider-content" style={contentStyle}>
					{slides}
				</section>
				{
					showDots && slides.length > 1 &&
					<section className="slider-dots">
						{slides.map((slide, i) => {
							const onClick = i === index ? null : () => this.setSlide(i);
							return <span key={i} className={`slider-dot ${i === index ? "selected" : ""}`} onClick={onClick} />
						})}
					</section>
				}
			</section>
		);
	}
}
