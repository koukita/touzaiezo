var m_color = new L.tileLayer('https://koukita.github.io/touzaiezo/tile/{z}/{x}/{y}.jpg', {
    attribution: "東西蝦夷山川地理取調図　函館市中央図書館所蔵の資料を喜多耕一が加工した地図です"
});

var m_mono = new L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: "地理院地図（標準地図）"
});

var lat = 43.036943;
var lng = 141.410065;

var map_left = L.map('map_left', {
    layers: [m_color],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 12,
    zoomControl: true
});

var map_right = L.map('map_right', {
    layers: [m_mono],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 12,
    zoomControl: true
});

map_left.sync(map_right, {syncCursor: true});
map_right.sync(map_left, {syncCursor: true});