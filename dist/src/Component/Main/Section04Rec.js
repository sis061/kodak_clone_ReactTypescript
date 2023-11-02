"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./Section04Rec.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
var data_1 = require("../../data/data");
function Section04Rec() {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'slide_productlist Section04', children: (0, jsx_runtime_1.jsxs)("div", { className: 'tabs', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'title', children: [(0, jsx_runtime_1.jsx)("div", { className: 'sectionTit', children: "\uCD94\uCC9C \uC0C1\uD488" }), (0, jsx_runtime_1.jsx)("p", { className: 'subTit', children: "RECOMMENDED PRODUCTS" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { style: { marginTop: '46px' }, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(Section04Box01, {}), (0, jsx_runtime_1.jsx)(Section04Box02, {}), (0, jsx_runtime_1.jsx)(Section04Box03, {})] }) })] }) }));
}
;
// --상세페이지 Modal 1 모자--
function Section04Box01() {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([20, 21, 22])[0];
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "col sm section04Box", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/20'); }, className: "section04BoxTop", children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/section04_top_product001.jpg', alt: '#' }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopTit', children: "\uBAA8\uC790" }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopSubTit', children: "\uCF54\uB2E5\uB9CC\uC758 \uBB34\uB4DC\uAC00 \uB290\uAEF4\uC9C0\uB294 CAP" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { className: 'list-group', as: "ul", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup.Item, { as: "li", className: 'border-0', children: [items.slice(20, 23).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Section04List, { items: ele, res1: res1, i: index }, ele.id)); }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { navigate('/detail/21'); }, className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", children: "VIEW MORE" }), ' '] }) })] }));
}
;
// --상세페이지 Modal 2 신발--
function Section04Box02() {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([23, 24, 25])[0];
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "col sm section04Box", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/23'); }, className: "section04BoxTop", children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/section04_top_product002.jpg', alt: '#' }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopTit', children: "\uC2E0\uBC1C" }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopSubTit', children: "\uB370\uC77C\uB9AC\uD558\uAC8C \uC2E0\uAE30 \uC88B\uC740 \uCF54\uB2E5 \uC288\uC988" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { className: 'list-group', as: "ul", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup.Item, { as: "li", className: 'border-0', children: [items.slice(23, 26).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Section04List, { res1: res1, items: ele, i: index }, ele.id)); }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { navigate('/detail/24'); }, className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", children: "VIEW MORE" }), ' '] }) })] }));
}
;
// --상세페이지 Modal 3 가방--
function Section04Box03() {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([26, 27, 28])[0];
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "col sm section04Box", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/26'); }, className: "section04BoxTop", children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/section04_top_product003.jpg', alt: '#' }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopTit', children: "\uAC00\uBC29" }), (0, jsx_runtime_1.jsx)("p", { className: 'section04TopSubTit', children: "\uCF54\uB2E5 \uAC00\uBC29\uC73C\uB85C \uB098\uB9CC\uC758 \uC2A4\uD0C0\uC77C\uB9C1 \uC644\uC131" })] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.ListGroup, { className: 'list-group', as: "ul", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.ListGroup.Item, { as: "li", className: 'border-0', children: [items.slice(26, 29).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(Section04List, { items: ele, res1: res1, i: index }, ele.id)); }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { navigate('/detail/27'); }, className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", children: "VIEW MORE" }), ' '] }) })] }));
}
;
// --상세페이지 내용 props--
function Section04List(props) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/' + props.res1[props.i]); }, className: "section04BoxList", children: [(0, jsx_runtime_1.jsxs)("div", { className: "recImgBox", children: [(0, jsx_runtime_1.jsx)("div", { className: 'prodImgBg' }), (0, jsx_runtime_1.jsx)("img", { src: props.items.imgUrl, alt: props.items.alt })] }), (0, jsx_runtime_1.jsxs)("div", { className: "recInfo", children: [(0, jsx_runtime_1.jsx)("p", { className: 'recInfoTit', children: props.items.title }), (0, jsx_runtime_1.jsxs)("p", { className: 'recInfoSubTit', children: [(props.items.price).toLocaleString(), "\uC6D0"] })] })] }));
}
exports.default = Section04Rec;
//# sourceMappingURL=Section04Rec.js.map