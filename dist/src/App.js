"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("./App.css");
var react_router_dom_1 = require("react-router-dom");
var Header_1 = require("./Component/Common/Header");
var Main_1 = require("./Component/Main/Main");
var Footer_1 = require("./Component/Common/Footer");
var Detail_1 = require("./Component/Sub/Detail");
var Cart_1 = require("./Component/Sub/Cart");
var NotFound_1 = require("./Component/Sub/NotFound");
var Login_1 = require("./Component/Sub/Login");
var react_1 = require("react");
var data_1 = require("./data/data");
function App() {
    var items = (0, react_1.useState)(data_1.default);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Main_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/detail/:id", element: (0, jsx_runtime_1.jsx)(Detail_1.default, { items: items }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/cart", element: (0, jsx_runtime_1.jsx)(Cart_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}) })] }), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
}
exports.default = App;
//# sourceMappingURL=App.js.map