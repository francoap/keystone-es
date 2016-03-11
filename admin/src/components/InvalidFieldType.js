var React = require('react');

module.exports = React.createClass({
	
	displayName: 'InvalidFieldType',
	
	render: function() {
		return <div className="alert alert-danger">Tipo de campo invalido <strong>{this.props.type}</strong> en <strong>{this.props.path}</strong></div>;
	}
	
});
