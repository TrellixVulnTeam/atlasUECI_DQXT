//


////Création de la couche (Layer) type de point d'eau
//Couleur en fonction du type de point d'eau
function getColortype(Type_de_point_deau) {
          switch (Type_de_point_deau) {
            case 'puits_ouvert':
              return  'blue';
            case 'point_equipe':
              return 'purple';
            case 'surface':
              return 'green';
     		default:
              return 'grey';
          }
        };
        
      
//transformation de la base de donné "point_eau.geojson" en une couche type de points d'eau
//lecture de la base de donnée
$.getJSON(urlpointdeau,function(data){
	//transformation de la base de donnée en couche (Layer)
	var typePE = L.geoJson(data,{
		//Affichage sous forme de point
		pointToLayer:function(feature,latlng){
			//caractéristique des points
			var marker = L.circleMarker(latlng,{radius: 5,fillOpacity: 1, color: 'black', fillColor: getColortype(feature.properties.Type_de_point_deau),weight: 1,fillOpacity: 0.8,});
			//caractéristiques des popup
			marker.bindPopup('<b><u>Type de point d\'eau</u></b><br><i>' + feature.properties.Type_de_point_deau
												+ ' <br><i>détail:</i> ' + feature.properties.B_type + '<br><b><u>Nom du point d\'eau : </u></b>'+feature.properties.A_nom
												);
			//Affichage des marqueurs
			return marker;
		}
		});
	//Affichage sur la carte
	//typePE.addTo(map);
	//Affichage dans le controleur de couche
	//controlLayers.addOverlay(typePE, "Type de point d'eau");
	//controlLayers.addOverlay(typePE, "Type de point d'eau", "Diagnostic des points d'eau");
});

//Création de la couche contamination Ecoli
//Couleur en fonction de la présence d'E. coli

  function getColorEcoli(ecoli) {
          if (ecoli == 0 == true) {
          	return('green');
          }
          else if (ecoli > 0 == true) {
          	return('Red');
          }
          else {
          	return('grey');
          }
       };
       
//transformation de la base de donné "point_eau.geojson" en une couche E.coli
//lecture de la base de donnée
$.getJSON(urlpointdeau,function(data){
	//transformation de la base de donnée en couche (Layer)
	
	var Ecoli = L.geoJson(data,{
		//Affichage sous forme de point
		pointToLayer:function(feature,latlng){
			//caractéristique des points
			var marker2 = L.circleMarker(latlng,{radius: 5,fillOpacity: 1, color: 'black', fillColor: getColorEcoli(feature.properties.ecoli),weight: 1,fillOpacity: 0.8,});
			//caractéristiques des popup
			marker2.bindPopup('<p>Comptage <em>E. coli</em>: ' + feature.properties.ecoli + ' UFC / 100 ml</p>');
			//Affichage des marqueurs
			return marker2;
		}
		});
	//Affichage sur la carte
	
	Ecoli.addTo(map);
	//Affichage dans le controleur de couche
	
	//controlLayers.addOverlay(Ecoli, "" );
	controlLayers.addOverlay(Ecoli, "Contamination par E. coli", "Diagnostic des points d'eau");
});


//Création de la couche pollution nitrates
//Couleur en fonction de la concentration en Nitrates

  function getColorNitrates(Nitrate) {
          if (Nitrate < 50 == true) {
          	return('green');
          }
          else if (Nitrate >= 50 == true) {
          	return('Red');
          }
          else {
          	return('grey');
          }
       };     
//transformation de la base de donné "point_eau.geojson" en une couche nitrate
//lecture de la base de donnée
$.getJSON(urlpointdeau,function(data){
	//transformation de la base de donnée en couche (Layer)
	
	var Nitrate = L.geoJson(data,{
		//Affichage sous forme de point
		pointToLayer:function(feature,latlng){
			//caractéristique des points
			var marker = L.circleMarker(latlng,{radius: 5,fillOpacity: 1, color: 'black', fillColor: getColorNitrates(feature.properties.nitrate),weight: 1,fillOpacity: 0.8,});
			//caractéristiques des popup
			marker.bindPopup(' <p>Concentration en <em>Nitrate</em>: ' + feature.properties.nitrate + ' mg/l </p>');
			//Affichage des marqueurs
			return marker;
		}
		});
	//Affichage sur la carte
	
	
	//controlLayers.addOverlay(Ecoli, "" );
	controlLayers.addOverlay(Nitrate, "Pollution au Nitrate", "Diagnostic des points d'eau");
});

//Création de la couche pollution Ammoniac
//Couleur en fonction de la concentration en Ammoniac

  function getColorAmmoniac(Ammoniac) {
          if (Ammoniac < 1 == true) {
          	return('green');
          }
          else if (Ammoniac >= 1 == true) {
          	return('Red');
          }
          else {
          	return('grey');
          }
       };     
//transformation de la base de donné "point_eau.geojson" en une couche Ammoniac
//lecture de la base de donnée
$.getJSON(urlpointdeau,function(data){
	//transformation de la base de donnée en couche (Layer)
	
	var Ammoniac = L.geoJson(data,{
		//Affichage sous forme de point
		pointToLayer:function(feature,latlng){
			//caractéristique des points
			var marker = L.circleMarker(latlng,{radius: 5,fillOpacity: 1, color: 'black', fillColor: getColorAmmoniac(feature.properties.ammoniac),weight: 1,fillOpacity: 0.8,});
			//caractéristiques des popup
			marker.bindPopup(' <p>Concentration en <em>Ammoniac</em>: ' + feature.properties.ammoniac + ' mg/l </p>');
			//Affichage des marqueurs
			return marker;
		}
		});
	//Affichage sur la carte
	
	
	
	controlLayers.addOverlay(Ammoniac, "Pollution à l'Ammoniac", "Diagnostic des points d'eau");
});

//Création d'une couche avec un icone



