var toDoModule = toDoModule || {};

(function (toDoModule) {
    var container = {
        constructor: function Container() {
            this._html = document.createElement('article');
            this._html.id = 'container';

            return this;
        },

        addToDom: function addToDOM() {
            var _containerParent = document.getElementById('todo-list');
            _containerParent.appendChild(toDoModule.container.constructor()._html);
        }
    };

    (function () {
        var _addSectionButton = document.getElementById('add-section-button');
        _addSectionButton.addEventListener('click', function () {
            toDoModule.section.addToDom();
        });
    })();

    toDoModule.container = container;
}(toDoModule));