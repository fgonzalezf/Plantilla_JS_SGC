define([
    'dojo/on',
    'dojo/date/locale'
], function (on, locale) {

    function formatDateTime (value) {
        var date = new Date(value);
        return locale.format(date, {
            formatLength: 'short'
        });
    }

    return {
        map: true,
        mapClickMode: true,

        layers: [
            {
                name: 'Metadato',
                expression: '', // additional where expression applied to all queries
                idProperty: 'OBJECTID',
                queryParameters: {
                    type: 'spatial', // spatial, relationship, table or database
                    layerID: 'Metadato', // from operational layers
                    sublayerID: 0,
                    outFields: ['*']
                },
                attributeSearches: [
                    {
                        name: 'Busqueda Metadato Geografico',
                        searchFields: [
                            {
                                name: 'Titulo metadato',
                                label: 'Titulo',
                                expression: '(upper(TITLE) LIKE upper(\'[value]%\'))',
                                placeholder: 'Ingrese el titulo del metadato',
                                required: true,
                                minChars: 3
                            },

                        ],

                        title: 'Metadato',
                        topicID: 'Metadato',
                        gridOptions: {
                            columns: [
                                {
                                    field: 'MD_METADATA_ID',
                                    label: 'Codigo Metadato'
                                },
                                /*{
                                    field: 'REFDATE',
                                    label: 'Fecha',
                                    width: 150,
                                    get: function (object) { // allow export as a proper date
                                        return new Date(object.inspdate);
                                    },
                                    formatter: formatDateTime
                                },*/
                                {
                                    field: 'TITLE',
                                    label: 'Titulo',
                                    width: 150
                                },
                                {
                                    field: 'MD_IDENTIFICATION_ID',
                                    label: 'IDENTIFICADOR'
                                },
                                {
                                    field: 'NORTE',
                                    label: 'Norte'
                                },
                                {
                                    field: 'ESTE',
                                    label: 'Este'
                                },
                                {
                                    field: 'URL',
                                    label: 'Enlace'
                                },

                            ],
                            sort: [
                                {
                                    attribute: 'TITLE',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'Municipios',
                expression: '', // additional where expression applied to all queries
                idProperty: 'OBJECTID',
                queryParameters: {
                    type: 'spatial', // spatial, relationship, table or database
                    layerID: 'Metadato', // from operational layers
                    sublayerID: 2,
                    outFields: ['*']
                },
                attributeSearches: [
                    {
                        name: 'Buscar por Municipio',
                        searchFields: [
                            {
                                name: 'Nombre del Municipio',
                                label: 'Municipio',
                                expression: '(upper(MUNI_NOMBR) LIKE upper(\'[value]%\'))',
                                placeholder: 'Escriba el nombre del Municipio',
                                required: true,
                                minChars: 3
                            },

                        ],

                        title: 'Municipios',
                        topicID: 'MunicipiosId',
                        gridOptions: {
                            columns: [
                                {
                                    id: 'Action',
                                    field: 'OBJECTID',
                                    label: 'Action',
                                    width: 32,
                                    sortable: false,
                                    exportable: false,
                                    renderCell: function (object, value, node) {
                                        on(node, 'click', function () {
                                            alert('Do something exciting here like search for related records or edit the selected record.');
                                        });
                                        node.innerHTML = '<i class=\'fa fa-pencil\' style=\'margin-left:8px;\'></i>';
                                    }
                                },
                                {
                                    field: 'MUNI_COD',
                                    label: 'Codigo',
                                    width: 150
                                },
                                {
                                    field: 'MUNI_NOMBR',
                                    label: 'Nombre',
                                    width: 150
                                },

                            ],
                            sort: [
                                {
                                    attribute: 'MUNI_NOMBR',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    }
                ]
            },
            {
                name: 'Departamentos',
                expression: '', // additional where expression applied to all queries
                idProperty: 'OBJECTID',
                queryParameters: {
                    type: 'spatial', // spatial, relationship, table or database
                    layerID: 'Metadato', // from operational layers
                    sublayerID: 3,
                    outFields: ['*']
                },
                attributeSearches: [
                    {
                        name: 'Buscar por Departameto',
                        searchFields: [
                            {
                                name: 'Nombre del Departamento',
                                label: 'Departamento',
                                expression: '(upper(DPT_NOMBRE) LIKE upper(\'[value]%\'))',
                                placeholder: 'Escriba el nombre del Departamento',
                                required: true,
                                minChars: 3
                            },

                        ],

                        title: 'Departamentos',
                        topicID: 'DepartamentosId',
                        gridOptions: {
                            columns: [
                                {
                                    id: 'Action',
                                    field: 'OBJECTID',
                                    label: 'Action',
                                    width: 32,
                                    sortable: false,
                                    exportable: false,
                                    renderCell: function (object, value, node) {
                                        on(node, 'click', function () {
                                            alert('Do something exciting here like search for related records or edit the selected record.');
                                        });
                                        node.innerHTML = '<i class=\'fa fa-pencil\' style=\'margin-left:8px;\'></i>';
                                    }
                                },
                                {
                                    field: 'DPT_COD',
                                    label: 'Codigo',
                                    width: 150
                                },
                                {
                                    field: 'DPT_NOMBRE',
                                    label: 'Nombre',
                                    width: 150
                                },

                            ],
                            sort: [
                                {
                                    attribute: 'DPT_NOMBRE',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    }
                ]
            },
            /*{
                name: 'Police Stations',
                expression: '', // additional where expression applied to all queries
                queryParameters: {
                    type: 'table', // spatial, relationship, table or database
                    layerID: 'louisvillePubSafety', // from operational layers
                    sublayerID: 2,
                    outFields: ['*']
                },
                idProperty: 'OBJECTID',
                attributeSearches: [
                    {
                        name: 'Search For Police Station By Name',
                        searchFields: [
                            {
                                name: 'Police Station',
                                label: 'Name',
                                expression: '(PDNAME LIKE \'[value]%\')',
                                placeholder: 'Enter the Name of the Police Station',
                                required: true,
                                minChars: 3
                            }
                        ],

                        title: 'Police Stations',
                        topicID: 'policeStationQuery',
                        gridOptions: {
                            columns: [
                                {
                                    field: 'PDNAME',
                                    label: 'Name',
                                    width: 150
                                },
                                {
                                    field: 'ADDRESS',
                                    label: 'Address',
                                    width: 150
                                },
                                {
                                    field: 'PDTYPE',
                                    label: 'Type',
                                    width: 100
                                },
                                {
                                    field: 'FUNCTION',
                                    label: 'Function',
                                    width: 100
                                },
                                {
                                    field: 'LASTUPDATE',
                                    label: 'Last Update',
                                    width: 100,
                                    get: function (object) { // allow export as a proper date
                                        return new Date(object.LASTUPDATE);
                                    },
                                    formatter: formatDateTime
                                }
                            ],
                            sort: [
                                {
                                    attribute: 'PDNAME',
                                    descending: 'ASC'
                                }
                            ]
                        }
                    }
                ]
            }*/
        ]
    };
});