"use strict";

var React = require("React");

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    this application
                    <ul>
                        <li>react</li>
                        <li>flux</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;