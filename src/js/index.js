import "../scss/main.scss";
import "../index.html"
import * as n from "./navbar";
import * as f from "./fullpage";

$(document).ready(function() {
    if (!!navigator.userAgent.match(/(android|iphone)/gi)) {
        screen.orientation.lock("portrait-primary");
    }
    n.navbar();
    f.startFullpage();
});