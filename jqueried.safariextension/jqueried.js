function handleMessage(msgEvent) {

   var messageName = msgEvent.name;

   var messageData = msgEvent.message;

   if (messageName === "jqueried") {


        var message = document.getElementById("jqueried-first-message");

        if (message === null) {

            // Insert jQuery Script Tag
            var element = document.createElement("script");

            var src = safari.extension.baseURI + "jquery-1.6.2.min.js";

            element.setAttribute("src", src);

            document.body.insertBefore(element, document.body.firstChild);

            // Insert CSS
            var css = document.createElement("link");

            var src = safari.extension.baseURI + "jqueried.css";

            css.setAttribute("type", "text/css");
            css.setAttribute("rel", "stylesheet");
            css.setAttribute("href", src);

            document.body.insertBefore(css, document.body.firstChild);

            // Insert Message Div
            var div = document.createElement("div");

            div.setAttribute("class", "jqueried-message");
            div.setAttribute("id", "jqueried-first-message");

            div.textContent = "Added jQuery 1.6.2";

            document.body.insertBefore(div, document.body.firstChild);

        } else {

            // Insert Message Div
            var div = document.createElement("div");

            div.setAttribute("class", "jqueried-message");

            div.textContent = "jQuery Already Added";

            document.body.insertBefore(div, document.body.firstChild);
        }

    }

}

safari.self.addEventListener("message", handleMessage, false);
