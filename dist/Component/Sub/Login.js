"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("../../App.css");
require("./Login.css");
var ScrollTop_1 = require("../../ScrollTop");
exports.default = Login;
function Login() {
    var _a = (0, react_1.useState)(""), id = _a[0], setId = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var onEmailHandler = function (e) {
        setId(e.currentTarget.value);
    };
    var onPasswordHandler = function (e) {
        setPassword(e.currentTarget.value);
    };
    var onSubmitHandler = function (e) {
        e.preventDefault();
        setId('');
        setPassword('');
        // console.log('Email', Email);
        // console.log('Password', Password);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { id: "sub", children: [(0, jsx_runtime_1.jsx)(ScrollTop_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: "loginWrap", children: (0, jsx_runtime_1.jsx)("div", { className: "widthHolder", children: (0, jsx_runtime_1.jsx)("form", { children: (0, jsx_runtime_1.jsxs)("div", { className: "loginBox", children: [(0, jsx_runtime_1.jsx)("h3", { className: "loginBoxTitle", children: "Login" }), (0, jsx_runtime_1.jsxs)("fieldset", { children: [(0, jsx_runtime_1.jsx)("legend", { children: "\uD68C\uC6D0\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsx)("label", { className: "id", title: "\uC544\uC774\uB514", children: (0, jsx_runtime_1.jsx)("input", { id: "member_id", name: "member_id", "fw-filter": "isFill", "fw-label": "\uC544\uC774\uB514", "fw-msg": "", className: "inputTypeText", placeholder: "", value: id, onChange: onEmailHandler, type: "text" }) }), (0, jsx_runtime_1.jsx)("label", { className: "pw", title: "\uBE44\uBC00\uBC88\uD638", children: (0, jsx_runtime_1.jsx)("input", { id: "member_passwd", name: "member_passwd", "fw-filter": "isFill&isMin[4]&isMax[16]", "fw-label": "\uD328\uC2A4\uC6CC\uB4DC", "fw-msg": "", autoComplete: "off", value: password, onChange: onPasswordHandler, type: "password" }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', onClick: onSubmitHandler, className: "loginBtn", children: "\uB85C\uADF8\uC778" }), (0, jsx_runtime_1.jsx)("p", { className: "loginBoxTxtSmall", children: "\uC544\uC9C1 \uD68C\uC6D0\uC774 \uC544\uB2C8\uC2E0\uAC00\uC694? \uAC00\uC785 \uD6C4 \uCFE0\uD3F0 \uBC0F \uD3EC\uC778\uD2B8 \uC801\uB9BD \uB4F1\uC758 \uB2E4\uC591\uD55C \uD61C\uD0DD\uC744 \uBC1B\uC544\uBCF4\uC138\uC694." }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uBE44\uD68C\uC6D0 \uC8FC\uBB38\uC870\uD68C" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uC544\uC774\uB514\uCC3E\uAE30" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uBE44\uBC00\uBC88\uD638\uCC3E\uAE30" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uD68C\uC6D0\uAC00\uC785" }) })] })] })] }) }) }) })] }));
}
//# sourceMappingURL=Login.js.map