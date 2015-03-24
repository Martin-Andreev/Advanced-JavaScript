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
        _newArticle.setAttribute('class', 'section-main');
        _newArticle.setAttribute('id', 'section' + (_sectionId) + '-main');
        section.appendChild(_newArticle);

        var _header = document.createElement('header');
        _header.setAttribute('class', 'section-header');
        _newArticle.appendChild(_header);

        var _title = document.createElement('h2');
        _title.setAttribute('class', 'section-title');
        _title.innerText = toDoModule.section._html.sectionTitle;
        _header.appendChild(_title);
    }

    function makeArticleAddForm(section) {
        var _addForm = document.createElement('form');
        _addForm.setAttribute('class', 'add-item-form');
        section.appendChild(_addForm);

        var _inputText = document.createElement('input');
        _inputText.setAttribute('type', 'text');
        _inputText.setAttribute('id', 'inputText' + (_sectionId));
        _inputText.setAttribute('placeholder', 'Add item...');
        _addForm.appendChild(_inputText);

        var _addButton  = document.createElement('input');
        _addButton.setAttribute('type', 'button');
        _addButton.setAttribute('value', '+');
        _addButton.idNumber = _sectionId;
        _addButton.addEventListener('click', function () {
            toDoModule.item.addToDom(_addButton.idNumber);
        });
        _addForm.appendChild(_addButton);

    }

    toDoModule.section = section;
}(toDoModule));