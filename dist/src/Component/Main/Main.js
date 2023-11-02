"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./MainReset.css");
var Floats_1 = require("../Common/Floats");
var MainSlider_1 = require("./MainSlider");
var Section01Best_1 = require("./Section01Best");
var Section02Brand_1 = require("./Section02Brand");
var MainBanner01_1 = require("./MainBanner01");
var Section03New_1 = require("./Section03New");
var Section04Rec_1 = require("./Section04Rec");
var Section05Style_1 = require("./Section05Style");
function Main() {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { id: 'main', children: (0, jsx_runtime_1.jsxs)("div", { id: 'container', children: [(0, jsx_runtime_1.jsx)(Floats_1.default, {}), (0, jsx_runtime_1.jsx)(MainSlider_1.default, { className: undefined, dots: false, fade: false, arrow: false, nextArrow: undefined, prevArrow: undefined, infinite: false, speed: 0, slidesToShow: 0, slidesToScroll: 0, autoplay: false, autoplaySpeed: 0, beforeChange: undefined }), (0, jsx_runtime_1.jsx)(Section01Best_1.default, {}), (0, jsx_runtime_1.jsx)(Section02Brand_1.default, {}), (0, jsx_runtime_1.jsx)(Section03New_1.default, {}), (0, jsx_runtime_1.jsx)(MainBanner01_1.default, {}), (0, jsx_runtime_1.jsx)(Section04Rec_1.default, {}), (0, jsx_runtime_1.jsx)(Section05Style_1.default, { dots: false, fade: false, arrow: false, nextArrow: undefined, prevArrow: undefined, infinite: false, speed: 0, slidesToShow: 0, slidesToScroll: 0, autoplay: 0, autoplaySpeed: 0, beforeChange: undefined })] }) }) }));
}
exports.default = Main;
//# sourceMappingURL=Main.js.map