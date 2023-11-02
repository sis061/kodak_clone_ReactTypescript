"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.deleteItem = exports.addItem = exports.decreaseCount = exports.addCount = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var cart = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState: [
        {
            id: 0,
            imgUrl: "/img/section01_product001_front.jpg",
            title: "페그 BLACK",
            price: 109000,
            count: 2,
        },
        {
            id: 1,
            imgUrl: "/img/section01_product002_front.jpg",
            title: "케이 마이크로플리스 안감형 자켓 BLACK",
            price: 219000,
            count: 1,
        },
        {
            id: 2,
            imgUrl: "/img/section01_product003_front.jpg",
            title: "레터링 릴렉스핏 볼캡 BLACK",
            price: 45000,
            count: 1,
        },
    ],
    reducers: {
        addCount: function (state, action) {
            var num = state.findIndex(function (a) {
                return a.id === action.payload;
            });
            state[num].count++;
        },
        decreaseCount: function (state, action) {
            var num = state.findIndex(function (a) {
                return a.id === action.payload;
            });
            console.log(num);
            if (state[num].count > 0) {
                state[num].count--;
            }
            else if (state[num].count === 0) {
                alert("상품이 더 이상 없습니다.");
            }
        },
        addItem: function (state, action) {
            var num = state.findIndex(function (a) { return a.id === action.payload.id; });
            if (num !== -1) {
                // console.log(action.payload.count);
                // console.log(state[num].count);
                // 장바구니에 상품 있으면 지정 상품 갯수 만큼 추가 함수
                var numAdd = function () {
                    state[num].count = state[num].count + action.payload.count;
                };
                numAdd();
            }
            else {
                state.push(action.payload);
            }
        },
        deleteItem: function (state, action) {
            console.log(action.payload);
            action.payload.data.checkItems.forEach(function (v) {
                var idx = state.findIndex(function (o) {
                    return o.id === v;
                });
                state.splice(idx, 1);
            });
        },
        deleteAll: function (state, action) {
            var num = state.findIndex(function (a) {
                return a.id === action.payload;
            });
            state.splice(num + 1);
        },
    },
});
// addCount(1)
exports.addCount = (_a = cart.actions, _a.addCount), exports.decreaseCount = _a.decreaseCount, exports.addItem = _a.addItem, exports.deleteItem = _a.deleteItem, exports.deleteAll = _a.deleteAll;
exports.default = (0, toolkit_1.configureStore)({
    reducer: {
        cart: cart.reducer,
    },
});
//# sourceMappingURL=store.js.map