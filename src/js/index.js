import "../scss/main.scss";
import "../index.html"
import * as n from "./navbar";
import * as f from "./fullpage";


$(document).ready(function() {
    n.navbar();
    f.startFullpage();
});