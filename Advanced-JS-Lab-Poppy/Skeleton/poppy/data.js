var poppy = poppy || {};

(function (poppy) {
    var popup = {
        constructor: function (type, title, message, autoHide, timeout, closeButton, callback, position) {
            this._popupData = {
                type: type,
                title: title,
                message: message,
                autoHide: autoHide,
                timeout: timeout,
                closeButton: closeButton,
                callback: callback,
                position: position
            };

            return this;
        }
    };

    var popupSuccess = popup.extends({
        constructor: function (type, title, message) {
            this._super.constructor.call(this, type, title, message, false, false, false, false, 'bottomLeft');

            return this;
        }
    });

    var popupInfo = popup.extends({
        constructor: function (type, title, message) {
            this._super.constructor.call(this, type, title, message, false, false, true, false, 'topLeft');

            return this;
        }
    });

    var popupError = popup.extends({
        constructor: function (type, title, message) {
            this._super.constructor.call(this, type, title, message, true, 3000, false, false, 'topRight');

            return this;
        }
    });

    var popupWarning = popup.extends({
        constructor: function (type, title, message, callback) {
            this._super.constructor.call(this, type, title, message, false, false, false, callback, 'bottomRight');

            return this;
        }
    });

    poppy.popup = popup;
    poppy.popupSuccess = popupSuccess;
    poppy.popupInfo = popupInfo;
    poppy.popupError = popupError;
    poppy.popupWarning = popupWarning;
})(poppy);