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
var react_1 = require("react");
require("../../App.css");
require("./Detail.css");
var react_slick_1 = require("react-slick");
require("slick-carousel/slick/slick.css");
require("slick-carousel/slick/slick-theme.css");
var react_bootstrap_1 = require("react-bootstrap");
var ScrollTop_1 = require("../../ScrollTop");
var react_router_dom_1 = require("react-router-dom");
var store_1 = require("../../store");
var react_redux_1 = require("react-redux");
// interface DetailProps {
//   items: {
//     id: number;
//     title: string;
//     price: number;
//     imgUrl: string;
//     imgUrlSub: string;
//     imgUrlDetail1: string;
//     imgUrlDetail2: string;
//     imgUrlDetail3: string;
//     imgUrlDetail4: string;
//     imgUrlDetail5?: string;
//     imgUrlDetailCleaning: string;
//     alt: string;
//   }
// }
function Detail(props) {
    // --ScrollDown -> 좌우 wrap 고정--
    var _a = (0, react_1.useState)(0), scrollPosition = _a[0], setScrollPosition = _a[1];
    var updateScroll = function () {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    (0, react_1.useEffect)(function () {
        window.addEventListener("scroll", updateScroll);
    });
    // -- prodDetail_L 탭 변수 : onclick -> 해당 위치로 Scroll--
    var Tabs = {
        0: useMoveScroll(),
        1: useMoveScroll(),
        2: useMoveScroll(),
        length: 3,
    };
    // --Slick Slider setting-
    var settings = {
        dots: true,
        fade: false,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "dots_custom",
    };
    // --URL params--
    var id = (0, react_router_dom_1.useParams)().id;
    var Ids = props.items[0][id];
    var _b = (0, react_1.useState)(1), quantity = _b[0], setQuantity = _b[1];
    // --상품 수량에 따라 숫자 카운트--
    var handleClickCounter = function (num) {
        setQuantity(function (prev) { return prev + num; });
    };
    // --센터 상품정보 이미지 갯수 조절 : 5개 일시 데이터 가져와서 이미지 표기--
    var _c = (0, react_1.useState)(true), isVisibleImg = _c[0], setisVisibleImg = _c[1];
    (0, react_1.useEffect)(function () {
        Ids.imgUrlDetail5 === undefined
            ? setisVisibleImg(false)
            : setisVisibleImg(true);
    }, [Ids.imgUrlDetail5]);
    console.log(Ids.imgUrlDetail5);
    // --장바구니 이동 팝업 변수--
    var _d = (0, react_1.useState)(true), isVisiblePop = _d[0], setIsVisiblePop = _d[1];
    return ((0, jsx_runtime_1.jsxs)("div", { id: "sub", children: [(0, jsx_runtime_1.jsx)(ScrollTop_1.default, {}), (0, jsx_runtime_1.jsx)(DetailToCart, { isVisiblePop: isVisiblePop, setIsVisiblePop: setIsVisiblePop }), (0, jsx_runtime_1.jsxs)("div", { className: "prodDetail", children: [(0, jsx_runtime_1.jsx)(ProdDetailLeft, { scrollPosition: scrollPosition, Ids: Ids, Tabs: Tabs }), (0, jsx_runtime_1.jsx)(ProdDetailCenter, { settings: settings, Ids: Ids, Tabs: Tabs, isVisibleImg: isVisibleImg }), (0, jsx_runtime_1.jsx)(ProdDetailRight, { scrollPosition: scrollPosition, Ids: Ids, quantity: quantity, handleClickCounter: handleClickCounter, isVisiblePop: isVisiblePop, setIsVisiblePop: setIsVisiblePop })] }), (0, jsx_runtime_1.jsx)("div", { style: { clear: "both" } }), (0, jsx_runtime_1.jsx)(Review, { Tabs: Tabs })] }));
}
// --prodDetail_L 목록 onclick -> 해당 위치로 Scroll 함수--
function useMoveScroll() {
    var element = (0, react_1.useRef)(null);
    var onMoveToElement = function () {
        var _a;
        (_a = element.current) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    return { element: element, onMoveToElement: onMoveToElement };
}
// -------left area-------
function ProdDetailLeft(_a) {
    var scrollPosition = _a.scrollPosition, Ids = _a.Ids, Tabs = _a.Tabs;
    return ((0, jsx_runtime_1.jsx)("div", { className: "prodDetail_L", children: (0, jsx_runtime_1.jsx)("div", { className: "\n              headArea ".concat((scrollPosition > 100 ? "detailLFixed" : " "), "\n            "), children: (0, jsx_runtime_1.jsxs)("div", { style: { margin: "0" }, children: [(0, jsx_runtime_1.jsx)("h2", { className: "prdtdetailtitle", children: Ids.title }), (0, jsx_runtime_1.jsxs)("h1", { className: "prdt_new_price", children: [Ids.price.toLocaleString(), "\uC6D0"] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Nav, { className: "container text-grey justify-content-center fw-bold", variant: "underline", as: "ul", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { className: "col", onClick: Tabs[0].onMoveToElement, children: "\uC0C1\uD488 \uC815\uBCF4" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { className: "col", onClick: Tabs[1].onMoveToElement, children: "\uBC30\uC1A1 \uC548\uB0B4" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Item, { as: "li", children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Nav.Link, { className: "col", onClick: Tabs[2].onMoveToElement, children: "REVIEW" }) })] })] }) }) }));
}
// -------centre img area-------
function ProdDetailCenter(_a) {
    var settings = _a.settings, Ids = _a.Ids, Tabs = _a.Tabs, isVisibleImg = _a.isVisibleImg;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "prodDetail_C", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_slick_1.default, __assign({}, settings, { children: [(0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrl, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlSub, alt: Ids.alt })] })) }), (0, jsx_runtime_1.jsx)("div", { className: "prdtBottom", children: (0, jsx_runtime_1.jsxs)("div", { className: "prodtAdditional", children: [(0, jsx_runtime_1.jsx)("img", { src: "/img/SubImg/detail_common_clear.jpg", alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { ref: Tabs[0].element, src: "/img/SubImg/detail_common_about.jpg", alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetail1, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetail2, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetail3, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetail4, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetail5, alt: Ids.alt, className: isVisibleImg ? "" : "detailHidden" }), (0, jsx_runtime_1.jsx)("img", { src: Ids.imgUrlDetailCleaning, alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { src: "/img/SubImg/detail_common_license.jpg", alt: Ids.alt }), (0, jsx_runtime_1.jsx)("img", { ref: Tabs[1].element, src: "/img/SubImg/detail_common_deliver.jpg", alt: Ids.alt })] }) })] }));
}
// -------right area-------
function ProdDetailRight(_a) {
    var scrollPosition = _a.scrollPosition, Ids = _a.Ids, quantity = _a.quantity, handleClickCounter = _a.handleClickCounter, isVisiblePop = _a.isVisiblePop, setIsVisiblePop = _a.setIsVisiblePop;
    // --장바구니, store.js 정보 가져오기--
    var dispatch = (0, react_redux_1.useDispatch)();
    return ((0, jsx_runtime_1.jsx)("div", { className: "prodDetail_R", children: (0, jsx_runtime_1.jsx)("div", { className: "\n              orderArea ".concat((scrollPosition > 100 ? "detailRFixed" : " "), "\n            "), children: (0, jsx_runtime_1.jsxs)("div", { className: "infoArea", children: [(0, jsx_runtime_1.jsxs)("div", { className: "totalProducts", children: [(0, jsx_runtime_1.jsx)("p", { children: "\u203B \uC218\uB7C9\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694." }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsxs)("colgroup", { children: [(0, jsx_runtime_1.jsx)("col", { style: { width: "270px" } }), (0, jsx_runtime_1.jsx)("col", { style: { width: "80px" } }), (0, jsx_runtime_1.jsx)("col", { style: { width: "150px" } })] }), (0, jsx_runtime_1.jsx)("tbody", { className: "", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: Ids.title }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsxs)("span", { className: "quantity", children: [(0, jsx_runtime_1.jsx)("button", { type: "button", disabled: quantity === 1, "aria-label": "\uC218\uB7C9 \uB0B4\uB9AC\uAE30", onClick: function () { return handleClickCounter(-1); }, className: "QuantityDown down", children: "-" }), (0, jsx_runtime_1.jsx)("input", { id: "quantity", type: "number", min: 1, value: quantity, max: 10, readOnly: true }), (0, jsx_runtime_1.jsx)("button", { type: "button", disabled: quantity > 9, "aria-label": "\uC218\uB7C9 \uC62C\uB9AC\uAE30", onClick: function () { return handleClickCounter(1); }, className: "QuantityUp up", children: "+" })] }) }), (0, jsx_runtime_1.jsx)("td", { className: "right", children: (0, jsx_runtime_1.jsxs)("span", { className: "quantity_price", children: [(Ids.price * quantity).toLocaleString(), "\uC6D0", (0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "option_box_price", className: "option_box_price", value: "89000" })] }) })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "totalPrice", children: [(0, jsx_runtime_1.jsx)("strong", { children: "Total" }), " :", " ", (0, jsx_runtime_1.jsxs)("span", { className: "total", children: [(0, jsx_runtime_1.jsx)("strong", { children: (0, jsx_runtime_1.jsxs)("em", { children: [(Ids.price * quantity).toLocaleString(), "\uC6D0"] }) }), " ", "(", quantity, "EA)"] })] }), (0, jsx_runtime_1.jsx)("div", { className: "btnWrap", children: (0, jsx_runtime_1.jsxs)("div", { className: "btnFlexBox", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn_order wbtns", onClick: function () {
                                        dispatch((0, store_1.addItem)({
                                            id: Ids.id,
                                            imgUrl: Ids.imgUrl,
                                            title: Ids.title,
                                            price: Ids.price,
                                            count: quantity,
                                        }));
                                        setIsVisiblePop(false);
                                    }, children: "BUY" }), (0, jsx_runtime_1.jsx)("button", { className: "btn_cart wbtns", onClick: function () {
                                        dispatch((0, store_1.addItem)({
                                            id: Ids.id,
                                            imgUrl: Ids.imgUrl,
                                            title: Ids.title,
                                            price: Ids.price,
                                            count: quantity,
                                        }));
                                        setIsVisiblePop(false);
                                    }, children: "CART" }), (0, jsx_runtime_1.jsx)("button", { className: "btn_gift wbtns", children: "GIFT" })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "naver_btnWrap", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/naver.png", alt: "\uB124\uC774\uBC84\uACB0\uC81C" }) })] }) }) }));
}
// -------review area-------
function Review(props) {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "reviewWrap", ref: props.Tabs[2].element, children: [(0, jsx_runtime_1.jsx)("div", { className: "reviewTitle", children: "Review" }), (0, jsx_runtime_1.jsxs)("div", { className: "reviewContent", children: [(0, jsx_runtime_1.jsxs)("div", { className: "reviewContentHeader", children: [(0, jsx_runtime_1.jsx)("span", { children: "REVIEW" }), (0, jsx_runtime_1.jsx)("span", { children: "(1)" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "reviewContentSummary", children: [(0, jsx_runtime_1.jsxs)("div", { className: "summaryL", children: [(0, jsx_runtime_1.jsxs)("div", { className: "summaryLScore", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryLIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) }), (0, jsx_runtime_1.jsx)("span", { className: "summaryLText", children: "5.0" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "summaryLPercent", children: [(0, jsx_runtime_1.jsx)("b", { children: "100%" }), " \uC758 \uAD6C\uB9E4\uC790\uAC00 \uC774 \uC0C1\uD488\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "summaryR", children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { className: "summaryRFilter_HL", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterTitle", children: "\uC544\uC8FC \uC88B\uC544\uC694" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge", children: (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge_percentile" }) }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterCount", children: "1" })] }), (0, jsx_runtime_1.jsxs)("li", { className: "summaryRFilter", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterTitle", children: "\uB9D8\uC5D0 \uB4E4\uC5B4\uC694" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterCount", children: "0" })] }), (0, jsx_runtime_1.jsxs)("li", { className: "summaryRFilter", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterTitle", children: "\uBCF4\uD1B5\uC774\uC5D0\uC694" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterCount", children: "0" })] }), (0, jsx_runtime_1.jsxs)("li", { className: "summaryRFilter", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterTitle", children: "\uADF8\uB0E5 \uADF8\uB798\uC694" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterCount", children: "0" })] }), (0, jsx_runtime_1.jsxs)("li", { className: "summaryRFilter", children: [(0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterTitle", children: "\uBCC4\uB85C\uC608\uC694" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterGauge" }), (0, jsx_runtime_1.jsx)("div", { className: "summaryRFilterCount", children: "0" })] })] }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "reviewContentList", children: (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsxs)("li", { className: "reviewList", children: [(0, jsx_runtime_1.jsxs)("div", { className: "ListL", children: [(0, jsx_runtime_1.jsxs)("div", { className: "reviewListScore", children: [(0, jsx_runtime_1.jsxs)("div", { className: "reviewListScoreStar", children: [(0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreIcon", children: (0, jsx_runtime_1.jsx)("img", { src: "/img/star_icon.png", alt: "\uBCC4 \uC544\uC774\uCF58" }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListScoreText", children: "\uC544\uC8FC \uC88B\uC544\uC694" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "reviewListText", children: ["\uC0AC\uC774\uC988\uAC00 \uB531 \uC88B\uC544\uC694!!! \uD2BC\uD2BC\uD574\uC11C \uB354 \uC88B\uC2B5\uB2C8\uB2E4.", (0, jsx_runtime_1.jsx)("br", {}), "\uBB3C\uC138\uD0C1\uC774 \uC548\uB418\uC5B4 \uAD00\uB9AC\uB97C \uC798\uD574\uC57C\uACA0\uC5B4\uC694."] }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListLike", children: (0, jsx_runtime_1.jsxs)("div", { className: "reviewListLikeContainer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "reviewListLikeBtn likeBtn", children: [(0, jsx_runtime_1.jsx)("img", { src: "/img/thumb_up_icon.png", alt: "\uCD94\uCC9C \uC544\uC774\uCF58" }), (0, jsx_runtime_1.jsx)("span", { children: "\uB3C4\uC6C0\uB3FC\uC694" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "reviewListLikeBtn unlikeBtn", children: [(0, jsx_runtime_1.jsx)("img", { src: "/img/thumb_down_icon.png", alt: "\uBE44\uCD94\uCC9C \uC544\uC774\uCF58" }), (0, jsx_runtime_1.jsx)("span", { children: "\uB3C4\uC6C0\uC548\uB3FC\uC694" })] }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListLikeComment", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: '', className: "reviewListLikeLink", children: [(0, jsx_runtime_1.jsx)("span", { children: "\uB313\uAE00" }), (0, jsx_runtime_1.jsx)("span", { children: "0" })] }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "reviewListComment" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "ListR", children: [(0, jsx_runtime_1.jsxs)("div", { className: "reviewListName", children: [(0, jsx_runtime_1.jsx)("strong", { children: "2765440***" }), "\uB2D8\uC758 \uB9AC\uBDF0\uC785\uB2C8\uB2E4."] }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("p", { className: "reviewOptName", children: "\uD0A4" }), (0, jsx_runtime_1.jsx)("p", { className: "reviewOptVal", children: "170cm" })] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("p", { className: "reviewOptName", children: "\uBAB8\uBB34\uAC8C" }), (0, jsx_runtime_1.jsx)("p", { className: "reviewOptVal", children: "75kg" })] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("p", { className: "reviewOptName", children: "\uD3C9\uC18C\uC0AC\uC774\uC988-\uC0C1\uC758" }), (0, jsx_runtime_1.jsx)("p", { className: "reviewOptVal", children: "L" })] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("p", { className: "reviewOptName", children: "\uD3C9\uC18C\uC0AC\uC774\uC988-\uD558\uC758" }), (0, jsx_runtime_1.jsx)("p", { className: "reviewOptVal", children: "30" })] }), (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("p", { className: "reviewOptName", children: "\uC0AC\uC774\uC988" }), (0, jsx_runtime_1.jsx)("p", { className: "reviewOptVal", children: "230" })] })] })] })] }) }) })] })] }));
}
//------------BUY, CART btn click -> /cart 이동하는 팝업 박스------------
function DetailToCart(_a) {
    var isVisiblePop = _a.isVisiblePop, setIsVisiblePop = _a.setIsVisiblePop;
    return ((0, jsx_runtime_1.jsxs)("div", { className: isVisiblePop ? "detailHidden" : "detailToCartPop", children: [(0, jsx_runtime_1.jsx)("div", { className: "txtWrap", children: (0, jsx_runtime_1.jsx)("p", { children: "\uC7A5\uBC14\uAD6C\uB2C8\uC5D0 \uC0C1\uD488\uC774 \uB2F4\uACBC\uC2B5\uB2C8\uB2E4." }) }), (0, jsx_runtime_1.jsxs)("div", { className: "btnWrap", children: [(0, jsx_runtime_1.jsx)("button", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/cart", children: "\uC7A5\uBC14\uAD6C\uB2C8 \uC774\uB3D9" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: function () { return setIsVisiblePop(true); }, children: "\uC1FC\uD551 \uACC4\uC18D\uD558\uAE30" })] })] }));
}
exports.default = Detail;
//# sourceMappingURL=Detail.js.map