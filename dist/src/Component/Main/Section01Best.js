"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./Section01Best.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
// --data 파일 import--
var data_1 = require("../../data/data");
function Section01Best() {
    // --멀티탭 구성--
    var _a = (0, react_1.useState)(1), view = _a[0], setView = _a[1];
    var res = " ";
    if (view === 1) {
        res = (0, jsx_runtime_1.jsx)(BestTotal, { items: [], res1: [] });
    }
    else if (view === 2) {
        res = (0, jsx_runtime_1.jsx)(BestOuter, { items: [], res1: [] });
    }
    else if (view === 3) {
        res = (0, jsx_runtime_1.jsx)(BestTop, { items: [], res1: [] });
    }
    else {
        res = (0, jsx_runtime_1.jsx)(BestBottom, { items: [], res1: [] });
    }
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --멀티탭 구성--
    return ((0, jsx_runtime_1.jsx)("div", { className: 'slide_productlist', children: (0, jsx_runtime_1.jsxs)("div", { className: 'tabs', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'title', children: [(0, jsx_runtime_1.jsx)("div", { className: 'sectionTit', children: "\uBCA0\uC2A4\uD2B8 \uC544\uC774\uD15C" }), (0, jsx_runtime_1.jsx)("p", { className: 'subTit', children: "BEST ITEM" })] }), (0, jsx_runtime_1.jsx)("div", { className: 'tabList', children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "text-grey justify-content-center fw-bold ", variant: "underline", defaultActiveKey: "#0", as: "ul", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: '', eventKey: "#0", onClick: function () { setView(1); }, children: "\uC804\uCCB4" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { eventKey: "#1", href: '', onClick: function () { setView(2); }, children: "\uC544\uC6B0\uD130" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { eventKey: "#2", href: '', onClick: function () { setView(3); }, children: "\uC0C1\uC758" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { eventKey: "#3", href: '', onClick: function () { setView(4); }, children: "\uD558\uC758" }) })] }) }), res, (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { navigate('/detail/12'); }, className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", children: "VIEW MORE" }), ' '] }) }));
}
// --멀티페이지 Modal 1 전체--
function BestTotal(props) {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([0, 1, 2, 3])[0];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'tabContent', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: items.slice(0, 4).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(ProdTab1, { items: ele, res1: res1, i: index }, ele.id)); }) }) }) }));
}
;
// --멀티페이지 Modal 2 아우터--
function BestOuter(props) {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([4, 5, 6, 7])[0];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'tabContent', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: items.slice(4, 8).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(ProdTab1, { items: ele, res1: res1, i: index }, ele.id)); }) }) }) }));
}
;
// --멀티페이지 Modal 3 상의--
function BestTop(props) {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([8, 9, 10, 11])[0];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'tabContent', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: items.slice(8, 12).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(ProdTab1, { items: ele, res1: res1, i: index }, ele.id)); }) }) }) }));
}
;
// --멀티페이지 Modal 4 하의--
function BestBottom(props) {
    var items = (0, react_1.useState)(data_1.default)[0];
    var res1 = (0, react_1.useState)([12, 13, 14, 15])[0];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'tabContent', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: items.slice(12, 16).map(function (ele, index) { return ((0, jsx_runtime_1.jsx)(ProdTab1, { items: ele, res1: res1, i: index }, ele.id)); }) }) }) }));
}
;
// --멀티페이지 내용 props--
function ProdTab1(props) {
    // --Hover Effect 구성--
    var _a = (0, react_1.useState)(false), isHovering = _a[0], setIsHovering = _a[1];
    var handleMouseOver = function () {
        setIsHovering(true);
    };
    var handleMouseOut = function () {
        setIsHovering(false);
    };
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "col-md-3 tabItem", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/' + props.res1[props.i]); }, className: "c1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "prodImg  ".concat((isHovering ? 'prodImgChg' : '')), onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, children: [(0, jsx_runtime_1.jsx)("div", { className: 'prodImgBg' }), (0, jsx_runtime_1.jsx)("img", { src: props.items.imgUrl, alt: props.items.alt, className: isHovering ? 'prodImginactive' : 'prodImgactive' }), (0, jsx_runtime_1.jsx)("img", { src: props.items.imgUrlSub, alt: props.items.alt, className: isHovering ? 'prodImgactive' : 'prodImginactive' })] }), (0, jsx_runtime_1.jsxs)("div", { className: "tabInfo ".concat((isHovering ? 'tabInfoChg' : '')), children: [(0, jsx_runtime_1.jsx)("span", { children: props.items.title }), (0, jsx_runtime_1.jsxs)("span", { children: [(props.items.price).toLocaleString(), "\uC6D0"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'tabIcon', children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/011_heart_icon.png', alt: '\uCC1C \uC544\uC774\uCF58' }), (0, jsx_runtime_1.jsx)("img", { src: 'img/012_cart_icon.png', alt: '\uC7A5\uBC14\uAD6C\uB2C8 \uC544\uC774\uCF58' })] })] }) }));
}
;
exports.default = Section01Best;
//# sourceMappingURL=Section01Best.js.map