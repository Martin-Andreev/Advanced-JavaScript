var poppy = poppy || {};

(function(poppy) {
    var fadeDuration = 25;
    poppy.pop = function (type, title, message, callback) {
        var popup;
        switch (type) {
            case 'success':
                popup = Object.create(poppy.popupSuccess).constructor('success', title, message);
                break;
            case 'info':
                popup = Object.create(poppy.popupInfo).constructor('info', title, message);
                break;
            case 'error':
                popup = Object.create(poppy.popupError).constructor('error', title, message);
                break;
            case 'warning':
                popup = Object.create(poppy.popupWarning).constructor('warning', title, message, callback);
                break;
        }

        var view = createPopupView(popup);

        processPopup(view, popup);
    };

    function fadeIn(domView) {
        var opacity = 0.1;
        var timer = setInterval(function () {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            domView.style.opacity = opacity;
            domView.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity += opacity * 0.1;
        }, fadeDuration);
    }

    function fadeOut(domView) {
        var opacity = 1;
        var timer = setInterval(function () {
            if (opacity <= 0.1) {
                clearInterval(timer);
                document.body.removeChild(domView);
            }
            domView.style.opacity = opacity;
            domView.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
            opacity -= opacity * 0.1;
        }, fadeDuration);
    }

    function processPopup(domView, popup) {
        document.body.appendChild(domView);

        fadeIn(domView);

        if (popup._popupData.closeButton) {
            var button = domView.querySelector('.poppy-close-button');
            button.addEventListener('click', function () {
                fadeOut(domView);
            }, false);
        } else if (popup._popupData.autoHide) {
            setTimeout(function () {
                fadeOut(domView)
            }, popup._popupData.timeout);
        } else if (popup._popupData.callback) {
            domView.addEventListener('click', popup._popupData.callback)
        }
    }
})(poppy);

poppy.pop('success', 'Success', 'You have successfully logged in.');
poppy.pop('info', 'Did you know...?', 'Nakov is only 22 years old.');
poppy.pop('error', 'Error', 'Invalid username/password.');
poppy.pop('warning', 'Attention!', 'You are our 100th visitor.', redirect);

function redirect() {
    window.location = 'https://www.youtube.com/watch?v=HMUDVMiITOU';
}