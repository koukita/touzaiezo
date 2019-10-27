# 東西蝦夷山川地理取調図のオープンデータ
## 概要
　東西蝦夷山川地理取調図（通称：松浦武四郎地図）のオープンデータです。Jpeg画像ファイル、GISで表示できるpngファイル、タイル地図用jpegファイルがあります。  
 この資料はオープンデータです。CC-BY4.0により出典の明示で自由に利用できます。
 
## 出典
　この東西蝦夷山川地理取調図は、函館市中央図書館所蔵のデジタルデータを使用して、加工しています。使用許可をもらっています。（令和元年9月23日許可）
　この資料を利用する場合には、「この資料は、函館市中央図書館所蔵資料を喜多耕一が加工したものです（CC-BY)」と記載してください。
 
## トリミングしたjpgファイル(jpg)
　jpgフォルダ内のjpgファイルは、函館市中央図書館から提供いただいた画像ファイルを縮小（50%）、トリミングし、回転させて出典を表示したものです。
　変形はしていませんので、そのまま画像として利用できます。
 
## 位置合わせしたpngファイル（gis_png）
　東西蝦夷山川地理取調図をQGISの「Freehand raster georeferencer」プラグインを使って位置合わせしています。
　地理院地図の標準地図にだいたい合うように、回転（1.5度程度）、拡大縮小をしています。そのため、画像ごとに大きさが違います。
　位置は作成者の感覚で行っていますので、必ずしも正確ではありません。
　pngファイルと位置情報を記録したワールドファイルpgwがセットです。
　QGISなどのGISにpngファイルをドラッグすることで、地図上に画像を表示できます。
 
## QGISのXYZTilesでの利用
　QGISのXYZTiles機能で、タイル画像を表示できます。XYZTilesのURLに次のアドレスを入力します。
　https://koukita.github.io/touzaiezo/tile/{z}/{x}/{y}.jpg
![QGIS表示例](https://github.com/koukita/touzaiezo/blob/master/image/qgis_hyoujirei.png)


