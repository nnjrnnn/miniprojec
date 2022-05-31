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
var format_010465_1 = new ol.format.GeoJSON();
var features_010465_1 = format_010465_1.readFeatures(json_010465_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_010465_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_010465_1.addFeatures(features_010465_1);
var lyr_010465_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_010465_1, 
                style: style_010465_1,
                interactive: true,
    title: 'พื้นที่เฝ้าระวังและนำร่องการท่องเที่ยว(01/04/65-ปัจจุบัน)<br />\
    <img src="styles/legend/010465_1_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/010465_1_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/010465_1_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/010465_1_3.png" /> ตราด<br />\
    <img src="styles/legend/010465_1_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/010465_1_5.png" /> ระยอง<br />\
    <img src="styles/legend/010465_1_6.png" /> สระแก้ว<br />'
        });
var format_090165240165_2 = new ol.format.GeoJSON();
var features_090165240165_2 = format_090165240165_2.readFeatures(json_090165240165_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_090165240165_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_090165240165_2.addFeatures(features_090165240165_2);
var lyr_090165240165_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_090165240165_2, 
                style: style_090165240165_2,
                interactive: true,
    title: 'พื้นที่เฝ้าระวังและนำร่องการท่องเที่ยว(09/01/65-24/01/65)<br />\
    <img src="styles/legend/090165240165_2_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/090165240165_2_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/090165240165_2_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/090165240165_2_3.png" /> ตราด<br />\
    <img src="styles/legend/090165240165_2_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/090165240165_2_5.png" /> ระยอง<br />\
    <img src="styles/legend/090165240165_2_6.png" /> สระแก้ว<br />'
        });
var format_210764161164_3 = new ol.format.GeoJSON();
var features_210764161164_3 = format_210764161164_3.readFeatures(json_210764161164_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_210764161164_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_210764161164_3.addFeatures(features_210764161164_3);
var lyr_210764161164_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_210764161164_3, 
                style: style_210764161164_3,
                interactive: true,
    title: 'พื้นที่ควบคุมสูง(21/07/64-16/11/64)<br />\
    <img src="styles/legend/210764161164_3_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/210764161164_3_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/210764161164_3_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/210764161164_3_3.png" /> ตราด<br />\
    <img src="styles/legend/210764161164_3_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/210764161164_3_5.png" /> ระยอง<br />\
    <img src="styles/legend/210764161164_3_6.png" /> สระแก้ว<br />'
        });
var format_180664_4 = new ol.format.GeoJSON();
var features_180664_4 = format_180664_4.readFeatures(json_180664_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_180664_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_180664_4.addFeatures(features_180664_4);
var lyr_180664_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_180664_4, 
                style: style_180664_4,
                interactive: true,
    title: 'พื้นที่ควบคุมและเฝ้าระวัง(18/06/64)<br />\
    <img src="styles/legend/180664_4_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/180664_4_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/180664_4_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/180664_4_3.png" /> ตราด<br />\
    <img src="styles/legend/180664_4_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/180664_4_5.png" /> ระยอง<br />\
    <img src="styles/legend/180664_4_6.png" /> สระแก้ว<br />'
        });
var format_17044010564_5 = new ol.format.GeoJSON();
var features_17044010564_5 = format_17044010564_5.readFeatures(json_17044010564_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_17044010564_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17044010564_5.addFeatures(features_17044010564_5);
var lyr_17044010564_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17044010564_5, 
                style: style_17044010564_5,
                interactive: true,
    title: 'พื้นที่ควบคุมสูง(17/04/4-01/05/64)<br />\
    <img src="styles/legend/17044010564_5_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/17044010564_5_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/17044010564_5_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/17044010564_5_3.png" /> ตราด<br />\
    <img src="styles/legend/17044010564_5_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/17044010564_5_5.png" /> ระยอง<br />\
    <img src="styles/legend/17044010564_5_6.png" /> สระแก้ว<br />'
        });
var format_050464_6 = new ol.format.GeoJSON();
var features_050464_6 = format_050464_6.readFeatures(json_050464_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_050464_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_050464_6.addFeatures(features_050464_6);
var lyr_050464_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_050464_6, 
                style: style_050464_6,
                interactive: true,
    title: 'พื้นที่เฝ้าระวัง(05/04/64)<br />\
    <img src="styles/legend/050464_6_0.png" /> จันทบุรี<br />\
    <img src="styles/legend/050464_6_1.png" /> ฉะเชิงเทรา<br />\
    <img src="styles/legend/050464_6_2.png" /> ชลบุรี<br />\
    <img src="styles/legend/050464_6_3.png" /> ตราด<br />\
    <img src="styles/legend/050464_6_4.png" /> ปราจีนบุรี<br />\
    <img src="styles/legend/050464_6_5.png" /> ระยอง<br />\
    <img src="styles/legend/050464_6_6.png" /> สระแก้ว<br />'
        });

lyr_GoogleMapsIndia_0.setVisible(true);lyr_010465_1.setVisible(true);lyr_090165240165_2.setVisible(true);lyr_210764161164_3.setVisible(true);lyr_180664_4.setVisible(true);lyr_17044010564_5.setVisible(true);lyr_050464_6.setVisible(true);
var layersList = [lyr_GoogleMapsIndia_0,lyr_010465_1,lyr_090165240165_2,lyr_210764161164_3,lyr_180664_4,lyr_17044010564_5,lyr_050464_6];
lyr_010465_1.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_090165240165_2.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_210764161164_3.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_180664_4.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_17044010564_5.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_050464_6.set('fieldAliases', {'ID': 'ID', 'PROV_CODE': 'PROV_CODE', 'PROV_TH': 'PROV_TH', 'PROV_EN': 'PROV_EN', 'REG_NESDB': 'REG_NESDB', 'REG_ROYIN': 'REG_ROYIN', 'ADMIN_TYPE': 'ADMIN_TYPE', });
lyr_010465_1.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_090165240165_2.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_210764161164_3.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_180664_4.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_17044010564_5.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_050464_6.set('fieldImages', {'ID': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_TH': 'TextEdit', 'PROV_EN': 'TextEdit', 'REG_NESDB': 'TextEdit', 'REG_ROYIN': 'TextEdit', 'ADMIN_TYPE': 'Range', });
lyr_010465_1.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_090165240165_2.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_210764161164_3.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_180664_4.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_17044010564_5.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_050464_6.set('fieldLabels', {'ID': 'no label', 'PROV_CODE': 'no label', 'PROV_TH': 'no label', 'PROV_EN': 'no label', 'REG_NESDB': 'no label', 'REG_ROYIN': 'no label', 'ADMIN_TYPE': 'no label', });
lyr_050464_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});