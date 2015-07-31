define({
	map: true,
	mapClickMode: true,
	mapRightClickMenu: true,
	identifyLayerInfos: true,
	identifyTolerance: 5,

	// config object definition:
	//	{<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		},
	//	<layer id>:{
	//		<sub layer number>:{
	//			<pop-up definition, see link below>
	//			}
	//		}
	//	}

	// for details on pop-up definition see: https://developers.arcgis.com/javascript/jshelp/intro_popuptemplate.html

	identifies: {
		Metadato: {
			0: {
				title: 'Metadato',
				fieldInfos: [{
					fieldName: 'MD_METADATA_ID',
					label: "Identificador",
					visible: true
				}, {
					fieldName: 'FILEIDENTIFIER',
					label: "Identificador SICAT",
					visible: true
				}, {
					fieldName: 'TITLE',
					label: "Titulo",
					visible: true
				},],
				mediaInfos: [{
					title: '',
					caption: '',
					type: 'image',
					value: {
						sourceURL: 'images/bookT.png',
						linkURL: '{URL}'
					}
				}]
			}
		},
		louisvillePubSafety: {
			2: {
				title: 'Police Station',
				fieldInfos: [{
					fieldName: 'Name',
					visible: true
				}, {
					fieldName: 'Address',
					visible: true
				}, {
					fieldName: 'Type',
					visible: true
				}, {
					fieldName: 'Police Function',
					visible: true
				}, {
					fieldName: 'Last Update Date',
					visible: true
				}]
			},
			8: {
				title: 'Traffic Camera',
				description: '{Description} lasted updated: {Last Update Date}',
				mediaInfos: [{
					title: '',
					caption: '',
					type: 'image',
					value: {
						sourceURL: '{Location URL}',
						linkURL: '{Location URL}'
					}
				}]
			}
		}
	}
});