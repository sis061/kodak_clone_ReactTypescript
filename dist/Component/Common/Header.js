"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./Header.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
function Header() {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'header', children: (0, jsx_runtime_1.jsxs)("div", { className: 'headerInner clearfix', children: [(0, jsx_runtime_1.jsx)(Logo, {}), (0, jsx_runtime_1.jsx)(GnbWrap, {}), (0, jsx_runtime_1.jsx)(UtilNavTop, {}), (0, jsx_runtime_1.jsx)(UtilNavBottom, {})] }) }));
}
function Logo() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --ScrollDown -> 헤더 css 변경--
    var _a = (0, react_1.useState)(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var updateScroll = function () {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', updateScroll);
    });
    var scrollTop = function () {
        window.scrollTo(0, 0);
    };
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/'); scrollTop(); }, className: "bi_wide ".concat((scrollPosition > 100 ? 'HeaderLogoChg' : '')), children: (0, jsx_runtime_1.jsx)("img", { src: '/img/001_bi_symbol.png', alt: '#' }) }));
}
;
function GnbWrap() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --ScrollDown -> 헤더 css 변경--
    var _a = (0, react_1.useState)(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var updateScroll = function () {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', updateScroll);
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: "gnbWrap", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "justify-content-center fw-bold", variant: "underline", defaultActiveKey: "/home", as: "ul", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/'); }, eventKey: "#0", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "SHOP" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/0'); }, eventKey: "#1", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "BEST" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/1'); }, eventKey: "#2", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "LOOKBOOK" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/2'); }, eventKey: "#3", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "KODAK STYLE" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/3'); }, eventKey: "#4", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "OUTLET" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { className: 'nav-item', as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/4'); }, eventKey: "#5", className: scrollPosition > 100 ? "HeaderColChg" : "", children: "Customer Service" }) })] }) }));
}
;
function UtilNavTop() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --ScrollDown -> 헤더 css 변경--
    var _a = (0, react_1.useState)(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var updateScroll = function () {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', updateScroll);
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'utilNavTop', children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar, { expand: "lg", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Collapse, { id: "responsive-navbar-nav", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "me-auto", as: "ul", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#1", onClick: function () { navigate('/login'); }, className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#2", onClick: function () { navigate('/login'); }, className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uD68C\uC6D0\uAC00\uC785" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#3", onClick: function () { navigate('/cart'); }, className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uC7A5\uBC14\uAD6C\uB2C8" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#4", className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "Q&A" })] }) }) }) }) }));
}
;
function UtilNavBottom() {
    // --ScrollDown -> 헤더 css 변경--
    var _a = (0, react_1.useState)(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var updateScroll = function () {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener('scroll', updateScroll);
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'utilNavBottom', children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '#', className: 'searchBtn', children: (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("img", { src: '/img/002_search_btn.png', alt: '#' }), "Kodak Apparel"] }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar, { expand: "lg", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Container, { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Navbar.Collapse, { id: "responsive-navbar-nav", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "me-auto", as: 'ul', children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#1", className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uB9AC\uBDF0" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#2", className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uAE30\uD68D\uC804" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "#3", className: scrollPosition > 100 ? "HeaderColChg" : "HeaderColOrig", as: "li", children: "\uC774\uBCA4\uD2B8" })] }) }) }) })] }));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map