import mock from "mock";

mock.Mock("/api/useData", {
    status: "filed",
    data: [
        {
            Hiddenplace: "place1",
            HiddenContent: "11",
            HazardType: "易燃",
            HiddenDangerLevel: "中风险",
            RectificationTimeLimit: "2022-11-2",
            rechecnker: "wu",
            reCheckTime: "2022-11-3",
            ReviewResults: "良好",
            fileName: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg"
        },
        {
            Hiddenplace: "plac22",
            HiddenContent: "11",
            HazardType: "易燃",
            HiddenDangerLevel: "高风险",
            RectificationTimeLimit: "2022-11-2",
            rechecnker: "wu",
            reCheckTime: "2022-11-3",
            ReviewResults: "一般",
            fileName: "https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg"
        }
    ]
})


mock.Mock("/api/table", {
    status: "filed",
    data: [
        {
            hiddenItemID: "1",
            ownStreet: "花木街道",
            HazardType: "易燃",
            UnitName: "陆家嘴大队",
            UnitProperty: "政府",
            registerPersonName: "1",
            HiddenDangerLevel: "中风险", typeOfVenue: "公共", checker: "吴",
            checkerWay: "一般",
            HiddenDangerLevel: "高风险",
            NumberOfHiddenDangers: "1",
            rectification: "1",
            RectificationTimeLimit: "2022-11-2",
            flag: "dd"
        },
        {
            hiddenItemID: "1",
            ownStreet: "浦江",
            HazardType: "易燃",
            UnitName: "陆家嘴大队",
            UnitProperty: "政府",
            registerPersonName: "1",
            HiddenDangerLevel: "中风险", typeOfVenue: "公共", checker: "吴",
            checkerWay: "一般",
            HiddenDangerLevel: "高风险",
            NumberOfHiddenDangers: "1",
            rectification: "1",
            RectificationTimeLimit: "2022-11-2",
            flag: "se"
        },
        {
            hiddenItemID: "1",
            ownStreet: "浦锦街道",
            HazardType: "易燃",
            UnitName: "陆家嘴大队",
            UnitProperty: "政府",
            registerPersonName: "1",
            HiddenDangerLevel: "中风险", typeOfVenue: "公共", checker: "吴",
            checkerWay: "一般",
            HiddenDangerLevel: "高风险",
            NumberOfHiddenDangers: "1",
            rectification: "1",
            RectificationTimeLimit: "2022-11-2",
            flag: "fi"
        },
    ]
})