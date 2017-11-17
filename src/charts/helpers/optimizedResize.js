// Optimized resize handler based on https://developer.mozilla.org/en-US/docs/Web/Events/resize

const optimizedResize = (function() {

    let callbacks = [];
    let running = false;
    let cachedWidth = window.innerWidth;

    // run the actual callbacks
    const runCallbacks = () => {

        callbacks.forEach((callback) => {
            callback();
        });

        running = false;
    };

    // fired on resize event
    const resize = () => {

        if (!running) {
            running = true;

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            } else {
                setTimeout(runCallbacks, 66);
            }
        }
    };

    const resizeHorizontal = () => {
        let newWidth = window.innerWidth;

        if (cachedWidth !== newWidth) {
            cachedWidth = newWidth;

            if (!running) {
                running = true;

                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(runCallbacks);
                } else {
                    setTimeout(runCallbacks, 66);
                }
            }
        }
    };

    // adds callback to loop
    const addCallback = (callback) => {

        if (callback) {
            callbacks.push(callback);
        }
    };

    return {
        // public method to add additional callback
        add(callback) {
            if (!callbacks.length) {
                window.addEventListener('resize', resize);
            }
            addCallback(callback);
        },
        addHorizontal(callback) {
            if (!callbacks.length) {
                window.addEventListener('resize', resizeHorizontal);
            }
            addCallback(callback);
        },
        remove() {
            window.removeEventListener('resize', resize);
            window.removeEventListener('resize', resizeHorizontal);
        },
    };

}());

export default optimizedResize;
