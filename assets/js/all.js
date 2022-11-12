"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('Kan Hello!');
}); // local Data
// let data = [
//     {
//         "id": 0,
//         "name": "肥宅心碎賞櫻 3 日",
//         "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//         "area": "高雄",
//         "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//         "group": 87,
//         "price": 1400,
//         "rate": 10
//     }, {
//         "id": 1,
//         "name": "貓空纜車雙程票",
//         "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         "area": "台北",
//         "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//         "group": 99,
//         "price": 240,
//         "rate": 2
//     }, {
//         "id": 2,
//         "name": "台中谷關溫泉會1日",
//         "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         "area": "台中",
//         "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//         "group": 20,
//         "price": 1765,
//         "rate": 7
//     }, {
//         "id": 3,
//         "name": "綠島自由行套裝行程",
//         "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
//         "area": "高雄",
//         "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",
//         "group": 87,
//         "price": 1400,
//         "rate": 10
//     }, {
//         "id": 4,
//         "name": "清境高空觀景步道",
//         "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
//         "area": "台北",
//         "description": "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
//         "group": 99,
//         "price": 240,
//         "rate": 2
//     }, {
//        "id": 5,
//        "name": "山林悠遊套票",
//        "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
//        "area": "台中",
//        "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",
//        "group": 20,
//        "price": 1765,
//        "rate": 7
//     }
// ];

var local_data = [{
  "id": 0,
  "name": "肥宅心碎賞櫻 3 日",
  "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
  "area": "高雄",
  "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
  "group": 87,
  "price": 1400,
  "rate": 10
}, {
  "id": 1,
  "name": "貓空纜車雙程票",
  "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台北",
  "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
  "group": 99,
  "price": 240,
  "rate": 2
}, {
  "id": 2,
  "name": "台中谷關溫泉會1日",
  "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  "area": "台中",
  "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
  "group": 20,
  "price": 1765,
  "rate": 7
}, {
  "id": 3,
  "name": "綠島自由行套裝行程",
  "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
  "area": "高雄",
  "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合。",
  "group": 87,
  "price": 1400,
  "rate": 10
}, {
  "id": 4,
  "name": "清境高空觀景步道",
  "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
  "area": "台北",
  "description": "清境農場青青草原數十公頃碧草，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
  "group": 99,
  "price": 240,
  "rate": 2
}, {
  "id": 5,
  "name": "山林悠遊套票",
  "imgUrl": "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
  "area": "台中",
  "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點。",
  "group": 20,
  "price": 1765,
  "rate": 7
}]; // API
// LV1
// https://raw.githubusercontent.com/kancheng/JS2022-W6/main/data/travelAPI-lv1-new.json;
// https://raw.githubusercontent.com/kancheng/JS2022-W6/main/data/travelAPI-lv1.json

var hexlv1 = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json'; // https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json
// LV2

var hexlv2 = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json'; // Data - axios

var data = []; // axios.get(hexlv1)
// .then(function (response) {
//     data = response.data;
// })
// Demo
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

var axios = require('axios');

axios.get(hexlv2).then(function (response) {
  data = response.data.data;
  console.log(data);
  render(data);
})["catch"](function (error) {
  console.log(error);
}); // Target

var regionSearch = document.querySelector("#regionSearch");
var ticketCardArea = document.querySelector("#ticketCard-area");
var cantFindArea = document.querySelector("#cantFind-area");
var searchResultText = document.querySelector("#searchResult-text");
var addTicketForm = document.querySelector(".addTicket-form");
var addTicketBtn = document.querySelector("#addTicket-btn");
var ticketName = document.querySelector("#ticketName");
var ticketNameMessage = document.querySelector("#ticketName-message");
var ticketImgUrl = document.querySelector("#ticketImgUrl");
var ticketImgUrlMessage = document.querySelector("#ticketImgUrl-message");
var ticketRegion = document.querySelector("#ticketRegion");
var ticketRegionMessage = document.querySelector("#ticketRegion-message");
var ticketPrice = document.querySelector("#ticketPrice");
var ticketPriceMessage = document.querySelector("#ticketPrice-message");
var ticketNum = document.querySelector("#ticketNum");
var ticketNumMessage = document.querySelector("#ticketNum-message");
var ticketRate = document.querySelector("#ticketRate");
var ticketRateMessage = document.querySelector("#ticketRate-message");
var ticketDescription = document.querySelector("#ticketDescription");
var ticketDescriptionMessage = document.querySelector("#ticketDescription-message");
var cardLength = 0;
var formVerify = true; // Searching Section 
// Start

function init() {
  var str = "";
  cardLength = 0;
  data.forEach(function (e) {
    str += cardHtml(e);
  });
  showCardResult(str);
}

function cardHtml(e) {
  cardLength += 1;
  return "\n    <li class=\"ticketCard\">\n      <div class=\"ticketCard-img\">\n        <a href=\"#\">\n          <img src=\"".concat(e.imgUrl, "\" alt=\"\">\n        </a>\n        <div class=\"ticketCard-region\">").concat(e.area, "</div>\n        <div class=\"ticketCard-rank\">").concat(e.rate, "</div>\n      </div>\n      <div class=\"ticketCard-content\">\n        <div>\n          <h3>\n            <a href=\"#\" class=\"ticketCard-name\">").concat(e.name, "</a>\n          </h3>\n          <p class=\"ticketCard-description\">\n            ").concat(e.description, "\n          </p>\n        </div>\n        <div class=\"ticketCard-info\">\n          <p class=\"ticketCard-num\">\n            <span><i class=\"fas fa-exclamation-circle\"></i></span>\n            \u5269\u4E0B\u6700\u5F8C <span id=\"ticketCard-num\"> ").concat(e.group, " </span> \u7D44\n          </p>\n          <p class=\"ticketCard-price\">\n            TWD <span id=\"ticketCard-price\">$").concat(e.price, "</span>\n          </p>\n        </div>\n      </div>\n    </li>\n    ");
}

function showCardResult(str) {
  ticketCardArea.innerHTML = str;
  searchResultText.textContent = "\u672C\u6B21\u641C\u5C0B\u5171 ".concat(cardLength, " \u7B46\u8CC7\u6599");

  if (cardLength === 0) {
    cantFindArea.style.display = "block";
  }
}

regionSearch.addEventListener("change", function () {
  var str = "";
  cardLength = 0;

  if (regionSearch.value === "") {
    data.forEach(function (e) {
      str += cardHtml(e);
    });
  } else {
    data.forEach(function (e, i) {
      if (regionSearch.value === data[i].area) {
        str += cardHtml(e);
      }
    });
  }

  showCardResult(str);
}); // Searching Section
// End
// Add Ticket Section 
// Start

function addDateFilter(data, alertmessage) {
  if (data === "" || data === null || data === undefined) {
    alertmessage.style.display = "block";
    formVerify = false;
  } else {
    alertmessage.style.display = "none";
  }
}

addTicketBtn.addEventListener("click", function () {
  formVerify = true;
  addDateFilter(ticketName.value.trim(), ticketNameMessage);
  addDateFilter(ticketImgUrl.value.trim(), ticketImgUrlMessage);
  addDateFilter(ticketRegion.value, ticketRegionMessage);
  addDateFilter(ticketPrice.value, ticketPriceMessage);
  addDateFilter(ticketNum.value, ticketNumMessage);
  addDateFilter(ticketRate.value, ticketRateMessage);
  addDateFilter(ticketDescription.value.trim(), ticketDescriptionMessage);

  if (formVerify === false) {
    return;
  } else {
    var obj = {};
    obj.id = data.length;
    obj.name = ticketName.value.trim();
    obj.imgUrl = ticketImgUrl.value.trim();
    obj.area = ticketRegion.value;
    obj.description = ticketDescription.value.trim();
    obj.group = ticketNum.value;
    obj.price = ticketPrice.value;
    obj.rate = ticketRate.value;
    data.push(obj);
    addTicketForm.reset();
    init();
  }
}); // Add Ticket Section 
// End
// Init

init();
//# sourceMappingURL=all.js.map
