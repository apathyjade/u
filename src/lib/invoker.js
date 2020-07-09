
function invoker() {
    let executor = () => {
        throw new Error('pleace register worker')
    }
    function invoke(...arg) {
        return executor(...arg);
    }
    invoke.register = (fn) => {
        if (typeof fn !== 'function') {
            throw new Error('register worker must function')
        }
        executor = fn
    }
    return invoke;
}
