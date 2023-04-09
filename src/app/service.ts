export const SERVICE = {
    "createDay": 0,
    "serviceId": "82f22d0d-0bf9-451c-8761-d33ceca63dd5",
    "serviceShortName": null,
    "serviceLongName": null,
    "generalData":
    {
        "general":
        {
            "serviceNumber": "66666",
            "version": null,
            "container": "timeline",
            "planData":
            {
                "circulationDate": 1680652800000,
                "circulationDay": 3,
                "initDate": 1617627457998,
                "endDate": 1712235457998,
                "planName": null,
                "type": null,
                "planId": null
            },
            "internationalServiceNumber": "66666",
            "comercialData":
            {
                "serviceCommercialNumber": "66666",
                "operatorCompany": "indra",
                "trafficType": "PASSENGERS",
                "subtrafficType": "Direct diesel train"
            }
        },
        "parameters":
        {
            "passingTime": 1680645610344,
            "arrivalCommercialTime": 1680645630344,
            "arrivalTechnicalTime": 1680645605344,
            "arrivalAdjustementTime": 1680645601344,
            "departureCommercialTime": 1680645660344,
            "departureTechnicalTime": 1680645605344,
            "departureAdjustementTime": 1680645601344,
            "minCommercialStopTime": 1680645660344,
            "commercialStopTime": 1680645660344,
            "technicalStopTime": 1680645660344,
            "adjustementStopTime": 1680645660344,
            "confortAcceleration": 0.35,
            "confortDecceleration": 0.35
        }
    },
    "routeData":
    {
        "pivotsList":
        [
            {
                "name": "87005 | Petseri",
                "backwardType": "NOT_ALLOWED",
                "stationingTrack": null,
                "circulationTrack": null,
                "formationChild": false,
                "initialTrackGauge": null,
                "movementDefault": null,
                "nodeMnemonic": "ND.ER-T001-PETS",
                "pivotId": "5e8ab323-d21c-4009-9934-3b54160c8679",
                "rollingStockData":
                {
                    "rollingStockId": "0",
                    "formation":
                    {
                        "id": "ba6f64ad-a9df-3a48-8d7e-b44a2c810077",
                        "generalData":
                        {
                            "name": "10077",
                            "version": null,
                            "longName": "10077",
                            "serie": "730",
                            "subserie": "000"
                        },
                        "formationData":
                        {
                            "totalizableData":
                            {
                                "@class": "es.adif.sit.reg.rollingstock.model.FormationTotalizableData",
                                "totalizableDataType": "FORMATION",
                                "loadingGauges":
                                {},
                                "gaugeTypes":
                                [
                                    "RUSSIAN"
                                ],
                                "rollingFactor": 500,
                                "flangeFactor": 4,
                                "aerodynamicFactor": 0.1,
                                "length": null,
                                "mass": 400,
                                "axleCount": null,
                                "speedCritValues":
                                {
                                    "spc3": "scv14",
                                    "spc2": "scv9"
                                },
                                "trafficType": "PASSENGERS",
                                "tractionSet": "sts3",
                                "rotaryInertialMass": null,
                                "circuitBreakerClosingTime": 15,
                                "onboardAtpModes":
                                [
                                    "snt2",
                                    "snt1",
                                    "snt4",
                                    "snt3"
                                ],
                                "tractionTypeData":
                                {
                                    "stt3":
                                    {
                                        "tractionType": "not_electrified",
                                        "maxSpeed": 200,
                                        "criticalSpeed": null,
                                        "mechanicalEfficiency": 1,
                                        "regBrakeEfficiency": 0,
                                        "brakingCurve":
                                        [
                                            {
                                                "speed": 0,
                                                "force": 800000
                                            },
                                            {
                                                "speed": 200,
                                                "force": 200000
                                            }
                                        ],
                                        "fuelCurve":
                                        {
                                            "stt3":
                                            []
                                        },
                                        "powerPercentageCurves":
                                        {},
                                        "tractionCurve":
                                        [
                                            {
                                                "speed": 0,
                                                "force": 800000
                                            },
                                            {
                                                "speed": 200,
                                                "force": 200000
                                            }
                                        ],
                                        "uniformAcceleration": 1,
                                        "uniformDeceleration": 1
                                    }
                                },
                                "tare": null,
                                "maxLoad": null,
                                "auxSystemsConsumption": null,
                                "dangerousGoodsAllowed": null,
                                "specialConvoy": null,
                                "lastMotorVehicleDistance": null
                            },
                            "vehiclesSetup":
                            [
                                {
                                    "vehicleId": "ba6f64ad-a9df-3a48-8d7e-b44a2c88c583",
                                    "vehicleType": "SELFPROPELLED",
                                    "motor": true,
                                    "loadPercentage": null
                                }
                            ],
                            "calculationType": null,
                            "virtualizedData": null,
                            "formationType": null
                        }
                    },
                    "traction":
                    {
                        "tractionId": "0",
                        "maxSpeed": 200,
                        "criticalSpeed": 0,
                        "mechanicalEfficiency": 1,
                        "performance": 0,
                        "uniformAcceleration": 1,
                        "uniformDeceleration": 1,
                        "chartData":
                        [
                            {
                                "chartId": "not_electrified",
                                "dataChart": "{\"id\":\"not_electrified\",\"active\":false,\"disabled\":true,\"slug\":\"not_electrified\",\"name\":\"TRACTION TYPE not_electrified\",\"customStyle\":{\"color\":\"#FFFFFF \"},\"subPanel\":[{\"id\":\"chartdata_not_electrified_traction_curve\",\"active\":false,\"disabled\":false,\"name\":\"TRACTION CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Force (N)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[{\"x\":0,\"y\":800000},{\"x\":200,\"y\":200000}],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Force (N)\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_braking_curve\",\"active\":false,\"disabled\":false,\"name\":\"BRAKING CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Force (N)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[{\"x\":0,\"y\":800000},{\"x\":200,\"y\":200000}],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Force (N)\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_consumption_curve\",\"active\":false,\"disabled\":false,\"name\":\"CONSUMPTION CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Power\",\"yAxes\":\"Consumption\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Power\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Consumption\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_percentage_curve\",\"active\":false,\"disabled\":false,\"name\":\"PERCENTAGE CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Percentage (%)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Percentage (%)\"},\"yMax\":\"100\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"100\"}]}"
                            }
                        ],
                        "emptyStaticMass": 400,
                        "maxStaticMass": null,
                        "height": "",
                        "lateral": "",
                        "platform": "",
                        "speedClass": "",
                        "tractionPercentage": 100,
                        "brakingPercentage": 100
                    },
                    "additionalInformation":
                    {
                        "electrical":
                        {
                            "lastMotorVehicleDistance": 0,
                            "circuitBreakingClosingTime": 0
                        },
                        "energyConsumption":
                        {
                            "auxiliarySystem": "0"
                        },
                        "passenger":
                        {
                            "seatsNumber": 0,
                            "bedsNumber": 0,
                            "standingPlaces": 0
                        },
                        "security":
                        {
                            "dangerousGoods": false,
                            "specialTransport": false,
                            "atpModes": ""
                        }
                    }
                },
                "modified": false,
                "contiguous": false
            },
            {
                "name": "84805 | Tartu",
                "backwardType": "NOT_ALLOWED",
                "stationingTrack": null,
                "circulationTrack": null,
                "formationChild": true,
                "initialTrackGauge": null,
                "movementDefault": null,
                "nodeMnemonic": "ND.ER-T001-TART",
                "pivotId": "0ac61ea5-f1f1-4e3b-a116-df9a351dde05",
                "rollingStockData":
                {
                    "rollingStockId": "0",
                    "formation":
                    {
                        "id": "ba6f64ad-a9df-3a48-8d7e-b44a2c810077",
                        "generalData":
                        {
                            "name": "10077",
                            "version": null,
                            "longName": "10077",
                            "serie": "730",
                            "subserie": "000"
                        },
                        "formationData":
                        {
                            "totalizableData":
                            {
                                "@class": "es.adif.sit.reg.rollingstock.model.FormationTotalizableData",
                                "totalizableDataType": "FORMATION",
                                "loadingGauges":
                                {},
                                "gaugeTypes":
                                [
                                    "RUSSIAN"
                                ],
                                "rollingFactor": 500,
                                "flangeFactor": 4,
                                "aerodynamicFactor": 0.1,
                                "length": null,
                                "mass": 400,
                                "axleCount": null,
                                "speedCritValues":
                                {
                                    "spc3": "scv14",
                                    "spc2": "scv9"
                                },
                                "trafficType": "PASSENGERS",
                                "tractionSet": "sts3",
                                "rotaryInertialMass": null,
                                "circuitBreakerClosingTime": 15,
                                "onboardAtpModes":
                                [
                                    "snt2",
                                    "snt1",
                                    "snt4",
                                    "snt3"
                                ],
                                "tractionTypeData":
                                {
                                    "stt3":
                                    {
                                        "tractionType": "not_electrified",
                                        "maxSpeed": 200,
                                        "criticalSpeed": null,
                                        "mechanicalEfficiency": 1,
                                        "regBrakeEfficiency": 0,
                                        "brakingCurve":
                                        [
                                            {
                                                "speed": 0,
                                                "force": 800000
                                            },
                                            {
                                                "speed": 200,
                                                "force": 200000
                                            }
                                        ],
                                        "fuelCurve":
                                        {
                                            "stt3":
                                            []
                                        },
                                        "powerPercentageCurves":
                                        {},
                                        "tractionCurve":
                                        [
                                            {
                                                "speed": 0,
                                                "force": 800000
                                            },
                                            {
                                                "speed": 200,
                                                "force": 200000
                                            }
                                        ],
                                        "uniformAcceleration": 1,
                                        "uniformDeceleration": 1
                                    }
                                },
                                "tare": null,
                                "maxLoad": null,
                                "auxSystemsConsumption": null,
                                "dangerousGoodsAllowed": null,
                                "specialConvoy": null,
                                "lastMotorVehicleDistance": null
                            },
                            "vehiclesSetup":
                            [
                                {
                                    "vehicleId": "ba6f64ad-a9df-3a48-8d7e-b44a2c88c583",
                                    "vehicleType": "SELFPROPELLED",
                                    "motor": true,
                                    "loadPercentage": null
                                }
                            ],
                            "calculationType": null,
                            "virtualizedData": null,
                            "formationType": null
                        }
                    },
                    "traction":
                    {
                        "tractionId": "0",
                        "maxSpeed": 200,
                        "criticalSpeed": 0,
                        "mechanicalEfficiency": 1,
                        "performance": 0,
                        "uniformAcceleration": 1,
                        "uniformDeceleration": 1,
                        "chartData":
                        [
                            {
                                "chartId": "not_electrified",
                                "dataChart": "{\"id\":\"not_electrified\",\"active\":false,\"disabled\":true,\"slug\":\"not_electrified\",\"name\":\"TRACTION TYPE not_electrified\",\"customStyle\":{\"color\":\"#FFFFFF \"},\"subPanel\":[{\"id\":\"chartdata_not_electrified_traction_curve\",\"active\":false,\"disabled\":false,\"name\":\"TRACTION CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Force (N)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[{\"x\":0,\"y\":800000},{\"x\":200,\"y\":200000}],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Force (N)\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_braking_curve\",\"active\":false,\"disabled\":false,\"name\":\"BRAKING CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Force (N)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[{\"x\":0,\"y\":800000},{\"x\":200,\"y\":200000}],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Force (N)\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_consumption_curve\",\"active\":false,\"disabled\":false,\"name\":\"CONSUMPTION CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Power\",\"yAxes\":\"Consumption\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Power\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Consumption\"},\"yMax\":\"99999999\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"99999999\"},{\"id\":\"chartdata_not_electrified_percentage_curve\",\"active\":false,\"disabled\":false,\"name\":\"PERCENTAGE CURVE\",\"customStyle\":{\"color\":\"#FFFFFF\"},\"xAxes\":\"Speed (Km/h)\",\"yAxes\":\"Percentage (%)\",\"icon\":\"double-right\",\"chart\":{\"data\":{\"data\":[],\"label\":\"Mostrar / Ocultar\"},\"labels\":[0,10,40,50,60,70,200],\"options\":{\"scales\":{\"xAxes\":[{\"scaleLabel\":{\"labelString\":\"Speed (Km/h)\"},\"xMax\":\"999999\"}],\"yAxes\":[{\"scaleLabel\":{\"labelString\":\"Percentage (%)\"},\"yMax\":\"100\"}]}},\"legend\":false},\"xMax\":\"999999\",\"yMax\":\"100\"}]}"
                            }
                        ],
                        "emptyStaticMass": 400,
                        "maxStaticMass": null,
                        "height": "",
                        "lateral": "",
                        "platform": "",
                        "speedClass": "",
                        "tractionPercentage": 100,
                        "brakingPercentage": 100
                    },
                    "additionalInformation":
                    {
                        "electrical":
                        {
                            "lastMotorVehicleDistance": 0,
                            "circuitBreakingClosingTime": 0
                        },
                        "energyConsumption":
                        {
                            "auxiliarySystem": "0"
                        },
                        "passenger":
                        {
                            "seatsNumber": 0,
                            "bedsNumber": 0,
                            "standingPlaces": 0
                        },
                        "security":
                        {
                            "dangerousGoods": false,
                            "specialTransport": false,
                            "atpModes": ""
                        }
                    }
                },
                "modified": false,
                "contiguous": false
            }
        ],
        "nodesList":
        [
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-PETS",
                    "nodeName": "Petseri",
                    "shortName": "PETS",
                    "nodeOperativeCode": "87005",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-PETS-PETS-V2",
                                "name": "2",
                                "longName": "II",
                                "parentMnemonic": "MOV.T001-KOID-PETS.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-PETS-PETS-V2",
                                "name": "2",
                                "longName": "II",
                                "parentMnemonic": "MOV.T001-PETS-KOID.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.2",
                                "name": "MOV.T001-KOID-PETS.2",
                                "longName": "MOV.T001-KOID-PETS.2",
                                "parentMnemonic": "ND.ER-T001-PETS",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.1",
                                "name": "MOV.T001-PETS-KOID.1",
                                "longName": "MOV.T001-PETS-KOID.1",
                                "parentMnemonic": "ND.ER-T001-PETS",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Petseri",
                    "track": "TCK.ER-T001-PETS-PETS-V2",
                    "trackMnemonic": "TCK.ER-T001-PETS-PETS-V2",
                    "movement": "MOV.T001-PETS-KOID.1",
                    "movementMnemonic": "MOV.T001-PETS-KOID.1",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-PETS",
                    "nodeMnemonic": "ND.ER-T001-PETS",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "87005"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-KOID-PETS-V1",
                    "trackMnemonic": "TCK.ER-T001-KOID-PETS-V1",
                    "movement": "MOV.T001-PETS-KOID.14",
                    "movementMnemonic": "MOV.T001-PETS-KOID.14",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-KOID",
                    "nodeName": "Koidula",
                    "shortName": "KOID",
                    "nodeOperativeCode": "87004",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.104",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V12",
                                "name": "12",
                                "longName": "12",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.93",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-PETS-KOID.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V14",
                                "name": "14",
                                "longName": "14",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.127",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-PETS-KOID.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V12",
                                "name": "12",
                                "longName": "12",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.94",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-KOID-PETS.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.141",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.49",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.124",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.146",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-KOID-PETS.119",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.54",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.66",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.108",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.70",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V14",
                                "name": "14",
                                "longName": "14",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.131",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.85",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.107",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.136",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.110",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-KOID-PETS.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V9",
                                "name": "9",
                                "longName": "9t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.39",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V14",
                                "name": "14",
                                "longName": "14",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.128",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.78",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.123",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-KOID-PETS.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.48",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-KOID-PETS.75",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.53",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.99",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.81",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.57",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.145",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.86",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-PETS-KOID.120",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.58",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.90",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.89",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.69",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V11",
                                "name": "11",
                                "longName": "11",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.43",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V9",
                                "name": "9",
                                "longName": "9t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.40",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.97",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.113",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-KOID-PETS.117",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.114",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-PETS-KOID.76",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.62",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.50",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-PETS-KOID.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-KOID-PETS.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.100",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V11",
                                "name": "11",
                                "longName": "11",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.44",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.137",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.142",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.77",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V9",
                                "name": "9",
                                "longName": "9t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.138",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.65",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.103",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V14",
                                "name": "14",
                                "longName": "14",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.132",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-PETS-KOID.118",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V10",
                                "name": "10",
                                "longName": "10t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.135",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.82",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.61",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.47",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-KOID-PETS.73",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V7",
                                "name": "7",
                                "longName": "7t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.98",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V4",
                                "name": "4",
                                "longName": "IVt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-PETS-KOID.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V8",
                                "name": "8",
                                "longName": "8t",
                                "parentMnemonic": "MOV.T001-KOID-PETS.109",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V13",
                                "name": "13",
                                "longName": "13",
                                "parentMnemonic": "MOV.T001-PETS-KOID.74",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V9",
                                "name": "9",
                                "longName": "9t",
                                "parentMnemonic": "MOV.T001-PETS-KOID.36",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-KOID-V15",
                                "name": "15",
                                "longName": "15",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.118",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.82",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.70",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.44",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.65",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.61",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.131",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.94",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.93",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.124",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.53",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.73",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.49",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.50",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.62",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.136",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.137",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.103",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.100",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.69",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.74",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.141",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.104",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.40",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.128",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.36",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.98",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.77",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.132",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.114",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.97",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.142",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.138",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.109",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.39",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.85",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.78",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.110",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.54",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.75",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.135",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.145",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.66",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.117",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.47",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.119",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.108",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.123",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.146",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.86",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.48",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.89",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.58",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.90",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.99",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.43",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.107",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.127",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.76",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.113",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-PETS.81",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.57",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.120",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KOID-PETS-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-PETS-KOID.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.78",
                                "name": "MOV.T001-ORAV-KOID.78",
                                "longName": "MOV.T001-ORAV-KOID.78",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.117",
                                "name": "MOV.T001-KOID-PETS.117",
                                "longName": "MOV.T001-KOID-PETS.117",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.94",
                                "name": "MOV.T001-ORAV-KOID.94",
                                "longName": "MOV.T001-ORAV-KOID.94",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.53",
                                "name": "MOV.T001-KOID-ORAV.53",
                                "longName": "MOV.T001-KOID-ORAV.53",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.97",
                                "name": "MOV.T001-KOID-PETS.97",
                                "longName": "MOV.T001-KOID-PETS.97",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.89",
                                "name": "MOV.T001-KOID-ORAV.89",
                                "longName": "MOV.T001-KOID-ORAV.89",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.6",
                                "name": "MOV.T001-ORAV-KOID.6",
                                "longName": "MOV.T001-ORAV-KOID.6",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.36",
                                "name": "MOV.T001-PETS-KOID.36",
                                "longName": "MOV.T001-PETS-KOID.36",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.138",
                                "name": "MOV.T001-ORAV-KOID.138",
                                "longName": "MOV.T001-ORAV-KOID.138",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.108",
                                "name": "MOV.T001-PETS-KOID.108",
                                "longName": "MOV.T001-PETS-KOID.108",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.74",
                                "name": "MOV.T001-PETS-KOID.74",
                                "longName": "MOV.T001-PETS-KOID.74",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.40",
                                "name": "MOV.T001-ORAV-KOID.40",
                                "longName": "MOV.T001-ORAV-KOID.40",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.28",
                                "name": "MOV.T001-PETS-KOID.28",
                                "longName": "MOV.T001-PETS-KOID.28",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.5",
                                "name": "MOV.T001-KOID-ORAV.5",
                                "longName": "MOV.T001-KOID-ORAV.5",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.39",
                                "name": "MOV.T001-KOID-ORAV.39",
                                "longName": "MOV.T001-KOID-ORAV.39",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.62",
                                "name": "MOV.T001-PETS-KOID.62",
                                "longName": "MOV.T001-PETS-KOID.62",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.142",
                                "name": "MOV.T001-ORAV-KOID.142",
                                "longName": "MOV.T001-ORAV-KOID.142",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.110",
                                "name": "MOV.T001-PETS-KOID.110",
                                "longName": "MOV.T001-PETS-KOID.110",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.20",
                                "name": "MOV.T001-ORAV-KOID.20",
                                "longName": "MOV.T001-ORAV-KOID.20",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.120",
                                "name": "MOV.T001-PETS-KOID.120",
                                "longName": "MOV.T001-PETS-KOID.120",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.47",
                                "name": "MOV.T001-KOID-PETS.47",
                                "longName": "MOV.T001-KOID-PETS.47",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.93",
                                "name": "MOV.T001-KOID-ORAV.93",
                                "longName": "MOV.T001-KOID-ORAV.93",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.54",
                                "name": "MOV.T001-ORAV-KOID.54",
                                "longName": "MOV.T001-ORAV-KOID.54",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.31",
                                "name": "MOV.T001-KOID-ORAV.31",
                                "longName": "MOV.T001-KOID-ORAV.31",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.70",
                                "name": "MOV.T001-ORAV-KOID.70",
                                "longName": "MOV.T001-ORAV-KOID.70",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.61",
                                "name": "MOV.T001-KOID-PETS.61",
                                "longName": "MOV.T001-KOID-PETS.61",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.81",
                                "name": "MOV.T001-KOID-PETS.81",
                                "longName": "MOV.T001-KOID-PETS.81",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.58",
                                "name": "MOV.T001-ORAV-KOID.58",
                                "longName": "MOV.T001-ORAV-KOID.58",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.44",
                                "name": "MOV.T001-ORAV-KOID.44",
                                "longName": "MOV.T001-ORAV-KOID.44",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.9",
                                "name": "MOV.T001-KOID-ORAV.9",
                                "longName": "MOV.T001-KOID-ORAV.9",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.76",
                                "name": "MOV.T001-PETS-KOID.76",
                                "longName": "MOV.T001-PETS-KOID.76",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.123",
                                "name": "MOV.T001-KOID-ORAV.123",
                                "longName": "MOV.T001-KOID-ORAV.123",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.82",
                                "name": "MOV.T001-PETS-KOID.82",
                                "longName": "MOV.T001-PETS-KOID.82",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.19",
                                "name": "MOV.T001-KOID-ORAV.19",
                                "longName": "MOV.T001-KOID-ORAV.19",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.57",
                                "name": "MOV.T001-KOID-ORAV.57",
                                "longName": "MOV.T001-KOID-ORAV.57",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.113",
                                "name": "MOV.T001-KOID-ORAV.113",
                                "longName": "MOV.T001-KOID-ORAV.113",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.29",
                                "name": "MOV.T001-KOID-PETS.29",
                                "longName": "MOV.T001-KOID-PETS.29",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.135",
                                "name": "MOV.T001-KOID-PETS.135",
                                "longName": "MOV.T001-KOID-PETS.135",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.49",
                                "name": "MOV.T001-KOID-PETS.49",
                                "longName": "MOV.T001-KOID-PETS.49",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.69",
                                "name": "MOV.T001-KOID-ORAV.69",
                                "longName": "MOV.T001-KOID-ORAV.69",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.90",
                                "name": "MOV.T001-ORAV-KOID.90",
                                "longName": "MOV.T001-ORAV-KOID.90",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.32",
                                "name": "MOV.T001-ORAV-KOID.32",
                                "longName": "MOV.T001-ORAV-KOID.32",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.77",
                                "name": "MOV.T001-KOID-ORAV.77",
                                "longName": "MOV.T001-KOID-ORAV.77",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.30",
                                "name": "MOV.T001-PETS-KOID.30",
                                "longName": "MOV.T001-PETS-KOID.30",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.119",
                                "name": "MOV.T001-KOID-PETS.119",
                                "longName": "MOV.T001-KOID-PETS.119",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.128",
                                "name": "MOV.T001-ORAV-KOID.128",
                                "longName": "MOV.T001-ORAV-KOID.128",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.43",
                                "name": "MOV.T001-KOID-ORAV.43",
                                "longName": "MOV.T001-KOID-ORAV.43",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.14",
                                "name": "MOV.T001-PETS-KOID.14",
                                "longName": "MOV.T001-PETS-KOID.14",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.136",
                                "name": "MOV.T001-PETS-KOID.136",
                                "longName": "MOV.T001-PETS-KOID.136",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.85",
                                "name": "MOV.T001-KOID-ORAV.85",
                                "longName": "MOV.T001-KOID-ORAV.85",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.103",
                                "name": "MOV.T001-KOID-ORAV.103",
                                "longName": "MOV.T001-KOID-ORAV.103",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.65",
                                "name": "MOV.T001-KOID-ORAV.65",
                                "longName": "MOV.T001-KOID-ORAV.65",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.131",
                                "name": "MOV.T001-KOID-ORAV.131",
                                "longName": "MOV.T001-KOID-ORAV.131",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.127",
                                "name": "MOV.T001-KOID-ORAV.127",
                                "longName": "MOV.T001-KOID-ORAV.127",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.66",
                                "name": "MOV.T001-ORAV-KOID.66",
                                "longName": "MOV.T001-ORAV-KOID.66",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.27",
                                "name": "MOV.T001-KOID-PETS.27",
                                "longName": "MOV.T001-KOID-PETS.27",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.141",
                                "name": "MOV.T001-KOID-ORAV.141",
                                "longName": "MOV.T001-KOID-ORAV.141",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.100",
                                "name": "MOV.T001-PETS-KOID.100",
                                "longName": "MOV.T001-PETS-KOID.100",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.10",
                                "name": "MOV.T001-ORAV-KOID.10",
                                "longName": "MOV.T001-ORAV-KOID.10",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.118",
                                "name": "MOV.T001-PETS-KOID.118",
                                "longName": "MOV.T001-PETS-KOID.118",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.15",
                                "name": "MOV.T001-KOID-ORAV.15",
                                "longName": "MOV.T001-KOID-ORAV.15",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.2",
                                "name": "MOV.T001-PETS-KOID.2",
                                "longName": "MOV.T001-PETS-KOID.2",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.50",
                                "name": "MOV.T001-PETS-KOID.50",
                                "longName": "MOV.T001-PETS-KOID.50",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.73",
                                "name": "MOV.T001-KOID-PETS.73",
                                "longName": "MOV.T001-KOID-PETS.73",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.104",
                                "name": "MOV.T001-ORAV-KOID.104",
                                "longName": "MOV.T001-ORAV-KOID.104",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.48",
                                "name": "MOV.T001-PETS-KOID.48",
                                "longName": "MOV.T001-PETS-KOID.48",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.114",
                                "name": "MOV.T001-ORAV-KOID.114",
                                "longName": "MOV.T001-ORAV-KOID.114",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.13",
                                "name": "MOV.T001-KOID-PETS.13",
                                "longName": "MOV.T001-KOID-PETS.13",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.132",
                                "name": "MOV.T001-ORAV-KOID.132",
                                "longName": "MOV.T001-ORAV-KOID.132",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.107",
                                "name": "MOV.T001-KOID-PETS.107",
                                "longName": "MOV.T001-KOID-PETS.107",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.109",
                                "name": "MOV.T001-KOID-PETS.109",
                                "longName": "MOV.T001-KOID-PETS.109",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-PETS-KOID.98",
                                "name": "MOV.T001-PETS-KOID.98",
                                "longName": "MOV.T001-PETS-KOID.98",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.24",
                                "name": "MOV.T001-ORAV-KOID.24",
                                "longName": "MOV.T001-ORAV-KOID.24",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.1",
                                "name": "MOV.T001-KOID-PETS.1",
                                "longName": "MOV.T001-KOID-PETS.1",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.124",
                                "name": "MOV.T001-ORAV-KOID.124",
                                "longName": "MOV.T001-ORAV-KOID.124",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.16",
                                "name": "MOV.T001-ORAV-KOID.16",
                                "longName": "MOV.T001-ORAV-KOID.16",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.99",
                                "name": "MOV.T001-KOID-PETS.99",
                                "longName": "MOV.T001-KOID-PETS.99",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.146",
                                "name": "MOV.T001-ORAV-KOID.146",
                                "longName": "MOV.T001-ORAV-KOID.146",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.137",
                                "name": "MOV.T001-KOID-ORAV.137",
                                "longName": "MOV.T001-KOID-ORAV.137",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.145",
                                "name": "MOV.T001-KOID-ORAV.145",
                                "longName": "MOV.T001-KOID-ORAV.145",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.35",
                                "name": "MOV.T001-KOID-PETS.35",
                                "longName": "MOV.T001-KOID-PETS.35",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.23",
                                "name": "MOV.T001-KOID-ORAV.23",
                                "longName": "MOV.T001-KOID-ORAV.23",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-PETS.75",
                                "name": "MOV.T001-KOID-PETS.75",
                                "longName": "MOV.T001-KOID-PETS.75",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.86",
                                "name": "MOV.T001-ORAV-KOID.86",
                                "longName": "MOV.T001-ORAV-KOID.86",
                                "parentMnemonic": "ND.ER-T001-KOID",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Koidula",
                    "track": "TCK.ER-T001-KOID-KOID-V2",
                    "trackMnemonic": "TCK.ER-T001-KOID-KOID-V2",
                    "movement": "MOV.T001-KOID-ORAV.23",
                    "movementMnemonic": "MOV.T001-KOID-ORAV.23",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-KOID",
                    "nodeMnemonic": "ND.ER-T001-KOID",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "87004"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-ORAV-KOID-V1",
                    "trackMnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                    "movement": "MOV.T001-KOID-ORAV.6",
                    "movementMnemonic": "MOV.T001-KOID-ORAV.6",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-ORAV",
                    "nodeName": "Orava",
                    "shortName": "ORAV",
                    "nodeOperativeCode": "85121",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.34",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.33",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V5",
                                "name": "5",
                                "longName": "5t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.26",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.25",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V6",
                                "name": "6",
                                "longName": "6t",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-ORAV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAVA_74km_2pk-V1",
                                "name": "ORAV74-2",
                                "longName": "ORAV74-II",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.25",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KOID-ORAV.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.34",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.26",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ORAV-KOID-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-KOID.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.33",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.15",
                                "name": "MOV.T001-ORAV-ILUM67.15",
                                "longName": "MOV.T001-ORAV-ILUM67.15",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.12",
                                "name": "MOV.T001-ILUM67-ORAV.12",
                                "longName": "MOV.T001-ILUM67-ORAV.12",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.21",
                                "name": "MOV.T001-ORAV-KOID.21",
                                "longName": "MOV.T001-ORAV-KOID.21",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.29",
                                "name": "MOV.T001-ORAV-ILUM67.29",
                                "longName": "MOV.T001-ORAV-ILUM67.29",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.1",
                                "name": "MOV.T001-ORAV-KOID.1",
                                "longName": "MOV.T001-ORAV-KOID.1",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.11",
                                "name": "MOV.T001-ORAV-ILUM67.11",
                                "longName": "MOV.T001-ORAV-ILUM67.11",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.26",
                                "name": "MOV.T001-ILUM67-ORAV.26",
                                "longName": "MOV.T001-ILUM67-ORAV.26",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.16",
                                "name": "MOV.T001-ILUM67-ORAV.16",
                                "longName": "MOV.T001-ILUM67-ORAV.16",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.7",
                                "name": "MOV.T001-ORAV-ILUM67.7",
                                "longName": "MOV.T001-ORAV-ILUM67.7",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.18",
                                "name": "MOV.T001-KOID-ORAV.18",
                                "longName": "MOV.T001-KOID-ORAV.18",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.8",
                                "name": "MOV.T001-ILUM67-ORAV.8",
                                "longName": "MOV.T001-ILUM67-ORAV.8",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.30",
                                "name": "MOV.T001-ILUM67-ORAV.30",
                                "longName": "MOV.T001-ILUM67-ORAV.30",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.25",
                                "name": "MOV.T001-ORAV-ILUM67.25",
                                "longName": "MOV.T001-ORAV-ILUM67.25",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.3",
                                "name": "MOV.T001-ORAV-ILUM67.3",
                                "longName": "MOV.T001-ORAV-ILUM67.3",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.13",
                                "name": "MOV.T001-ORAV-KOID.13",
                                "longName": "MOV.T001-ORAV-KOID.13",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.28",
                                "name": "MOV.T001-ILUM67-ORAV.28",
                                "longName": "MOV.T001-ILUM67-ORAV.28",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.19",
                                "name": "MOV.T001-ORAV-ILUM67.19",
                                "longName": "MOV.T001-ORAV-ILUM67.19",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.17",
                                "name": "MOV.T001-ORAV-KOID.17",
                                "longName": "MOV.T001-ORAV-KOID.17",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.32",
                                "name": "MOV.T001-ILUM67-ORAV.32",
                                "longName": "MOV.T001-ILUM67-ORAV.32",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.9",
                                "name": "MOV.T001-ORAV-KOID.9",
                                "longName": "MOV.T001-ORAV-KOID.9",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.23",
                                "name": "MOV.T001-ORAV-KOID.23",
                                "longName": "MOV.T001-ORAV-KOID.23",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-KOID.5",
                                "name": "MOV.T001-ORAV-KOID.5",
                                "longName": "MOV.T001-ORAV-KOID.5",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.22",
                                "name": "MOV.T001-KOID-ORAV.22",
                                "longName": "MOV.T001-KOID-ORAV.22",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.14",
                                "name": "MOV.T001-KOID-ORAV.14",
                                "longName": "MOV.T001-KOID-ORAV.14",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.10",
                                "name": "MOV.T001-KOID-ORAV.10",
                                "longName": "MOV.T001-KOID-ORAV.10",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.4",
                                "name": "MOV.T001-ILUM67-ORAV.4",
                                "longName": "MOV.T001-ILUM67-ORAV.4",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.34",
                                "name": "MOV.T001-ILUM67-ORAV.34",
                                "longName": "MOV.T001-ILUM67-ORAV.34",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.33",
                                "name": "MOV.T001-ORAV-ILUM67.33",
                                "longName": "MOV.T001-ORAV-ILUM67.33",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.2",
                                "name": "MOV.T001-KOID-ORAV.2",
                                "longName": "MOV.T001-KOID-ORAV.2",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.27",
                                "name": "MOV.T001-ORAV-ILUM67.27",
                                "longName": "MOV.T001-ORAV-ILUM67.27",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.24",
                                "name": "MOV.T001-KOID-ORAV.24",
                                "longName": "MOV.T001-KOID-ORAV.24",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.31",
                                "name": "MOV.T001-ORAV-ILUM67.31",
                                "longName": "MOV.T001-ORAV-ILUM67.31",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KOID-ORAV.6",
                                "name": "MOV.T001-KOID-ORAV.6",
                                "longName": "MOV.T001-KOID-ORAV.6",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.20",
                                "name": "MOV.T001-ILUM67-ORAV.20",
                                "longName": "MOV.T001-ILUM67-ORAV.20",
                                "parentMnemonic": "ND.ER-T001-ORAV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Orava",
                    "track": "TCK.ER-T001-ORAV-ORAV-V2",
                    "trackMnemonic": "TCK.ER-T001-ORAV-ORAV-V2",
                    "movement": "MOV.T001-ORAV-ILUM67.7",
                    "movementMnemonic": "MOV.T001-ORAV-ILUM67.7",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-ORAV",
                    "nodeMnemonic": "ND.ER-T001-ORAV",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85121"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-ILUM67-ORAV-V1",
                    "trackMnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                    "movement": "MOV.T001-ORAV-ILUM67.2",
                    "movementMnemonic": "MOV.T001-ORAV-ILUM67.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-ILUM67",
                    "nodeName": "Ilumetsa67",
                    "shortName": "ILUM67",
                    "nodeOperativeCode": "85104",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-KIKK64.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-ILUM67.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ORAV-ILUM67.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-ILUM67-ORAV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-ORAV.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKK64-ILUM67-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-ILUM67.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKK64-ILUM67-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-KIKK64.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-ORAV-ILUM67.2",
                                "name": "MOV.T001-ORAV-ILUM67.2",
                                "longName": "MOV.T001-ORAV-ILUM67.2",
                                "parentMnemonic": "ND.ER-T001-ILUM67",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-ILUM67.4",
                                "name": "MOV.T001-KIKK64-ILUM67.4",
                                "longName": "MOV.T001-KIKK64-ILUM67.4",
                                "parentMnemonic": "ND.ER-T001-ILUM67",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-ORAV.1",
                                "name": "MOV.T001-ILUM67-ORAV.1",
                                "longName": "MOV.T001-ILUM67-ORAV.1",
                                "parentMnemonic": "ND.ER-T001-ILUM67",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-KIKK64.3",
                                "name": "MOV.T001-ILUM67-KIKK64.3",
                                "longName": "MOV.T001-ILUM67-KIKK64.3",
                                "parentMnemonic": "ND.ER-T001-ILUM67",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Ilumetsa67",
                    "track": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                    "trackMnemonic": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                    "movement": "MOV.T001-ILUM67-KIKK64.3",
                    "movementMnemonic": "MOV.T001-ILUM67-KIKK64.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-ILUM67",
                    "nodeMnemonic": "ND.ER-T001-ILUM67",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85104"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-KIKK64-ILUM67-V1",
                    "trackMnemonic": "TCK.ER-T001-KIKK64-ILUM67-V1",
                    "movement": "MOV.T001-ILUM67-KIKK64.2",
                    "movementMnemonic": "MOV.T001-ILUM67-KIKK64.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-KIKK64",
                    "nodeName": "Kiika64",
                    "shortName": "KIKK64",
                    "nodeOperativeCode": "85103",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-KIKK64.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-ILUM67.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKK64-ILUM67-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-ILUM67.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIKK64-ILUM67-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-ILUM67-KIKK64.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.4",
                                "name": "MOV.T001-VER-KIKK64.4",
                                "longName": "MOV.T001-VER-KIKK64.4",
                                "parentMnemonic": "ND.ER-T001-KIKK64",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-ILUM67-KIKK64.2",
                                "name": "MOV.T001-ILUM67-KIKK64.2",
                                "longName": "MOV.T001-ILUM67-KIKK64.2",
                                "parentMnemonic": "ND.ER-T001-KIKK64",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.3",
                                "name": "MOV.T001-KIKK64-VER.3",
                                "longName": "MOV.T001-KIKK64-VER.3",
                                "parentMnemonic": "ND.ER-T001-KIKK64",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-ILUM67.1",
                                "name": "MOV.T001-KIKK64-ILUM67.1",
                                "longName": "MOV.T001-KIKK64-ILUM67.1",
                                "parentMnemonic": "ND.ER-T001-KIKK64",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Kiika64",
                    "track": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                    "trackMnemonic": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                    "movement": "MOV.T001-KIKK64-VER.3",
                    "movementMnemonic": "MOV.T001-KIKK64-VER.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-KIKK64",
                    "nodeMnemonic": "ND.ER-T001-KIKK64",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85103"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-VER-KIKK64-V1",
                    "trackMnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                    "movement": "MOV.T001-KIKK64-VER.14",
                    "movementMnemonic": "MOV.T001-KIKK64-VER.14",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-VER",
                    "nodeName": "Veriora",
                    "shortName": "VER",
                    "nodeOperativeCode": "85102",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-VER-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VERIORA_61km_4pk-V1",
                                "name": "VER61-1",
                                "longName": "VER61-1",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIKK64-VER.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VER-KIKK64-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-KIKK64.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.9",
                                "name": "MOV.T001-VER-KIKK64.9",
                                "longName": "MOV.T001-VER-KIKK64.9",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.14",
                                "name": "MOV.T001-KIKK64-VER.14",
                                "longName": "MOV.T001-KIKK64-VER.14",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.15",
                                "name": "MOV.T001-VER-RUUS55.15",
                                "longName": "MOV.T001-VER-RUUS55.15",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.16",
                                "name": "MOV.T001-RUUS55-VER.16",
                                "longName": "MOV.T001-RUUS55-VER.16",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.21",
                                "name": "MOV.T001-VER-RUUS55.21",
                                "longName": "MOV.T001-VER-RUUS55.21",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.4",
                                "name": "MOV.T001-KIKK64-VER.4",
                                "longName": "MOV.T001-KIKK64-VER.4",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.7",
                                "name": "MOV.T001-VER-RUUS55.7",
                                "longName": "MOV.T001-VER-RUUS55.7",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.5",
                                "name": "MOV.T001-VER-KIKK64.5",
                                "longName": "MOV.T001-VER-KIKK64.5",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.19",
                                "name": "MOV.T001-VER-RUUS55.19",
                                "longName": "MOV.T001-VER-RUUS55.19",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.2",
                                "name": "MOV.T001-KIKK64-VER.2",
                                "longName": "MOV.T001-KIKK64-VER.2",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.6",
                                "name": "MOV.T001-KIKK64-VER.6",
                                "longName": "MOV.T001-KIKK64-VER.6",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.22",
                                "name": "MOV.T001-RUUS55-VER.22",
                                "longName": "MOV.T001-RUUS55-VER.22",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.20",
                                "name": "MOV.T001-RUUS55-VER.20",
                                "longName": "MOV.T001-RUUS55-VER.20",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.11",
                                "name": "MOV.T001-VER-RUUS55.11",
                                "longName": "MOV.T001-VER-RUUS55.11",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.10",
                                "name": "MOV.T001-KIKK64-VER.10",
                                "longName": "MOV.T001-KIKK64-VER.10",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.1",
                                "name": "MOV.T001-VER-KIKK64.1",
                                "longName": "MOV.T001-VER-KIKK64.1",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.3",
                                "name": "MOV.T001-VER-KIKK64.3",
                                "longName": "MOV.T001-VER-KIKK64.3",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.8",
                                "name": "MOV.T001-RUUS55-VER.8",
                                "longName": "MOV.T001-RUUS55-VER.8",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KIKK64-VER.18",
                                "name": "MOV.T001-KIKK64-VER.18",
                                "longName": "MOV.T001-KIKK64-VER.18",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.12",
                                "name": "MOV.T001-RUUS55-VER.12",
                                "longName": "MOV.T001-RUUS55-VER.12",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.17",
                                "name": "MOV.T001-VER-KIKK64.17",
                                "longName": "MOV.T001-VER-KIKK64.17",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-KIKK64.13",
                                "name": "MOV.T001-VER-KIKK64.13",
                                "longName": "MOV.T001-VER-KIKK64.13",
                                "parentMnemonic": "ND.ER-T001-VER",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Veriora",
                    "track": "TCK.ER-T001-VER-VER-V1",
                    "trackMnemonic": "TCK.ER-T001-VER-VER-V1",
                    "movement": "MOV.T001-VER-RUUS55.15",
                    "movementMnemonic": "MOV.T001-VER-RUUS55.15",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-VER",
                    "nodeMnemonic": "ND.ER-T001-VER",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85102"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-RUUS55-VER-V1",
                    "trackMnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                    "movement": "MOV.T001-VER-RUUS55.2",
                    "movementMnemonic": "MOV.T001-VER-RUUS55.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-RUUS55",
                    "nodeName": "Ruusa55",
                    "shortName": "RUUS55",
                    "nodeOperativeCode": "85011",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-RUUSA_55km_2km-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUSA_55km_2km-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-RUUS55.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUSA_55km_2km-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-HOLV50.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUSA_55km_2km-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VER-RUUS55.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-RUUS55-VER-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-VER.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLV50-RUUS55-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-RUUS55.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLV50-RUUS55-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-HOLV50.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-HOLV50-RUUS55.4",
                                "name": "MOV.T001-HOLV50-RUUS55.4",
                                "longName": "MOV.T001-HOLV50-RUUS55.4",
                                "parentMnemonic": "ND.ER-T001-RUUS55",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VER-RUUS55.2",
                                "name": "MOV.T001-VER-RUUS55.2",
                                "longName": "MOV.T001-VER-RUUS55.2",
                                "parentMnemonic": "ND.ER-T001-RUUS55",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-VER.1",
                                "name": "MOV.T001-RUUS55-VER.1",
                                "longName": "MOV.T001-RUUS55-VER.1",
                                "parentMnemonic": "ND.ER-T001-RUUS55",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-HOLV50.3",
                                "name": "MOV.T001-RUUS55-HOLV50.3",
                                "longName": "MOV.T001-RUUS55-HOLV50.3",
                                "parentMnemonic": "ND.ER-T001-RUUS55",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Ruusa55",
                    "track": "TCK.ER-T001-RUUSA_55km_2km-V1",
                    "trackMnemonic": "TCK.ER-T001-RUUSA_55km_2km-V1",
                    "movement": "MOV.T001-RUUS55-HOLV50.3",
                    "movementMnemonic": "MOV.T001-RUUS55-HOLV50.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-RUUS55",
                    "nodeMnemonic": "ND.ER-T001-RUUS55",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85011"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-HOLV50-RUUS55-V1",
                    "trackMnemonic": "TCK.ER-T001-HOLV50-RUUS55-V1",
                    "movement": "MOV.T001-RUUS55-HOLV50.2",
                    "movementMnemonic": "MOV.T001-RUUS55-HOLV50.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-HOLV50",
                    "nodeName": "Holvandi50",
                    "shortName": "HOLV50",
                    "nodeOperativeCode": "85010",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-HOLV50.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-RUUS55.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-HOLV50-RUUS55-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-RUUS55.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-HOLV50-RUUS55-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-RUUS55-HOLV50.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.4",
                                "name": "MOV.T001-POLV-HOLV50.4",
                                "longName": "MOV.T001-POLV-HOLV50.4",
                                "parentMnemonic": "ND.ER-T001-HOLV50",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-RUUS55.1",
                                "name": "MOV.T001-HOLV50-RUUS55.1",
                                "longName": "MOV.T001-HOLV50-RUUS55.1",
                                "parentMnemonic": "ND.ER-T001-HOLV50",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-RUUS55-HOLV50.2",
                                "name": "MOV.T001-RUUS55-HOLV50.2",
                                "longName": "MOV.T001-RUUS55-HOLV50.2",
                                "parentMnemonic": "ND.ER-T001-HOLV50",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.3",
                                "name": "MOV.T001-HOLV50-POLV.3",
                                "longName": "MOV.T001-HOLV50-POLV.3",
                                "parentMnemonic": "ND.ER-T001-HOLV50",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Holvandi50",
                    "track": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                    "trackMnemonic": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                    "movement": "MOV.T001-HOLV50-POLV.3",
                    "movementMnemonic": "MOV.T001-HOLV50-POLV.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-HOLV50",
                    "nodeMnemonic": "ND.ER-T001-HOLV50",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85010"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-POLV-HOLV50-V1",
                    "trackMnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                    "movement": "MOV.T001-HOLV50-POLV.22",
                    "movementMnemonic": "MOV.T001-HOLV50-POLV.22",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-POLV",
                    "nodeName": "Põlva",
                    "shortName": "POLV",
                    "nodeOperativeCode": "85009",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V1",
                                "name": "POLV43-1",
                                "longName": "POLV43-I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V1",
                                "name": "POLV43-1",
                                "longName": "POLV43-I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V5",
                                "name": "5",
                                "longName": "5",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.34",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V2",
                                "name": "POLV43-2",
                                "longName": "POLV43-II",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V6",
                                "name": "6",
                                "longName": "6",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.36",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.26",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.25",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V2",
                                "name": "POLV43-2",
                                "longName": "POLV43-II",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V6",
                                "name": "6",
                                "longName": "6",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.38",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V2",
                                "name": "POLV43-2",
                                "longName": "POLV43-II",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V1",
                                "name": "POLV43-1",
                                "longName": "POLV43-I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V5",
                                "name": "5",
                                "longName": "5",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.33",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V2",
                                "name": "POLV43-2",
                                "longName": "POLV43-II",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V6",
                                "name": "6",
                                "longName": "6",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V6",
                                "name": "6",
                                "longName": "6",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.37",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V1",
                                "name": "POLV43-1",
                                "longName": "POLV43-I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V4",
                                "name": "4",
                                "longName": "4",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLVA_43km_7pk-V3",
                                "name": "POLV43-3",
                                "longName": "POLV43-3",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-POLV-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.21",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.29",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.33",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.22",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.23",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.30",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.38",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.31",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.28",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.34",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.36",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.26",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.25",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.27",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-HOLV50.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.37",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-POLV-HOLV50-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-HOLV50-POLV.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.30",
                                "name": "MOV.T001-HOLV50-POLV.30",
                                "longName": "MOV.T001-HOLV50-POLV.30",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.18",
                                "name": "MOV.T001-HOLV50-POLV.18",
                                "longName": "MOV.T001-HOLV50-POLV.18",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.29",
                                "name": "MOV.T001-POLV-HOLV50.29",
                                "longName": "MOV.T001-POLV-HOLV50.29",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.3",
                                "name": "MOV.T001-POLV-TAEV38.3",
                                "longName": "MOV.T001-POLV-TAEV38.3",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.4",
                                "name": "MOV.T001-TAEV38-POLV.4",
                                "longName": "MOV.T001-TAEV38-POLV.4",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.20",
                                "name": "MOV.T001-TAEV38-POLV.20",
                                "longName": "MOV.T001-TAEV38-POLV.20",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.6",
                                "name": "MOV.T001-HOLV50-POLV.6",
                                "longName": "MOV.T001-HOLV50-POLV.6",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.34",
                                "name": "MOV.T001-TAEV38-POLV.34",
                                "longName": "MOV.T001-TAEV38-POLV.34",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.33",
                                "name": "MOV.T001-POLV-TAEV38.33",
                                "longName": "MOV.T001-POLV-TAEV38.33",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.35",
                                "name": "MOV.T001-POLV-HOLV50.35",
                                "longName": "MOV.T001-POLV-HOLV50.35",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.15",
                                "name": "MOV.T001-POLV-TAEV38.15",
                                "longName": "MOV.T001-POLV-TAEV38.15",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.23",
                                "name": "MOV.T001-POLV-TAEV38.23",
                                "longName": "MOV.T001-POLV-TAEV38.23",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.16",
                                "name": "MOV.T001-TAEV38-POLV.16",
                                "longName": "MOV.T001-TAEV38-POLV.16",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.25",
                                "name": "MOV.T001-POLV-HOLV50.25",
                                "longName": "MOV.T001-POLV-HOLV50.25",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.11",
                                "name": "MOV.T001-POLV-HOLV50.11",
                                "longName": "MOV.T001-POLV-HOLV50.11",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.7",
                                "name": "MOV.T001-POLV-TAEV38.7",
                                "longName": "MOV.T001-POLV-TAEV38.7",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.10",
                                "name": "MOV.T001-HOLV50-POLV.10",
                                "longName": "MOV.T001-HOLV50-POLV.10",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.28",
                                "name": "MOV.T001-TAEV38-POLV.28",
                                "longName": "MOV.T001-TAEV38-POLV.28",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.2",
                                "name": "MOV.T001-HOLV50-POLV.2",
                                "longName": "MOV.T001-HOLV50-POLV.2",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.38",
                                "name": "MOV.T001-TAEV38-POLV.38",
                                "longName": "MOV.T001-TAEV38-POLV.38",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.12",
                                "name": "MOV.T001-HOLV50-POLV.12",
                                "longName": "MOV.T001-HOLV50-POLV.12",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.32",
                                "name": "MOV.T001-TAEV38-POLV.32",
                                "longName": "MOV.T001-TAEV38-POLV.32",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.27",
                                "name": "MOV.T001-POLV-TAEV38.27",
                                "longName": "MOV.T001-POLV-TAEV38.27",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.36",
                                "name": "MOV.T001-HOLV50-POLV.36",
                                "longName": "MOV.T001-HOLV50-POLV.36",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.19",
                                "name": "MOV.T001-POLV-TAEV38.19",
                                "longName": "MOV.T001-POLV-TAEV38.19",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.22",
                                "name": "MOV.T001-HOLV50-POLV.22",
                                "longName": "MOV.T001-HOLV50-POLV.22",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.1",
                                "name": "MOV.T001-POLV-HOLV50.1",
                                "longName": "MOV.T001-POLV-HOLV50.1",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.17",
                                "name": "MOV.T001-POLV-HOLV50.17",
                                "longName": "MOV.T001-POLV-HOLV50.17",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.14",
                                "name": "MOV.T001-HOLV50-POLV.14",
                                "longName": "MOV.T001-HOLV50-POLV.14",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-HOLV50-POLV.26",
                                "name": "MOV.T001-HOLV50-POLV.26",
                                "longName": "MOV.T001-HOLV50-POLV.26",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.24",
                                "name": "MOV.T001-TAEV38-POLV.24",
                                "longName": "MOV.T001-TAEV38-POLV.24",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.21",
                                "name": "MOV.T001-POLV-HOLV50.21",
                                "longName": "MOV.T001-POLV-HOLV50.21",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.31",
                                "name": "MOV.T001-POLV-TAEV38.31",
                                "longName": "MOV.T001-POLV-TAEV38.31",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.37",
                                "name": "MOV.T001-POLV-TAEV38.37",
                                "longName": "MOV.T001-POLV-TAEV38.37",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.8",
                                "name": "MOV.T001-TAEV38-POLV.8",
                                "longName": "MOV.T001-TAEV38-POLV.8",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.5",
                                "name": "MOV.T001-POLV-HOLV50.5",
                                "longName": "MOV.T001-POLV-HOLV50.5",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.13",
                                "name": "MOV.T001-POLV-HOLV50.13",
                                "longName": "MOV.T001-POLV-HOLV50.13",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-HOLV50.9",
                                "name": "MOV.T001-POLV-HOLV50.9",
                                "longName": "MOV.T001-POLV-HOLV50.9",
                                "parentMnemonic": "ND.ER-T001-POLV",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Põlva",
                    "track": "TCK.ER-T001-POLV-POLV-V2",
                    "trackMnemonic": "TCK.ER-T001-POLV-POLV-V2",
                    "movement": "MOV.T001-POLV-TAEV38.23",
                    "movementMnemonic": "MOV.T001-POLV-TAEV38.23",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-POLV",
                    "nodeMnemonic": "ND.ER-T001-POLV",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "85009"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-TAEV38-POLV-V1",
                    "trackMnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                    "movement": "MOV.T001-POLV-TAEV38.2",
                    "movementMnemonic": "MOV.T001-POLV-TAEV38.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-TAEV38",
                    "nodeName": "Taevaskoja38",
                    "shortName": "TAEV38",
                    "nodeOperativeCode": "84950",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-TAEV38.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-KIID35.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KIID35-TAEV38-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-TAEV38.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIID35-TAEV38-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-KIID35.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-POLV-TAEV38.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TAEV38-POLV-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-POLV.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-KIID35-TAEV38.4",
                                "name": "MOV.T001-KIID35-TAEV38.4",
                                "longName": "MOV.T001-KIID35-TAEV38.4",
                                "parentMnemonic": "ND.ER-T001-TAEV38",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-POLV.1",
                                "name": "MOV.T001-TAEV38-POLV.1",
                                "longName": "MOV.T001-TAEV38-POLV.1",
                                "parentMnemonic": "ND.ER-T001-TAEV38",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-POLV-TAEV38.2",
                                "name": "MOV.T001-POLV-TAEV38.2",
                                "longName": "MOV.T001-POLV-TAEV38.2",
                                "parentMnemonic": "ND.ER-T001-TAEV38",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-TAEV38-KIID35.3",
                                "name": "MOV.T001-TAEV38-KIID35.3",
                                "longName": "MOV.T001-TAEV38-KIID35.3",
                                "parentMnemonic": "ND.ER-T001-TAEV38",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Taevaskoja38",
                    "track": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                    "trackMnemonic": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                    "movement": "MOV.T001-TAEV38-KIID35.3",
                    "movementMnemonic": "MOV.T001-TAEV38-KIID35.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-TAEV38",
                    "nodeMnemonic": "ND.ER-T001-TAEV38",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84950"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-KIID35-TAEV38-V1",
                    "trackMnemonic": "TCK.ER-T001-KIID35-TAEV38-V1",
                    "movement": "MOV.T001-TAEV38-KIID35.2",
                    "movementMnemonic": "MOV.T001-TAEV38-KIID35.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-KIID35",
                    "nodeName": "Kiidjärve35",
                    "shortName": "KIID35",
                    "nodeOperativeCode": "84949",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-KIID35.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-KIID35.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-TAEV38.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-VALM32.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-KIID35-TAEV38-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TAEV38-KIID35.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM32-KIID35-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-KIID35.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM32-KIID35-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-VALM32.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-KIID35-TAEV38-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-TAEV38.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-TAEV38-KIID35.2",
                                "name": "MOV.T001-TAEV38-KIID35.2",
                                "longName": "MOV.T001-TAEV38-KIID35.2",
                                "parentMnemonic": "ND.ER-T001-KIID35",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-KIID35-VALM32.3",
                                "name": "MOV.T001-KIID35-VALM32.3",
                                "longName": "MOV.T001-KIID35-VALM32.3",
                                "parentMnemonic": "ND.ER-T001-KIID35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-KIID35-TAEV38.1",
                                "name": "MOV.T001-KIID35-TAEV38.1",
                                "longName": "MOV.T001-KIID35-TAEV38.1",
                                "parentMnemonic": "ND.ER-T001-KIID35",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-KIID35.4",
                                "name": "MOV.T001-VALM32-KIID35.4",
                                "longName": "MOV.T001-VALM32-KIID35.4",
                                "parentMnemonic": "ND.ER-T001-KIID35",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Kiidjärve35",
                    "track": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                    "trackMnemonic": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                    "movement": "MOV.T001-KIID35-VALM32.3",
                    "movementMnemonic": "MOV.T001-KIID35-VALM32.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-KIID35",
                    "nodeMnemonic": "ND.ER-T001-KIID35",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84949"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-VALM32-KIID35-V1",
                    "trackMnemonic": "TCK.ER-T001-VALM32-KIID35-V1",
                    "movement": "MOV.T001-KIID35-VALM32.2",
                    "movementMnemonic": "MOV.T001-KIID35-VALM32.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-VALM32",
                    "nodeName": "Valgemetsa32",
                    "shortName": "VALM32",
                    "nodeOperativeCode": "84948",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VALM_32km_7pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-VALM32.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM_32km_7pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-KIID35.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM_32km_7pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM_32km_7pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM32-KIID35-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-KIID35.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VALM32-KIID35-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-KIID35-VALM32.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-KIID35-VALM32.2",
                                "name": "MOV.T001-KIID35-VALM32.2",
                                "longName": "MOV.T001-KIID35-VALM32.2",
                                "parentMnemonic": "ND.ER-T001-VALM32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-VALM32.4",
                                "name": "MOV.T001-VAKU-VALM32.4",
                                "longName": "MOV.T001-VAKU-VALM32.4",
                                "parentMnemonic": "ND.ER-T001-VALM32",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-KIID35.1",
                                "name": "MOV.T001-VALM32-KIID35.1",
                                "longName": "MOV.T001-VALM32-KIID35.1",
                                "parentMnemonic": "ND.ER-T001-VALM32",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-VAKU.3",
                                "name": "MOV.T001-VALM32-VAKU.3",
                                "longName": "MOV.T001-VALM32-VAKU.3",
                                "parentMnemonic": "ND.ER-T001-VALM32",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Valgemetsa32",
                    "track": "TCK.ER-T001-VALM_32km_7pk-V1",
                    "trackMnemonic": "TCK.ER-T001-VALM_32km_7pk-V1",
                    "movement": "MOV.T001-VALM32-VAKU.3",
                    "movementMnemonic": "MOV.T001-VALM32-VAKU.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-VALM32",
                    "nodeMnemonic": "ND.ER-T001-VALM32",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84948"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-VAKU-VALM32-V1",
                    "trackMnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                    "movement": "MOV.T001-VALM32-VAKU.6",
                    "movementMnemonic": "MOV.T001-VALM32-VAKU.6",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-VAKU",
                    "nodeName": "Vastse-Kuuste",
                    "shortName": "VAKU",
                    "nodeOperativeCode": "84947",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V1",
                                "name": "1",
                                "longName": "It",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VASTSE-KUUSTE_29km_5pk-V1",
                                "name": "VAKU29-1",
                                "longName": "VAKU29-I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VAKU-V2",
                                "name": "2",
                                "longName": "2t",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-VALM32.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VAKU-VALM32-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VALM32-VAKU.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.20",
                                "name": "MOV.T001-LAAN24-VAKU.20",
                                "longName": "MOV.T001-LAAN24-VAKU.20",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-VALM32.5",
                                "name": "MOV.T001-VAKU-VALM32.5",
                                "longName": "MOV.T001-VAKU-VALM32.5",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.7",
                                "name": "MOV.T001-VAKU-LAAN24.7",
                                "longName": "MOV.T001-VAKU-LAAN24.7",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.19",
                                "name": "MOV.T001-VAKU-LAAN24.19",
                                "longName": "MOV.T001-VAKU-LAAN24.19",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.4",
                                "name": "MOV.T001-LAAN24-VAKU.4",
                                "longName": "MOV.T001-LAAN24-VAKU.4",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.11",
                                "name": "MOV.T001-VAKU-LAAN24.11",
                                "longName": "MOV.T001-VAKU-LAAN24.11",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.16",
                                "name": "MOV.T001-LAAN24-VAKU.16",
                                "longName": "MOV.T001-LAAN24-VAKU.16",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-VAKU.14",
                                "name": "MOV.T001-VALM32-VAKU.14",
                                "longName": "MOV.T001-VALM32-VAKU.14",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.8",
                                "name": "MOV.T001-LAAN24-VAKU.8",
                                "longName": "MOV.T001-LAAN24-VAKU.8",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-VALM32.13",
                                "name": "MOV.T001-VAKU-VALM32.13",
                                "longName": "MOV.T001-VAKU-VALM32.13",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-VAKU.6",
                                "name": "MOV.T001-VALM32-VAKU.6",
                                "longName": "MOV.T001-VALM32-VAKU.6",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-VAKU.10",
                                "name": "MOV.T001-VALM32-VAKU.10",
                                "longName": "MOV.T001-VALM32-VAKU.10",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.18",
                                "name": "MOV.T001-LAAN24-VAKU.18",
                                "longName": "MOV.T001-LAAN24-VAKU.18",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.12",
                                "name": "MOV.T001-LAAN24-VAKU.12",
                                "longName": "MOV.T001-LAAN24-VAKU.12",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.3",
                                "name": "MOV.T001-VAKU-LAAN24.3",
                                "longName": "MOV.T001-VAKU-LAAN24.3",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VALM32-VAKU.2",
                                "name": "MOV.T001-VALM32-VAKU.2",
                                "longName": "MOV.T001-VALM32-VAKU.2",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-VALM32.9",
                                "name": "MOV.T001-VAKU-VALM32.9",
                                "longName": "MOV.T001-VAKU-VALM32.9",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.15",
                                "name": "MOV.T001-VAKU-LAAN24.15",
                                "longName": "MOV.T001-VAKU-LAAN24.15",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.17",
                                "name": "MOV.T001-VAKU-LAAN24.17",
                                "longName": "MOV.T001-VAKU-LAAN24.17",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VAKU-VALM32.1",
                                "name": "MOV.T001-VAKU-VALM32.1",
                                "longName": "MOV.T001-VAKU-VALM32.1",
                                "parentMnemonic": "ND.ER-T001-VAKU",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Vastse-Kuuste",
                    "track": "TCK.ER-T001-VAKU-VAKU-V1",
                    "trackMnemonic": "TCK.ER-T001-VAKU-VAKU-V1",
                    "movement": "MOV.T001-VAKU-LAAN24.7",
                    "movementMnemonic": "MOV.T001-VAKU-LAAN24.7",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-VAKU",
                    "nodeMnemonic": "ND.ER-T001-VAKU",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84947"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-LAAN24-VAKU-V1",
                    "trackMnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                    "movement": "MOV.T001-VAKU-LAAN24.2",
                    "movementMnemonic": "MOV.T001-VAKU-LAAN24.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-LAAN24",
                    "nodeName": "Laane24",
                    "shortName": "LAAN24",
                    "nodeOperativeCode": "84912",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-LAANE_24km_6pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAANE_24km_6pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAANE_24km_6pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-REBA18.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAANE_24km_6pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-LAAN24.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-REBA18-LAAN24-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-REBA18.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-VAKU.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBA18-LAAN24-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-LAAN24.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LAAN24-VAKU-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VAKU-LAAN24.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-VAKU-LAAN24.2",
                                "name": "MOV.T001-VAKU-LAAN24.2",
                                "longName": "MOV.T001-VAKU-LAAN24.2",
                                "parentMnemonic": "ND.ER-T001-LAAN24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-REBA18.3",
                                "name": "MOV.T001-LAAN24-REBA18.3",
                                "longName": "MOV.T001-LAAN24-REBA18.3",
                                "parentMnemonic": "ND.ER-T001-LAAN24",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REBA18-LAAN24.4",
                                "name": "MOV.T001-REBA18-LAAN24.4",
                                "longName": "MOV.T001-REBA18-LAAN24.4",
                                "parentMnemonic": "ND.ER-T001-LAAN24",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-VAKU.1",
                                "name": "MOV.T001-LAAN24-VAKU.1",
                                "longName": "MOV.T001-LAAN24-VAKU.1",
                                "parentMnemonic": "ND.ER-T001-LAAN24",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Laane24",
                    "track": "TCK.ER-T001-LAANE_24km_6pk-V1",
                    "trackMnemonic": "TCK.ER-T001-LAANE_24km_6pk-V1",
                    "movement": "MOV.T001-LAAN24-REBA18.3",
                    "movementMnemonic": "MOV.T001-LAAN24-REBA18.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-LAAN24",
                    "nodeMnemonic": "ND.ER-T001-LAAN24",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84912"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-REBA18-LAAN24-V1",
                    "trackMnemonic": "TCK.ER-T001-REBA18-LAAN24-V1",
                    "movement": "MOV.T001-LAAN24-REBA18.2",
                    "movementMnemonic": "MOV.T001-LAAN24-REBA18.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-REBA18",
                    "nodeName": "Rebase18",
                    "shortName": "REBA18",
                    "nodeOperativeCode": "84911",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-REBASE_18km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-REBA18.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBASE_18km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-VANK16.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBASE_18km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REBA18.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBASE_18km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-LAAN24.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VANK16-REBA18-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-VANK16.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBA18-LAAN24-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LAAN24-REBA18.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REBA18-LAAN24-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-LAAN24.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VANK16-REBA18-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REBA18.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-REBA18-VANK16.3",
                                "name": "MOV.T001-REBA18-VANK16.3",
                                "longName": "MOV.T001-REBA18-VANK16.3",
                                "parentMnemonic": "ND.ER-T001-REBA18",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REBA18-LAAN24.1",
                                "name": "MOV.T001-REBA18-LAAN24.1",
                                "longName": "MOV.T001-REBA18-LAAN24.1",
                                "parentMnemonic": "ND.ER-T001-REBA18",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LAAN24-REBA18.2",
                                "name": "MOV.T001-LAAN24-REBA18.2",
                                "longName": "MOV.T001-LAAN24-REBA18.2",
                                "parentMnemonic": "ND.ER-T001-REBA18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REBA18.4",
                                "name": "MOV.T001-VANK16-REBA18.4",
                                "longName": "MOV.T001-VANK16-REBA18.4",
                                "parentMnemonic": "ND.ER-T001-REBA18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Rebase18",
                    "track": "TCK.ER-T001-REBASE_18km_5pk-V1",
                    "trackMnemonic": "TCK.ER-T001-REBASE_18km_5pk-V1",
                    "movement": "MOV.T001-REBA18-VANK16.3",
                    "movementMnemonic": "MOV.T001-REBA18-VANK16.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-REBA18",
                    "nodeMnemonic": "ND.ER-T001-REBA18",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84911"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-VANK16-REBA18-V1",
                    "trackMnemonic": "TCK.ER-T001-VANK16-REBA18-V1",
                    "movement": "MOV.T001-REBA18-VANK16.2",
                    "movementMnemonic": "MOV.T001-REBA18-VANK16.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-VANK16",
                    "nodeName": "Vana-Kuuste16",
                    "shortName": "VANK16",
                    "nodeOperativeCode": "84910",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-VANK16.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REBA18.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-VANK16-REBA18-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REBA18.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-VANK16-REBA18-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REBA18-VANK16.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.4",
                                "name": "MOV.T001-REOL-VANK16.4",
                                "longName": "MOV.T001-REOL-VANK16.4",
                                "parentMnemonic": "ND.ER-T001-VANK16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REBA18-VANK16.2",
                                "name": "MOV.T001-REBA18-VANK16.2",
                                "longName": "MOV.T001-REBA18-VANK16.2",
                                "parentMnemonic": "ND.ER-T001-VANK16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REBA18.1",
                                "name": "MOV.T001-VANK16-REBA18.1",
                                "longName": "MOV.T001-VANK16-REBA18.1",
                                "parentMnemonic": "ND.ER-T001-VANK16",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.3",
                                "name": "MOV.T001-VANK16-REOL.3",
                                "longName": "MOV.T001-VANK16-REOL.3",
                                "parentMnemonic": "ND.ER-T001-VANK16",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Vana-Kuuste16",
                    "track": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                    "trackMnemonic": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                    "movement": "MOV.T001-VANK16-REOL.3",
                    "movementMnemonic": "MOV.T001-VANK16-REOL.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-VANK16",
                    "nodeMnemonic": "ND.ER-T001-VANK16",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84910"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-REOL-VANK16-V1",
                    "trackMnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                    "movement": "MOV.T001-VANK16-REOL.10",
                    "movementMnemonic": "MOV.T001-VANK16-REOL.10",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-REOL",
                    "nodeName": "Reola",
                    "shortName": "REOL",
                    "nodeOperativeCode": "84909",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V4",
                                "name": "4",
                                "longName": "4t",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V201",
                                "name": "201",
                                "longName": "201",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V4",
                                "name": "4",
                                "longName": "4t",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V211",
                                "name": "211",
                                "longName": "211",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V211",
                                "name": "211",
                                "longName": "211",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V201",
                                "name": "201",
                                "longName": "201",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V3",
                                "name": "3",
                                "longName": "3t",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V4",
                                "name": "4",
                                "longName": "4t",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V1",
                                "name": "1",
                                "longName": "1t",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-REOL-V4",
                                "name": "4",
                                "longName": "4t",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.16",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.20",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.7",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.18",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.17",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.13",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.6",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.12",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.5",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.11",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.8",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.14",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-VANK16-REOL.10",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.15",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-REOL-VANK16-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-VANK16.19",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.13",
                                "name": "MOV.T001-REOL-VANK16.13",
                                "longName": "MOV.T001-REOL-VANK16.13",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.9",
                                "name": "MOV.T001-REOL-VANK16.9",
                                "longName": "MOV.T001-REOL-VANK16.9",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.18",
                                "name": "MOV.T001-VANK16-REOL.18",
                                "longName": "MOV.T001-VANK16-REOL.18",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-REOL.16",
                                "name": "MOV.T001-LANG9-REOL.16",
                                "longName": "MOV.T001-LANG9-REOL.16",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-REOL.4",
                                "name": "MOV.T001-LANG9-REOL.4",
                                "longName": "MOV.T001-LANG9-REOL.4",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.17",
                                "name": "MOV.T001-REOL-VANK16.17",
                                "longName": "MOV.T001-REOL-VANK16.17",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-LANG9.3",
                                "name": "MOV.T001-REOL-LANG9.3",
                                "longName": "MOV.T001-REOL-LANG9.3",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-REOL.8",
                                "name": "MOV.T001-LANG9-REOL.8",
                                "longName": "MOV.T001-LANG9-REOL.8",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-LANG9.11",
                                "name": "MOV.T001-REOL-LANG9.11",
                                "longName": "MOV.T001-REOL-LANG9.11",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.5",
                                "name": "MOV.T001-REOL-VANK16.5",
                                "longName": "MOV.T001-REOL-VANK16.5",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.14",
                                "name": "MOV.T001-VANK16-REOL.14",
                                "longName": "MOV.T001-VANK16-REOL.14",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.10",
                                "name": "MOV.T001-VANK16-REOL.10",
                                "longName": "MOV.T001-VANK16-REOL.10",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.2",
                                "name": "MOV.T001-VANK16-REOL.2",
                                "longName": "MOV.T001-VANK16-REOL.2",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.20",
                                "name": "MOV.T001-VANK16-REOL.20",
                                "longName": "MOV.T001-VANK16-REOL.20",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-LANG9.7",
                                "name": "MOV.T001-REOL-LANG9.7",
                                "longName": "MOV.T001-REOL-LANG9.7",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.1",
                                "name": "MOV.T001-REOL-VANK16.1",
                                "longName": "MOV.T001-REOL-VANK16.1",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-VANK16.19",
                                "name": "MOV.T001-REOL-VANK16.19",
                                "longName": "MOV.T001-REOL-VANK16.19",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-VANK16-REOL.6",
                                "name": "MOV.T001-VANK16-REOL.6",
                                "longName": "MOV.T001-VANK16-REOL.6",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-REOL.12",
                                "name": "MOV.T001-LANG9-REOL.12",
                                "longName": "MOV.T001-LANG9-REOL.12",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-LANG9.15",
                                "name": "MOV.T001-REOL-LANG9.15",
                                "longName": "MOV.T001-REOL-LANG9.15",
                                "parentMnemonic": "ND.ER-T001-REOL",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Reola",
                    "track": "TCK.ER-T001-REOL-REOL-V2",
                    "trackMnemonic": "TCK.ER-T001-REOL-REOL-V2",
                    "movement": "MOV.T001-REOL-LANG9.11",
                    "movementMnemonic": "MOV.T001-REOL-LANG9.11",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-REOL",
                    "nodeMnemonic": "ND.ER-T001-REOL",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84909"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-LANG9-REOL-V1",
                    "trackMnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                    "movement": "MOV.T001-REOL-LANG9.2",
                    "movementMnemonic": "MOV.T001-REOL-LANG9.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-LANG9",
                    "nodeName": "Lange9",
                    "shortName": "LANG9",
                    "nodeOperativeCode": "84807",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-LANGE_9km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-AARDKOID3.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANGE_9km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANGE_9km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-LANG9.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANGE_9km_5pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-REOL-LANG9.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-LANG9-REOL-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-REOL.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-LANG9.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-AARDKOID3.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-LANG9-AARDKOID3.3",
                                "name": "MOV.T001-LANG9-AARDKOID3.3",
                                "longName": "MOV.T001-LANG9-AARDKOID3.3",
                                "parentMnemonic": "ND.ER-T001-LANG9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-REOL.1",
                                "name": "MOV.T001-LANG9-REOL.1",
                                "longName": "MOV.T001-LANG9-REOL.1",
                                "parentMnemonic": "ND.ER-T001-LANG9",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-AARDKOID3-LANG9.4",
                                "name": "MOV.T001-AARDKOID3-LANG9.4",
                                "longName": "MOV.T001-AARDKOID3-LANG9.4",
                                "parentMnemonic": "ND.ER-T001-LANG9",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-REOL-LANG9.2",
                                "name": "MOV.T001-REOL-LANG9.2",
                                "longName": "MOV.T001-REOL-LANG9.2",
                                "parentMnemonic": "ND.ER-T001-LANG9",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Lange9",
                    "track": "TCK.ER-T001-LANGE_9km_5pk-V1",
                    "trackMnemonic": "TCK.ER-T001-LANGE_9km_5pk-V1",
                    "movement": "MOV.T001-LANG9-AARDKOID3.3",
                    "movementMnemonic": "MOV.T001-LANG9-AARDKOID3.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-LANG9",
                    "nodeMnemonic": "ND.ER-T001-LANG9",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84807"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                    "trackMnemonic": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                    "movement": "MOV.T001-LANG9-AARDKOID3.2",
                    "movementMnemonic": "MOV.T001-LANG9-AARDKOID3.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-AARDKOID3",
                    "nodeName": "AardlaKoid3",
                    "shortName": "AARDKOID3",
                    "nodeOperativeCode": "84806",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TART-AARDKOID3.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-LANG9.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-AARDKOID3.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                                "name": "1",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-TART.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-TART-AARDKOID3-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-TART.3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-LANG9-AARDKOID3.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TART-AARDKOID3-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TART-AARDKOID3.4",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-LANG9.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-AARDKOID3-LANG9.1",
                                "name": "MOV.T001-AARDKOID3-LANG9.1",
                                "longName": "MOV.T001-AARDKOID3-LANG9.1",
                                "parentMnemonic": "ND.ER-T001-AARDKOID3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-LANG9-AARDKOID3.2",
                                "name": "MOV.T001-LANG9-AARDKOID3.2",
                                "longName": "MOV.T001-LANG9-AARDKOID3.2",
                                "parentMnemonic": "ND.ER-T001-AARDKOID3",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "MOV.T001-AARDKOID3-TART.3",
                                "name": "MOV.T001-AARDKOID3-TART.3",
                                "longName": "MOV.T001-AARDKOID3-TART.3",
                                "parentMnemonic": "ND.ER-T001-AARDKOID3",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-TART-AARDKOID3.4",
                                "name": "MOV.T001-TART-AARDKOID3.4",
                                "longName": "MOV.T001-TART-AARDKOID3.4",
                                "parentMnemonic": "ND.ER-T001-AARDKOID3",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "AardlaKoid3",
                    "track": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                    "trackMnemonic": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                    "movement": "MOV.T001-AARDKOID3-TART.3",
                    "movementMnemonic": "MOV.T001-AARDKOID3-TART.3",
                    "parity": "EVEN",
                    "nodeId": "ND.ER-T001-AARDKOID3",
                    "nodeMnemonic": "ND.ER-T001-AARDKOID3",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84806"
                },
                "nodeCirculation":
                {
                    "name": "",
                    "track": "TCK.ER-T001-TART-AARDKOID3-V1",
                    "trackMnemonic": "TCK.ER-T001-TART-AARDKOID3-V1",
                    "movement": "MOV.T001-AARDKOID3-TART.2",
                    "movementMnemonic": "MOV.T001-AARDKOID3-TART.2",
                    "parity": "EVEN",
                    "nodeId": "",
                    "nodeMnemonic": "",
                    "pivotId": "",
                    "type": "",
                    "secondaryNumberTcz": null,
                    "operationCode": null
                }
            },
            {
                "nodeCatalog":
                {
                    "nodeMnemonic": "ND.ER-T001-TART",
                    "nodeName": "Tartu",
                    "shortName": "TART",
                    "nodeOperativeCode": "84805",
                    "nodeInfo":
                    {
                        "parkingTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-TART-TART-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-AARDKOID3-TART.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TART-TART-V2",
                                "name": "2",
                                "longName": "IIt",
                                "parentMnemonic": "MOV.T001-TART-AARDKOID3.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            }
                        ],
                        "initialTrackGaugues":
                        [
                            {
                                "mnemonic": "RUSSIAN",
                                "name": "RUSSIAN",
                                "longName": "RUSSIAN",
                                "parentMnemonic": null,
                                "operativeCode": null,
                                "type": null
                            }
                        ],
                        "circulationTracks":
                        [
                            {
                                "mnemonic": "TCK.ER-T001-TART-AARDKOID3-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-TART-AARDKOID3.1",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "TCK.ER-T001-TART-AARDKOID3-V1",
                                "name": "I",
                                "longName": "I",
                                "parentMnemonic": "MOV.T001-AARDKOID3-TART.2",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ],
                        "movements":
                        [
                            {
                                "mnemonic": "MOV.T001-TART-AARDKOID3.1",
                                "name": "MOV.T001-TART-AARDKOID3.1",
                                "longName": "MOV.T001-TART-AARDKOID3.1",
                                "parentMnemonic": "ND.ER-T001-TART",
                                "operativeCode": null,
                                "type": "OUTPUT"
                            },
                            {
                                "mnemonic": "MOV.T001-AARDKOID3-TART.2",
                                "name": "MOV.T001-AARDKOID3-TART.2",
                                "longName": "MOV.T001-AARDKOID3-TART.2",
                                "parentMnemonic": "ND.ER-T001-TART",
                                "operativeCode": null,
                                "type": "ENTRANCE"
                            }
                        ]
                    }
                },
                "nodeStationing":
                {
                    "name": "Tartu",
                    "track": "TCK.ER-T001-TART-TART-V2",
                    "trackMnemonic": "TCK.ER-T001-TART-TART-V2",
                    "movement": null,
                    "movementMnemonic": null,
                    "parity": null,
                    "nodeId": "ND.ER-T001-TART",
                    "nodeMnemonic": "ND.ER-T001-TART",
                    "pivotId": "",
                    "type": "0",
                    "secondaryNumberTcz":
                    {
                        "numberSecondary": null,
                        "tcz": null
                    },
                    "operationCode": "84805"
                },
                "nodeCirculation": null
            }
        ],
        "tczList":
        [
            {
                "tczMnemonic": "TCZ.T001-PETS",
                "tczName": "Petseri",
                "mnemonicCirculationTrack": "TCK.ER-T001-KOID-PETS-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-PETS-PETS-V2",
                "outMovementMnemonic": "MOV.T001-PETS-KOID.1",
                "inMovementMnemonic": null,
                "nodeMnemonic": "ND.ER-T001-PETS",
                "tczType": "STOP",
                "distance": 0,
                "baseTime": 0
            },
            {
                "tczMnemonic": "TCZ.T001-KOID",
                "tczName": "Koidula",
                "mnemonicCirculationTrack": "TCK.ER-T001-ORAV-KOID-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-KOID-KOID-V2",
                "outMovementMnemonic": "MOV.T001-KOID-ORAV.23",
                "inMovementMnemonic": "MOV.T001-PETS-KOID.14",
                "nodeMnemonic": "ND.ER-T001-KOID",
                "tczType": "PASSING",
                "distance": 3392,
                "baseTime": 149
            },
            {
                "tczMnemonic": "TCZ.T001-ORAV",
                "tczName": "Orava",
                "mnemonicCirculationTrack": "TCK.ER-T001-ILUM67-ORAV-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-ORAV-ORAV-V2",
                "outMovementMnemonic": "MOV.T001-ORAV-ILUM67.7",
                "inMovementMnemonic": "MOV.T001-KOID-ORAV.6",
                "nodeMnemonic": "ND.ER-T001-ORAV",
                "tczType": "PASSING",
                "distance": 13260,
                "baseTime": 398
            },
            {
                "tczMnemonic": "TCZ.T001-ILUMETSA_67km_2pk",
                "tczName": "Ilumetsa67",
                "mnemonicCirculationTrack": "TCK.ER-T001-KIKK64-ILUM67-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-ILUMETSA_67km_2pk-V1",
                "outMovementMnemonic": "MOV.T001-ILUM67-KIKK64.3",
                "inMovementMnemonic": "MOV.T001-ORAV-ILUM67.2",
                "nodeMnemonic": "ND.ER-T001-ILUM67",
                "tczType": "PASSING",
                "distance": 6355,
                "baseTime": 191
            },
            {
                "tczMnemonic": "TCZ.T001-ILUM",
                "tczName": "Ilumetsa",
                "mnemonicCirculationTrack": "TCK.ER-T001-VER-KIKK64-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 116,
                "baseTime": 3
            },
            {
                "tczMnemonic": "TCZ.T001-KIKKA_64km_3pk",
                "tczName": "Kiika64",
                "mnemonicCirculationTrack": "TCK.ER-T001-VER-KIKK64-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-KIKKA_64km_3pk-V1",
                "outMovementMnemonic": "MOV.T001-KIKK64-VER.3",
                "inMovementMnemonic": "MOV.T001-ILUM67-KIKK64.2",
                "nodeMnemonic": "ND.ER-T001-KIKK64",
                "tczType": "NO_TRP",
                "distance": 2785,
                "baseTime": 84
            },
            {
                "tczMnemonic": "TCZ.T001-VER",
                "tczName": "Veriora",
                "mnemonicCirculationTrack": "TCK.ER-T001-RUUS55-VER-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-VER-VER-V1",
                "outMovementMnemonic": "MOV.T001-VER-RUUS55.15",
                "inMovementMnemonic": "MOV.T001-KIKK64-VER.14",
                "nodeMnemonic": "ND.ER-T001-VER",
                "tczType": "PASSING",
                "distance": 2619,
                "baseTime": 79
            },
            {
                "tczMnemonic": "TCZ.T001-RUUS",
                "tczName": "Ruusa",
                "mnemonicCirculationTrack": "TCK.ER-T001-HOLV50-RUUS55-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 6429,
                "baseTime": 193
            },
            {
                "tczMnemonic": "TCZ.T001-RUUSA_55km_2km",
                "tczName": "Ruusa55",
                "mnemonicCirculationTrack": "TCK.ER-T001-HOLV50-RUUS55-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-RUUSA_55km_2km-V1",
                "outMovementMnemonic": "MOV.T001-RUUS55-HOLV50.3",
                "inMovementMnemonic": "MOV.T001-VER-RUUS55.2",
                "nodeMnemonic": "ND.ER-T001-RUUS55",
                "tczType": "PASSING",
                "distance": 64,
                "baseTime": 2
            },
            {
                "tczMnemonic": "TCZ.T001-HOLV",
                "tczName": "Holvandi",
                "mnemonicCirculationTrack": "TCK.ER-T001-POLV-HOLV50-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 4729,
                "baseTime": 142
            },
            {
                "tczMnemonic": "TCZ.T001-HOLVANDI_50_km_4pk",
                "tczName": "Holvandi50",
                "mnemonicCirculationTrack": "TCK.ER-T001-POLV-HOLV50-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-HOLVANDI_50km_4pk-V1",
                "outMovementMnemonic": "MOV.T001-HOLV50-POLV.3",
                "inMovementMnemonic": "MOV.T001-RUUS55-HOLV50.2",
                "nodeMnemonic": "ND.ER-T001-HOLV50",
                "tczType": "PASSING",
                "distance": 69,
                "baseTime": 2
            },
            {
                "tczMnemonic": "TCZ.T001-POLV",
                "tczName": "Põlva",
                "mnemonicCirculationTrack": "TCK.ER-T001-TAEV38-POLV-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-POLV-POLV-V2",
                "outMovementMnemonic": "MOV.T001-POLV-TAEV38.23",
                "inMovementMnemonic": "MOV.T001-HOLV50-POLV.22",
                "nodeMnemonic": "ND.ER-T001-POLV",
                "tczType": "PASSING",
                "distance": 6334,
                "baseTime": 190
            },
            {
                "tczMnemonic": "TCZ.T001-TAEVASKOJA_38km_10pk",
                "tczName": "Taevaskoja38",
                "mnemonicCirculationTrack": "TCK.ER-T001-KIID35-TAEV38-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-TAEVASKOJA_38km_10pk-V1",
                "outMovementMnemonic": "MOV.T001-TAEV38-KIID35.3",
                "inMovementMnemonic": "MOV.T001-POLV-TAEV38.2",
                "nodeMnemonic": "ND.ER-T001-TAEV38",
                "tczType": "PASSING",
                "distance": 5107,
                "baseTime": 153
            },
            {
                "tczMnemonic": "TCZ.T001-TAEV",
                "tczName": "Taevaskoja",
                "mnemonicCirculationTrack": "TCK.ER-T001-VALM32-KIID35-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 98,
                "baseTime": 3
            },
            {
                "tczMnemonic": "TCZ.T001-KIID",
                "tczName": "Kiidjärve",
                "mnemonicCirculationTrack": "TCK.ER-T001-VALM32-KIID35-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 3676,
                "baseTime": 110
            },
            {
                "tczMnemonic": "TCZ.T001-KIIDJARVE_35km_1pk",
                "tczName": "Kiidjärve35",
                "mnemonicCirculationTrack": "TCK.ER-T001-VALM32-KIID35-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-KIIDJARVE_35km_1pk-V1",
                "outMovementMnemonic": "MOV.T001-KIID35-VALM32.3",
                "inMovementMnemonic": "MOV.T001-TAEV38-KIID35.2",
                "nodeMnemonic": "ND.ER-T001-KIID35",
                "tczType": "NO_TRP",
                "distance": 111,
                "baseTime": 3
            },
            {
                "tczMnemonic": "TCZ.T001-VALGEMETSA_32km_7pk",
                "tczName": "Valgemetsa32",
                "mnemonicCirculationTrack": "TCK.ER-T001-VAKU-VALM32-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-VALM_32km_7pk-V1",
                "outMovementMnemonic": "MOV.T001-VALM32-VAKU.3",
                "inMovementMnemonic": "MOV.T001-KIID35-VALM32.2",
                "nodeMnemonic": "ND.ER-T001-VALM32",
                "tczType": "PASSING",
                "distance": 2453,
                "baseTime": 74
            },
            {
                "tczMnemonic": "TCZ.T001-VALM",
                "tczName": "Valgemetsa",
                "mnemonicCirculationTrack": "TCK.ER-T001-LAAN24-VAKU-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 108,
                "baseTime": 3
            },
            {
                "tczMnemonic": "TCZ.T001-VAKU",
                "tczName": "Vastse-Kuuste",
                "mnemonicCirculationTrack": "TCK.ER-T001-LAAN24-VAKU-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-VAKU-VAKU-V1",
                "outMovementMnemonic": "MOV.T001-VAKU-LAAN24.7",
                "inMovementMnemonic": "MOV.T001-VALM32-VAKU.6",
                "nodeMnemonic": "ND.ER-T001-VAKU",
                "tczType": "PASSING",
                "distance": 3512,
                "baseTime": 105
            },
            {
                "tczMnemonic": "TCZ.T001-LAANE_24km_6pk",
                "tczName": "Laane24",
                "mnemonicCirculationTrack": "TCK.ER-T001-REBA18-LAAN24-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-LAANE_24km_6pk-V1",
                "outMovementMnemonic": "MOV.T001-LAAN24-REBA18.3",
                "inMovementMnemonic": "MOV.T001-VAKU-LAAN24.2",
                "nodeMnemonic": "ND.ER-T001-LAAN24",
                "tczType": "PASSING",
                "distance": 4400,
                "baseTime": 132
            },
            {
                "tczMnemonic": "TCZ.T001-REBA",
                "tczName": "Rebase",
                "mnemonicCirculationTrack": "TCK.ER-T001-VANK16-REBA18-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 5815,
                "baseTime": 174
            },
            {
                "tczMnemonic": "TCZ.T001-REBASE_18km_5pk",
                "tczName": "Rebase18",
                "mnemonicCirculationTrack": "TCK.ER-T001-VANK16-REBA18-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-REBASE_18km_5pk-V1",
                "outMovementMnemonic": "MOV.T001-REBA18-VANK16.3",
                "inMovementMnemonic": "MOV.T001-LAAN24-REBA18.2",
                "nodeMnemonic": "ND.ER-T001-REBA18",
                "tczType": "PASSING",
                "distance": 355,
                "baseTime": 11
            },
            {
                "tczMnemonic": "TCZ.T001-VANA-KUUSTE_16km_10pk",
                "tczName": "Vana-Kuuste16",
                "mnemonicCirculationTrack": "TCK.ER-T001-REOL-VANK16-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-VANA-KUUSTE_16km_10pk-V1",
                "outMovementMnemonic": "MOV.T001-VANK16-REOL.3",
                "inMovementMnemonic": "MOV.T001-REBA18-VANK16.2",
                "nodeMnemonic": "ND.ER-T001-VANK16",
                "tczType": "NO_TRP",
                "distance": 1436,
                "baseTime": 43
            },
            {
                "tczMnemonic": "TCZ.T001-VANK",
                "tczName": "Vana-Kuuste",
                "mnemonicCirculationTrack": "TCK.ER-T001-LANG9-REOL-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 580,
                "baseTime": 17
            },
            {
                "tczMnemonic": "TCZ.T001-REOL",
                "tczName": "Reola",
                "mnemonicCirculationTrack": "TCK.ER-T001-LANG9-REOL-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-REOL-REOL-V2",
                "outMovementMnemonic": "MOV.T001-REOL-LANG9.11",
                "inMovementMnemonic": "MOV.T001-VANK16-REOL.10",
                "nodeMnemonic": "ND.ER-T001-REOL",
                "tczType": "PASSING",
                "distance": 2045,
                "baseTime": 61
            },
            {
                "tczMnemonic": "TCZ.T001-UHTI",
                "tczName": "Uhti",
                "mnemonicCirculationTrack": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 3556,
                "baseTime": 107
            },
            {
                "tczMnemonic": "TCZ.T001-LANGE_9km_5pk",
                "tczName": "Lange9",
                "mnemonicCirculationTrack": "TCK.ER-T001-AARDKOID3-LANG9-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-LANGE_9km_5pk-V1",
                "outMovementMnemonic": "MOV.T001-LANG9-AARDKOID3.3",
                "inMovementMnemonic": "MOV.T001-REOL-LANG9.2",
                "nodeMnemonic": "ND.ER-T001-LANG9",
                "tczType": "PASSING",
                "distance": 1378,
                "baseTime": 41
            },
            {
                "tczMnemonic": "TCZ.T001-YLEN",
                "tczName": "Ülenurme",
                "mnemonicCirculationTrack": "TCK.ER-T001-TART-AARDKOID3-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 1030,
                "baseTime": 31
            },
            {
                "tczMnemonic": "TCZ.T001-AARDLAPET_3km_4pk",
                "tczName": "AardlaKoid3",
                "mnemonicCirculationTrack": "TCK.ER-T001-TART-AARDKOID3-V1",
                "mnemonicStationingTrack": "TCK.ER-T001-AARDLAPET_3km_4pk-V1",
                "outMovementMnemonic": "MOV.T001-AARDKOID3-TART.3",
                "inMovementMnemonic": "MOV.T001-LANG9-AARDKOID3.2",
                "nodeMnemonic": "ND.ER-T001-AARDKOID3",
                "tczType": "PASSING",
                "distance": 5064,
                "baseTime": 152
            },
            {
                "tczMnemonic": "TCZ.T001-KIRS",
                "tczName": "Kirsi",
                "mnemonicCirculationTrack": "TCK.ER-T001-TART-AARDKOID3-V1",
                "mnemonicStationingTrack": null,
                "outMovementMnemonic": null,
                "inMovementMnemonic": null,
                "nodeMnemonic": null,
                "tczType": "PASSING",
                "distance": 274,
                "baseTime": 8
            },
            {
                "tczMnemonic": "TCZ.T001-TART",
                "tczName": "Tartu",
                "mnemonicCirculationTrack": null,
                "mnemonicStationingTrack": "TCK.ER-T001-TART-TART-V2",
                "outMovementMnemonic": null,
                "inMovementMnemonic": "MOV.T001-AARDKOID3-TART.2",
                "nodeMnemonic": "ND.ER-T001-TART",
                "tczType": "STOP",
                "distance": 2048,
                "baseTime": 109
            }
        ],
        "trpList":
        [
            {
                "trpName": "Petseri",
                "tczType": "STOP",
                "distance": 0,
                "profileTime": 0,
                "travelUncorrected": 1680645600666,
                "travelCorrected": 0,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680681600000,
                "commercialDeparture": 1680681660000,
                "technicalDeparture": 1680681720000,
                "adjustmentDeparture": 1680681780000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680681780000
            },
            {
                "trpName": "Koidula",
                "tczType": "PASSING",
                "distance": 3392,
                "profileTime": 171,
                "travelUncorrected": 1680645780000,
                "travelCorrected": 180,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680681960000,
                "commercialDeparture": 1680682020000,
                "technicalDeparture": 1680682080000,
                "adjustmentDeparture": 1680682140000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680681960000
            },
            {
                "trpName": "Orava",
                "tczType": "PASSING",
                "distance": 13260,
                "profileTime": 457,
                "travelUncorrected": 1680646060000,
                "travelCorrected": 460,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680682420000,
                "commercialDeparture": 1680682500000,
                "technicalDeparture": 1680682560000,
                "adjustmentDeparture": 1680682620000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680682420000
            },
            {
                "trpName": "Ilumetsa67",
                "tczType": "PASSING",
                "distance": 6355,
                "profileTime": 219,
                "travelUncorrected": 1680645820000,
                "travelCorrected": 220,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680682640000,
                "commercialDeparture": 1680682740000,
                "technicalDeparture": 1680682800000,
                "adjustmentDeparture": 1680682860000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680682640000
            },
            {
                "trpName": "Ilumetsa",
                "tczType": "PASSING",
                "distance": 116,
                "profileTime": 3,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 90,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680682650000,
                "commercialDeparture": 1680682740000,
                "technicalDeparture": 1680682800000,
                "adjustmentDeparture": 1680682860000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680682650000
            },
            {
                "trpName": "Veriora",
                "tczType": "PASSING",
                "distance": 5404,
                "profileTime": 187,
                "travelUncorrected": 1680645790000,
                "travelCorrected": 190,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680682840000,
                "commercialDeparture": 1680682920000,
                "technicalDeparture": 1680682980000,
                "adjustmentDeparture": 1680683040000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680682840000
            },
            {
                "trpName": "Ruusa",
                "tczType": "PASSING",
                "distance": 6429,
                "profileTime": 221,
                "travelUncorrected": 1680645830000,
                "travelCorrected": 230,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 90,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683070000,
                "commercialDeparture": 1680683160000,
                "technicalDeparture": 1680683220000,
                "adjustmentDeparture": 1680683280000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683070000
            },
            {
                "trpName": "Ruusa55",
                "tczType": "PASSING",
                "distance": 64,
                "profileTime": 2,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683080000,
                "commercialDeparture": 1680683160000,
                "technicalDeparture": 1680683220000,
                "adjustmentDeparture": 1680683280000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683080000
            },
            {
                "trpName": "Holvandi",
                "tczType": "PASSING",
                "distance": 4729,
                "profileTime": 163,
                "travelUncorrected": 1680645770000,
                "travelCorrected": 170,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 90,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683250000,
                "commercialDeparture": 1680683340000,
                "technicalDeparture": 1680683400000,
                "adjustmentDeparture": 1680683460000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683250000
            },
            {
                "trpName": "Holvandi50",
                "tczType": "PASSING",
                "distance": 69,
                "profileTime": 2,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683260000,
                "commercialDeparture": 1680683340000,
                "technicalDeparture": 1680683400000,
                "adjustmentDeparture": 1680683460000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683260000
            },
            {
                "trpName": "Põlva",
                "tczType": "PASSING",
                "distance": 6334,
                "profileTime": 218,
                "travelUncorrected": 1680645820000,
                "travelCorrected": 220,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683480000,
                "commercialDeparture": 1680683580000,
                "technicalDeparture": 1680683640000,
                "adjustmentDeparture": 1680683700000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683480000
            },
            {
                "trpName": "Taevaskoja38",
                "tczType": "PASSING",
                "distance": 5107,
                "profileTime": 175,
                "travelUncorrected": 1680645780000,
                "travelCorrected": 180,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683660000,
                "commercialDeparture": 1680683760000,
                "technicalDeparture": 1680683820000,
                "adjustmentDeparture": 1680683880000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683660000
            },
            {
                "trpName": "Taevaskoja",
                "tczType": "PASSING",
                "distance": 98,
                "profileTime": 3,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 90,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683670000,
                "commercialDeparture": 1680683760000,
                "technicalDeparture": 1680683820000,
                "adjustmentDeparture": 1680683880000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683670000
            },
            {
                "trpName": "Kiidjärve",
                "tczType": "PASSING",
                "distance": 3676,
                "profileTime": 126,
                "travelUncorrected": 1680645730000,
                "travelCorrected": 130,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683800000,
                "commercialDeparture": 1680683880000,
                "technicalDeparture": 1680683940000,
                "adjustmentDeparture": 1680684000000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683800000
            },
            {
                "trpName": "Valgemetsa32",
                "tczType": "PASSING",
                "distance": 2564,
                "profileTime": 88,
                "travelUncorrected": 1680645690000,
                "travelCorrected": 90,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 110,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683890000,
                "commercialDeparture": 1680684000000,
                "technicalDeparture": 1680684060000,
                "adjustmentDeparture": 1680684120000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683890000
            },
            {
                "trpName": "Valgemetsa",
                "tczType": "PASSING",
                "distance": 108,
                "profileTime": 3,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680683900000,
                "commercialDeparture": 1680684000000,
                "technicalDeparture": 1680684060000,
                "adjustmentDeparture": 1680684120000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680683900000
            },
            {
                "trpName": "Vastse-Kuuste",
                "tczType": "PASSING",
                "distance": 3512,
                "profileTime": 120,
                "travelUncorrected": 1680645720000,
                "travelCorrected": 120,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684020000,
                "commercialDeparture": 1680684120000,
                "technicalDeparture": 1680684180000,
                "adjustmentDeparture": 1680684240000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684020000
            },
            {
                "trpName": "Laane24",
                "tczType": "PASSING",
                "distance": 4400,
                "profileTime": 151,
                "travelUncorrected": 1680645760000,
                "travelCorrected": 160,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684180000,
                "commercialDeparture": 1680684240000,
                "technicalDeparture": 1680684300000,
                "adjustmentDeparture": 1680684360000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684180000
            },
            {
                "trpName": "Rebase",
                "tczType": "PASSING",
                "distance": 5815,
                "profileTime": 200,
                "travelUncorrected": 1680645800000,
                "travelCorrected": 200,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 100,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684380000,
                "commercialDeparture": 1680684480000,
                "technicalDeparture": 1680684540000,
                "adjustmentDeparture": 1680684600000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684380000
            },
            {
                "trpName": "Rebase18",
                "tczType": "PASSING",
                "distance": 355,
                "profileTime": 12,
                "travelUncorrected": 1680645620000,
                "travelCorrected": 20,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684400000,
                "commercialDeparture": 1680684480000,
                "technicalDeparture": 1680684540000,
                "adjustmentDeparture": 1680684600000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684400000
            },
            {
                "trpName": "Vana-Kuuste",
                "tczType": "PASSING",
                "distance": 2016,
                "profileTime": 69,
                "travelUncorrected": 1680645670000,
                "travelCorrected": 70,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 70,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684470000,
                "commercialDeparture": 1680684540000,
                "technicalDeparture": 1680684600000,
                "adjustmentDeparture": 1680684660000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684470000
            },
            {
                "trpName": "Reola",
                "tczType": "PASSING",
                "distance": 2045,
                "profileTime": 70,
                "travelUncorrected": 1680645670000,
                "travelCorrected": 70,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684540000,
                "commercialDeparture": 1680684600000,
                "technicalDeparture": 1680684660000,
                "adjustmentDeparture": 1680684720000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684540000
            },
            {
                "trpName": "Uhti",
                "tczType": "PASSING",
                "distance": 3556,
                "profileTime": 123,
                "travelUncorrected": 1680645730000,
                "travelCorrected": 130,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 110,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684670000,
                "commercialDeparture": 1680684780000,
                "technicalDeparture": 1680684840000,
                "adjustmentDeparture": 1680684900000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684670000
            },
            {
                "trpName": "Lange9",
                "tczType": "PASSING",
                "distance": 1378,
                "profileTime": 47,
                "travelUncorrected": 1680645650000,
                "travelCorrected": 50,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684720000,
                "commercialDeparture": 1680684780000,
                "technicalDeparture": 1680684840000,
                "adjustmentDeparture": 1680684900000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684720000
            },
            {
                "trpName": "Ülenurme",
                "tczType": "PASSING",
                "distance": 1030,
                "profileTime": 35,
                "travelUncorrected": 1680645640000,
                "travelCorrected": 40,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684760000,
                "commercialDeparture": 1680684840000,
                "technicalDeparture": 1680684900000,
                "adjustmentDeparture": 1680684960000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684760000
            },
            {
                "trpName": "AardlaKoid3",
                "tczType": "PASSING",
                "distance": 5064,
                "profileTime": 174,
                "travelUncorrected": 1680645780000,
                "travelCorrected": 180,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 80,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684940000,
                "commercialDeparture": 1680685020000,
                "technicalDeparture": 1680685080000,
                "adjustmentDeparture": 1680685140000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684940000
            },
            {
                "trpName": "Kirsi",
                "tczType": "PASSING",
                "distance": 274,
                "profileTime": 9,
                "travelUncorrected": 1680645610000,
                "travelCorrected": 10,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 70,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680684950000,
                "commercialDeparture": 1680685020000,
                "technicalDeparture": 1680685080000,
                "adjustmentDeparture": 1680685140000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680684950000
            },
            {
                "trpName": "Tartu",
                "tczType": "STOP",
                "distance": 2048,
                "profileTime": 125,
                "travelUncorrected": 1680645730000,
                "travelCorrected": 130,
                "minimumStop": 1680645660344,
                "commercialStopUncorrected": 1680645660344,
                "commercialStopCorrected": 60,
                "technicalStopUncorrected": 1680645660344,
                "technicalStopCorrected": 60,
                "adjustmentStopUncorrected": 1680645660344,
                "adjustmentStopCorrected": 60,
                "arrival": 1680685080000,
                "commercialDeparture": 1680685140000,
                "technicalDeparture": 1680685200000,
                "adjustmentDeparture": 1680685260000,
                "trpType": "COMMERCIAL_STOP",
                "commercialFields": true,
                "technicalFields": true,
                "adjustmentFields": true,
                "departureTime": 1680685260000
            }
        ],
        "originNode": "87005 | Petseri",
        "destinationNode": "84805 | Tartu",
        "departureTime": 1680681600000,
        "arrivalTime": 1680685080000
    },
    "runningData":
    {
        "speedParameterData": 150,
        "calculationType": "DYNAMIC",
        "useConfortAcceleration": true,
        "useConfortDecceleration": true
    },
    "topologyData":
    {
        "topologyId": "ER_TOPO_GLOBAL_3_1_3",
        "adaptability": "",
        "compatibility": ""
    },
    "profilesData":
    [
        {
            "profileId": "89725787-fe2b-4db2-b664-340ce7970638",
            "timeRegulationPoint": "Petseri",
            "distance": 0,
            "baseTime": 0,
            "uicMarginTime": 0,
            "profileTime": 0,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "c736e175-5141-4f43-8f03-fb0d934864f7",
            "timeRegulationPoint": "Koidula",
            "distance": 3392,
            "baseTime": 149,
            "uicMarginTime": 22,
            "profileTime": 171,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "217756ae-df93-43e2-8c63-567837c950b7",
            "timeRegulationPoint": "Orava",
            "distance": 13260,
            "baseTime": 398,
            "uicMarginTime": 59,
            "profileTime": 457,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "360a2816-3965-411f-9567-b73773218c2d",
            "timeRegulationPoint": "Ilumetsa67",
            "distance": 6355,
            "baseTime": 191,
            "uicMarginTime": 28,
            "profileTime": 219,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "e2fc3613-74df-42ac-ad38-255742ff5a76",
            "timeRegulationPoint": "Ilumetsa",
            "distance": 116,
            "baseTime": 3,
            "uicMarginTime": 0,
            "profileTime": 3,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "8808316b-7788-4787-a96c-1d450a3e6827",
            "timeRegulationPoint": "Veriora",
            "distance": 5404,
            "baseTime": 163,
            "uicMarginTime": 24,
            "profileTime": 187,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "71b60350-7687-43f4-ab6e-27ce9eb098eb",
            "timeRegulationPoint": "Ruusa",
            "distance": 6429,
            "baseTime": 193,
            "uicMarginTime": 28,
            "profileTime": 221,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "fc29772a-536d-4d3a-a88a-099941b7eb40",
            "timeRegulationPoint": "Ruusa55",
            "distance": 64,
            "baseTime": 2,
            "uicMarginTime": 0,
            "profileTime": 2,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "502f4e87-a11d-436f-a1b6-4b2b646cc9b8",
            "timeRegulationPoint": "Holvandi",
            "distance": 4729,
            "baseTime": 142,
            "uicMarginTime": 21,
            "profileTime": 163,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "e10880cd-d1cb-48b0-8b57-b7585ec84e45",
            "timeRegulationPoint": "Holvandi50",
            "distance": 69,
            "baseTime": 2,
            "uicMarginTime": 0,
            "profileTime": 2,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "a9c96d55-b96e-4e6f-8342-3d9f80893a22",
            "timeRegulationPoint": "Põlva",
            "distance": 6334,
            "baseTime": 190,
            "uicMarginTime": 28,
            "profileTime": 218,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "ab9321d2-75f9-41be-bba3-e23b65c2b05c",
            "timeRegulationPoint": "Taevaskoja38",
            "distance": 5107,
            "baseTime": 153,
            "uicMarginTime": 22,
            "profileTime": 175,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "b4106ddd-0af0-4c2b-9782-9bfd8de39fdf",
            "timeRegulationPoint": "Taevaskoja",
            "distance": 98,
            "baseTime": 3,
            "uicMarginTime": 0,
            "profileTime": 3,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "03048546-8bd6-4fe9-94c7-a283e164d461",
            "timeRegulationPoint": "Kiidjärve",
            "distance": 3676,
            "baseTime": 110,
            "uicMarginTime": 16,
            "profileTime": 126,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "067540a0-bc5b-43f8-b402-0edf3885a6e8",
            "timeRegulationPoint": "Valgemetsa32",
            "distance": 2564,
            "baseTime": 77,
            "uicMarginTime": 11,
            "profileTime": 88,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "48faf332-6a43-4aab-a04c-f607d7cf00c5",
            "timeRegulationPoint": "Valgemetsa",
            "distance": 108,
            "baseTime": 3,
            "uicMarginTime": 0,
            "profileTime": 3,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "fe1eed7a-1782-41a2-b5d7-28a4af9dc2fe",
            "timeRegulationPoint": "Vastse-Kuuste",
            "distance": 3512,
            "baseTime": 105,
            "uicMarginTime": 15,
            "profileTime": 120,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "98a65185-a80e-49c6-8ed1-585bc45cc9fd",
            "timeRegulationPoint": "Laane24",
            "distance": 4400,
            "baseTime": 132,
            "uicMarginTime": 19,
            "profileTime": 151,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "9e15ddf3-fdaf-473e-839c-4907266714dd",
            "timeRegulationPoint": "Rebase",
            "distance": 5815,
            "baseTime": 174,
            "uicMarginTime": 26,
            "profileTime": 200,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "634a75d0-4937-4b39-b0fb-e88ea1fe1fac",
            "timeRegulationPoint": "Rebase18",
            "distance": 355,
            "baseTime": 11,
            "uicMarginTime": 1,
            "profileTime": 12,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "76acb479-abbe-4ad4-9ad9-2e0990d87ed9",
            "timeRegulationPoint": "Vana-Kuuste",
            "distance": 2016,
            "baseTime": 60,
            "uicMarginTime": 9,
            "profileTime": 69,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "512183b4-b0ce-4632-8e81-06036d57ca8b",
            "timeRegulationPoint": "Reola",
            "distance": 2045,
            "baseTime": 61,
            "uicMarginTime": 9,
            "profileTime": 70,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "0d3eed09-fbb0-45ca-9b20-78491d244b65",
            "timeRegulationPoint": "Uhti",
            "distance": 3556,
            "baseTime": 107,
            "uicMarginTime": 16,
            "profileTime": 123,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "9709d309-d9df-4dd7-bf61-6fa1f1738032",
            "timeRegulationPoint": "Lange9",
            "distance": 1378,
            "baseTime": 41,
            "uicMarginTime": 6,
            "profileTime": 47,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "fe0d3489-514c-4ed1-9881-238137ac17b6",
            "timeRegulationPoint": "Ülenurme",
            "distance": 1030,
            "baseTime": 31,
            "uicMarginTime": 4,
            "profileTime": 35,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "72494090-1bdf-4d40-bf9c-317f416f1628",
            "timeRegulationPoint": "AardlaKoid3",
            "distance": 5064,
            "baseTime": 152,
            "uicMarginTime": 22,
            "profileTime": 174,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "d4b19196-650a-49aa-a77e-7045043a22c3",
            "timeRegulationPoint": "Kirsi",
            "distance": 274,
            "baseTime": 8,
            "uicMarginTime": 1,
            "profileTime": 9,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        },
        {
            "profileId": "a51ff6a9-2b54-4d69-b155-c1a3056de1df",
            "timeRegulationPoint": "Tartu",
            "distance": 2048,
            "baseTime": 109,
            "uicMarginTime": 16,
            "profileTime": 125,
            "calculationType": "%time",
            "value": 15,
            "actualSpeed": 0
        }
    ],
    "createUser": null,
    "createDate": 0,
    "lastUserModified": null,
    "lastDateModified": 0
}