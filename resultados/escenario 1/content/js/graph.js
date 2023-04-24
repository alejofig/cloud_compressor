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
        data: {"result": {"minY": 110.0, "minX": 0.0, "maxY": 1731.0, "series": [{"data": [[0.0, 110.0], [0.1, 200.0], [0.2, 239.0], [0.3, 344.0], [0.4, 419.0], [0.5, 510.0], [0.6, 573.0], [0.7, 641.0], [0.8, 696.0], [0.9, 747.0], [1.0, 780.0], [1.1, 819.0], [1.2, 847.0], [1.3, 955.0], [1.4, 1046.0], [1.5, 1127.0], [1.6, 1160.0], [1.7, 1185.0], [1.8, 1205.0], [1.9, 1236.0], [2.0, 1245.0], [2.1, 1249.0], [2.2, 1252.0], [2.3, 1254.0], [2.4, 1254.0], [2.5, 1255.0], [2.6, 1256.0], [2.7, 1257.0], [2.8, 1258.0], [2.9, 1259.0], [3.0, 1259.0], [3.1, 1260.0], [3.2, 1260.0], [3.3, 1261.0], [3.4, 1261.0], [3.5, 1262.0], [3.6, 1262.0], [3.7, 1262.0], [3.8, 1263.0], [3.9, 1263.0], [4.0, 1263.0], [4.1, 1263.0], [4.2, 1264.0], [4.3, 1264.0], [4.4, 1264.0], [4.5, 1264.0], [4.6, 1264.0], [4.7, 1265.0], [4.8, 1265.0], [4.9, 1265.0], [5.0, 1265.0], [5.1, 1266.0], [5.2, 1266.0], [5.3, 1266.0], [5.4, 1266.0], [5.5, 1266.0], [5.6, 1267.0], [5.7, 1267.0], [5.8, 1267.0], [5.9, 1267.0], [6.0, 1268.0], [6.1, 1268.0], [6.2, 1268.0], [6.3, 1268.0], [6.4, 1268.0], [6.5, 1268.0], [6.6, 1269.0], [6.7, 1269.0], [6.8, 1269.0], [6.9, 1269.0], [7.0, 1270.0], [7.1, 1270.0], [7.2, 1270.0], [7.3, 1270.0], [7.4, 1271.0], [7.5, 1271.0], [7.6, 1271.0], [7.7, 1271.0], [7.8, 1271.0], [7.9, 1271.0], [8.0, 1272.0], [8.1, 1272.0], [8.2, 1272.0], [8.3, 1272.0], [8.4, 1272.0], [8.5, 1272.0], [8.6, 1272.0], [8.7, 1273.0], [8.8, 1273.0], [8.9, 1273.0], [9.0, 1273.0], [9.1, 1273.0], [9.2, 1273.0], [9.3, 1273.0], [9.4, 1274.0], [9.5, 1274.0], [9.6, 1274.0], [9.7, 1274.0], [9.8, 1274.0], [9.9, 1274.0], [10.0, 1274.0], [10.1, 1274.0], [10.2, 1274.0], [10.3, 1274.0], [10.4, 1275.0], [10.5, 1275.0], [10.6, 1275.0], [10.7, 1275.0], [10.8, 1275.0], [10.9, 1275.0], [11.0, 1275.0], [11.1, 1275.0], [11.2, 1275.0], [11.3, 1276.0], [11.4, 1276.0], [11.5, 1276.0], [11.6, 1276.0], [11.7, 1276.0], [11.8, 1276.0], [11.9, 1276.0], [12.0, 1276.0], [12.1, 1276.0], [12.2, 1276.0], [12.3, 1277.0], [12.4, 1277.0], [12.5, 1277.0], [12.6, 1277.0], [12.7, 1277.0], [12.8, 1277.0], [12.9, 1277.0], [13.0, 1277.0], [13.1, 1277.0], [13.2, 1278.0], [13.3, 1278.0], [13.4, 1278.0], [13.5, 1278.0], [13.6, 1278.0], [13.7, 1278.0], [13.8, 1278.0], [13.9, 1278.0], [14.0, 1278.0], [14.1, 1279.0], [14.2, 1279.0], [14.3, 1279.0], [14.4, 1279.0], [14.5, 1279.0], [14.6, 1279.0], [14.7, 1279.0], [14.8, 1280.0], [14.9, 1280.0], [15.0, 1280.0], [15.1, 1280.0], [15.2, 1280.0], [15.3, 1280.0], [15.4, 1280.0], [15.5, 1280.0], [15.6, 1280.0], [15.7, 1280.0], [15.8, 1281.0], [15.9, 1281.0], [16.0, 1281.0], [16.1, 1281.0], [16.2, 1281.0], [16.3, 1281.0], [16.4, 1281.0], [16.5, 1281.0], [16.6, 1281.0], [16.7, 1282.0], [16.8, 1282.0], [16.9, 1282.0], [17.0, 1282.0], [17.1, 1282.0], [17.2, 1282.0], [17.3, 1282.0], [17.4, 1282.0], [17.5, 1282.0], [17.6, 1282.0], [17.7, 1282.0], [17.8, 1283.0], [17.9, 1283.0], [18.0, 1283.0], [18.1, 1283.0], [18.2, 1283.0], [18.3, 1283.0], [18.4, 1283.0], [18.5, 1283.0], [18.6, 1283.0], [18.7, 1283.0], [18.8, 1283.0], [18.9, 1284.0], [19.0, 1284.0], [19.1, 1284.0], [19.2, 1284.0], [19.3, 1284.0], [19.4, 1284.0], [19.5, 1284.0], [19.6, 1284.0], [19.7, 1284.0], [19.8, 1284.0], [19.9, 1284.0], [20.0, 1285.0], [20.1, 1285.0], [20.2, 1285.0], [20.3, 1285.0], [20.4, 1285.0], [20.5, 1285.0], [20.6, 1285.0], [20.7, 1285.0], [20.8, 1285.0], [20.9, 1285.0], [21.0, 1285.0], [21.1, 1285.0], [21.2, 1286.0], [21.3, 1286.0], [21.4, 1286.0], [21.5, 1286.0], [21.6, 1286.0], [21.7, 1286.0], [21.8, 1286.0], [21.9, 1286.0], [22.0, 1286.0], [22.1, 1286.0], [22.2, 1286.0], [22.3, 1287.0], [22.4, 1287.0], [22.5, 1287.0], [22.6, 1287.0], [22.7, 1287.0], [22.8, 1287.0], [22.9, 1287.0], [23.0, 1287.0], [23.1, 1287.0], [23.2, 1288.0], [23.3, 1288.0], [23.4, 1288.0], [23.5, 1288.0], [23.6, 1288.0], [23.7, 1288.0], [23.8, 1288.0], [23.9, 1288.0], [24.0, 1288.0], [24.1, 1289.0], [24.2, 1289.0], [24.3, 1289.0], [24.4, 1289.0], [24.5, 1289.0], [24.6, 1289.0], [24.7, 1289.0], [24.8, 1289.0], [24.9, 1289.0], [25.0, 1290.0], [25.1, 1290.0], [25.2, 1290.0], [25.3, 1290.0], [25.4, 1290.0], [25.5, 1290.0], [25.6, 1290.0], [25.7, 1291.0], [25.8, 1291.0], [25.9, 1291.0], [26.0, 1291.0], [26.1, 1291.0], [26.2, 1291.0], [26.3, 1291.0], [26.4, 1292.0], [26.5, 1292.0], [26.6, 1292.0], [26.7, 1292.0], [26.8, 1292.0], [26.9, 1292.0], [27.0, 1293.0], [27.1, 1293.0], [27.2, 1293.0], [27.3, 1293.0], [27.4, 1293.0], [27.5, 1293.0], [27.6, 1294.0], [27.7, 1294.0], [27.8, 1294.0], [27.9, 1294.0], [28.0, 1294.0], [28.1, 1294.0], [28.2, 1295.0], [28.3, 1295.0], [28.4, 1295.0], [28.5, 1295.0], [28.6, 1296.0], [28.7, 1296.0], [28.8, 1296.0], [28.9, 1296.0], [29.0, 1296.0], [29.1, 1296.0], [29.2, 1297.0], [29.3, 1297.0], [29.4, 1297.0], [29.5, 1297.0], [29.6, 1298.0], [29.7, 1298.0], [29.8, 1298.0], [29.9, 1298.0], [30.0, 1298.0], [30.1, 1299.0], [30.2, 1299.0], [30.3, 1299.0], [30.4, 1300.0], [30.5, 1300.0], [30.6, 1300.0], [30.7, 1300.0], [30.8, 1300.0], [30.9, 1301.0], [31.0, 1301.0], [31.1, 1301.0], [31.2, 1301.0], [31.3, 1302.0], [31.4, 1302.0], [31.5, 1302.0], [31.6, 1302.0], [31.7, 1303.0], [31.8, 1303.0], [31.9, 1303.0], [32.0, 1303.0], [32.1, 1304.0], [32.2, 1304.0], [32.3, 1304.0], [32.4, 1304.0], [32.5, 1304.0], [32.6, 1305.0], [32.7, 1305.0], [32.8, 1305.0], [32.9, 1305.0], [33.0, 1305.0], [33.1, 1306.0], [33.2, 1306.0], [33.3, 1306.0], [33.4, 1306.0], [33.5, 1306.0], [33.6, 1306.0], [33.7, 1307.0], [33.8, 1307.0], [33.9, 1307.0], [34.0, 1307.0], [34.1, 1308.0], [34.2, 1308.0], [34.3, 1308.0], [34.4, 1308.0], [34.5, 1308.0], [34.6, 1308.0], [34.7, 1308.0], [34.8, 1309.0], [34.9, 1309.0], [35.0, 1309.0], [35.1, 1309.0], [35.2, 1309.0], [35.3, 1309.0], [35.4, 1310.0], [35.5, 1310.0], [35.6, 1310.0], [35.7, 1310.0], [35.8, 1310.0], [35.9, 1310.0], [36.0, 1310.0], [36.1, 1310.0], [36.2, 1311.0], [36.3, 1311.0], [36.4, 1311.0], [36.5, 1311.0], [36.6, 1311.0], [36.7, 1311.0], [36.8, 1311.0], [36.9, 1312.0], [37.0, 1312.0], [37.1, 1312.0], [37.2, 1312.0], [37.3, 1312.0], [37.4, 1312.0], [37.5, 1312.0], [37.6, 1312.0], [37.7, 1313.0], [37.8, 1313.0], [37.9, 1313.0], [38.0, 1313.0], [38.1, 1313.0], [38.2, 1313.0], [38.3, 1313.0], [38.4, 1314.0], [38.5, 1314.0], [38.6, 1314.0], [38.7, 1314.0], [38.8, 1314.0], [38.9, 1314.0], [39.0, 1314.0], [39.1, 1314.0], [39.2, 1315.0], [39.3, 1315.0], [39.4, 1315.0], [39.5, 1315.0], [39.6, 1315.0], [39.7, 1315.0], [39.8, 1316.0], [39.9, 1316.0], [40.0, 1316.0], [40.1, 1316.0], [40.2, 1316.0], [40.3, 1316.0], [40.4, 1316.0], [40.5, 1317.0], [40.6, 1317.0], [40.7, 1317.0], [40.8, 1317.0], [40.9, 1317.0], [41.0, 1317.0], [41.1, 1317.0], [41.2, 1318.0], [41.3, 1318.0], [41.4, 1318.0], [41.5, 1318.0], [41.6, 1318.0], [41.7, 1318.0], [41.8, 1318.0], [41.9, 1319.0], [42.0, 1319.0], [42.1, 1319.0], [42.2, 1319.0], [42.3, 1319.0], [42.4, 1319.0], [42.5, 1319.0], [42.6, 1319.0], [42.7, 1320.0], [42.8, 1320.0], [42.9, 1320.0], [43.0, 1320.0], [43.1, 1320.0], [43.2, 1320.0], [43.3, 1320.0], [43.4, 1321.0], [43.5, 1321.0], [43.6, 1321.0], [43.7, 1321.0], [43.8, 1321.0], [43.9, 1321.0], [44.0, 1321.0], [44.1, 1322.0], [44.2, 1322.0], [44.3, 1322.0], [44.4, 1322.0], [44.5, 1322.0], [44.6, 1322.0], [44.7, 1323.0], [44.8, 1323.0], [44.9, 1323.0], [45.0, 1323.0], [45.1, 1323.0], [45.2, 1323.0], [45.3, 1323.0], [45.4, 1324.0], [45.5, 1324.0], [45.6, 1324.0], [45.7, 1324.0], [45.8, 1324.0], [45.9, 1324.0], [46.0, 1324.0], [46.1, 1324.0], [46.2, 1325.0], [46.3, 1325.0], [46.4, 1325.0], [46.5, 1325.0], [46.6, 1325.0], [46.7, 1325.0], [46.8, 1325.0], [46.9, 1326.0], [47.0, 1326.0], [47.1, 1326.0], [47.2, 1326.0], [47.3, 1326.0], [47.4, 1326.0], [47.5, 1327.0], [47.6, 1327.0], [47.7, 1327.0], [47.8, 1327.0], [47.9, 1327.0], [48.0, 1327.0], [48.1, 1328.0], [48.2, 1328.0], [48.3, 1328.0], [48.4, 1328.0], [48.5, 1328.0], [48.6, 1328.0], [48.7, 1329.0], [48.8, 1329.0], [48.9, 1329.0], [49.0, 1329.0], [49.1, 1329.0], [49.2, 1329.0], [49.3, 1329.0], [49.4, 1330.0], [49.5, 1330.0], [49.6, 1330.0], [49.7, 1330.0], [49.8, 1330.0], [49.9, 1330.0], [50.0, 1330.0], [50.1, 1330.0], [50.2, 1331.0], [50.3, 1331.0], [50.4, 1331.0], [50.5, 1331.0], [50.6, 1331.0], [50.7, 1331.0], [50.8, 1331.0], [50.9, 1331.0], [51.0, 1332.0], [51.1, 1332.0], [51.2, 1332.0], [51.3, 1332.0], [51.4, 1332.0], [51.5, 1332.0], [51.6, 1332.0], [51.7, 1332.0], [51.8, 1332.0], [51.9, 1333.0], [52.0, 1333.0], [52.1, 1333.0], [52.2, 1333.0], [52.3, 1333.0], [52.4, 1333.0], [52.5, 1333.0], [52.6, 1333.0], [52.7, 1333.0], [52.8, 1334.0], [52.9, 1334.0], [53.0, 1334.0], [53.1, 1334.0], [53.2, 1334.0], [53.3, 1334.0], [53.4, 1334.0], [53.5, 1334.0], [53.6, 1335.0], [53.7, 1335.0], [53.8, 1335.0], [53.9, 1335.0], [54.0, 1335.0], [54.1, 1335.0], [54.2, 1335.0], [54.3, 1335.0], [54.4, 1336.0], [54.5, 1336.0], [54.6, 1336.0], [54.7, 1336.0], [54.8, 1336.0], [54.9, 1336.0], [55.0, 1336.0], [55.1, 1337.0], [55.2, 1337.0], [55.3, 1337.0], [55.4, 1337.0], [55.5, 1337.0], [55.6, 1337.0], [55.7, 1337.0], [55.8, 1337.0], [55.9, 1337.0], [56.0, 1337.0], [56.1, 1338.0], [56.2, 1338.0], [56.3, 1338.0], [56.4, 1338.0], [56.5, 1338.0], [56.6, 1338.0], [56.7, 1338.0], [56.8, 1339.0], [56.9, 1339.0], [57.0, 1339.0], [57.1, 1339.0], [57.2, 1339.0], [57.3, 1339.0], [57.4, 1339.0], [57.5, 1339.0], [57.6, 1340.0], [57.7, 1340.0], [57.8, 1340.0], [57.9, 1340.0], [58.0, 1340.0], [58.1, 1340.0], [58.2, 1341.0], [58.3, 1341.0], [58.4, 1341.0], [58.5, 1341.0], [58.6, 1341.0], [58.7, 1341.0], [58.8, 1342.0], [58.9, 1342.0], [59.0, 1342.0], [59.1, 1342.0], [59.2, 1342.0], [59.3, 1342.0], [59.4, 1343.0], [59.5, 1343.0], [59.6, 1343.0], [59.7, 1343.0], [59.8, 1343.0], [59.9, 1344.0], [60.0, 1344.0], [60.1, 1344.0], [60.2, 1344.0], [60.3, 1344.0], [60.4, 1345.0], [60.5, 1345.0], [60.6, 1345.0], [60.7, 1345.0], [60.8, 1346.0], [60.9, 1346.0], [61.0, 1346.0], [61.1, 1346.0], [61.2, 1346.0], [61.3, 1347.0], [61.4, 1347.0], [61.5, 1347.0], [61.6, 1347.0], [61.7, 1348.0], [61.8, 1348.0], [61.9, 1348.0], [62.0, 1348.0], [62.1, 1349.0], [62.2, 1349.0], [62.3, 1349.0], [62.4, 1349.0], [62.5, 1350.0], [62.6, 1350.0], [62.7, 1350.0], [62.8, 1350.0], [62.9, 1350.0], [63.0, 1351.0], [63.1, 1351.0], [63.2, 1351.0], [63.3, 1351.0], [63.4, 1351.0], [63.5, 1352.0], [63.6, 1352.0], [63.7, 1352.0], [63.8, 1352.0], [63.9, 1352.0], [64.0, 1352.0], [64.1, 1353.0], [64.2, 1353.0], [64.3, 1353.0], [64.4, 1353.0], [64.5, 1353.0], [64.6, 1353.0], [64.7, 1354.0], [64.8, 1354.0], [64.9, 1354.0], [65.0, 1354.0], [65.1, 1355.0], [65.2, 1355.0], [65.3, 1355.0], [65.4, 1355.0], [65.5, 1355.0], [65.6, 1356.0], [65.7, 1356.0], [65.8, 1356.0], [65.9, 1356.0], [66.0, 1356.0], [66.1, 1357.0], [66.2, 1357.0], [66.3, 1357.0], [66.4, 1357.0], [66.5, 1357.0], [66.6, 1358.0], [66.7, 1358.0], [66.8, 1358.0], [66.9, 1358.0], [67.0, 1358.0], [67.1, 1358.0], [67.2, 1359.0], [67.3, 1359.0], [67.4, 1359.0], [67.5, 1359.0], [67.6, 1360.0], [67.7, 1360.0], [67.8, 1360.0], [67.9, 1360.0], [68.0, 1360.0], [68.1, 1360.0], [68.2, 1360.0], [68.3, 1361.0], [68.4, 1361.0], [68.5, 1361.0], [68.6, 1361.0], [68.7, 1361.0], [68.8, 1362.0], [68.9, 1362.0], [69.0, 1362.0], [69.1, 1362.0], [69.2, 1362.0], [69.3, 1362.0], [69.4, 1362.0], [69.5, 1363.0], [69.6, 1363.0], [69.7, 1363.0], [69.8, 1363.0], [69.9, 1363.0], [70.0, 1363.0], [70.1, 1363.0], [70.2, 1363.0], [70.3, 1364.0], [70.4, 1364.0], [70.5, 1364.0], [70.6, 1364.0], [70.7, 1364.0], [70.8, 1364.0], [70.9, 1364.0], [71.0, 1365.0], [71.1, 1365.0], [71.2, 1365.0], [71.3, 1365.0], [71.4, 1366.0], [71.5, 1366.0], [71.6, 1366.0], [71.7, 1366.0], [71.8, 1366.0], [71.9, 1366.0], [72.0, 1366.0], [72.1, 1367.0], [72.2, 1367.0], [72.3, 1367.0], [72.4, 1367.0], [72.5, 1367.0], [72.6, 1368.0], [72.7, 1368.0], [72.8, 1368.0], [72.9, 1368.0], [73.0, 1368.0], [73.1, 1368.0], [73.2, 1369.0], [73.3, 1369.0], [73.4, 1369.0], [73.5, 1369.0], [73.6, 1369.0], [73.7, 1370.0], [73.8, 1370.0], [73.9, 1370.0], [74.0, 1370.0], [74.1, 1370.0], [74.2, 1371.0], [74.3, 1371.0], [74.4, 1371.0], [74.5, 1371.0], [74.6, 1371.0], [74.7, 1371.0], [74.8, 1372.0], [74.9, 1372.0], [75.0, 1372.0], [75.1, 1372.0], [75.2, 1372.0], [75.3, 1373.0], [75.4, 1373.0], [75.5, 1373.0], [75.6, 1373.0], [75.7, 1374.0], [75.8, 1374.0], [75.9, 1374.0], [76.0, 1374.0], [76.1, 1375.0], [76.2, 1375.0], [76.3, 1375.0], [76.4, 1375.0], [76.5, 1376.0], [76.6, 1376.0], [76.7, 1376.0], [76.8, 1376.0], [76.9, 1376.0], [77.0, 1377.0], [77.1, 1377.0], [77.2, 1377.0], [77.3, 1378.0], [77.4, 1378.0], [77.5, 1378.0], [77.6, 1378.0], [77.7, 1378.0], [77.8, 1379.0], [77.9, 1379.0], [78.0, 1379.0], [78.1, 1379.0], [78.2, 1379.0], [78.3, 1380.0], [78.4, 1380.0], [78.5, 1380.0], [78.6, 1381.0], [78.7, 1381.0], [78.8, 1381.0], [78.9, 1381.0], [79.0, 1382.0], [79.1, 1382.0], [79.2, 1382.0], [79.3, 1382.0], [79.4, 1383.0], [79.5, 1383.0], [79.6, 1383.0], [79.7, 1384.0], [79.8, 1384.0], [79.9, 1385.0], [80.0, 1385.0], [80.1, 1385.0], [80.2, 1386.0], [80.3, 1386.0], [80.4, 1386.0], [80.5, 1387.0], [80.6, 1387.0], [80.7, 1388.0], [80.8, 1388.0], [80.9, 1389.0], [81.0, 1389.0], [81.1, 1390.0], [81.2, 1391.0], [81.3, 1392.0], [81.4, 1393.0], [81.5, 1394.0], [81.6, 1396.0], [81.7, 1396.0], [81.8, 1397.0], [81.9, 1399.0], [82.0, 1399.0], [82.1, 1400.0], [82.2, 1400.0], [82.3, 1401.0], [82.4, 1402.0], [82.5, 1402.0], [82.6, 1403.0], [82.7, 1404.0], [82.8, 1404.0], [82.9, 1404.0], [83.0, 1405.0], [83.1, 1405.0], [83.2, 1406.0], [83.3, 1406.0], [83.4, 1408.0], [83.5, 1408.0], [83.6, 1410.0], [83.7, 1411.0], [83.8, 1413.0], [83.9, 1414.0], [84.0, 1415.0], [84.1, 1417.0], [84.2, 1418.0], [84.3, 1419.0], [84.4, 1421.0], [84.5, 1422.0], [84.6, 1423.0], [84.7, 1424.0], [84.8, 1426.0], [84.9, 1427.0], [85.0, 1429.0], [85.1, 1430.0], [85.2, 1432.0], [85.3, 1434.0], [85.4, 1435.0], [85.5, 1436.0], [85.6, 1438.0], [85.7, 1439.0], [85.8, 1440.0], [85.9, 1441.0], [86.0, 1442.0], [86.1, 1443.0], [86.2, 1444.0], [86.3, 1445.0], [86.4, 1447.0], [86.5, 1448.0], [86.6, 1449.0], [86.7, 1452.0], [86.8, 1453.0], [86.9, 1454.0], [87.0, 1454.0], [87.1, 1456.0], [87.2, 1457.0], [87.3, 1458.0], [87.4, 1459.0], [87.5, 1460.0], [87.6, 1461.0], [87.7, 1462.0], [87.8, 1463.0], [87.9, 1464.0], [88.0, 1466.0], [88.1, 1468.0], [88.2, 1469.0], [88.3, 1471.0], [88.4, 1474.0], [88.5, 1474.0], [88.6, 1475.0], [88.7, 1477.0], [88.8, 1477.0], [88.9, 1478.0], [89.0, 1479.0], [89.1, 1481.0], [89.2, 1481.0], [89.3, 1483.0], [89.4, 1484.0], [89.5, 1485.0], [89.6, 1486.0], [89.7, 1487.0], [89.8, 1489.0], [89.9, 1490.0], [90.0, 1491.0], [90.1, 1491.0], [90.2, 1492.0], [90.3, 1493.0], [90.4, 1494.0], [90.5, 1494.0], [90.6, 1495.0], [90.7, 1496.0], [90.8, 1496.0], [90.9, 1497.0], [91.0, 1498.0], [91.1, 1499.0], [91.2, 1499.0], [91.3, 1500.0], [91.4, 1500.0], [91.5, 1501.0], [91.6, 1503.0], [91.7, 1504.0], [91.8, 1505.0], [91.9, 1507.0], [92.0, 1510.0], [92.1, 1511.0], [92.2, 1515.0], [92.3, 1520.0], [92.4, 1527.0], [92.5, 1535.0], [92.6, 1542.0], [92.7, 1549.0], [92.8, 1557.0], [92.9, 1564.0], [93.0, 1571.0], [93.1, 1577.0], [93.2, 1585.0], [93.3, 1591.0], [93.4, 1598.0], [93.5, 1606.0], [93.6, 1615.0], [93.7, 1620.0], [93.8, 1628.0], [93.9, 1634.0], [94.0, 1639.0], [94.1, 1644.0], [94.2, 1648.0], [94.3, 1649.0], [94.4, 1650.0], [94.5, 1651.0], [94.6, 1652.0], [94.7, 1654.0], [94.8, 1655.0], [94.9, 1656.0], [95.0, 1656.0], [95.1, 1657.0], [95.2, 1658.0], [95.3, 1658.0], [95.4, 1659.0], [95.5, 1659.0], [95.6, 1659.0], [95.7, 1660.0], [95.8, 1660.0], [95.9, 1660.0], [96.0, 1661.0], [96.1, 1662.0], [96.2, 1662.0], [96.3, 1663.0], [96.4, 1664.0], [96.5, 1664.0], [96.6, 1665.0], [96.7, 1667.0], [96.8, 1668.0], [96.9, 1669.0], [97.0, 1669.0], [97.1, 1671.0], [97.2, 1674.0], [97.3, 1676.0], [97.4, 1678.0], [97.5, 1679.0], [97.6, 1681.0], [97.7, 1683.0], [97.8, 1684.0], [97.9, 1685.0], [98.0, 1688.0], [98.1, 1689.0], [98.2, 1691.0], [98.3, 1692.0], [98.4, 1694.0], [98.5, 1695.0], [98.6, 1697.0], [98.7, 1698.0], [98.8, 1700.0], [98.9, 1701.0], [99.0, 1704.0], [99.1, 1707.0], [99.2, 1709.0], [99.3, 1710.0], [99.4, 1712.0], [99.5, 1714.0], [99.6, 1716.0], [99.7, 1720.0], [99.8, 1724.0], [99.9, 1726.0], [100.0, 1731.0]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 5.0, "minX": 100.0, "maxY": 4529.0, "series": [{"data": [[600.0, 18.0], [700.0, 19.0], [200.0, 15.0], [800.0, 18.0], [900.0, 5.0], [1000.0, 14.0], [1100.0, 26.0], [300.0, 12.0], [1200.0, 2511.0], [1300.0, 4529.0], [1400.0, 810.0], [1500.0, 189.0], [100.0, 8.0], [400.0, 7.0], [1600.0, 469.0], [1700.0, 107.0], [500.0, 13.0]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 7974.0, "series": [{"data": [[0.0, 43.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7974.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 753.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 195.11309062742055, "minX": 1.68227652E12, "maxY": 199.85133755360437, "series": [{"data": [[1.68227658E12, 195.11309062742055], [1.68227652E12, 199.85133755360437]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68227658E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 405.4, "minX": 6.0, "maxY": 1382.0, "series": [{"data": [[6.0, 1329.0], [7.0, 1328.0], [8.0, 1352.0], [9.0, 1346.0], [10.0, 1364.0], [11.0, 1356.0], [12.0, 1382.0], [13.0, 1370.0], [14.0, 1368.0], [15.0, 1359.0], [16.0, 1379.0], [17.0, 1369.0], [18.0, 1369.0], [19.0, 1360.0], [20.0, 1381.0], [21.0, 1368.0], [22.0, 1369.0], [23.0, 1358.0], [24.0, 1378.0], [25.0, 1368.0], [26.0, 1366.0], [27.0, 1356.0], [28.0, 1376.0], [29.0, 1367.0], [30.0, 1364.0], [31.0, 1378.0], [33.0, 1364.0], [32.0, 1354.0], [35.0, 1375.0], [34.0, 1364.0], [37.0, 1362.0], [36.0, 1351.0], [39.0, 1351.0], [38.0, 1363.0], [41.0, 1362.0], [40.0, 1373.0], [43.0, 1352.0], [42.0, 1362.0], [45.0, 1361.0], [44.0, 1373.0], [47.0, 1353.0], [46.0, 1362.0], [49.0, 1359.0], [48.0, 1370.0], [51.0, 1352.0], [50.0, 1363.0], [53.0, 1365.0], [52.0, 1373.0], [55.0, 1372.0], [54.0, 1362.0], [57.0, 1362.0], [56.0, 1349.0], [59.0, 1373.0], [58.0, 1361.0], [61.0, 1363.0], [60.0, 1348.0], [63.0, 1347.0], [62.0, 1359.0], [67.0, 1346.0], [66.0, 1360.0], [64.0, 1369.0], [71.0, 1343.0], [70.0, 1358.0], [69.0, 1358.0], [68.0, 1363.0], [75.0, 1365.0], [74.0, 1357.0], [73.0, 1355.0], [72.0, 1364.0], [79.0, 1344.0], [78.0, 1355.0], [77.0, 1355.0], [76.0, 1342.0], [83.0, 1343.0], [82.0, 1355.0], [81.0, 1354.0], [80.0, 1362.0], [87.0, 1341.0], [86.0, 1352.0], [85.0, 1352.0], [84.0, 1356.0], [91.0, 1345.0], [90.0, 1352.0], [89.0, 1355.0], [88.0, 1360.0], [95.0, 1347.0], [94.0, 1354.0], [93.0, 1355.0], [92.0, 1360.0], [99.0, 1345.0], [98.0, 1353.0], [97.0, 1355.0], [96.0, 1358.0], [103.0, 1346.0], [102.0, 1351.0], [101.0, 1353.0], [100.0, 1357.0], [107.0, 1349.0], [106.0, 1353.0], [105.0, 1353.0], [104.0, 1356.0], [111.0, 1346.0], [110.0, 1353.0], [109.0, 1351.0], [108.0, 1354.0], [115.0, 1347.0], [114.0, 1353.0], [113.0, 1351.0], [112.0, 1355.0], [119.0, 1357.0], [118.0, 1353.0], [117.0, 1357.0], [116.0, 1354.0], [123.0, 1358.0], [122.0, 1353.0], [121.0, 1358.0], [120.0, 1348.0], [127.0, 1351.0], [126.0, 1352.0], [125.0, 1358.0], [124.0, 1351.0], [135.0, 1356.0], [134.0, 1356.0], [133.0, 1355.0], [132.0, 1347.0], [131.0, 1356.0], [130.0, 1356.0], [129.0, 1353.0], [128.0, 1355.0], [143.0, 1357.0], [142.0, 1355.0], [141.0, 1360.0], [140.0, 1356.0], [139.0, 1352.0], [138.0, 1357.0], [137.0, 1357.0], [136.0, 1348.0], [151.0, 1358.0], [150.0, 1361.0], [149.0, 1365.0], [148.0, 1358.0], [147.0, 1359.0], [146.0, 1359.0], [145.0, 1358.0], [144.0, 1355.0], [157.0, 553.3333333333333], [158.0, 786.0], [156.0, 763.5], [159.0, 1368.0], [155.0, 1361.0], [154.0, 1360.0], [153.0, 1361.0], [152.0, 1358.0], [161.0, 405.4], [165.0, 797.5], [167.0, 1366.0], [166.0, 1363.0], [164.0, 1357.0], [163.0, 1363.0], [162.0, 1358.0], [160.0, 1358.0], [168.0, 773.0], [169.0, 628.0], [171.0, 774.5], [175.0, 781.0], [174.0, 1369.0], [173.0, 1367.0], [172.0, 1361.0], [170.0, 1365.0], [176.0, 591.0], [178.0, 790.0], [181.0, 521.0], [183.0, 1361.0], [182.0, 1368.3333333333333], [177.0, 1370.0], [184.0, 808.0], [187.0, 824.5], [188.0, 860.0], [189.0, 824.0], [190.0, 866.5], [191.0, 1368.0], [186.0, 1364.0], [185.0, 1370.0], [192.0, 870.0], [193.0, 877.0], [194.0, 878.5], [196.0, 839.5], [199.0, 863.3333333333334], [198.0, 1367.0], [197.0, 1366.6666666666667], [195.0, 1365.3333333333333], [200.0, 1352.2396345748368]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}, {"data": [[197.75883694412653, 1348.3908779931612]], "isOverall": false, "label": "Get Task - Escenario 1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 27756.5, "minX": 1.68227652E12, "maxY": 96144.43333333333, "series": [{"data": [[1.68227658E12, 76039.9], [1.68227652E12, 96144.43333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68227658E12, 27756.5], [1.68227652E12, 35095.166666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68227658E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1324.1576475393085, "minX": 1.68227652E12, "maxY": 1379.031241931323, "series": [{"data": [[1.68227658E12, 1379.031241931323], [1.68227652E12, 1324.1576475393085]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68227658E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1324.067388196853, "minX": 1.68227652E12, "maxY": 1378.9684998709035, "series": [{"data": [[1.68227658E12, 1378.9684998709035], [1.68227652E12, 1324.067388196853]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68227658E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8270074877356057, "minX": 1.68227652E12, "maxY": 3.7821114968347977, "series": [{"data": [[1.68227658E12, 0.8270074877356057], [1.68227652E12, 3.7821114968347977]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68227658E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 110.0, "minX": 1.68227652E12, "maxY": 1731.0, "series": [{"data": [[1.68227658E12, 1731.0], [1.68227652E12, 1517.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68227658E12, 1659.0], [1.68227652E12, 1439.1999999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68227658E12, 1715.0], [1.68227652E12, 1501.0199999999995]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68227658E12, 1684.0], [1.68227652E12, 1479.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68227658E12, 1253.0], [1.68227652E12, 110.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68227658E12, 1320.0], [1.68227652E12, 1333.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68227658E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 282.0, "minX": 45.0, "maxY": 1686.0, "series": [{"data": [[45.0, 282.0], [61.0, 1363.0], [111.0, 1515.0], [115.0, 1664.0], [116.0, 1659.0], [119.0, 1686.0], [135.0, 929.0], [134.0, 1492.0], [133.0, 1459.0], [131.0, 1671.0], [143.0, 1370.0], [138.0, 1406.0], [137.0, 1492.0], [141.0, 1331.0], [142.0, 1378.0], [139.0, 1389.0], [148.0, 1336.5], [149.0, 1337.0], [150.0, 1311.0], [145.0, 1335.0], [146.0, 1337.0], [151.0, 1307.0], [144.0, 1358.0], [152.0, 1306.0], [153.0, 1285.0], [155.0, 1276.0], [154.0, 1266.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 281.0, "minX": 45.0, "maxY": 1686.0, "series": [{"data": [[45.0, 281.0], [61.0, 1363.0], [111.0, 1515.0], [115.0, 1664.0], [116.0, 1659.0], [119.0, 1686.0], [135.0, 929.0], [134.0, 1492.0], [133.0, 1459.0], [131.0, 1671.0], [143.0, 1370.0], [138.0, 1406.0], [137.0, 1492.0], [141.0, 1331.0], [142.0, 1378.0], [139.0, 1389.0], [148.0, 1336.0], [149.0, 1337.0], [150.0, 1311.0], [145.0, 1335.0], [146.0, 1337.0], [151.0, 1307.0], [144.0, 1358.0], [152.0, 1306.0], [153.0, 1285.0], [155.0, 1276.0], [154.0, 1266.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 61.3, "minX": 1.68227652E12, "maxY": 84.86666666666666, "series": [{"data": [[1.68227658E12, 61.3], [1.68227652E12, 84.86666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68227658E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 64.55, "minX": 1.68227652E12, "maxY": 81.61666666666666, "series": [{"data": [[1.68227658E12, 64.55], [1.68227652E12, 81.61666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68227658E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 64.55, "minX": 1.68227652E12, "maxY": 81.61666666666666, "series": [{"data": [[1.68227658E12, 64.55], [1.68227652E12, 81.61666666666666]], "isOverall": false, "label": "Get Task - Escenario 1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68227658E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 64.55, "minX": 1.68227652E12, "maxY": 81.61666666666666, "series": [{"data": [[1.68227658E12, 64.55], [1.68227652E12, 81.61666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68227658E12, "title": "Total Transactions Per Second"}},
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

