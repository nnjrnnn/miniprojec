var wms_layers = [];


        var lyr_GoogleMapsIndia_0 = new ol.layer.Tile({
            'title': 'Google Maps (India)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.co.in/maps/vt?lyrs=m@189&gl=in&x={x}&y={y}&z={z}'
            })
        });
var format_010863_1 = new ol.format.GeoJSON();
var features_010863_1 = format_010863_1.readFeatures(json_010863_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010863_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010863_1.addFeatures(features_010863_1);
var lyr_010863_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_010863_1, 
                style: style_010863_1,
                interactive: true,
    title: 'พื้นที่เฝ้าระะวังสูง (01/08/63- ต้นเดือนพฤศจิกา) <br />\
    <img src="styles/legend/010863_1_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/010863_1_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/010863_1_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/010863_1_3.png" /> ตราด<br />\
    <img src="styles/legend/010863_1_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/010863_1_5.png" /> ระยอง<br />\
    <img src="styles/legend/010863_1_6.png" /> สระแก้ว<br />'
        });
var format_260563310563_2 = new ol.format.GeoJSON();
var features_260563310563_2 = format_260563310563_2.readFeatures(json_260563310563_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_260563310563_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_260563310563_2.addFeatures(features_260563310563_2);
var lyr_260563310563_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_260563310563_2, 
                style: style_260563310563_2,
                interactive: true,
    title: 'พื้นที่ควบคุมสูงสุด (26/05/63-31/05/63) - ช่วงต้นการแพร่ระบาด<br />\
    <img src="styles/legend/260563310563_2_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/260563310563_2_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/260563310563_2_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/260563310563_2_3.png" /> ตราด<br />\
    <img src="styles/legend/260563310563_2_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/260563310563_2_5.png" /> ระยอง<br />\
    <img src="styles/legend/260563310563_2_6.png" /> สระแก้ว<br />'
        });

lyr_GoogleMapsIndia_0.setVisible(true);lyr_010863_1.setVisible(true);lyr_260563310563_2.setVisible(true);
var layersList = [lyr_GoogleMapsIndia_0,lyr_010863_1,lyr_260563310563_2];
lyr_010863_1.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_260563310563_2.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_010863_1.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_260563310563_2.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_010863_1.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_260563310563_2.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_260563310563_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});