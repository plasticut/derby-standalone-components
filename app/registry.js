var _ = require('./utils');

function ComponentRegistry() {
}

module.exports= _.extendable(ComponentRegistry);

var registry = {};
var apps = [];

function setupApp(app) {

    for (var name in registry) {
        if (registry.hasOwnProperty(name)) {
            app.component(name, registry[name]);
        }
    }
};

function registerComponent(Class) {
    var name = _.dash(Class.prototype.name || Class.name);
    registry[name] = Class;

    if (apps.length) {
        for (var i=0, li=apps.length; i<li; i++) {
            setupApp(apps[i]);
        }
    }
};

ComponentRegistry.register = registerComponent;

ComponentRegistry.prototype.component = function(name, Class) {
    var template = document.getElementById('derby-' + name);

    if (!template) { throw new Error('Template for component ' + name + ' not found.'); }

    this.views.register(template.id, template.innerHTML, template.dataset);
    this.inherited.component(name, Class);
};

ComponentRegistry.prototype._init = function() {
    this.inherited._init.apply(this, arguments);

    apps.push(this);

    setupApp(app);
};
