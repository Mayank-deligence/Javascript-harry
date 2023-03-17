
// callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.onload = function () {
        console.log("Loaded script with SRC: " + src)
        callback(null, src);
    }
    script.onerror = function () {
        console.log("error loading script with src" + src)
        callback(new Error("Src got error"))
    }
    script.src = src;
    document.body.appendChild(script);
}
function hello(error, src) {
    if (error) {
        console.log(error);
        return
    }
    alert("Hello Mayank kese ho " + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
        console.log(error)
        sendEmergencyMessageToCeo();
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
        if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                console.log(error)
                sendEmergencyMessageToCeo();
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                        console.log(error)
                        sendEmergencyMessageToCeo();
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                        if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                console.log(error)
                                sendEmergencyMessageToCeo();
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                            })
                        })
                    })
                })
            })
        })
    })
})
// in this code error is there but this is only for understanding purpose
// here the problem of callback hell is generated or pyramid of DOM is generated