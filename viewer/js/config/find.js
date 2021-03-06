define({
   map: true,
   zoomExtentFactor: 2,
   queries: [
	   {
		   description: 'Busqueda Por metadato',
		   url: 'http://srvags.sgc.gov.co/arcgis/rest/services/METG/METADATO/MapServer',
		   layerIds: [0,1,2,3],
		   searchFields: ['TITLE', 'PLA_NUMR_P', 'MUNI_NOMBR', 'DPT_NOMBRE','TITLE'],
		   minChars: 2,
		   gridColumns: [
			   { field: 'Name', label: 'Name' },
			   { field: 'layerName', label: 'Layer', width: 100, sortable: false, resizable: false }
		   ],
		   sort: [
			   {
				   attribute: 'Name',
				   descending: false
			   }
		   ],
		   prompt: 'fdname, pdname, name or resname',
		   selectionMode: 'single'
	   },
	   /*{
		   description: 'Find Incident By Code/Description',
		   url: 'http://sampleserver1.arcgisonline.com/ArcGIS/rest/services/PublicSafety/PublicSafetyOperationalLayers/MapServer',
		   layerIds: [15, 17, 18],
		   searchFields: ['FCODE', 'DESCRIPTION'],
		   minChars: 4,
		   gridColumns: [
			   { field: 'layerName', label: 'Layer', width: 100, sortable: false, resizable: false },
			   { field: 'Fcode', label: 'Fcode', width: 100 },
			   { field: 'Description', label: 'Descr' },
			   { field: 'SORT_VALUE', visible: false, get: function (findResult){
				   return findResult.layerName + ' ' + findResult.feature.attributes.Fcode;  //seems better to use attributes[ 'Fcode' ] but fails build.  Attribute names will be aliases and may contain spaces and mixed cases.
			   } }
		   ],
		   sort: [
			   {
				   attribute: 'SORT_VALUE',
				   descending: false
			   }
		   ],
		   prompt: 'fdname, pdname, name or resname',
		   customGridEventHandlers: [
			   {
				   event: '.dgrid-row:click',
				   handler: function ( event ) {
					   alert( 'You clicked a row!' );
					   console.log( event );
				   }
			   }
		   ]
	   }*/
   ],
   selectionSymbols: {
	   polygon: {
		   type   : 'esriSFS',
		   style  : 'esriSFSSolid',
		   color  : [255, 0, 0, 62],
		   outline: {
			   type : 'esriSLS',
			   style: 'esriSLSSolid',
			   color: [255, 0, 0, 255],
			   width: 3
		   }
	   },
	   point: {
		   type   : 'esriSMS',
		   style  : 'esriSMSCircle',
		   size   : 25,
		   color  : [255, 0, 0, 62],
		   angle  : 0,
		   xoffset: 0,
		   yoffset: 0,
		   outline: {
			   type : 'esriSLS',
			   style: 'esriSLSSolid',
			   color: [255, 0, 0, 255],
			   width: 2
		   }
	   }
   },
   selectionMode   : 'extended'
});