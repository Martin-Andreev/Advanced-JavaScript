var toDoModule = toDoModule || {};

(function (toDoModule) {
    var _sectionId = 1;
    var section = {
        constructor: function Section(title) {
            this._html = document.createElement('section');
            this._html.className = 'section clearfix';
            this._html.id = 'section' + _sectionId;
            this._html.sectionTitle = title;

            return this._html;
        },

        addToDom: function addToDOM() {
            var availableContainer = document.getElementById('container');
            if (!availableContainer) {
                toDoModule.container.addToDom();
            }

            makeNewSection();
            _sectionId++;
        }
    };

    function makeNewSection(){
        var _sectionTitle = document.getElementById('add-section-title').value;
        document.getElementById('add-section-title').value = '';
        var _newSection = toDoModule.section.constructor(_sectionTitle);
        var _sectionParent = document.getElementById('container');
        _sectionParent.appendChild(_newSection);

        makeArticleBody(_newSection);
        makeArticleAddForm(_newSection);
    }

    function makeArticleBody(section) {
        var _newArticle = document.createElement('article');
        _newArticle.className = 'section-main';
        _newArticle.id = 'section' + (_sectionId) + '-main';
        section.appendChild(_newArticle);

        var _header = document.createElement('header');
        _header.className = 'section-header';
        _newArticle.appendChild(_header);

        var _title = document.createElement('h2');
        _title.className = 'section-title';
        _title.innerText = toDoModule.section._html.sectionTitle;
        _header.appendChild(_title);
    }

    function makeArticleAddForm(section) {
        var _addForm = document.createElement('form');
        _addForm.className = 'add-item-form';
        section.appendChild(_addForm);

        var _inputText = document.createElement('input');
        _inputText.type = 'text';
        _inputText.id = 'inputText' + (_sectionId);
        _inputText.placeholder = 'Add item...';
        _addForm.appendChild(_inputText);

        var _addButton  = document.createElement('input');
        _addButton.type = 'button';
        _addButton.idNumber = _sectionId;
        _addButton.value = '+';
        _addForm.appendChild(_addButton);
        _addButton.onclick = function () {
            toDoModule.item.addToDom(_addButton.idNumber);
        };
    }

    toDoModule.section = section;
}(toDoModule));