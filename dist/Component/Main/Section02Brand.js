"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./Section02Brand.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
function Section02Brand() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'slide_productlist Section02', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'title', children: [(0, jsx_runtime_1.jsx)("div", { className: 'sectionTit', children: "\uBE0C\uB79C\uB4DC \uC774\uC288" }), (0, jsx_runtime_1.jsx)("p", { className: 'subTit', children: "BRAND ISSUE" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { style: { marginTop: '40px' }, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "col section2Box", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/29'); }, className: "c1", children: (0, jsx_runtime_1.jsx)("img", { src: 'img/section02_item001.jpg', alt: '#' }) }), (0, jsx_runtime_1.jsx)("p", { className: 'section2Tit', children: "KODAK SET-UP ITEM" }), (0, jsx_runtime_1.jsx)("p", { className: 'section2SubTit', children: "\uCF54\uB514 \uAC71\uC815\uC5C6\uB294 \uC14B\uC5C5 \uC544\uC774\uD15C" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col section2Box", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/30'); }, className: "c1", children: (0, jsx_runtime_1.jsx)("img", { src: 'img/section02_item002.jpg', alt: '#' }) }), (0, jsx_runtime_1.jsx)("p", { className: 'section2Tit', children: "\uCF54\uB2E5 \uD0A4\uC988 \uC544\uC774\uD15C" }), (0, jsx_runtime_1.jsx)("p", { className: 'section2SubTit', children: "\uCF54\uB2E5\uC758 \uC544\uC774\uCF54\uB2C9\uD55C \uCEEC\uB7EC\uAC10\uACFC \uC138\uB828\uB41C \uB514\uC790\uC778" })] })] }) })] }));
}
exports.default = Section02Brand;
//# sourceMappingURL=Section02Brand.js.map