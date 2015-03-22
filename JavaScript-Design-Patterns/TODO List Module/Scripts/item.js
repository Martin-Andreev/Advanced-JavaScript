var toDoModule = toDoModule || {};

(function (toDoModule) {
    var _itemId = 1;
    var item = {
        constructor: function Item(title) {
            this._html = document.createElement('li');
            this._html.className = 'items';
            this._html.id = 'item' + _itemId;
            this._html.itemTitle = title;

            return this._html;
        },
        addToDom: function addToDOM(id) {
            var _articleItemsList = document.getElementById('section-list' + id);
            if (!_articleItemsList) {
                var _articleParent = document.getElementById('section' + id + '-main');
                _articleItemsList = document.createElement('ul');
                _articleItemsList.className = 'section-body';
                _articleItemsList.id = 'section-list' + id;
                _articleParent.appendChild(_articleItemsList);
            }

            addItem(_articleItemsList, id);
            _itemId++;
        }
    };

    function addItem(listItemParent, id) {
        var _itemTitle = document.getElementById('inputText' + id).value;
        document.getElementById('inputText' + id).value = '';
        var _listItem = toDoModule.item.constructor(_itemTitle);
        listItemParent.appendChild(_listItem);

        var _checkBox = document.createElement('input');
        _checkBox.type = 'checkbox';
        _checkBox.id = 'checkBox' + _itemId;
        _listItem.appendChild(_checkBox);

        makeItemBodyText(_listItem, _checkBox);
        _checkBox.onclick = function() {
            updateItemColor(_checkBox, _checkBox.nextSibling);
        }
    }

    function makeItemBodyText(listItem, checkBox) {
        var _divText = document.createElement('div');
        _divText.className = 'item-body-text';
        _divText.id = 'item-body-text' + _itemId;
        listItem.appendChild(_divText);

        var _labelText = document.createElement('label');
        _labelText.htmlFor = checkBox.id;
        _labelText.innerHTML = toDoModule.item._html.itemTitle;
        _divText.appendChild(_labelText);
    }

    function updateItemColor(checkBox, item) {
        if (checkBox.checked) {
            item.style.backgroundColor  = '#FF9B70';
            console.log('Colored');
        } else {
            item.style.backgroundColor  = '#FFFFFF';
            console.log('white');
        }
    }

    toDoModule.item = item;

})(toDoModule);