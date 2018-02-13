import $ from 'jquery';
import React from 'react';
import Remarkable from 'remarkable';
import hljs from 'highlight.js';
import { ACMWebPage } from '../../components';

hljs.initHighlightingOnLoad();

var md = new Remarkable('full', {
	html: true,
	xhtmlOut: true,
	breaks: true,
	langPrefix: '',
	linkify: true,
	linkTarget: '_blank',

	// Enable some language-neutral replacements + quotes beautification
	typographer: true,

	// Double + single quotes replacement pairs, when typographer enabled,
	// and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
	quotes: '“”‘’',

	// Highlighter function. Should return escaped HTML,
	// or '' if input not changed
	highlight: function (str, lang) {
		if (lang && hljs.getLanguage(lang)) {
			try {
				return hljs.highlight(lang, str).value;
			} catch (__) {}
		}

		try {
			return hljs.highlightAuto(str).value;
		} catch (__) {}

		return ''; // use external default escaping
	}
});

export default class ActivityScene extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { host, getActivity } = this.props.data;
		this.get(host + getActivity + this.props.activityId + "/");
	}

	get = (url, type = 'GET') => {
		$.ajax({
			type: type,
			url: url,
			success: function(response) {
				this.setState(response);
			}.bind(this)
		});
	};

	renderMarkdown = (content) => {
		return { __html: md.render(content) };
	};

	render() {
		const { data } = this.props;
		const { name, date, time, place, information } = this.state;
		return (
			<ACMWebPage data={data} currentPage={3}>
				<section className="maincontent acm-page">
					<section className="acm-page-info">
						<header className="acm-activity-cover acm-page-header">
							<h1 className="sub_title">{name}</h1>
							<button className="acm acm-user-plus acm-join-button">Inscribirme</button>
						</header>
						<section className="acm-page-content">
							<span className="icon acm acm-calendar">{date}</span>
							<span className="icon acm acm-clock-o">{time}</span>
							<span className="icon acm acm-map-marker">{place}</span>
						</section>
					</section>
					<section className="acm-page-content">
						<section className="content" dangerouslySetInnerHTML={this.renderMarkdown(information)} />
					</section>
				</section>
			</ACMWebPage>
		);
	}
}
