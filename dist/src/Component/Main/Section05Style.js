"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
require("../../App.css");
require("./Section05Style.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
function Section05Style(_a) {
    var settings = {
        dots: false,
        fade: false,
        arrow: false,
        nextArrow: (0, jsx_runtime_1.jsx)(NextArrow, { onClick: onclick }),
        prevArrow: (0, jsx_runtime_1.jsx)(PrevArrow, { onClick: onclick }),
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        // beforeChange: (_, newIndex) => {
        // 	setCurrentIndex(newIndex);
        // }
    };
    var items = (0, react_1.useState)([1, 2, 3, 4, 5, 6, 7, 8, 9])[0];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'slide_productlist Section05', children: (0, jsx_runtime_1.jsxs)("div", { className: 'tabs', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'title', children: [(0, jsx_runtime_1.jsx)("div", { className: 'sectionTit', children: "\uCF54\uB2E5 \uC2A4\uD0C0\uC77C" }), (0, jsx_runtime_1.jsx)("p", { className: 'subTit', children: "KODAK STYLE" })] }), (0, jsx_runtime_1.jsx)("div", { className: 'SliderWrapper', children: (0, jsx_runtime_1.jsx)(react_slick_1.default, __assign({}, settings, { children: items.map(function (ele, index) {
                            return ((0, jsx_runtime_1.jsx)(SliderItem, { items: items[index] }, index));
                        }) })) })] }) }));
}
function SliderItem(props) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --Hover Effect 구성--
    var _a = (0, react_1.useState)(false), isHovering = _a[0], setIsHovering = _a[1];
    var handleMouseOver = function (e) {
        setIsHovering(true);
    };
    var handleMouseOut = function (e) {
        setIsHovering(false);
    };
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/' + (props.items + 25)); }, children: (0, jsx_runtime_1.jsx)("img", { className: isHovering ? 'styleImgChg' : '', onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, src: 'img/section05_00' + props.items + '.jpg', alt: props.items.toString() }) }) }));
}
// --Slider Arrow Style--
var arrowNextStyle = {
    position: 'absolute',
    top: '40%',
    right: '-80px',
    zIndex: '5',
    backgroundImage: 'url(/img/009_next_btn.png)',
    width: '30px',
    height: '90px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    cursor: 'pointer'
};
var arrowPrevStyle = {
    position: 'absolute',
    top: '40%',
    left: '-80px',
    zIndex: '5',
    backgroundImage: 'url(/img/010_prev_btn.png)',
    width: '30px',
    height: '90px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    cursor: 'pointer'
};
function NextArrow(props) {
    var onClick = props.onClick;
    return ((0, jsx_runtime_1.jsx)("div", { onClick: onClick, style: arrowNextStyle }));
}
function PrevArrow(props) {
    var onClick = props.onClick;
    return ((0, jsx_runtime_1.jsx)("div", { onClick: onClick, style: arrowPrevStyle }));
}
exports.default = Section05Style;
//# sourceMappingURL=Section05Style.js.map