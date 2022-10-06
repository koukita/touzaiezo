var m_touzai = new L.tileLayer('https://koukita.github.io/touzaiezo/tile/{z}/{x}/{y}.jpg', {
    attribution: "東西蝦夷山川地理取調図　函館市中央図書館所蔵資料を喜多耕一が加工"
});

var m_jissoku = new L.tileLayer('https://koukita.github.io/hokkaidojissokukirizu/tile/{z}/{x}/{y}.jpg', {
    attribution: "北海道実測切図　PublicDomain"
});

var lat = 43.009501;
var lng = 141.422882;

var map = L.map('old_map', {
    layers: [m_touzai],
    center: [lat, lng],
    zoom: 10,
    minZoom: 5,
    maxZoom: 13,
    zoomControl: true
});

var map_Base = {
"東西蝦夷山川地理取調図":m_touzai,
"北海道実測切図":m_jissoku
};

L.control.layers(map_Base, null, {collapsed: true}).addTo(map)
