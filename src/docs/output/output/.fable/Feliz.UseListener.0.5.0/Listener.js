
export const Impl_allowsPassiveEvents = (() => {
    let passive = false;
    try {
        if ((typeof window !== 'undefined') ? (typeof window.addEventListener === 'function') : false) {
            const options = Object.defineProperty({}, 'passive', {get () { (() => {
                passive = true;
            })() }});
            window.addEventListener("testPassiveEventSupport", (value) => {
                void value;
            }, options);
            window.removeEventListener("testPassiveEventSupport", (value_1) => {
                void value_1;
            }, options);
        }
    }
    catch (matchValue) {
    }
    return passive;
})();

