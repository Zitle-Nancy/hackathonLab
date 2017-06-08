var map = $('#map');
var  path, paths;
var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: 19.4211655,
        lng: -99.165415
      });
      map.addMarker({
        lat: 19.4211655,
        lng: -99.165415,
        title: 'Tu ubicacion',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Cowdf</p>'
        }
      });
      map.addMarker({
        lat: 19.4211881,
        lng: -99.1719811,
        title: 'Museos',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Museo Histórico Judío y del Holocausto</p>'
        }
      });
        map.addMarker({
        lat: 19.4202347,
        lng: -99.1612649,
        title: 'Museos',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Museo del Objeto Del Objeto</p>'
        }
      });
	    map.addMarker({
	    lat: 19.4068957,
	    lng: -99.171207,
	    title: 'Auditorios',
	    details: {
	      lugar: 'precio',
	      author: 'evento'
	    },
	    infoWindow: {
	      content: '<p>Auditorio BlackBerry</p>'
	    }
	  });
        map.addMarker({
        lat: 19.4274567,
        lng: -99.171554,
        title: 'Cine',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Cinemex Reforma Casa del Arte</p>'
        }
      });
        map.addMarker({
        lat: 19.4274567,
        lng: -99.171554,
        title: 'Teatros',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>El Plaza Condesa</p>'
        }
      });
        map.addMarker({
        lat: 19.4244642,
        lng: -99.1570654,
        title: 'Teatros',
        details: {
          lugar: 'precio',
          author: 'evento'
        },
        infoWindow: {
          content: '<p>Centro Cultural Teatro 2</p>'
        }
      });
});


var path = 
		[
			[19.4211881,-99.1719811], 
			[19.4202347,-99.1612649],
			[19.4068957,-99.171207],
			[19.4274567,-99.171554],
			[19.4134901,-99.1746519],
			[19.4244642,-99.1570654]
		];

polygon = map.drawPolygon({
  paths: path, // pre-defined polygon shape
  strokeColor: '#BBD8E9',
  strokeOpacity: 1,
  strokeWeight: 3,
  fillColor: '#BBD8E9',
  fillOpacity: 0.6
});

/**
coordenadas:
Museo Histórico Judío y del Holocausto  19.4211881  -99.1719811
MODO - Museo del Objeto Del Objeto 19.4202347  -99.1612649
Auditorio BlackBerry 19.4068957 -99.171207
Cinemex Reforma Casa del Arte 19.4274567 -99.171554
El Plaza Condesa  19.4134901  -99.1746519
Centro Cultural Teatro 2 19.4244642 -99.1570654


bazares
Foro Indierocks!  19.4166326 -99.1583288
Cámara Nacional de la Industria del Vestido  19.4273637 -99.1541881
Bazar Viejo Paris 19.4242867 -99.1719366
**/