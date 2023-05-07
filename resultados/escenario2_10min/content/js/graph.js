/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 945.0, "minX": 0.0, "maxY": 7400.0, "series": [{"data": [[0.0, 945.0], [0.1, 957.0], [0.2, 962.0], [0.3, 963.0], [0.4, 970.0], [0.5, 973.0], [0.6, 976.0], [0.7, 976.0], [0.8, 979.0], [0.9, 981.0], [1.0, 982.0], [1.1, 983.0], [1.2, 984.0], [1.3, 985.0], [1.4, 986.0], [1.5, 988.0], [1.6, 989.0], [1.7, 990.0], [1.8, 992.0], [1.9, 992.0], [2.0, 992.0], [2.1, 994.0], [2.2, 995.0], [2.3, 996.0], [2.4, 998.0], [2.5, 999.0], [2.6, 999.0], [2.7, 1000.0], [2.8, 1002.0], [2.9, 1003.0], [3.0, 1004.0], [3.1, 1004.0], [3.2, 1006.0], [3.3, 1006.0], [3.4, 1007.0], [3.5, 1007.0], [3.6, 1008.0], [3.7, 1009.0], [3.8, 1010.0], [3.9, 1011.0], [4.0, 1011.0], [4.1, 1012.0], [4.2, 1013.0], [4.3, 1014.0], [4.4, 1015.0], [4.5, 1016.0], [4.6, 1017.0], [4.7, 1020.0], [4.8, 1021.0], [4.9, 1021.0], [5.0, 1022.0], [5.1, 1023.0], [5.2, 1024.0], [5.3, 1025.0], [5.4, 1026.0], [5.5, 1027.0], [5.6, 1027.0], [5.7, 1028.0], [5.8, 1029.0], [5.9, 1029.0], [6.0, 1030.0], [6.1, 1030.0], [6.2, 1031.0], [6.3, 1032.0], [6.4, 1032.0], [6.5, 1032.0], [6.6, 1034.0], [6.7, 1035.0], [6.8, 1035.0], [6.9, 1036.0], [7.0, 1037.0], [7.1, 1038.0], [7.2, 1039.0], [7.3, 1041.0], [7.4, 1041.0], [7.5, 1042.0], [7.6, 1043.0], [7.7, 1043.0], [7.8, 1044.0], [7.9, 1045.0], [8.0, 1046.0], [8.1, 1047.0], [8.2, 1048.0], [8.3, 1050.0], [8.4, 1051.0], [8.5, 1052.0], [8.6, 1053.0], [8.7, 1055.0], [8.8, 1055.0], [8.9, 1056.0], [9.0, 1057.0], [9.1, 1058.0], [9.2, 1058.0], [9.3, 1059.0], [9.4, 1060.0], [9.5, 1062.0], [9.6, 1062.0], [9.7, 1063.0], [9.8, 1064.0], [9.9, 1064.0], [10.0, 1065.0], [10.1, 1067.0], [10.2, 1068.0], [10.3, 1069.0], [10.4, 1069.0], [10.5, 1071.0], [10.6, 1072.0], [10.7, 1073.0], [10.8, 1073.0], [10.9, 1074.0], [11.0, 1075.0], [11.1, 1075.0], [11.2, 1077.0], [11.3, 1078.0], [11.4, 1079.0], [11.5, 1080.0], [11.6, 1081.0], [11.7, 1081.0], [11.8, 1082.0], [11.9, 1082.0], [12.0, 1083.0], [12.1, 1084.0], [12.2, 1086.0], [12.3, 1086.0], [12.4, 1086.0], [12.5, 1087.0], [12.6, 1088.0], [12.7, 1090.0], [12.8, 1091.0], [12.9, 1093.0], [13.0, 1093.0], [13.1, 1093.0], [13.2, 1094.0], [13.3, 1095.0], [13.4, 1096.0], [13.5, 1096.0], [13.6, 1098.0], [13.7, 1100.0], [13.8, 1101.0], [13.9, 1103.0], [14.0, 1104.0], [14.1, 1104.0], [14.2, 1106.0], [14.3, 1106.0], [14.4, 1108.0], [14.5, 1108.0], [14.6, 1109.0], [14.7, 1109.0], [14.8, 1110.0], [14.9, 1110.0], [15.0, 1111.0], [15.1, 1112.0], [15.2, 1113.0], [15.3, 1114.0], [15.4, 1115.0], [15.5, 1116.0], [15.6, 1117.0], [15.7, 1118.0], [15.8, 1120.0], [15.9, 1121.0], [16.0, 1122.0], [16.1, 1123.0], [16.2, 1124.0], [16.3, 1124.0], [16.4, 1125.0], [16.5, 1126.0], [16.6, 1126.0], [16.7, 1127.0], [16.8, 1128.0], [16.9, 1130.0], [17.0, 1130.0], [17.1, 1132.0], [17.2, 1135.0], [17.3, 1136.0], [17.4, 1137.0], [17.5, 1137.0], [17.6, 1139.0], [17.7, 1140.0], [17.8, 1140.0], [17.9, 1142.0], [18.0, 1142.0], [18.1, 1143.0], [18.2, 1145.0], [18.3, 1146.0], [18.4, 1147.0], [18.5, 1147.0], [18.6, 1148.0], [18.7, 1149.0], [18.8, 1150.0], [18.9, 1151.0], [19.0, 1152.0], [19.1, 1152.0], [19.2, 1153.0], [19.3, 1154.0], [19.4, 1155.0], [19.5, 1157.0], [19.6, 1158.0], [19.7, 1159.0], [19.8, 1161.0], [19.9, 1162.0], [20.0, 1162.0], [20.1, 1165.0], [20.2, 1166.0], [20.3, 1166.0], [20.4, 1167.0], [20.5, 1167.0], [20.6, 1169.0], [20.7, 1170.0], [20.8, 1170.0], [20.9, 1172.0], [21.0, 1172.0], [21.1, 1174.0], [21.2, 1175.0], [21.3, 1176.0], [21.4, 1176.0], [21.5, 1177.0], [21.6, 1180.0], [21.7, 1181.0], [21.8, 1182.0], [21.9, 1183.0], [22.0, 1184.0], [22.1, 1185.0], [22.2, 1186.0], [22.3, 1187.0], [22.4, 1188.0], [22.5, 1188.0], [22.6, 1191.0], [22.7, 1192.0], [22.8, 1193.0], [22.9, 1194.0], [23.0, 1195.0], [23.1, 1196.0], [23.2, 1197.0], [23.3, 1199.0], [23.4, 1200.0], [23.5, 1201.0], [23.6, 1202.0], [23.7, 1202.0], [23.8, 1204.0], [23.9, 1205.0], [24.0, 1205.0], [24.1, 1207.0], [24.2, 1207.0], [24.3, 1208.0], [24.4, 1209.0], [24.5, 1210.0], [24.6, 1211.0], [24.7, 1212.0], [24.8, 1213.0], [24.9, 1213.0], [25.0, 1215.0], [25.1, 1216.0], [25.2, 1217.0], [25.3, 1218.0], [25.4, 1219.0], [25.5, 1220.0], [25.6, 1221.0], [25.7, 1222.0], [25.8, 1222.0], [25.9, 1223.0], [26.0, 1223.0], [26.1, 1224.0], [26.2, 1225.0], [26.3, 1226.0], [26.4, 1228.0], [26.5, 1229.0], [26.6, 1231.0], [26.7, 1233.0], [26.8, 1233.0], [26.9, 1235.0], [27.0, 1235.0], [27.1, 1237.0], [27.2, 1239.0], [27.3, 1241.0], [27.4, 1241.0], [27.5, 1242.0], [27.6, 1244.0], [27.7, 1245.0], [27.8, 1246.0], [27.9, 1246.0], [28.0, 1247.0], [28.1, 1247.0], [28.2, 1248.0], [28.3, 1248.0], [28.4, 1249.0], [28.5, 1250.0], [28.6, 1251.0], [28.7, 1251.0], [28.8, 1252.0], [28.9, 1253.0], [29.0, 1254.0], [29.1, 1255.0], [29.2, 1256.0], [29.3, 1257.0], [29.4, 1258.0], [29.5, 1259.0], [29.6, 1259.0], [29.7, 1259.0], [29.8, 1260.0], [29.9, 1261.0], [30.0, 1261.0], [30.1, 1262.0], [30.2, 1263.0], [30.3, 1264.0], [30.4, 1265.0], [30.5, 1266.0], [30.6, 1267.0], [30.7, 1268.0], [30.8, 1268.0], [30.9, 1269.0], [31.0, 1270.0], [31.1, 1272.0], [31.2, 1273.0], [31.3, 1274.0], [31.4, 1275.0], [31.5, 1276.0], [31.6, 1278.0], [31.7, 1279.0], [31.8, 1280.0], [31.9, 1280.0], [32.0, 1282.0], [32.1, 1283.0], [32.2, 1283.0], [32.3, 1284.0], [32.4, 1285.0], [32.5, 1286.0], [32.6, 1287.0], [32.7, 1288.0], [32.8, 1289.0], [32.9, 1290.0], [33.0, 1291.0], [33.1, 1293.0], [33.2, 1294.0], [33.3, 1295.0], [33.4, 1296.0], [33.5, 1297.0], [33.6, 1300.0], [33.7, 1301.0], [33.8, 1302.0], [33.9, 1304.0], [34.0, 1304.0], [34.1, 1305.0], [34.2, 1306.0], [34.3, 1308.0], [34.4, 1309.0], [34.5, 1309.0], [34.6, 1312.0], [34.7, 1314.0], [34.8, 1315.0], [34.9, 1316.0], [35.0, 1317.0], [35.1, 1318.0], [35.2, 1319.0], [35.3, 1321.0], [35.4, 1323.0], [35.5, 1323.0], [35.6, 1324.0], [35.7, 1324.0], [35.8, 1325.0], [35.9, 1326.0], [36.0, 1327.0], [36.1, 1328.0], [36.2, 1328.0], [36.3, 1330.0], [36.4, 1331.0], [36.5, 1332.0], [36.6, 1333.0], [36.7, 1336.0], [36.8, 1339.0], [36.9, 1339.0], [37.0, 1340.0], [37.1, 1341.0], [37.2, 1342.0], [37.3, 1345.0], [37.4, 1345.0], [37.5, 1346.0], [37.6, 1347.0], [37.7, 1348.0], [37.8, 1350.0], [37.9, 1352.0], [38.0, 1353.0], [38.1, 1355.0], [38.2, 1355.0], [38.3, 1356.0], [38.4, 1357.0], [38.5, 1358.0], [38.6, 1361.0], [38.7, 1362.0], [38.8, 1363.0], [38.9, 1364.0], [39.0, 1365.0], [39.1, 1367.0], [39.2, 1367.0], [39.3, 1371.0], [39.4, 1372.0], [39.5, 1373.0], [39.6, 1375.0], [39.7, 1375.0], [39.8, 1376.0], [39.9, 1379.0], [40.0, 1380.0], [40.1, 1383.0], [40.2, 1385.0], [40.3, 1387.0], [40.4, 1390.0], [40.5, 1390.0], [40.6, 1392.0], [40.7, 1393.0], [40.8, 1395.0], [40.9, 1397.0], [41.0, 1398.0], [41.1, 1399.0], [41.2, 1402.0], [41.3, 1403.0], [41.4, 1404.0], [41.5, 1406.0], [41.6, 1406.0], [41.7, 1407.0], [41.8, 1408.0], [41.9, 1408.0], [42.0, 1410.0], [42.1, 1411.0], [42.2, 1412.0], [42.3, 1413.0], [42.4, 1414.0], [42.5, 1415.0], [42.6, 1416.0], [42.7, 1417.0], [42.8, 1420.0], [42.9, 1422.0], [43.0, 1423.0], [43.1, 1424.0], [43.2, 1426.0], [43.3, 1428.0], [43.4, 1428.0], [43.5, 1429.0], [43.6, 1431.0], [43.7, 1433.0], [43.8, 1435.0], [43.9, 1436.0], [44.0, 1438.0], [44.1, 1439.0], [44.2, 1440.0], [44.3, 1444.0], [44.4, 1444.0], [44.5, 1448.0], [44.6, 1449.0], [44.7, 1450.0], [44.8, 1452.0], [44.9, 1454.0], [45.0, 1455.0], [45.1, 1456.0], [45.2, 1458.0], [45.3, 1460.0], [45.4, 1460.0], [45.5, 1462.0], [45.6, 1463.0], [45.7, 1464.0], [45.8, 1466.0], [45.9, 1467.0], [46.0, 1469.0], [46.1, 1470.0], [46.2, 1472.0], [46.3, 1474.0], [46.4, 1474.0], [46.5, 1476.0], [46.6, 1479.0], [46.7, 1481.0], [46.8, 1482.0], [46.9, 1483.0], [47.0, 1485.0], [47.1, 1489.0], [47.2, 1491.0], [47.3, 1492.0], [47.4, 1494.0], [47.5, 1498.0], [47.6, 1501.0], [47.7, 1503.0], [47.8, 1505.0], [47.9, 1507.0], [48.0, 1508.0], [48.1, 1509.0], [48.2, 1510.0], [48.3, 1513.0], [48.4, 1514.0], [48.5, 1516.0], [48.6, 1519.0], [48.7, 1520.0], [48.8, 1522.0], [48.9, 1524.0], [49.0, 1527.0], [49.1, 1528.0], [49.2, 1530.0], [49.3, 1532.0], [49.4, 1532.0], [49.5, 1533.0], [49.6, 1535.0], [49.7, 1536.0], [49.8, 1536.0], [49.9, 1537.0], [50.0, 1538.0], [50.1, 1538.0], [50.2, 1540.0], [50.3, 1540.0], [50.4, 1541.0], [50.5, 1544.0], [50.6, 1544.0], [50.7, 1547.0], [50.8, 1549.0], [50.9, 1550.0], [51.0, 1550.0], [51.1, 1552.0], [51.2, 1553.0], [51.3, 1555.0], [51.4, 1557.0], [51.5, 1559.0], [51.6, 1561.0], [51.7, 1563.0], [51.8, 1566.0], [51.9, 1571.0], [52.0, 1574.0], [52.1, 1576.0], [52.2, 1577.0], [52.3, 1578.0], [52.4, 1584.0], [52.5, 1587.0], [52.6, 1590.0], [52.7, 1591.0], [52.8, 1594.0], [52.9, 1595.0], [53.0, 1598.0], [53.1, 1600.0], [53.2, 1603.0], [53.3, 1607.0], [53.4, 1608.0], [53.5, 1612.0], [53.6, 1614.0], [53.7, 1616.0], [53.8, 1620.0], [53.9, 1621.0], [54.0, 1622.0], [54.1, 1623.0], [54.2, 1628.0], [54.3, 1629.0], [54.4, 1632.0], [54.5, 1635.0], [54.6, 1637.0], [54.7, 1640.0], [54.8, 1642.0], [54.9, 1643.0], [55.0, 1647.0], [55.1, 1649.0], [55.2, 1651.0], [55.3, 1653.0], [55.4, 1657.0], [55.5, 1658.0], [55.6, 1661.0], [55.7, 1663.0], [55.8, 1664.0], [55.9, 1667.0], [56.0, 1670.0], [56.1, 1673.0], [56.2, 1674.0], [56.3, 1678.0], [56.4, 1681.0], [56.5, 1683.0], [56.6, 1686.0], [56.7, 1689.0], [56.8, 1690.0], [56.9, 1694.0], [57.0, 1696.0], [57.1, 1700.0], [57.2, 1702.0], [57.3, 1703.0], [57.4, 1704.0], [57.5, 1705.0], [57.6, 1707.0], [57.7, 1714.0], [57.8, 1715.0], [57.9, 1719.0], [58.0, 1721.0], [58.1, 1723.0], [58.2, 1726.0], [58.3, 1728.0], [58.4, 1731.0], [58.5, 1733.0], [58.6, 1746.0], [58.7, 1753.0], [58.8, 1756.0], [58.9, 1758.0], [59.0, 1765.0], [59.1, 1771.0], [59.2, 1775.0], [59.3, 1779.0], [59.4, 1783.0], [59.5, 1789.0], [59.6, 1791.0], [59.7, 1797.0], [59.8, 1801.0], [59.9, 1807.0], [60.0, 1812.0], [60.1, 1817.0], [60.2, 1820.0], [60.3, 1826.0], [60.4, 1828.0], [60.5, 1833.0], [60.6, 1841.0], [60.7, 1844.0], [60.8, 1853.0], [60.9, 1863.0], [61.0, 1875.0], [61.1, 1878.0], [61.2, 1882.0], [61.3, 1887.0], [61.4, 1894.0], [61.5, 1903.0], [61.6, 1909.0], [61.7, 1920.0], [61.8, 1921.0], [61.9, 1932.0], [62.0, 1939.0], [62.1, 1945.0], [62.2, 1949.0], [62.3, 1954.0], [62.4, 1962.0], [62.5, 1970.0], [62.6, 1991.0], [62.7, 1996.0], [62.8, 2001.0], [62.9, 2004.0], [63.0, 2008.0], [63.1, 2017.0], [63.2, 2027.0], [63.3, 2045.0], [63.4, 2047.0], [63.5, 2049.0], [63.6, 2055.0], [63.7, 2058.0], [63.8, 2069.0], [63.9, 2080.0], [64.0, 2087.0], [64.1, 2101.0], [64.2, 2108.0], [64.3, 2114.0], [64.4, 2122.0], [64.5, 2127.0], [64.6, 2129.0], [64.7, 2138.0], [64.8, 2146.0], [64.9, 2153.0], [65.0, 2162.0], [65.1, 2171.0], [65.2, 2180.0], [65.3, 2186.0], [65.4, 2195.0], [65.5, 2203.0], [65.6, 2207.0], [65.7, 2228.0], [65.8, 2234.0], [65.9, 2250.0], [66.0, 2257.0], [66.1, 2263.0], [66.2, 2273.0], [66.3, 2277.0], [66.4, 2291.0], [66.5, 2302.0], [66.6, 2305.0], [66.7, 2309.0], [66.8, 2316.0], [66.9, 2326.0], [67.0, 2330.0], [67.1, 2340.0], [67.2, 2347.0], [67.3, 2352.0], [67.4, 2367.0], [67.5, 2368.0], [67.6, 2380.0], [67.7, 2404.0], [67.8, 2417.0], [67.9, 2420.0], [68.0, 2433.0], [68.1, 2444.0], [68.2, 2455.0], [68.3, 2466.0], [68.4, 2476.0], [68.5, 2498.0], [68.6, 2501.0], [68.7, 2513.0], [68.8, 2517.0], [68.9, 2533.0], [69.0, 2544.0], [69.1, 2557.0], [69.2, 2564.0], [69.3, 2569.0], [69.4, 2578.0], [69.5, 2597.0], [69.6, 2601.0], [69.7, 2607.0], [69.8, 2615.0], [69.9, 2629.0], [70.0, 2633.0], [70.1, 2637.0], [70.2, 2644.0], [70.3, 2647.0], [70.4, 2659.0], [70.5, 2665.0], [70.6, 2672.0], [70.7, 2677.0], [70.8, 2686.0], [70.9, 2686.0], [71.0, 2690.0], [71.1, 2694.0], [71.2, 2705.0], [71.3, 2707.0], [71.4, 2713.0], [71.5, 2724.0], [71.6, 2726.0], [71.7, 2734.0], [71.8, 2740.0], [71.9, 2747.0], [72.0, 2754.0], [72.1, 2757.0], [72.2, 2759.0], [72.3, 2765.0], [72.4, 2772.0], [72.5, 2779.0], [72.6, 2782.0], [72.7, 2798.0], [72.8, 2801.0], [72.9, 2807.0], [73.0, 2814.0], [73.1, 2817.0], [73.2, 2822.0], [73.3, 2824.0], [73.4, 2827.0], [73.5, 2833.0], [73.6, 2837.0], [73.7, 2842.0], [73.8, 2844.0], [73.9, 2850.0], [74.0, 2855.0], [74.1, 2860.0], [74.2, 2862.0], [74.3, 2864.0], [74.4, 2879.0], [74.5, 2882.0], [74.6, 2884.0], [74.7, 2890.0], [74.8, 2897.0], [74.9, 2907.0], [75.0, 2910.0], [75.1, 2912.0], [75.2, 2915.0], [75.3, 2916.0], [75.4, 2921.0], [75.5, 2928.0], [75.6, 2930.0], [75.7, 2933.0], [75.8, 2941.0], [75.9, 2944.0], [76.0, 2949.0], [76.1, 2951.0], [76.2, 2955.0], [76.3, 2962.0], [76.4, 2965.0], [76.5, 2966.0], [76.6, 2972.0], [76.7, 2977.0], [76.8, 2982.0], [76.9, 2985.0], [77.0, 2989.0], [77.1, 2992.0], [77.2, 2996.0], [77.3, 2997.0], [77.4, 3000.0], [77.5, 3006.0], [77.6, 3008.0], [77.7, 3011.0], [77.8, 3016.0], [77.9, 3017.0], [78.0, 3019.0], [78.1, 3021.0], [78.2, 3025.0], [78.3, 3026.0], [78.4, 3029.0], [78.5, 3033.0], [78.6, 3034.0], [78.7, 3035.0], [78.8, 3038.0], [78.9, 3044.0], [79.0, 3049.0], [79.1, 3054.0], [79.2, 3056.0], [79.3, 3061.0], [79.4, 3072.0], [79.5, 3073.0], [79.6, 3079.0], [79.7, 3080.0], [79.8, 3082.0], [79.9, 3083.0], [80.0, 3090.0], [80.1, 3094.0], [80.2, 3098.0], [80.3, 3100.0], [80.4, 3101.0], [80.5, 3103.0], [80.6, 3111.0], [80.7, 3118.0], [80.8, 3124.0], [80.9, 3126.0], [81.0, 3131.0], [81.1, 3133.0], [81.2, 3137.0], [81.3, 3141.0], [81.4, 3148.0], [81.5, 3152.0], [81.6, 3155.0], [81.7, 3160.0], [81.8, 3162.0], [81.9, 3164.0], [82.0, 3170.0], [82.1, 3174.0], [82.2, 3178.0], [82.3, 3185.0], [82.4, 3188.0], [82.5, 3192.0], [82.6, 3197.0], [82.7, 3205.0], [82.8, 3213.0], [82.9, 3216.0], [83.0, 3218.0], [83.1, 3224.0], [83.2, 3225.0], [83.3, 3228.0], [83.4, 3233.0], [83.5, 3236.0], [83.6, 3243.0], [83.7, 3244.0], [83.8, 3255.0], [83.9, 3261.0], [84.0, 3268.0], [84.1, 3271.0], [84.2, 3281.0], [84.3, 3292.0], [84.4, 3295.0], [84.5, 3304.0], [84.6, 3307.0], [84.7, 3311.0], [84.8, 3323.0], [84.9, 3329.0], [85.0, 3342.0], [85.1, 3347.0], [85.2, 3348.0], [85.3, 3360.0], [85.4, 3365.0], [85.5, 3373.0], [85.6, 3379.0], [85.7, 3381.0], [85.8, 3397.0], [85.9, 3409.0], [86.0, 3417.0], [86.1, 3432.0], [86.2, 3442.0], [86.3, 3467.0], [86.4, 3478.0], [86.5, 3490.0], [86.6, 3498.0], [86.7, 3509.0], [86.8, 3520.0], [86.9, 3536.0], [87.0, 3549.0], [87.1, 3555.0], [87.2, 3557.0], [87.3, 3597.0], [87.4, 3611.0], [87.5, 3633.0], [87.6, 3638.0], [87.7, 3643.0], [87.8, 3656.0], [87.9, 3665.0], [88.0, 3670.0], [88.1, 3681.0], [88.2, 3697.0], [88.3, 3701.0], [88.4, 3707.0], [88.5, 3716.0], [88.6, 3732.0], [88.7, 3743.0], [88.8, 3751.0], [88.9, 3763.0], [89.0, 3774.0], [89.1, 3791.0], [89.2, 3804.0], [89.3, 3815.0], [89.4, 3825.0], [89.5, 3836.0], [89.6, 3841.0], [89.7, 3850.0], [89.8, 3854.0], [89.9, 3856.0], [90.0, 3867.0], [90.1, 3874.0], [90.2, 3885.0], [90.3, 3891.0], [90.4, 3896.0], [90.5, 3904.0], [90.6, 3921.0], [90.7, 3927.0], [90.8, 3933.0], [90.9, 3944.0], [91.0, 3950.0], [91.1, 3954.0], [91.2, 3955.0], [91.3, 3957.0], [91.4, 3961.0], [91.5, 3963.0], [91.6, 3969.0], [91.7, 3984.0], [91.8, 3996.0], [91.9, 4001.0], [92.0, 4006.0], [92.1, 4020.0], [92.2, 4039.0], [92.3, 4043.0], [92.4, 4049.0], [92.5, 4054.0], [92.6, 4060.0], [92.7, 4064.0], [92.8, 4076.0], [92.9, 4084.0], [93.0, 4089.0], [93.1, 4094.0], [93.2, 4097.0], [93.3, 4102.0], [93.4, 4113.0], [93.5, 4123.0], [93.6, 4137.0], [93.7, 4155.0], [93.8, 4167.0], [93.9, 4172.0], [94.0, 4180.0], [94.1, 4199.0], [94.2, 4208.0], [94.3, 4216.0], [94.4, 4222.0], [94.5, 4225.0], [94.6, 4232.0], [94.7, 4240.0], [94.8, 4241.0], [94.9, 4255.0], [95.0, 4265.0], [95.1, 4276.0], [95.2, 4288.0], [95.3, 4299.0], [95.4, 4304.0], [95.5, 4308.0], [95.6, 4316.0], [95.7, 4323.0], [95.8, 4341.0], [95.9, 4346.0], [96.0, 4354.0], [96.1, 4371.0], [96.2, 4377.0], [96.3, 4392.0], [96.4, 4403.0], [96.5, 4406.0], [96.6, 4417.0], [96.7, 4421.0], [96.8, 4439.0], [96.9, 4450.0], [97.0, 4464.0], [97.1, 4471.0], [97.2, 4477.0], [97.3, 4487.0], [97.4, 4506.0], [97.5, 4520.0], [97.6, 4532.0], [97.7, 4540.0], [97.8, 4550.0], [97.9, 4554.0], [98.0, 4565.0], [98.1, 4574.0], [98.2, 4603.0], [98.3, 4640.0], [98.4, 4655.0], [98.5, 4684.0], [98.6, 4729.0], [98.7, 4739.0], [98.8, 4770.0], [98.9, 4778.0], [99.0, 4790.0], [99.1, 4843.0], [99.2, 4935.0], [99.3, 5041.0], [99.4, 5220.0], [99.5, 5284.0], [99.6, 5425.0], [99.7, 5595.0], [99.8, 5747.0], [99.9, 6389.0], [100.0, 7400.0]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 900.0, "maxY": 321.0, "series": [{"data": [[900.0, 77.0], [1000.0, 321.0], [1100.0, 281.0], [1200.0, 299.0], [1300.0, 219.0], [1400.0, 188.0], [1500.0, 159.0], [1600.0, 118.0], [1700.0, 77.0], [1800.0, 50.0], [1900.0, 38.0], [2000.0, 38.0], [2100.0, 40.0], [2300.0, 34.0], [2200.0, 30.0], [2400.0, 26.0], [2500.0, 30.0], [2600.0, 47.0], [2700.0, 47.0], [2800.0, 60.0], [2900.0, 73.0], [3000.0, 85.0], [3100.0, 69.0], [3200.0, 52.0], [3300.0, 40.0], [3400.0, 23.0], [3500.0, 21.0], [3600.0, 27.0], [3700.0, 26.0], [3800.0, 38.0], [3900.0, 41.0], [4000.0, 40.0], [4200.0, 35.0], [4300.0, 30.0], [4100.0, 26.0], [4500.0, 24.0], [4400.0, 29.0], [4600.0, 11.0], [4700.0, 14.0], [4800.0, 4.0], [5000.0, 3.0], [4900.0, 1.0], [5100.0, 1.0], [5200.0, 5.0], [5300.0, 1.0], [5500.0, 2.0], [5400.0, 3.0], [5600.0, 1.0], [5800.0, 1.0], [5700.0, 2.0], [5900.0, 1.0], [6300.0, 1.0], [6800.0, 1.0], [7400.0, 1.0]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1385.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1526.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1385.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1526.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.771573604060917, "minX": 1.683435E12, "maxY": 10.0, "series": [{"data": [[1.68343536E12, 10.0], [1.68343506E12, 10.0], [1.68343554E12, 10.0], [1.68343524E12, 10.0], [1.68343542E12, 10.0], [1.68343512E12, 10.0], [1.6834356E12, 9.771573604060917], [1.6834353E12, 10.0], [1.683435E12, 10.0], [1.68343548E12, 10.0], [1.68343518E12, 10.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6834356E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 1082.0, "minX": 1.0, "maxY": 4464.0, "series": [{"data": [[8.0, 1776.0], [4.0, 2080.0], [2.0, 1563.0], [1.0, 1702.0], [9.0, 1150.0], [10.0, 2061.8869745003412], [5.0, 1653.0], [6.0, 1082.0], [3.0, 4464.0], [7.0, 1169.0]], "isOverall": false, "label": "Escenario 2", "isController": false}, {"data": [[9.98454139470972, 2061.22810030917]], "isOverall": false, "label": "Escenario 2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 262.7, "minX": 1.683435E12, "maxY": 1.082546396E8, "series": [{"data": [[1.68343536E12, 1457.8], [1.68343506E12, 603.1], [1.68343554E12, 1435.6], [1.68343524E12, 762.2], [1.68343542E12, 1454.1], [1.68343512E12, 617.9], [1.6834356E12, 728.9], [1.6834353E12, 1398.6], [1.683435E12, 262.7], [1.68343548E12, 1439.3], [1.68343518E12, 610.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68343536E12, 1.082546396E8], [1.68343506E12, 4.478554786666667E7], [1.68343554E12, 1.0660609953333333E8], [1.68343524E12, 5.6600144733333334E7], [1.68343542E12, 1.079798922E8], [1.68343512E12, 4.588457971666667E7], [1.6834356E12, 5.412731596666667E7], [1.6834353E12, 1.0385851861666666E8], [1.683435E12, 1.95078179E7], [1.68343548E12, 1.0688085076666667E8], [1.68343518E12, 4.5335063333333336E7]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6834356E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1513.0101522842647, "minX": 1.683435E12, "maxY": 3911.2253521126754, "series": [{"data": [[1.68343536E12, 1513.0101522842647], [1.68343506E12, 3692.588957055213], [1.68343554E12, 1540.8350515463908], [1.68343524E12, 2908.145631067962], [1.68343542E12, 1528.7328244274822], [1.68343512E12, 3624.9820359281425], [1.6834356E12, 1579.7868020304556], [1.6834353E12, 1615.4973544973539], [1.683435E12, 3911.2253521126754], [1.68343548E12, 1548.107969151671], [1.68343518E12, 3620.266666666667]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6834356E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1512.916243654823, "minX": 1.683435E12, "maxY": 3911.0281690140846, "series": [{"data": [[1.68343536E12, 1512.916243654823], [1.68343506E12, 3692.4601226993864], [1.68343554E12, 1540.7809278350508], [1.68343524E12, 2908.087378640777], [1.68343542E12, 1528.687022900764], [1.68343512E12, 3624.8742514970077], [1.6834356E12, 1579.7461928934008], [1.6834353E12, 1615.441798941798], [1.683435E12, 3911.0281690140846], [1.68343548E12, 1548.0411311053977], [1.68343518E12, 3620.206060606061]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6834356E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 41.391752577319586, "minX": 1.683435E12, "maxY": 196.05633802816894, "series": [{"data": [[1.68343536E12, 41.67512690355334], [1.68343506E12, 42.47239263803682], [1.68343554E12, 41.391752577319586], [1.68343524E12, 41.645631067961155], [1.68343542E12, 41.51908396946568], [1.68343512E12, 41.670658682634716], [1.6834356E12, 41.522842639593904], [1.6834353E12, 41.965608465608476], [1.683435E12, 196.05633802816894], [1.68343548E12, 41.578406169665776], [1.68343518E12, 41.93939393939392]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6834356E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 945.0, "minX": 1.683435E12, "maxY": 7400.0, "series": [{"data": [[1.68343536E12, 4577.0], [1.68343506E12, 6872.0], [1.68343554E12, 3248.0], [1.68343524E12, 5967.0], [1.68343542E12, 4347.0], [1.68343512E12, 5667.0], [1.6834356E12, 4464.0], [1.6834353E12, 7400.0], [1.683435E12, 6389.0], [1.68343548E12, 4505.0], [1.68343518E12, 5512.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68343536E12, 2350.0], [1.68343506E12, 4510.8], [1.68343554E12, 2367.1], [1.68343524E12, 4320.2], [1.68343542E12, 2492.2000000000016], [1.68343512E12, 4456.8], [1.6834356E12, 2331.6000000000017], [1.6834353E12, 2786.700000000001], [1.683435E12, 4838.4], [1.68343548E12, 2402.0], [1.68343518E12, 4406.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68343536E12, 3316.550000000002], [1.68343506E12, 6151.999999999984], [1.68343554E12, 3027.77], [1.68343524E12, 5431.5], [1.68343542E12, 3954.42], [1.68343512E12, 5375.959999999997], [1.6834356E12, 3573.1800000000094], [1.6834353E12, 4176.589999999992], [1.683435E12, 6389.0], [1.68343548E12, 3421.1000000000095], [1.68343518E12, 5361.52]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68343536E12, 2799.25], [1.68343506E12, 4788.599999999999], [1.68343554E12, 2800.449999999997], [1.68343524E12, 4558.649999999999], [1.68343542E12, 3026.7999999999997], [1.68343512E12, 4574.0], [1.6834356E12, 2721.7999999999997], [1.6834353E12, 3102.0500000000006], [1.683435E12, 5262.599999999995], [1.68343548E12, 2686.5], [1.68343518E12, 4637.999999999998]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68343536E12, 962.0], [1.68343506E12, 2713.0], [1.68343554E12, 945.0], [1.68343524E12, 962.0], [1.68343542E12, 963.0], [1.68343512E12, 2624.0], [1.6834356E12, 973.0], [1.6834353E12, 957.0], [1.683435E12, 2567.0], [1.68343548E12, 959.0], [1.68343518E12, 2566.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68343536E12, 1303.0], [1.68343506E12, 3807.0], [1.68343554E12, 1373.5], [1.68343524E12, 3010.0], [1.68343542E12, 1321.0], [1.68343512E12, 3611.0], [1.6834356E12, 1452.0], [1.6834353E12, 1342.0], [1.683435E12, 4001.0], [1.68343548E12, 1375.0], [1.68343518E12, 3612.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6834356E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 1328.5, "minX": 1.0, "maxY": 3841.0, "series": [{"data": [[4.0, 3324.0], [2.0, 3232.0], [1.0, 3841.0], [8.0, 1353.0], [9.0, 1346.5], [5.0, 1405.5], [10.0, 1328.5], [3.0, 3121.5], [6.0, 1407.5], [7.0, 1345.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 1328.5, "minX": 1.0, "maxY": 3841.0, "series": [{"data": [[4.0, 3324.0], [2.0, 3232.0], [1.0, 3841.0], [8.0, 1353.0], [9.0, 1346.5], [5.0, 1405.5], [10.0, 1328.5], [3.0, 3121.5], [6.0, 1407.5], [7.0, 1345.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 10.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.35, "minX": 1.683435E12, "maxY": 6.566666666666666, "series": [{"data": [[1.68343536E12, 6.566666666666666], [1.68343506E12, 2.716666666666667], [1.68343554E12, 6.466666666666667], [1.68343524E12, 3.433333333333333], [1.68343542E12, 6.55], [1.68343512E12, 2.783333333333333], [1.6834356E12, 3.1166666666666667], [1.6834353E12, 6.3], [1.683435E12, 1.35], [1.68343548E12, 6.483333333333333], [1.68343518E12, 2.75]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6834356E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.683435E12, "maxY": 6.566666666666666, "series": [{"data": [[1.68343536E12, 6.566666666666666], [1.68343506E12, 2.716666666666667], [1.68343554E12, 6.466666666666667], [1.68343524E12, 3.433333333333333], [1.68343542E12, 6.55], [1.68343512E12, 2.783333333333333], [1.6834356E12, 3.283333333333333], [1.6834353E12, 6.3], [1.683435E12, 1.1833333333333333], [1.68343548E12, 6.483333333333333], [1.68343518E12, 2.75]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6834356E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.683435E12, "maxY": 6.566666666666666, "series": [{"data": [[1.68343536E12, 6.566666666666666], [1.68343506E12, 2.716666666666667], [1.68343554E12, 6.466666666666667], [1.68343524E12, 3.433333333333333], [1.68343542E12, 6.55], [1.68343512E12, 2.783333333333333], [1.6834356E12, 3.283333333333333], [1.6834353E12, 6.3], [1.683435E12, 1.1833333333333333], [1.68343548E12, 6.483333333333333], [1.68343518E12, 2.75]], "isOverall": false, "label": "Escenario 2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6834356E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.1833333333333333, "minX": 1.683435E12, "maxY": 6.566666666666666, "series": [{"data": [[1.68343536E12, 6.566666666666666], [1.68343506E12, 2.716666666666667], [1.68343554E12, 6.466666666666667], [1.68343524E12, 3.433333333333333], [1.68343542E12, 6.55], [1.68343512E12, 2.783333333333333], [1.6834356E12, 3.283333333333333], [1.6834353E12, 6.3], [1.683435E12, 1.1833333333333333], [1.68343548E12, 6.483333333333333], [1.68343518E12, 2.75]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6834356E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

