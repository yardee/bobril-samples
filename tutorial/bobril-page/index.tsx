import * as b from "bobril";
import "bobrilstrap";
import * as routes from "./routes";
import "./node_modules/prismjs/plugins/toolbar/prism-toolbar";
import "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "./node_modules/prismjs/components/prism-bash";
import "./node_modules/prismjs/components/prism-jsx";
import "./node_modules/prismjs/components/prism-tsx";
import "./node_modules/prismjs/themes/prism.css";
//import "./node_modules/prism-themes/themes/prism-vs.css";
b.asset("node_modules/bootswatch/cerulean/bootstrap.min.css");

//b.selectorStyleDef("code", { backgroundColor: "transparent" });

b.routes(
  b.route(routes.main, [
    routes.gettingStarted,
    routes.moreTutorials,
    b.route(routes.ecoSystem),
    b.routeDefault(routes.gettingStarted)
  ])
);
