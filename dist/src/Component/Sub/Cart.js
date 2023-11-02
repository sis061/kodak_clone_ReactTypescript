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
var react_1 = require("react");
require("../../App.css");
require("./Cart.css");
var react_redux_1 = require("react-redux");
var store_1 = require("../../store");
var react_router_dom_1 = require("react-router-dom");
var react_bootstrap_1 = require("react-bootstrap");
var ScrollTop_1 = require("../../ScrollTop");
exports.default = Cart;
function Cart() {
    var state = (0, react_redux_1.useSelector)(function (state) { return state; });
    var Cart = state.cart;
    // console.log(Cart[index].name);
    var dispatch = (0, react_redux_1.useDispatch)();
    // 체크된 아이템을 담을 배열
    var _a = (0, react_1.useState)([]), checkItems = _a[0], setCheckItems = _a[1];
    // 체크박스 단일 선택
    var handleSingleCheck = function (checked, id) {
        if (checked) {
            // 단일 선택 시 체크된 아이템을 배열에 추가
            setCheckItems(function (prev) { return __spreadArray(__spreadArray([], prev, true), [id], false); });
        }
        else {
            // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
            setCheckItems(checkItems.filter(function (el) { return el !== id; }));
        }
    };
    // 체크박스 전체 선택
    var handleAllCheck = function (checked) {
        if (checked) {
            // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
            var idArray_1 = [];
            Cart.forEach(function (el) { return idArray_1.push(el.id); });
            setCheckItems(idArray_1);
        }
        else {
            // 전체 선택 해제 시 checkItems 를 빈 배열로 초기화
            setCheckItems([]);
        }
    };
    // 선택 항목 삭제 함수
    var deleteHandler = function () {
        dispatch({
            type: store_1.deleteItem,
            payload: {
                data: {
                    checkItems: checkItems
                }
            },
        });
        // 초기화
        setCheckItems([]);
    };
    (0, react_1.useEffect)(function () {
        if (Cart.length === 0) {
            setIsVisible(true);
        }
    }, [Cart]);
    var _b = (0, react_1.useState)(false), isVisible = _b[0], setIsVisible = _b[1];
    // console.log(isVisible);
    var cartEmptyHandler = function () {
        setIsVisible(true);
    };
    // 주문금액 합계
    var TotalPriceMap = Cart.map(function (a, index) { return Cart[index].price * Cart[index].count; });
    var TotalPriceNum = TotalPriceMap.reduce(function (a, b) { return a + b; }, 0);
    // 배송비 : 주문금액 5만원 이상 || 장바구니 비어 있을때 배송비 0원
    var Shipping = function () {
        return TotalPriceNum > 49999 || isVisible ? 0 : 2500;
    };
    var ShippingNum = Shipping();
    return ((0, jsx_runtime_1.jsxs)("div", { id: "sub", children: [(0, jsx_runtime_1.jsx)(ScrollTop_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: "cartWrap", children: [(0, jsx_runtime_1.jsx)("div", { className: "titleArea", children: (0, jsx_runtime_1.jsx)("h2", { children: "CART" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "cartContents", children: [(0, jsx_runtime_1.jsx)("div", { className: "cartListArea", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Table, { children: (0, jsx_runtime_1.jsxs)("tbody", { children: [Cart.map(function (a, index) { return ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsxs)("td", { className: "cartList", children: [(0, jsx_runtime_1.jsx)("div", { className: "selectBtn", children: (0, jsx_runtime_1.jsx)("input", { type: "checkbox", name: "select-".concat(Cart[index].id), onChange: function (e) {
                                                                    return handleSingleCheck(e.target.checked, Cart[index].id);
                                                                }, checked: checkItems.includes(Cart[index].id)
                                                                    ? true
                                                                    : false }) }), (0, jsx_runtime_1.jsx)("div", { className: "cartImg", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/detail/".concat(Cart[index].id), children: (0, jsx_runtime_1.jsx)("img", { src: Cart[index].imgUrl, alt: Cart[index].title }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "cartTitle", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/detail/".concat(Cart[index].id), children: (0, jsx_runtime_1.jsx)("strong", { children: Cart[index].title }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "cartPrice", children: (0, jsx_runtime_1.jsxs)("strong", { children: [(Cart[index].price).toLocaleString(), " \uC6D0"] }) }), (0, jsx_runtime_1.jsx)("div", { className: "cartQuantity", children: (0, jsx_runtime_1.jsxs)("span", { className: "quantity", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", disabled: Cart[index].count === 1, "aria-label": "\uC218\uB7C9 \uB0B4\uB9AC\uAE30", onClick: function () {
                                                                            return dispatch((0, store_1.decreaseCount)(Cart[index].id));
                                                                        }, className: "QuantityDown down", children: "-" }), (0, jsx_runtime_1.jsx)("input", { id: "quantity", type: "number", min: 1, value: Cart[index].count, max: 10, readOnly: true }), (0, jsx_runtime_1.jsx)("button", { type: "button", disabled: Cart[index].count > 99, "aria-label": "\uC218\uB7C9 \uC62C\uB9AC\uAE30", onClick: function () {
                                                                            return dispatch((0, store_1.addCount)(Cart[index].id));
                                                                        }, className: "QuantityUp up", children: "+" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "cartPriceTotal", children: (0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsxs)("b", { children: [(Cart[index].price * Cart[index].count).toLocaleString(), " ", "\uC6D0"] }) }) })] }) }, index)); }), (0, jsx_runtime_1.jsx)("tr", { className: isVisible ? "" : "cartListEmpty", children: (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("div", { className: "cartListEmptyBox", children: (0, jsx_runtime_1.jsx)("p", { children: "\uC7A5\uBC14\uAD6C\uB2C8\uAC00 \uBE44\uC5B4 \uC788\uC2B5\uB2C8\uB2E4." }) }) }) })] }) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "cartBtnArea", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", id: "cartAllChk", name: "select-all", onChange: function (e) { return handleAllCheck(e.target.checked); }, checked: checkItems.length === Cart.length ? true : false }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "cartAllChk", children: "\uC804\uCCB4\uC120\uD0DD" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: deleteHandler, children: "\uC120\uD0DD\uC0C1\uD488\uC0AD\uC81C" }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: function () {
                                            alert("장바구니를 비우시겠습니까?");
                                            dispatch((0, store_1.deleteAll)(Cart));
                                            cartEmptyHandler();
                                        }, children: "\uC7A5\uBC14\uAD6C\uB2C8 \uBE44\uC6B0\uAE30" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "cartOrderArea", children: [(0, jsx_runtime_1.jsxs)("div", { className: "orderPrice", children: [(0, jsx_runtime_1.jsx)("p", { children: "\uC8FC\uBB38\uAE08\uC561" }), (0, jsx_runtime_1.jsx)("div", { className: "orderPriceNum", children: (0, jsx_runtime_1.jsxs)("strong", { children: [TotalPriceNum.toLocaleString(), " \uC6D0"] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "orderPrice", children: [(0, jsx_runtime_1.jsx)("p", { children: "\uBC30\uC1A1\uBE44" }), (0, jsx_runtime_1.jsx)("div", { className: "orderPriceNum", children: (0, jsx_runtime_1.jsxs)("strong", { children: [ShippingNum.toLocaleString(), " \uC6D0"] }) }), (0, jsx_runtime_1.jsx)("span", { children: "\u203B 50,000\uC6D0 \uC774\uC0C1 \uC8FC\uBB38 \uC2DC \uBC30\uC1A1\uBE44 \uBB34\uB8CC" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "orderPriceFinal", children: [(0, jsx_runtime_1.jsx)("p", { children: "\uD569\uACC4" }), (0, jsx_runtime_1.jsx)("div", { className: "orderPriceNum", children: (0, jsx_runtime_1.jsxs)("strong", { children: [(TotalPriceNum + ShippingNum).toLocaleString(), " \uC6D0"] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "clearfix" }), (0, jsx_runtime_1.jsxs)("div", { className: "orderBtnWrap", children: [(0, jsx_runtime_1.jsx)("div", { className: "orderBtn50 btnOrderAll", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uC804\uCCB4\uC0C1\uD488\uC8FC\uBB38" }) }), (0, jsx_runtime_1.jsx)("div", { className: "orderBtn50 btnOrderSelect", children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uC120\uD0DD\uC0C1\uD488\uC8FC\uBB38" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'btn_gift', children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: '', children: "\uC120\uBB3C\uD558\uAE30" }) }), (0, jsx_runtime_1.jsx)("div", { className: "naver_btnWrap", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/naver.png", alt: "\uB124\uC774\uBC84\uACB0\uC81C" }) })] })] })] })] })] }));
}
//# sourceMappingURL=Cart.js.map