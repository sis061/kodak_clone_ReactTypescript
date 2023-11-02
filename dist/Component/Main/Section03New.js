"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./Section03New.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var react_1 = require("react");
// --data 파일 import--
var axios_1 = require("axios");
// import data from '../data/data';
var data_Section03_New_1 = require("../../data/data_Section03_New");
function Section03New() {
    var _a = (0, react_1.useState)(1), count = _a[0], setCount = _a[1];
    var _b = (0, react_1.useState)(data_Section03_New_1.default), items = _b[0], setItems = _b[1];
    var _c = (0, react_1.useState)(false), show = _c[0], setShow = _c[1];
    var res1 = (0, react_1.useState)([16, 17, 18, 19, 31, 32, 33, 34, 35, 36, 37, 38])[0];
    // --멀티탭 구성--
    return ((0, jsx_runtime_1.jsx)("div", { className: 'slide_productlist', children: (0, jsx_runtime_1.jsxs)("div", { className: 'tabs', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'title', children: [(0, jsx_runtime_1.jsx)("div", { className: 'sectionTit', children: "\uC2E0\uC0C1\uD488" }), (0, jsx_runtime_1.jsx)("p", { className: 'subTit', children: "NEW ARRIVALS" })] }), (0, jsx_runtime_1.jsx)("div", { className: 'tabContent Section3tab', children: (0, jsx_runtime_1.jsx)("div", { className: 'container', children: (0, jsx_runtime_1.jsx)("div", { className: "row", children: items.map(function (ele, index) {
                                console.log(ele);
                                return ((0, jsx_runtime_1.jsx)(ProdTab1, { items: items[index], res1: res1, i: index }, ele.id));
                            }) }) }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", 
                    // count={count}
                    onClick: function () {
                        if (count === 1) {
                            axios_1.default.get('https://sis061.github.io/kodakCloneData/section3_data2.json').then(function (result) {
                                var copy10 = __spreadArray(__spreadArray([], items, true), result.data, true);
                                setItems(copy10);
                                setCount(2);
                            });
                        }
                        else if (count === 2) {
                            axios_1.default.get('https://sis061.github.io/kodakCloneData/section3_data3.json').then(function (result) {
                                var copy11 = __spreadArray(__spreadArray([], items, true), result.data, true);
                                setItems(copy11);
                                setCount(3);
                            });
                        }
                        if (count === 3) {
                            setShow(true);
                        }
                    }, children: "VIEW MORE" }), ' ', (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Alert, { show: show, variant: "light success", children: [(0, jsx_runtime_1.jsx)("p", { children: "\uB354 \uC774\uC0C1 \uC0C1\uD488\uC774 \uC5C6\uC2B5\uB2C8\uB2E4." }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex justify-content-end", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { onClick: function () { return setShow(false); }, variant: "outline-success", children: "CLOSE" }) })] })] }) }));
}
// --멀티페이지 내용 props--
function ProdTab1(props) {
    var navigate = (0, react_router_dom_1.useNavigate)();
    // --Hover Effect 구성--
    var _a = (0, react_1.useState)(false), isHovering = _a[0], setIsHovering = _a[1];
    var handleMouseOver = function () {
        setIsHovering(true);
    };
    var handleMouseOut = function () {
        setIsHovering(false);
    };
    //  --천 원 단위 , 찍어주는 함수--
    var returnWon = function (price) {
        var returnString = price === null || price === void 0 ? void 0 : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return returnString;
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "col-md-3 tabItem Section3tabItem", children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav.Link, { onClick: function () { navigate('/detail/' + props.res1[props.i]); }, className: "c1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "prodImg", onMouseOver: handleMouseOver, onMouseOut: handleMouseOut, children: [(0, jsx_runtime_1.jsx)("div", { className: 'prodImgBg' }), (0, jsx_runtime_1.jsx)("img", { src: props.items.imgUrl, alt: props.items.alt, className: isHovering ? 'prodImgChg' : '' })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'tabInfo', children: [(0, jsx_runtime_1.jsx)("span", { children: props.items.title }), (0, jsx_runtime_1.jsxs)("span", { children: [returnWon(props.items.price), "\uC6D0"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "tabIcon ".concat((isHovering ? 'prodIconChg' : '')), children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/011_heart_icon.png', alt: '#' }), (0, jsx_runtime_1.jsx)("img", { src: 'img/012_cart_icon.png', alt: '#' })] })] }) }));
}
;
exports.default = Section03New;
//# sourceMappingURL=Section03New.js.map