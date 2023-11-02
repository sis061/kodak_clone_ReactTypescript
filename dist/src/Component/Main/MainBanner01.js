"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("bootstrap/dist/css/bootstrap.min.css");
require("../../App.css");
require("./MainBanner01.css");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
function MainBanner01() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsx)("div", { className: 'bannerWrap', children: (0, jsx_runtime_1.jsxs)("div", { className: 'bannerBox', children: [(0, jsx_runtime_1.jsx)("img", { src: 'img/banner_01.jpg', alt: '\uBC30\uB108 01' }), (0, jsx_runtime_1.jsxs)("div", { className: 'bannerTxtWrap', children: [(0, jsx_runtime_1.jsxs)("p", { className: 'title', children: ["\uC774\uC6D4 \uC0C1\uD488", (0, jsx_runtime_1.jsx)("br", {}), "\uC2A4\uD398\uC15C \uAE30\uD68D\uC804"] }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: 'sectionVeiwMoreBtn rounded-0 fs-10p fw-bold', variant: "outline-secondary", onClick: function () { navigate('/detail/10'); }, children: "VIEW MORE" }), ' '] })] }) }));
}
exports.default = MainBanner01;
//# sourceMappingURL=MainBanner01.js.map