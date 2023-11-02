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
require("./MainSlider.css");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
function MainSlider() {
    var _a = (0, react_1.useState)(0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var items = (0, react_1.useState)([1, 2, 3, 4, 5, 6])[0];
    var settings = {
        dots: false,
        fade: false,
        arrow: false,
        nextArrow: (0, jsx_runtime_1.jsx)(NextArrow, {}),
        prevArrow: (0, jsx_runtime_1.jsx)(PrevArrow, {}),
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: function (_, newIndex) {
            setCurrentIndex(newIndex);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'main_slider', children: [(0, jsx_runtime_1.jsx)(react_slick_1.default, __assign({}, settings, { children: items.map(function (ele, index) {
                    return ((0, jsx_runtime_1.jsx)(SliderItem, { items: items[index] }, index));
                }) })), (0, jsx_runtime_1.jsx)("div", { className: 'carousel_pagnation_wrap', children: (0, jsx_runtime_1.jsxs)("span", { className: 'carousel_pagnation', children: [currentIndex + 1, "/6"] }) })] }));
}
function SliderItem(props) {
    return ((0, jsx_runtime_1.jsx)("div", { className: 'main_slider_carousel carousel-' + props.items, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { href: "/home" }) }));
}
// --Slider Arrow Style--
var arrowNextStyle = {
    position: 'absolute',
    top: '50%',
    right: '15px',
    zIndex: '5',
    backgroundImage: 'url(/img/009_next_btn.png)',
    width: '20px',
    height: '50px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    cursor: 'pointer'
};
var arrowPrevStyle = {
    position: 'absolute',
    top: '50%',
    left: '15px',
    zIndex: '5',
    backgroundImage: 'url(/img/010_prev_btn.png)',
    width: '20px',
    height: '50px',
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
exports.default = MainSlider;
//# sourceMappingURL=MainSlider.js.map