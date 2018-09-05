if (typeof pd === "undefined") {
    const p = function () {
        let i;

        for (i = 0; i < arguments.length; i++) {
            if (typeof(arguments[i]) === "object") {
                try {
                    arguments[i] = JSON.stringify(arguments[i], null, 2)
                } catch (e) {}
            }
        }
        console.log(...arguments)
    }

    const pd = function () {
        p(...arguments)
        process.exit();
    }

    global.pd = pd;
    global.p = p;
}
