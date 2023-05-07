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
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 2010.0, "series": [{"data": [[0.0, 5.0], [0.1, 6.0], [0.2, 6.0], [0.3, 6.0], [0.4, 6.0], [0.5, 6.0], [0.6, 6.0], [0.7, 6.0], [0.8, 6.0], [0.9, 6.0], [1.0, 6.0], [1.1, 6.0], [1.2, 6.0], [1.3, 6.0], [1.4, 6.0], [1.5, 7.0], [1.6, 7.0], [1.7, 7.0], [1.8, 7.0], [1.9, 7.0], [2.0, 7.0], [2.1, 7.0], [2.2, 7.0], [2.3, 7.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 7.0], [3.2, 7.0], [3.3, 7.0], [3.4, 7.0], [3.5, 7.0], [3.6, 7.0], [3.7, 8.0], [3.8, 8.0], [3.9, 8.0], [4.0, 8.0], [4.1, 8.0], [4.2, 8.0], [4.3, 8.0], [4.4, 8.0], [4.5, 8.0], [4.6, 8.0], [4.7, 8.0], [4.8, 8.0], [4.9, 8.0], [5.0, 8.0], [5.1, 8.0], [5.2, 8.0], [5.3, 8.0], [5.4, 8.0], [5.5, 8.0], [5.6, 8.0], [5.7, 8.0], [5.8, 8.0], [5.9, 8.0], [6.0, 9.0], [6.1, 9.0], [6.2, 9.0], [6.3, 9.0], [6.4, 9.0], [6.5, 9.0], [6.6, 9.0], [6.7, 9.0], [6.8, 9.0], [6.9, 9.0], [7.0, 9.0], [7.1, 9.0], [7.2, 9.0], [7.3, 9.0], [7.4, 9.0], [7.5, 9.0], [7.6, 9.0], [7.7, 10.0], [7.8, 10.0], [7.9, 10.0], [8.0, 10.0], [8.1, 10.0], [8.2, 10.0], [8.3, 10.0], [8.4, 10.0], [8.5, 10.0], [8.6, 10.0], [8.7, 10.0], [8.8, 10.0], [8.9, 10.0], [9.0, 10.0], [9.1, 10.0], [9.2, 10.0], [9.3, 10.0], [9.4, 11.0], [9.5, 11.0], [9.6, 11.0], [9.7, 11.0], [9.8, 11.0], [9.9, 11.0], [10.0, 11.0], [10.1, 11.0], [10.2, 11.0], [10.3, 11.0], [10.4, 11.0], [10.5, 11.0], [10.6, 11.0], [10.7, 11.0], [10.8, 11.0], [10.9, 12.0], [11.0, 12.0], [11.1, 12.0], [11.2, 12.0], [11.3, 12.0], [11.4, 12.0], [11.5, 12.0], [11.6, 12.0], [11.7, 12.0], [11.8, 12.0], [11.9, 12.0], [12.0, 12.0], [12.1, 12.0], [12.2, 12.0], [12.3, 12.0], [12.4, 13.0], [12.5, 13.0], [12.6, 13.0], [12.7, 13.0], [12.8, 13.0], [12.9, 13.0], [13.0, 13.0], [13.1, 13.0], [13.2, 13.0], [13.3, 13.0], [13.4, 13.0], [13.5, 13.0], [13.6, 13.0], [13.7, 13.0], [13.8, 14.0], [13.9, 14.0], [14.0, 14.0], [14.1, 14.0], [14.2, 14.0], [14.3, 14.0], [14.4, 14.0], [14.5, 14.0], [14.6, 14.0], [14.7, 14.0], [14.8, 14.0], [14.9, 14.0], [15.0, 14.0], [15.1, 14.0], [15.2, 15.0], [15.3, 15.0], [15.4, 15.0], [15.5, 15.0], [15.6, 15.0], [15.7, 15.0], [15.8, 15.0], [15.9, 15.0], [16.0, 15.0], [16.1, 15.0], [16.2, 15.0], [16.3, 15.0], [16.4, 15.0], [16.5, 16.0], [16.6, 16.0], [16.7, 16.0], [16.8, 16.0], [16.9, 16.0], [17.0, 16.0], [17.1, 16.0], [17.2, 16.0], [17.3, 16.0], [17.4, 16.0], [17.5, 16.0], [17.6, 16.0], [17.7, 17.0], [17.8, 17.0], [17.9, 17.0], [18.0, 17.0], [18.1, 17.0], [18.2, 17.0], [18.3, 17.0], [18.4, 17.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 18.0], [18.9, 18.0], [19.0, 18.0], [19.1, 18.0], [19.2, 18.0], [19.3, 18.0], [19.4, 18.0], [19.5, 18.0], [19.6, 18.0], [19.7, 18.0], [19.8, 19.0], [19.9, 19.0], [20.0, 19.0], [20.1, 19.0], [20.2, 19.0], [20.3, 19.0], [20.4, 19.0], [20.5, 19.0], [20.6, 19.0], [20.7, 19.0], [20.8, 20.0], [20.9, 20.0], [21.0, 20.0], [21.1, 20.0], [21.2, 20.0], [21.3, 20.0], [21.4, 20.0], [21.5, 20.0], [21.6, 21.0], [21.7, 21.0], [21.8, 21.0], [21.9, 21.0], [22.0, 21.0], [22.1, 21.0], [22.2, 21.0], [22.3, 21.0], [22.4, 22.0], [22.5, 22.0], [22.6, 22.0], [22.7, 22.0], [22.8, 22.0], [22.9, 22.0], [23.0, 22.0], [23.1, 22.0], [23.2, 23.0], [23.3, 23.0], [23.4, 23.0], [23.5, 23.0], [23.6, 23.0], [23.7, 23.0], [23.8, 23.0], [23.9, 24.0], [24.0, 24.0], [24.1, 24.0], [24.2, 24.0], [24.3, 24.0], [24.4, 24.0], [24.5, 25.0], [24.6, 25.0], [24.7, 25.0], [24.8, 25.0], [24.9, 25.0], [25.0, 25.0], [25.1, 26.0], [25.2, 26.0], [25.3, 26.0], [25.4, 26.0], [25.5, 26.0], [25.6, 26.0], [25.7, 27.0], [25.8, 27.0], [25.9, 27.0], [26.0, 27.0], [26.1, 27.0], [26.2, 27.0], [26.3, 28.0], [26.4, 28.0], [26.5, 28.0], [26.6, 28.0], [26.7, 28.0], [26.8, 28.0], [26.9, 29.0], [27.0, 29.0], [27.1, 29.0], [27.2, 29.0], [27.3, 29.0], [27.4, 30.0], [27.5, 30.0], [27.6, 30.0], [27.7, 30.0], [27.8, 30.0], [27.9, 31.0], [28.0, 31.0], [28.1, 31.0], [28.2, 31.0], [28.3, 32.0], [28.4, 32.0], [28.5, 32.0], [28.6, 32.0], [28.7, 32.0], [28.8, 33.0], [28.9, 33.0], [29.0, 33.0], [29.1, 33.0], [29.2, 34.0], [29.3, 34.0], [29.4, 34.0], [29.5, 35.0], [29.6, 35.0], [29.7, 35.0], [29.8, 35.0], [29.9, 35.0], [30.0, 36.0], [30.1, 36.0], [30.2, 36.0], [30.3, 36.0], [30.4, 37.0], [30.5, 37.0], [30.6, 37.0], [30.7, 38.0], [30.8, 38.0], [30.9, 38.0], [31.0, 38.0], [31.1, 39.0], [31.2, 39.0], [31.3, 39.0], [31.4, 40.0], [31.5, 40.0], [31.6, 40.0], [31.7, 40.0], [31.8, 41.0], [31.9, 41.0], [32.0, 41.0], [32.1, 42.0], [32.2, 42.0], [32.3, 42.0], [32.4, 43.0], [32.5, 43.0], [32.6, 43.0], [32.7, 44.0], [32.8, 44.0], [32.9, 44.0], [33.0, 45.0], [33.1, 45.0], [33.2, 45.0], [33.3, 46.0], [33.4, 46.0], [33.5, 46.0], [33.6, 47.0], [33.7, 47.0], [33.8, 48.0], [33.9, 48.0], [34.0, 48.0], [34.1, 49.0], [34.2, 49.0], [34.3, 49.0], [34.4, 50.0], [34.5, 50.0], [34.6, 51.0], [34.7, 51.0], [34.8, 52.0], [34.9, 52.0], [35.0, 52.0], [35.1, 53.0], [35.2, 53.0], [35.3, 54.0], [35.4, 54.0], [35.5, 55.0], [35.6, 55.0], [35.7, 55.0], [35.8, 56.0], [35.9, 56.0], [36.0, 57.0], [36.1, 57.0], [36.2, 58.0], [36.3, 58.0], [36.4, 58.0], [36.5, 59.0], [36.6, 59.0], [36.7, 60.0], [36.8, 60.0], [36.9, 61.0], [37.0, 62.0], [37.1, 62.0], [37.2, 63.0], [37.3, 63.0], [37.4, 64.0], [37.5, 64.0], [37.6, 65.0], [37.7, 66.0], [37.8, 66.0], [37.9, 67.0], [38.0, 68.0], [38.1, 68.0], [38.2, 69.0], [38.3, 69.0], [38.4, 70.0], [38.5, 71.0], [38.6, 71.0], [38.7, 72.0], [38.8, 73.0], [38.9, 73.0], [39.0, 74.0], [39.1, 75.0], [39.2, 75.0], [39.3, 76.0], [39.4, 77.0], [39.5, 78.0], [39.6, 78.0], [39.7, 79.0], [39.8, 80.0], [39.9, 81.0], [40.0, 82.0], [40.1, 83.0], [40.2, 84.0], [40.3, 85.0], [40.4, 85.0], [40.5, 86.0], [40.6, 87.0], [40.7, 88.0], [40.8, 89.0], [40.9, 90.0], [41.0, 91.0], [41.1, 92.0], [41.2, 93.0], [41.3, 94.0], [41.4, 95.0], [41.5, 96.0], [41.6, 97.0], [41.7, 99.0], [41.8, 100.0], [41.9, 101.0], [42.0, 102.0], [42.1, 103.0], [42.2, 104.0], [42.3, 105.0], [42.4, 107.0], [42.5, 108.0], [42.6, 109.0], [42.7, 110.0], [42.8, 111.0], [42.9, 112.0], [43.0, 113.0], [43.1, 114.0], [43.2, 116.0], [43.3, 117.0], [43.4, 118.0], [43.5, 119.0], [43.6, 120.0], [43.7, 121.0], [43.8, 123.0], [43.9, 124.0], [44.0, 125.0], [44.1, 126.0], [44.2, 127.0], [44.3, 129.0], [44.4, 130.0], [44.5, 131.0], [44.6, 133.0], [44.7, 134.0], [44.8, 136.0], [44.9, 137.0], [45.0, 139.0], [45.1, 140.0], [45.2, 142.0], [45.3, 144.0], [45.4, 145.0], [45.5, 147.0], [45.6, 148.0], [45.7, 150.0], [45.8, 152.0], [45.9, 153.0], [46.0, 155.0], [46.1, 156.0], [46.2, 158.0], [46.3, 160.0], [46.4, 162.0], [46.5, 163.0], [46.6, 165.0], [46.7, 167.0], [46.8, 169.0], [46.9, 170.0], [47.0, 172.0], [47.1, 174.0], [47.2, 176.0], [47.3, 177.0], [47.4, 179.0], [47.5, 181.0], [47.6, 183.0], [47.7, 185.0], [47.8, 187.0], [47.9, 189.0], [48.0, 191.0], [48.1, 193.0], [48.2, 195.0], [48.3, 197.0], [48.4, 199.0], [48.5, 201.0], [48.6, 203.0], [48.7, 205.0], [48.8, 207.0], [48.9, 209.0], [49.0, 211.0], [49.1, 213.0], [49.2, 214.0], [49.3, 217.0], [49.4, 219.0], [49.5, 221.0], [49.6, 223.0], [49.7, 225.0], [49.8, 227.0], [49.9, 229.0], [50.0, 232.0], [50.1, 234.0], [50.2, 237.0], [50.3, 240.0], [50.4, 243.0], [50.5, 245.0], [50.6, 248.0], [50.7, 251.0], [50.8, 254.0], [50.9, 257.0], [51.0, 260.0], [51.1, 263.0], [51.2, 266.0], [51.3, 268.0], [51.4, 271.0], [51.5, 274.0], [51.6, 277.0], [51.7, 280.0], [51.8, 283.0], [51.9, 286.0], [52.0, 289.0], [52.1, 293.0], [52.2, 297.0], [52.3, 301.0], [52.4, 305.0], [52.5, 310.0], [52.6, 315.0], [52.7, 320.0], [52.8, 325.0], [52.9, 331.0], [53.0, 337.0], [53.1, 342.0], [53.2, 346.0], [53.3, 350.0], [53.4, 354.0], [53.5, 358.0], [53.6, 362.0], [53.7, 366.0], [53.8, 370.0], [53.9, 375.0], [54.0, 379.0], [54.1, 384.0], [54.2, 390.0], [54.3, 396.0], [54.4, 404.0], [54.5, 410.0], [54.6, 417.0], [54.7, 423.0], [54.8, 429.0], [54.9, 434.0], [55.0, 438.0], [55.1, 444.0], [55.2, 450.0], [55.3, 457.0], [55.4, 464.0], [55.5, 471.0], [55.6, 480.0], [55.7, 488.0], [55.8, 495.0], [55.9, 501.0], [56.0, 508.0], [56.1, 515.0], [56.2, 522.0], [56.3, 529.0], [56.4, 536.0], [56.5, 543.0], [56.6, 550.0], [56.7, 556.0], [56.8, 563.0], [56.9, 569.0], [57.0, 575.0], [57.1, 582.0], [57.2, 588.0], [57.3, 595.0], [57.4, 602.0], [57.5, 611.0], [57.6, 619.0], [57.7, 626.0], [57.8, 632.0], [57.9, 638.0], [58.0, 643.0], [58.1, 648.0], [58.2, 652.0], [58.3, 656.0], [58.4, 660.0], [58.5, 664.0], [58.6, 667.0], [58.7, 671.0], [58.8, 675.0], [58.9, 678.0], [59.0, 682.0], [59.1, 685.0], [59.2, 689.0], [59.3, 692.0], [59.4, 696.0], [59.5, 700.0], [59.6, 704.0], [59.7, 707.0], [59.8, 710.0], [59.9, 713.0], [60.0, 717.0], [60.1, 721.0], [60.2, 724.0], [60.3, 727.0], [60.4, 730.0], [60.5, 733.0], [60.6, 736.0], [60.7, 739.0], [60.8, 741.0], [60.9, 744.0], [61.0, 748.0], [61.1, 750.0], [61.2, 753.0], [61.3, 756.0], [61.4, 759.0], [61.5, 761.0], [61.6, 764.0], [61.7, 767.0], [61.8, 770.0], [61.9, 772.0], [62.0, 775.0], [62.1, 777.0], [62.2, 780.0], [62.3, 783.0], [62.4, 785.0], [62.5, 788.0], [62.6, 790.0], [62.7, 793.0], [62.8, 795.0], [62.9, 797.0], [63.0, 799.0], [63.1, 801.0], [63.2, 804.0], [63.3, 806.0], [63.4, 808.0], [63.5, 810.0], [63.6, 813.0], [63.7, 815.0], [63.8, 817.0], [63.9, 820.0], [64.0, 822.0], [64.1, 824.0], [64.2, 827.0], [64.3, 829.0], [64.4, 831.0], [64.5, 832.0], [64.6, 833.0], [64.7, 835.0], [64.8, 836.0], [64.9, 837.0], [65.0, 838.0], [65.1, 839.0], [65.2, 840.0], [65.3, 840.0], [65.4, 841.0], [65.5, 842.0], [65.6, 843.0], [65.7, 844.0], [65.8, 845.0], [65.9, 846.0], [66.0, 847.0], [66.1, 848.0], [66.2, 848.0], [66.3, 849.0], [66.4, 849.0], [66.5, 850.0], [66.6, 851.0], [66.7, 851.0], [66.8, 852.0], [66.9, 852.0], [67.0, 853.0], [67.1, 853.0], [67.2, 853.0], [67.3, 854.0], [67.4, 854.0], [67.5, 855.0], [67.6, 855.0], [67.7, 856.0], [67.8, 856.0], [67.9, 856.0], [68.0, 857.0], [68.1, 857.0], [68.2, 857.0], [68.3, 858.0], [68.4, 858.0], [68.5, 859.0], [68.6, 859.0], [68.7, 859.0], [68.8, 860.0], [68.9, 860.0], [69.0, 861.0], [69.1, 861.0], [69.2, 861.0], [69.3, 861.0], [69.4, 862.0], [69.5, 862.0], [69.6, 863.0], [69.7, 863.0], [69.8, 863.0], [69.9, 864.0], [70.0, 864.0], [70.1, 864.0], [70.2, 864.0], [70.3, 865.0], [70.4, 865.0], [70.5, 865.0], [70.6, 866.0], [70.7, 866.0], [70.8, 866.0], [70.9, 867.0], [71.0, 867.0], [71.1, 867.0], [71.2, 868.0], [71.3, 868.0], [71.4, 868.0], [71.5, 868.0], [71.6, 869.0], [71.7, 869.0], [71.8, 869.0], [71.9, 870.0], [72.0, 870.0], [72.1, 870.0], [72.2, 871.0], [72.3, 871.0], [72.4, 871.0], [72.5, 872.0], [72.6, 872.0], [72.7, 872.0], [72.8, 873.0], [72.9, 873.0], [73.0, 873.0], [73.1, 873.0], [73.2, 874.0], [73.3, 874.0], [73.4, 874.0], [73.5, 875.0], [73.6, 875.0], [73.7, 875.0], [73.8, 876.0], [73.9, 876.0], [74.0, 876.0], [74.1, 876.0], [74.2, 877.0], [74.3, 877.0], [74.4, 877.0], [74.5, 878.0], [74.6, 878.0], [74.7, 878.0], [74.8, 878.0], [74.9, 879.0], [75.0, 879.0], [75.1, 879.0], [75.2, 880.0], [75.3, 880.0], [75.4, 880.0], [75.5, 880.0], [75.6, 881.0], [75.7, 881.0], [75.8, 881.0], [75.9, 882.0], [76.0, 882.0], [76.1, 882.0], [76.2, 883.0], [76.3, 883.0], [76.4, 883.0], [76.5, 883.0], [76.6, 884.0], [76.7, 884.0], [76.8, 884.0], [76.9, 885.0], [77.0, 885.0], [77.1, 885.0], [77.2, 885.0], [77.3, 886.0], [77.4, 886.0], [77.5, 886.0], [77.6, 887.0], [77.7, 887.0], [77.8, 887.0], [77.9, 887.0], [78.0, 888.0], [78.1, 888.0], [78.2, 888.0], [78.3, 889.0], [78.4, 889.0], [78.5, 889.0], [78.6, 890.0], [78.7, 890.0], [78.8, 890.0], [78.9, 890.0], [79.0, 891.0], [79.1, 891.0], [79.2, 891.0], [79.3, 892.0], [79.4, 892.0], [79.5, 892.0], [79.6, 893.0], [79.7, 893.0], [79.8, 893.0], [79.9, 894.0], [80.0, 894.0], [80.1, 894.0], [80.2, 895.0], [80.3, 895.0], [80.4, 895.0], [80.5, 896.0], [80.6, 896.0], [80.7, 896.0], [80.8, 897.0], [80.9, 897.0], [81.0, 897.0], [81.1, 898.0], [81.2, 898.0], [81.3, 899.0], [81.4, 899.0], [81.5, 899.0], [81.6, 900.0], [81.7, 900.0], [81.8, 901.0], [81.9, 901.0], [82.0, 901.0], [82.1, 902.0], [82.2, 902.0], [82.3, 903.0], [82.4, 903.0], [82.5, 903.0], [82.6, 904.0], [82.7, 904.0], [82.8, 905.0], [82.9, 905.0], [83.0, 906.0], [83.1, 906.0], [83.2, 906.0], [83.3, 907.0], [83.4, 907.0], [83.5, 908.0], [83.6, 908.0], [83.7, 909.0], [83.8, 909.0], [83.9, 910.0], [84.0, 910.0], [84.1, 911.0], [84.2, 912.0], [84.3, 912.0], [84.4, 913.0], [84.5, 913.0], [84.6, 914.0], [84.7, 914.0], [84.8, 915.0], [84.9, 916.0], [85.0, 916.0], [85.1, 917.0], [85.2, 917.0], [85.3, 918.0], [85.4, 918.0], [85.5, 919.0], [85.6, 920.0], [85.7, 920.0], [85.8, 921.0], [85.9, 922.0], [86.0, 922.0], [86.1, 923.0], [86.2, 924.0], [86.3, 925.0], [86.4, 925.0], [86.5, 926.0], [86.6, 927.0], [86.7, 928.0], [86.8, 929.0], [86.9, 930.0], [87.0, 931.0], [87.1, 932.0], [87.2, 933.0], [87.3, 934.0], [87.4, 935.0], [87.5, 936.0], [87.6, 937.0], [87.7, 939.0], [87.8, 940.0], [87.9, 941.0], [88.0, 942.0], [88.1, 944.0], [88.2, 945.0], [88.3, 947.0], [88.4, 948.0], [88.5, 950.0], [88.6, 951.0], [88.7, 953.0], [88.8, 954.0], [88.9, 956.0], [89.0, 958.0], [89.1, 959.0], [89.2, 961.0], [89.3, 963.0], [89.4, 964.0], [89.5, 965.0], [89.6, 967.0], [89.7, 968.0], [89.8, 970.0], [89.9, 971.0], [90.0, 972.0], [90.1, 974.0], [90.2, 975.0], [90.3, 977.0], [90.4, 978.0], [90.5, 979.0], [90.6, 981.0], [90.7, 982.0], [90.8, 984.0], [90.9, 985.0], [91.0, 987.0], [91.1, 988.0], [91.2, 990.0], [91.3, 991.0], [91.4, 992.0], [91.5, 994.0], [91.6, 995.0], [91.7, 996.0], [91.8, 998.0], [91.9, 999.0], [92.0, 1001.0], [92.1, 1002.0], [92.2, 1004.0], [92.3, 1006.0], [92.4, 1007.0], [92.5, 1009.0], [92.6, 1010.0], [92.7, 1012.0], [92.8, 1013.0], [92.9, 1015.0], [93.0, 1017.0], [93.1, 1018.0], [93.2, 1020.0], [93.3, 1022.0], [93.4, 1024.0], [93.5, 1026.0], [93.6, 1028.0], [93.7, 1030.0], [93.8, 1032.0], [93.9, 1035.0], [94.0, 1037.0], [94.1, 1039.0], [94.2, 1042.0], [94.3, 1045.0], [94.4, 1048.0], [94.5, 1052.0], [94.6, 1056.0], [94.7, 1060.0], [94.8, 1064.0], [94.9, 1068.0], [95.0, 1072.0], [95.1, 1075.0], [95.2, 1079.0], [95.3, 1083.0], [95.4, 1087.0], [95.5, 1092.0], [95.6, 1096.0], [95.7, 1100.0], [95.8, 1104.0], [95.9, 1109.0], [96.0, 1114.0], [96.1, 1120.0], [96.2, 1126.0], [96.3, 1131.0], [96.4, 1135.0], [96.5, 1140.0], [96.6, 1144.0], [96.7, 1149.0], [96.8, 1154.0], [96.9, 1160.0], [97.0, 1164.0], [97.1, 1169.0], [97.2, 1176.0], [97.3, 1183.0], [97.4, 1191.0], [97.5, 1197.0], [97.6, 1202.0], [97.7, 1207.0], [97.8, 1212.0], [97.9, 1216.0], [98.0, 1220.0], [98.1, 1224.0], [98.2, 1228.0], [98.3, 1232.0], [98.4, 1235.0], [98.5, 1238.0], [98.6, 1241.0], [98.7, 1244.0], [98.8, 1247.0], [98.9, 1250.0], [99.0, 1252.0], [99.1, 1255.0], [99.2, 1259.0], [99.3, 1264.0], [99.4, 1269.0], [99.5, 1278.0], [99.6, 1290.0], [99.7, 1308.0], [99.8, 1347.0], [99.9, 1405.0]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 113116.0, "series": [{"data": [[0.0, 113116.0], [600.0, 5745.0], [700.0, 9556.0], [200.0, 10332.0], [800.0, 50072.0], [900.0, 28140.0], [1000.0, 10259.0], [1100.0, 4993.0], [300.0, 5621.0], [1200.0, 5718.0], [1300.0, 639.0], [1400.0, 295.0], [100.0, 18025.0], [400.0, 4150.0], [1900.0, 1.0], [500.0, 4039.0], [2000.0, 1.0]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 151281.0, "series": [{"data": [[0.0, 151281.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 119419.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 198.77352453865038, "minX": 1.68341196E12, "maxY": 200.0, "series": [{"data": [[1.68341226E12, 200.0], [1.68341208E12, 200.0], [1.68341256E12, 198.77352453865038], [1.68341214E12, 200.0], [1.68341196E12, 200.0], [1.68341244E12, 200.0], [1.68341202E12, 200.0], [1.6834125E12, 200.0], [1.68341232E12, 200.0], [1.68341238E12, 200.0], [1.6834122E12, 200.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68341256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 9.25, "minX": 1.0, "maxY": 967.0, "series": [{"data": [[2.0, 818.0], [3.0, 832.0], [4.0, 812.0], [5.0, 835.0], [6.0, 837.0], [7.0, 830.0], [8.0, 827.0], [9.0, 846.0], [10.0, 863.0], [11.0, 851.0], [12.0, 847.0], [13.0, 912.0], [14.0, 911.0], [15.0, 899.0], [16.0, 896.0], [17.0, 908.0], [18.0, 910.0], [19.0, 914.0], [20.0, 896.0], [21.0, 914.0], [22.0, 914.0], [23.0, 901.0], [24.0, 907.0], [25.0, 938.0], [26.0, 934.0], [27.0, 927.0], [28.0, 941.0], [29.0, 949.0], [30.0, 949.0], [31.0, 937.0], [33.0, 938.0], [32.0, 935.0], [35.0, 941.0], [34.0, 932.0], [37.0, 947.0], [36.0, 933.0], [39.0, 944.0], [38.0, 938.0], [41.0, 942.0], [40.0, 940.0], [43.0, 948.0], [42.0, 943.0], [45.0, 958.0], [44.0, 942.0], [47.0, 949.0], [46.0, 947.0], [49.0, 963.0], [48.0, 945.0], [51.0, 959.0], [50.0, 953.0], [53.0, 958.0], [52.0, 945.0], [55.0, 954.0], [54.0, 967.0], [57.0, 958.0], [56.0, 954.0], [59.0, 955.0], [58.0, 953.0], [61.0, 947.0], [60.0, 948.0], [63.0, 933.0], [62.0, 947.0], [67.0, 918.0], [66.0, 932.0], [65.0, 932.0], [64.0, 936.0], [71.0, 933.0], [70.0, 945.0], [69.0, 945.0], [68.0, 929.0], [75.0, 935.0], [74.0, 930.0], [73.0, 946.0], [72.0, 933.0], [79.0, 934.0], [78.0, 945.0], [77.0, 945.0], [76.0, 930.0], [83.0, 932.0], [82.0, 929.0], [81.0, 937.0], [80.0, 934.0], [87.0, 937.0], [86.0, 935.0], [85.0, 934.0], [84.0, 934.0], [90.0, 942.0], [89.0, 928.0], [88.0, 947.0], [95.0, 940.0], [94.0, 937.0], [93.0, 938.0], [92.0, 939.5], [99.0, 937.0], [98.0, 938.0], [97.0, 922.0], [96.0, 921.0], [103.0, 919.0], [102.0, 928.0], [101.0, 920.0], [100.0, 922.0], [107.0, 913.0], [106.0, 911.0], [105.0, 915.0], [104.0, 916.0], [111.0, 906.0], [110.0, 909.0], [109.0, 908.0], [108.0, 907.0], [115.0, 910.0], [114.0, 919.0], [113.0, 923.0], [112.0, 923.0], [119.0, 923.0], [118.0, 929.0], [117.0, 912.0], [116.0, 917.0], [123.0, 920.0], [122.0, 912.0], [121.0, 917.0], [120.0, 919.0], [127.0, 910.0], [126.0, 917.0], [125.0, 908.0], [124.0, 909.0], [135.0, 902.0], [134.0, 899.0], [133.0, 912.0], [132.0, 901.0], [131.0, 902.0], [130.0, 916.0], [129.0, 904.0], [128.0, 903.0], [143.0, 889.0], [142.0, 899.0], [141.0, 897.0], [140.0, 884.0], [139.0, 886.0], [138.0, 899.0], [137.0, 901.0], [136.0, 900.0], [151.0, 895.0], [150.0, 901.0], [149.0, 901.0], [148.0, 885.0], [147.0, 901.0], [146.0, 889.0], [145.0, 900.0], [144.0, 883.0], [159.0, 879.0], [158.0, 890.0], [157.0, 883.0], [156.0, 881.0], [155.0, 893.0], [154.0, 895.0], [153.0, 894.0], [152.0, 888.0], [167.0, 445.0], [166.0, 9.25], [165.0, 889.0], [164.0, 881.0], [163.0, 886.0], [162.0, 879.0], [161.0, 879.0], [160.0, 877.0], [175.0, 447.5], [174.0, 876.5], [173.0, 308.5555555555556], [172.0, 867.0], [171.0, 23.8], [170.0, 301.3333333333333], [169.0, 445.0], [168.0, 883.0], [183.0, 293.33333333333337], [182.0, 867.6666666666666], [181.0, 879.5], [180.0, 720.8], [179.0, 594.0], [178.0, 867.0], [177.0, 869.0], [176.0, 371.6], [190.0, 25.0], [189.0, 184.2], [188.0, 14.5], [187.0, 371.8571428571429], [186.0, 220.875], [185.0, 351.2], [184.0, 291.6666666666667], [199.0, 187.89999999999998], [198.0, 564.0], [197.0, 22.4], [196.0, 430.5], [195.0, 272.5384615384615], [194.0, 428.5], [193.0, 300.66666666666663], [192.0, 839.0], [200.0, 442.73185921544865], [1.0, 809.0]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}, {"data": [[199.92069877577563, 442.96911733196714]], "isOverall": false, "label": "Get Task - Escenario 1-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 43901.65, "minX": 1.68341196E12, "maxY": 317456.43333333335, "series": [{"data": [[1.68341226E12, 307675.8], [1.68341208E12, 110716.1], [1.68341256E12, 146441.76666666666], [1.68341214E12, 109753.93333333333], [1.68341196E12, 53621.96666666667], [1.68341244E12, 287135.63333333336], [1.68341202E12, 110532.03333333334], [1.6834125E12, 306738.73333333334], [1.68341232E12, 317456.43333333335], [1.68341238E12, 311867.5], [1.6834122E12, 202933.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68341226E12, 251901.9], [1.68341208E12, 90646.05], [1.68341256E12, 119895.55], [1.68341214E12, 89858.3], [1.68341196E12, 43901.65], [1.68341244E12, 235085.15], [1.68341202E12, 90495.35], [1.6834125E12, 251134.7], [1.68341232E12, 259909.55], [1.68341238E12, 255333.75], [1.6834122E12, 166146.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68341256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 315.5605249980224, "minX": 1.68341196E12, "maxY": 914.505183717025, "series": [{"data": [[1.68341226E12, 326.3298526132584], [1.68341208E12, 906.5326078742565], [1.68341256E12, 356.83922756098895], [1.68341214E12, 914.505183717025], [1.68341196E12, 893.5130285535998], [1.68341244E12, 348.32326116728507], [1.68341202E12, 908.41957459693], [1.6834125E12, 326.86372811085204], [1.68341232E12, 315.5605249980224], [1.68341238E12, 322.7206706908135], [1.6834122E12, 494.9834673263287]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68341256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 315.5288722557508, "minX": 1.68341196E12, "maxY": 914.4463332825079, "series": [{"data": [[1.68341226E12, 326.2997770163665], [1.68341208E12, 906.4758558150114], [1.68341256E12, 356.8096897674685], [1.68341214E12, 914.4463332825079], [1.68341196E12, 893.4507723513796], [1.68341244E12, 348.29252017832863], [1.68341202E12, 908.3573537203825], [1.6834125E12, 326.83473351153685], [1.68341232E12, 315.5288722557508], [1.68341238E12, 322.6908920187781], [1.6834122E12, 494.9468150896703]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68341256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.5299528239728026, "minX": 1.68341196E12, "maxY": 5.662661881728816, "series": [{"data": [[1.68341226E12, 0.5527274704954602], [1.68341208E12, 0.5836167157862913], [1.68341256E12, 0.5429354967719799], [1.68341214E12, 0.5741728922091797], [1.68341196E12, 5.662661881728816], [1.68341244E12, 0.5593403071185031], [1.68341202E12, 0.674362273862689], [1.6834125E12, 0.553270416234792], [1.68341232E12, 0.5299528239728026], [1.68341238E12, 0.5848155600268319], [1.6834122E12, 0.5419088847660289]], "isOverall": false, "label": "Get Task - Escenario 1", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68341256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.68341196E12, "maxY": 2010.0, "series": [{"data": [[1.68341226E12, 2010.0], [1.68341208E12, 1281.0], [1.68341256E12, 1484.0], [1.68341214E12, 1264.0], [1.68341196E12, 1178.0], [1.68341244E12, 1299.0], [1.68341202E12, 1263.0], [1.6834125E12, 1441.0], [1.68341232E12, 1304.0], [1.68341238E12, 1973.0], [1.6834122E12, 1289.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68341226E12, 962.0], [1.68341208E12, 950.6000000000004], [1.68341256E12, 1076.6000000000004], [1.68341214E12, 951.0], [1.68341196E12, 934.0], [1.68341244E12, 1114.0], [1.68341202E12, 956.8000000000011], [1.6834125E12, 860.0], [1.68341232E12, 845.0], [1.68341238E12, 878.0], [1.6834122E12, 905.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68341226E12, 1023.0], [1.68341208E12, 1253.6599999999999], [1.68341256E12, 1422.0], [1.68341214E12, 1247.0], [1.68341196E12, 1018.0], [1.68341244E12, 1235.9900000000016], [1.68341202E12, 1252.0], [1.6834125E12, 1064.0], [1.68341232E12, 1022.0], [1.68341238E12, 982.0], [1.6834122E12, 986.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68341226E12, 990.0], [1.68341208E12, 1200.0], [1.68341256E12, 1225.0], [1.68341214E12, 1205.0], [1.68341196E12, 953.0], [1.68341244E12, 1173.9500000000007], [1.68341202E12, 1221.0], [1.6834125E12, 945.0], [1.68341232E12, 960.0], [1.68341238E12, 930.0], [1.6834122E12, 948.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68341226E12, 5.0], [1.68341208E12, 820.0], [1.68341256E12, 5.0], [1.68341214E12, 837.0], [1.68341196E12, 88.0], [1.68341244E12, 5.0], [1.68341202E12, 810.0], [1.6834125E12, 5.0], [1.68341232E12, 5.0], [1.68341238E12, 5.0], [1.6834122E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68341226E12, 55.0], [1.68341208E12, 880.0], [1.68341256E12, 42.0], [1.68341214E12, 886.0], [1.68341196E12, 896.0], [1.68341244E12, 35.0], [1.68341202E12, 879.0], [1.6834125E12, 133.0], [1.68341232E12, 147.0], [1.68341238E12, 119.0], [1.6834122E12, 177.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68341256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14.0, "minX": 38.0, "maxY": 1258.0, "series": [{"data": [[38.0, 910.5], [158.0, 1232.5], [159.0, 1254.0], [157.0, 1258.0], [165.0, 1237.0], [161.0, 1250.0], [163.0, 1238.0], [160.0, 1154.0], [162.0, 1246.0], [167.0, 1212.0], [173.0, 1194.0], [168.0, 1236.0], [175.0, 1150.0], [174.0, 1142.5], [172.0, 1140.5], [177.0, 1164.0], [179.0, 923.0], [188.0, 1202.0], [192.0, 689.0], [196.0, 936.0], [194.0, 938.5], [201.0, 1120.0], [206.0, 946.0], [212.0, 936.0], [215.0, 904.0], [223.0, 896.0], [218.0, 908.0], [220.0, 909.0], [221.0, 906.0], [217.0, 918.0], [216.0, 909.5], [222.0, 900.0], [219.0, 877.0], [228.0, 879.0], [229.0, 873.0], [225.0, 885.0], [226.0, 888.0], [224.0, 890.0], [227.0, 880.0], [230.0, 872.0], [231.0, 866.0], [233.0, 860.0], [232.0, 865.0], [239.0, 841.0], [238.0, 844.0], [236.0, 849.5], [235.0, 856.0], [234.0, 859.0], [237.0, 863.0], [241.0, 840.0], [299.0, 887.0], [318.0, 889.0], [324.0, 894.5], [328.0, 861.0], [341.0, 890.0], [347.0, 852.0], [345.0, 18.0], [360.0, 849.0], [408.0, 16.0], [423.0, 20.0], [439.0, 29.0], [434.0, 18.0], [438.0, 14.0], [441.0, 22.0], [445.0, 52.0], [457.0, 15.0], [466.0, 15.0], [468.0, 18.0], [471.0, 28.0], [486.0, 176.0], [493.0, 47.0], [485.0, 18.0], [495.0, 91.0], [481.0, 413.0], [491.0, 264.0], [492.0, 66.5], [487.0, 432.0], [504.0, 29.0], [510.0, 208.5], [503.0, 259.0], [499.0, 160.0], [508.0, 150.0], [502.0, 16.0], [496.0, 380.0], [507.0, 170.0], [515.0, 162.0], [526.0, 29.0], [521.0, 28.0], [522.0, 26.5], [525.0, 39.0], [520.0, 37.0], [533.0, 18.0], [513.0, 30.0], [527.0, 458.0], [534.0, 18.0], [535.0, 34.5], [514.0, 70.0], [516.0, 28.0], [518.0, 15.0], [540.0, 45.0], [519.0, 301.0], [530.0, 27.0], [528.0, 17.0], [541.0, 22.0], [568.0, 23.0], [560.0, 23.0], [562.0, 115.0], [564.0, 28.0], [572.0, 91.5], [573.0, 41.0], [565.0, 24.0], [566.0, 45.5], [567.0, 22.0], [547.0, 27.0], [544.0, 19.0], [546.0, 28.0], [551.0, 269.0], [548.0, 32.0], [556.0, 17.0], [557.0, 191.0], [558.0, 168.0], [553.0, 22.0], [555.0, 20.0], [559.0, 36.0], [571.0, 83.0], [569.0, 31.0], [570.0, 38.5], [602.0, 37.0], [605.0, 28.0], [603.0, 72.0], [588.0, 30.0], [587.0, 271.0], [586.0, 66.0], [600.0, 91.0], [582.0, 26.0], [583.0, 31.0], [581.0, 27.0], [580.0, 336.0], [578.0, 142.0], [577.0, 32.0], [591.0, 55.0], [606.0, 72.0], [596.0, 23.0], [598.0, 90.0], [599.0, 33.0], [607.0, 59.0], [592.0, 37.0], [601.0, 29.0], [590.0, 80.0], [637.0, 147.0], [624.0, 64.0], [636.0, 131.0], [635.0, 110.0], [634.0, 199.5], [633.0, 96.0], [632.0, 78.5], [615.0, 232.0], [627.0, 185.0], [629.0, 51.0], [625.0, 235.0], [626.0, 194.0], [631.0, 76.0], [630.0, 32.0], [609.0, 76.5], [638.0, 106.0], [639.0, 86.0], [617.0, 258.0], [610.0, 150.0], [611.0, 57.0], [612.0, 21.0], [613.0, 45.0], [614.0, 88.5], [621.0, 44.0], [620.0, 358.0], [622.0, 238.5], [608.0, 35.0], [623.0, 211.0], [618.0, 22.0], [664.0, 176.0], [669.0, 123.0], [667.0, 158.5], [666.0, 194.5], [665.0, 210.0], [668.0, 143.0], [656.0, 44.0], [670.0, 62.0], [671.0, 153.0], [657.0, 137.0], [660.0, 157.0], [659.0, 132.0], [658.0, 66.0], [650.0, 83.5], [649.0, 123.0], [648.0, 435.0], [651.0, 59.0], [655.0, 46.0], [654.0, 126.0], [642.0, 26.0], [640.0, 270.0], [641.0, 288.0], [643.0, 283.0], [646.0, 114.0], [645.0, 86.0], [647.0, 94.0], [644.0, 265.0], [662.0, 58.0], [663.0, 68.0], [661.0, 136.0], [652.0, 92.5], [653.0, 97.0], [675.0, 57.0], [682.0, 82.0], [680.0, 58.5], [689.0, 111.0], [684.0, 68.5], [687.0, 140.0], [686.0, 64.0], [685.0, 192.0], [695.0, 65.0], [694.0, 109.5], [703.0, 72.0], [700.0, 139.0], [697.0, 68.0], [696.0, 150.0], [678.0, 116.0], [679.0, 93.0], [702.0, 227.5], [677.0, 73.0], [676.0, 194.0], [672.0, 145.0], [674.0, 135.0], [693.0, 109.0], [692.0, 121.0], [691.0, 162.0], [690.0, 140.0], [704.0, 98.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 704.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14.0, "minX": 38.0, "maxY": 1258.0, "series": [{"data": [[38.0, 910.5], [158.0, 1232.5], [159.0, 1254.0], [157.0, 1258.0], [165.0, 1237.0], [161.0, 1250.0], [163.0, 1238.0], [160.0, 1154.0], [162.0, 1246.0], [167.0, 1212.0], [173.0, 1194.0], [168.0, 1236.0], [175.0, 1150.0], [174.0, 1142.0], [172.0, 1140.5], [177.0, 1164.0], [179.0, 923.0], [188.0, 1202.0], [192.0, 689.0], [196.0, 936.0], [194.0, 938.5], [201.0, 1120.0], [206.0, 946.0], [212.0, 936.0], [215.0, 904.0], [223.0, 896.0], [218.0, 908.0], [220.0, 909.0], [221.0, 906.0], [217.0, 917.5], [216.0, 909.5], [222.0, 900.0], [219.0, 877.0], [228.0, 879.0], [229.0, 873.0], [225.0, 885.0], [226.0, 888.0], [224.0, 890.0], [227.0, 880.0], [230.0, 872.0], [231.0, 866.0], [233.0, 860.0], [232.0, 864.5], [239.0, 841.0], [238.0, 844.0], [236.0, 849.0], [235.0, 856.0], [234.0, 858.0], [237.0, 863.0], [241.0, 840.0], [299.0, 887.0], [318.0, 889.0], [324.0, 894.5], [328.0, 861.0], [341.0, 890.0], [347.0, 852.0], [345.0, 18.0], [360.0, 849.0], [408.0, 16.0], [423.0, 20.0], [439.0, 29.0], [434.0, 17.5], [438.0, 14.0], [441.0, 22.0], [445.0, 52.0], [457.0, 15.0], [466.0, 14.0], [468.0, 18.0], [471.0, 28.0], [486.0, 176.0], [493.0, 47.0], [485.0, 18.0], [495.0, 91.0], [481.0, 413.0], [491.0, 264.0], [492.0, 66.5], [487.0, 432.0], [504.0, 29.0], [510.0, 208.5], [503.0, 259.0], [499.0, 160.0], [508.0, 150.0], [502.0, 16.0], [496.0, 380.0], [507.0, 169.0], [515.0, 162.0], [526.0, 29.0], [521.0, 28.0], [522.0, 26.5], [525.0, 39.0], [520.0, 37.0], [533.0, 18.0], [513.0, 29.5], [527.0, 458.0], [534.0, 18.0], [535.0, 34.5], [514.0, 70.0], [516.0, 28.0], [518.0, 15.0], [540.0, 45.0], [519.0, 301.0], [530.0, 27.0], [528.0, 17.0], [541.0, 22.0], [568.0, 23.0], [560.0, 23.0], [562.0, 115.0], [564.0, 28.0], [572.0, 91.5], [573.0, 41.0], [565.0, 24.0], [566.0, 45.5], [567.0, 22.0], [547.0, 27.0], [544.0, 19.0], [546.0, 28.0], [551.0, 269.0], [548.0, 32.0], [556.0, 17.0], [557.0, 191.0], [558.0, 168.0], [553.0, 22.0], [555.0, 20.0], [559.0, 36.0], [571.0, 83.0], [569.0, 31.0], [570.0, 38.5], [602.0, 37.0], [605.0, 28.0], [603.0, 72.0], [588.0, 30.0], [587.0, 271.0], [586.0, 66.0], [600.0, 91.0], [582.0, 26.0], [583.0, 31.0], [581.0, 27.0], [580.0, 336.0], [578.0, 142.0], [577.0, 32.0], [591.0, 55.0], [606.0, 72.0], [596.0, 23.0], [598.0, 90.0], [599.0, 33.0], [607.0, 59.0], [592.0, 37.0], [601.0, 28.5], [590.0, 80.0], [637.0, 147.0], [624.0, 64.0], [636.0, 131.0], [635.0, 110.0], [634.0, 199.5], [633.0, 96.0], [632.0, 78.5], [615.0, 232.0], [627.0, 185.0], [629.0, 51.0], [625.0, 235.0], [626.0, 194.0], [631.0, 76.0], [630.0, 32.0], [609.0, 76.5], [638.0, 106.0], [639.0, 86.0], [617.0, 258.0], [610.0, 150.0], [611.0, 57.0], [612.0, 21.0], [613.0, 45.0], [614.0, 88.0], [621.0, 44.0], [620.0, 358.0], [622.0, 238.5], [608.0, 35.0], [623.0, 211.0], [618.0, 22.0], [664.0, 175.5], [669.0, 123.0], [667.0, 158.0], [666.0, 194.5], [665.0, 210.0], [668.0, 143.0], [656.0, 44.0], [670.0, 61.5], [671.0, 153.0], [657.0, 137.0], [660.0, 157.0], [659.0, 132.0], [658.0, 66.0], [650.0, 83.5], [649.0, 123.0], [648.0, 435.0], [651.0, 59.0], [655.0, 46.0], [654.0, 126.0], [642.0, 26.0], [640.0, 270.0], [641.0, 288.0], [643.0, 283.0], [646.0, 114.0], [645.0, 86.0], [647.0, 94.0], [644.0, 265.0], [662.0, 58.0], [663.0, 68.0], [661.0, 136.0], [652.0, 92.5], [653.0, 97.0], [675.0, 57.0], [682.0, 82.0], [680.0, 58.5], [689.0, 111.0], [684.0, 68.5], [687.0, 140.0], [686.0, 64.0], [685.0, 192.0], [695.0, 65.0], [694.0, 109.5], [703.0, 72.0], [700.0, 139.0], [697.0, 68.0], [696.0, 150.0], [678.0, 116.0], [679.0, 92.0], [702.0, 227.5], [677.0, 73.0], [676.0, 194.0], [672.0, 145.0], [674.0, 135.0], [693.0, 109.0], [692.0, 121.0], [691.0, 162.0], [690.0, 140.0], [704.0, 98.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 704.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 110.15, "minX": 1.68341196E12, "maxY": 632.3833333333333, "series": [{"data": [[1.68341226E12, 612.9], [1.68341208E12, 220.55], [1.68341256E12, 288.3833333333333], [1.68341214E12, 218.63333333333333], [1.68341196E12, 110.15], [1.68341244E12, 571.9833333333333], [1.68341202E12, 220.18333333333334], [1.6834125E12, 611.0333333333333], [1.68341232E12, 632.3833333333333], [1.68341238E12, 621.25], [1.6834122E12, 404.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68341256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 106.81666666666666, "minX": 1.68341196E12, "maxY": 632.3833333333333, "series": [{"data": [[1.68341226E12, 612.9], [1.68341208E12, 220.55], [1.68341256E12, 291.71666666666664], [1.68341214E12, 218.63333333333333], [1.68341196E12, 106.81666666666666], [1.68341244E12, 571.9833333333333], [1.68341202E12, 220.18333333333334], [1.6834125E12, 611.0333333333333], [1.68341232E12, 632.3833333333333], [1.68341238E12, 621.25], [1.6834122E12, 404.25]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68341256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 106.81666666666666, "minX": 1.68341196E12, "maxY": 632.3833333333333, "series": [{"data": [[1.68341226E12, 612.9], [1.68341208E12, 220.55], [1.68341256E12, 291.71666666666664], [1.68341214E12, 218.63333333333333], [1.68341196E12, 106.81666666666666], [1.68341244E12, 571.9833333333333], [1.68341202E12, 220.18333333333334], [1.6834125E12, 611.0333333333333], [1.68341232E12, 632.3833333333333], [1.68341238E12, 621.25], [1.6834122E12, 404.25]], "isOverall": false, "label": "Get Task - Escenario 1-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68341256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 106.81666666666666, "minX": 1.68341196E12, "maxY": 632.3833333333333, "series": [{"data": [[1.68341226E12, 612.9], [1.68341208E12, 220.55], [1.68341256E12, 291.71666666666664], [1.68341214E12, 218.63333333333333], [1.68341196E12, 106.81666666666666], [1.68341244E12, 571.9833333333333], [1.68341202E12, 220.18333333333334], [1.6834125E12, 611.0333333333333], [1.68341232E12, 632.3833333333333], [1.68341238E12, 621.25], [1.6834122E12, 404.25]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68341256E12, "title": "Total Transactions Per Second"}},
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

