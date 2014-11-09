var Component = require('./component');
var Registry = require('./registry');

Registry.extend(derby.App);

function TestComponent() {
    this._super_.apply(this, arguments);
}

Component.extend(TestComponent);

var app = derby.createApp();
