var m_color=new L.tileLayer("https://tile.mierune.co.jp/mierune/{z}/{x}/{y}.png",{attribution:"Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."}),m_mono=new L.tileLayer("https://tile.mierune.co.jp/mierune_mono/{z}/{x}/{y}.png",{attribution:"Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."}),lat=35.6831925,lng=139.7511307,map_left=L.map("map_left",{layers:[m_color],center:[lat,lng],zoom:14,zoomControl:!0}),map_right=L.map("map_right",{layers:[m_mono],center:[lat,lng],zoom:14,zoomControl:!0});map_left.sync(map_right,{syncCursor:!0}),map_right.sync(map_left,{syncCursor:!0});