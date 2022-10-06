var m_touzai = new L.tileLayer('https://koukita.github.io/touzaiezo/tile/{z}/{x}/{y}.jpg', {
    attribution: "東西蝦夷山川地理取調図　函館市中央図書館所蔵資料を喜多耕一が加工"
});

var m_jissoku = new L.tileLayer('https://koukita.github.io/hokkaidojissokukirizu/tile/{z}/{x}/{y}.jpg', {
    attribution: "北海道実測切図　PublicDomain"
});

var m_std = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "地理院地図（標準地図）"
});

var lat = 43.009501;
var lng = 141.422882;

var map_left = L.map('map_left', {
    layers: [m_touzai],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

var map_right = L.map('map_right', {
    layers: [m_std],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

map_left.sync(map_right, {syncCursor: true});
map_right.sync(map_left, {syncCursor: true});

var map_Base_left = {
"東西蝦夷山川地理取調図":m_touzai,
"北海道実測切図":m_jissoku
};

L.control.layers(map_Base_left, null, {collapsed: true}).addTo(map_left)

var map_Base_right = {
    "地理院地図　標準":m_std,
    "北海道実測切図":m_jissoku
    };
    
L.control.layers(map_Base_right, null, {collapsed: true}).addTo(map_right)
