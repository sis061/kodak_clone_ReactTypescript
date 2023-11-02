"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("../../App.css");
var react_router_dom_1 = require("react-router-dom");
var ScrollTop_1 = require("../../ScrollTop");
function NotFound(props) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "sub", children: [(0, jsx_runtime_1.jsx)(ScrollTop_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { style: { textAlign: "center" }, children: [(0, jsx_runtime_1.jsx)("img", { src: "/img/4835105_404_icon.png", alt: "404 Not Found" }), (0, jsx_runtime_1.jsx)("h3", { style: { padding: "10px" }, children: "\uC694\uCCAD\uD558\uC2E0 \uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', onClick: function () {
                            navigate(-1);
                        }, children: (0, jsx_runtime_1.jsx)("h5", { style: { padding: "30px", marginBottom: "50px" }, children: "\uC774\uC804 \uD398\uC774\uC9C0\uB85C \uB3CC\uC544\uAC00\uAE30" }) })] }), (0, jsx_runtime_1.jsx)("div", { style: { clear: "both" } })] }));
}
exports.default = NotFound;
//# sourceMappingURL=NotFound.js.map