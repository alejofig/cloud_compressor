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
        data: {"result": {"minY": 2586.0, "minX": 0.0, "maxY": 14125.0, "series": [{"data": [[0.0, 2586.0], [0.1, 2586.0], [0.2, 2586.0], [0.3, 2586.0], [0.4, 2586.0], [0.5, 2586.0], [0.6, 2586.0], [0.7, 2688.0], [0.8, 2688.0], [0.9, 2688.0], [1.0, 2688.0], [1.1, 2688.0], [1.2, 2688.0], [1.3, 2713.0], [1.4, 2713.0], [1.5, 2713.0], [1.6, 2713.0], [1.7, 2713.0], [1.8, 2713.0], [1.9, 2794.0], [2.0, 2794.0], [2.1, 2794.0], [2.2, 2794.0], [2.3, 2794.0], [2.4, 2794.0], [2.5, 2835.0], [2.6, 2835.0], [2.7, 2835.0], [2.8, 2835.0], [2.9, 2835.0], [3.0, 2835.0], [3.1, 2835.0], [3.2, 2851.0], [3.3, 2851.0], [3.4, 2851.0], [3.5, 2851.0], [3.6, 2851.0], [3.7, 2851.0], [3.8, 2856.0], [3.9, 2856.0], [4.0, 2856.0], [4.1, 2856.0], [4.2, 2856.0], [4.3, 2856.0], [4.4, 2897.0], [4.5, 2897.0], [4.6, 2897.0], [4.7, 2897.0], [4.8, 2897.0], [4.9, 2897.0], [5.0, 2903.0], [5.1, 2903.0], [5.2, 2903.0], [5.3, 2903.0], [5.4, 2903.0], [5.5, 2903.0], [5.6, 2903.0], [5.7, 2913.0], [5.8, 2913.0], [5.9, 2913.0], [6.0, 2913.0], [6.1, 2913.0], [6.2, 2913.0], [6.3, 2916.0], [6.4, 2916.0], [6.5, 2916.0], [6.6, 2916.0], [6.7, 2916.0], [6.8, 2916.0], [6.9, 2917.0], [7.0, 2917.0], [7.1, 2917.0], [7.2, 2917.0], [7.3, 2917.0], [7.4, 2917.0], [7.5, 2922.0], [7.6, 2922.0], [7.7, 2922.0], [7.8, 2922.0], [7.9, 2922.0], [8.0, 2922.0], [8.1, 2922.0], [8.2, 2930.0], [8.3, 2930.0], [8.4, 2930.0], [8.5, 2930.0], [8.6, 2930.0], [8.7, 2930.0], [8.8, 2931.0], [8.9, 2931.0], [9.0, 2931.0], [9.1, 2931.0], [9.2, 2931.0], [9.3, 2931.0], [9.4, 2950.0], [9.5, 2950.0], [9.6, 2950.0], [9.7, 2950.0], [9.8, 2950.0], [9.9, 2950.0], [10.0, 2953.0], [10.1, 2953.0], [10.2, 2953.0], [10.3, 2953.0], [10.4, 2953.0], [10.5, 2953.0], [10.6, 2953.0], [10.7, 2960.0], [10.8, 2960.0], [10.9, 2960.0], [11.0, 2960.0], [11.1, 2960.0], [11.2, 2960.0], [11.3, 2962.0], [11.4, 2962.0], [11.5, 2962.0], [11.6, 2962.0], [11.7, 2962.0], [11.8, 2962.0], [11.9, 2978.0], [12.0, 2978.0], [12.1, 2978.0], [12.2, 2978.0], [12.3, 2978.0], [12.4, 2978.0], [12.5, 2985.0], [12.6, 2985.0], [12.7, 2985.0], [12.8, 2985.0], [12.9, 2985.0], [13.0, 2985.0], [13.1, 2985.0], [13.2, 2985.0], [13.3, 2985.0], [13.4, 2985.0], [13.5, 2985.0], [13.6, 2985.0], [13.7, 2985.0], [13.8, 2988.0], [13.9, 2988.0], [14.0, 2988.0], [14.1, 2988.0], [14.2, 2988.0], [14.3, 2988.0], [14.4, 2992.0], [14.5, 2992.0], [14.6, 2992.0], [14.7, 2992.0], [14.8, 2992.0], [14.9, 2992.0], [15.0, 3002.0], [15.1, 3002.0], [15.2, 3002.0], [15.3, 3002.0], [15.4, 3002.0], [15.5, 3002.0], [15.6, 3002.0], [15.7, 3016.0], [15.8, 3016.0], [15.9, 3016.0], [16.0, 3016.0], [16.1, 3016.0], [16.2, 3016.0], [16.3, 3021.0], [16.4, 3021.0], [16.5, 3021.0], [16.6, 3021.0], [16.7, 3021.0], [16.8, 3021.0], [16.9, 3021.0], [17.0, 3021.0], [17.1, 3021.0], [17.2, 3021.0], [17.3, 3021.0], [17.4, 3021.0], [17.5, 3026.0], [17.6, 3026.0], [17.7, 3026.0], [17.8, 3026.0], [17.9, 3026.0], [18.0, 3026.0], [18.1, 3026.0], [18.2, 3027.0], [18.3, 3027.0], [18.4, 3027.0], [18.5, 3027.0], [18.6, 3027.0], [18.7, 3027.0], [18.8, 3037.0], [18.9, 3037.0], [19.0, 3037.0], [19.1, 3037.0], [19.2, 3037.0], [19.3, 3037.0], [19.4, 3037.0], [19.5, 3037.0], [19.6, 3037.0], [19.7, 3037.0], [19.8, 3037.0], [19.9, 3037.0], [20.0, 3041.0], [20.1, 3041.0], [20.2, 3041.0], [20.3, 3041.0], [20.4, 3041.0], [20.5, 3041.0], [20.6, 3041.0], [20.7, 3048.0], [20.8, 3048.0], [20.9, 3048.0], [21.0, 3048.0], [21.1, 3048.0], [21.2, 3048.0], [21.3, 3068.0], [21.4, 3068.0], [21.5, 3068.0], [21.6, 3068.0], [21.7, 3068.0], [21.8, 3068.0], [21.9, 3078.0], [22.0, 3078.0], [22.1, 3078.0], [22.2, 3078.0], [22.3, 3078.0], [22.4, 3078.0], [22.5, 3086.0], [22.6, 3086.0], [22.7, 3086.0], [22.8, 3086.0], [22.9, 3086.0], [23.0, 3086.0], [23.1, 3086.0], [23.2, 3106.0], [23.3, 3106.0], [23.4, 3106.0], [23.5, 3106.0], [23.6, 3106.0], [23.7, 3106.0], [23.8, 3107.0], [23.9, 3107.0], [24.0, 3107.0], [24.1, 3107.0], [24.2, 3107.0], [24.3, 3107.0], [24.4, 3109.0], [24.5, 3109.0], [24.6, 3109.0], [24.7, 3109.0], [24.8, 3109.0], [24.9, 3109.0], [25.0, 3115.0], [25.1, 3115.0], [25.2, 3115.0], [25.3, 3115.0], [25.4, 3115.0], [25.5, 3115.0], [25.6, 3115.0], [25.7, 3117.0], [25.8, 3117.0], [25.9, 3117.0], [26.0, 3117.0], [26.1, 3117.0], [26.2, 3117.0], [26.3, 3118.0], [26.4, 3118.0], [26.5, 3118.0], [26.6, 3118.0], [26.7, 3118.0], [26.8, 3118.0], [26.9, 3125.0], [27.0, 3125.0], [27.1, 3125.0], [27.2, 3125.0], [27.3, 3125.0], [27.4, 3125.0], [27.5, 3127.0], [27.6, 3127.0], [27.7, 3127.0], [27.8, 3127.0], [27.9, 3127.0], [28.0, 3127.0], [28.1, 3127.0], [28.2, 3149.0], [28.3, 3149.0], [28.4, 3149.0], [28.5, 3149.0], [28.6, 3149.0], [28.7, 3149.0], [28.8, 3160.0], [28.9, 3160.0], [29.0, 3160.0], [29.1, 3160.0], [29.2, 3160.0], [29.3, 3160.0], [29.4, 3175.0], [29.5, 3175.0], [29.6, 3175.0], [29.7, 3175.0], [29.8, 3175.0], [29.9, 3175.0], [30.0, 3181.0], [30.1, 3181.0], [30.2, 3181.0], [30.3, 3181.0], [30.4, 3181.0], [30.5, 3181.0], [30.6, 3181.0], [30.7, 3184.0], [30.8, 3184.0], [30.9, 3184.0], [31.0, 3184.0], [31.1, 3184.0], [31.2, 3184.0], [31.3, 3204.0], [31.4, 3204.0], [31.5, 3204.0], [31.6, 3204.0], [31.7, 3204.0], [31.8, 3204.0], [31.9, 3218.0], [32.0, 3218.0], [32.1, 3218.0], [32.2, 3218.0], [32.3, 3218.0], [32.4, 3218.0], [32.5, 3227.0], [32.6, 3227.0], [32.7, 3227.0], [32.8, 3227.0], [32.9, 3227.0], [33.0, 3227.0], [33.1, 3227.0], [33.2, 3237.0], [33.3, 3237.0], [33.4, 3237.0], [33.5, 3237.0], [33.6, 3237.0], [33.7, 3237.0], [33.8, 3237.0], [33.9, 3237.0], [34.0, 3237.0], [34.1, 3237.0], [34.2, 3237.0], [34.3, 3237.0], [34.4, 3258.0], [34.5, 3258.0], [34.6, 3258.0], [34.7, 3258.0], [34.8, 3258.0], [34.9, 3258.0], [35.0, 3271.0], [35.1, 3271.0], [35.2, 3271.0], [35.3, 3271.0], [35.4, 3271.0], [35.5, 3271.0], [35.6, 3271.0], [35.7, 3332.0], [35.8, 3332.0], [35.9, 3332.0], [36.0, 3332.0], [36.1, 3332.0], [36.2, 3332.0], [36.3, 3370.0], [36.4, 3370.0], [36.5, 3370.0], [36.6, 3370.0], [36.7, 3370.0], [36.8, 3370.0], [36.9, 3388.0], [37.0, 3388.0], [37.1, 3388.0], [37.2, 3388.0], [37.3, 3388.0], [37.4, 3388.0], [37.5, 3420.0], [37.6, 3420.0], [37.7, 3420.0], [37.8, 3420.0], [37.9, 3420.0], [38.0, 3420.0], [38.1, 3420.0], [38.2, 3448.0], [38.3, 3448.0], [38.4, 3448.0], [38.5, 3448.0], [38.6, 3448.0], [38.7, 3448.0], [38.8, 3448.0], [38.9, 3448.0], [39.0, 3448.0], [39.1, 3448.0], [39.2, 3448.0], [39.3, 3448.0], [39.4, 3463.0], [39.5, 3463.0], [39.6, 3463.0], [39.7, 3463.0], [39.8, 3463.0], [39.9, 3463.0], [40.0, 3468.0], [40.1, 3468.0], [40.2, 3468.0], [40.3, 3468.0], [40.4, 3468.0], [40.5, 3468.0], [40.6, 3468.0], [40.7, 3473.0], [40.8, 3473.0], [40.9, 3473.0], [41.0, 3473.0], [41.1, 3473.0], [41.2, 3473.0], [41.3, 3509.0], [41.4, 3509.0], [41.5, 3509.0], [41.6, 3509.0], [41.7, 3509.0], [41.8, 3509.0], [41.9, 3546.0], [42.0, 3546.0], [42.1, 3546.0], [42.2, 3546.0], [42.3, 3546.0], [42.4, 3546.0], [42.5, 3564.0], [42.6, 3564.0], [42.7, 3564.0], [42.8, 3564.0], [42.9, 3564.0], [43.0, 3564.0], [43.1, 3564.0], [43.2, 3587.0], [43.3, 3587.0], [43.4, 3587.0], [43.5, 3587.0], [43.6, 3587.0], [43.7, 3587.0], [43.8, 3618.0], [43.9, 3618.0], [44.0, 3618.0], [44.1, 3618.0], [44.2, 3618.0], [44.3, 3618.0], [44.4, 3661.0], [44.5, 3661.0], [44.6, 3661.0], [44.7, 3661.0], [44.8, 3661.0], [44.9, 3661.0], [45.0, 3700.0], [45.1, 3700.0], [45.2, 3700.0], [45.3, 3700.0], [45.4, 3700.0], [45.5, 3700.0], [45.6, 3700.0], [45.7, 3772.0], [45.8, 3772.0], [45.9, 3772.0], [46.0, 3772.0], [46.1, 3772.0], [46.2, 3772.0], [46.3, 3777.0], [46.4, 3777.0], [46.5, 3777.0], [46.6, 3777.0], [46.7, 3777.0], [46.8, 3777.0], [46.9, 3779.0], [47.0, 3779.0], [47.1, 3779.0], [47.2, 3779.0], [47.3, 3779.0], [47.4, 3779.0], [47.5, 3840.0], [47.6, 3840.0], [47.7, 3840.0], [47.8, 3840.0], [47.9, 3840.0], [48.0, 3840.0], [48.1, 3840.0], [48.2, 3841.0], [48.3, 3841.0], [48.4, 3841.0], [48.5, 3841.0], [48.6, 3841.0], [48.7, 3841.0], [48.8, 3852.0], [48.9, 3852.0], [49.0, 3852.0], [49.1, 3852.0], [49.2, 3852.0], [49.3, 3852.0], [49.4, 3852.0], [49.5, 3852.0], [49.6, 3852.0], [49.7, 3852.0], [49.8, 3852.0], [49.9, 3852.0], [50.0, 3858.0], [50.1, 3858.0], [50.2, 3858.0], [50.3, 3858.0], [50.4, 3858.0], [50.5, 3858.0], [50.6, 3858.0], [50.7, 3859.0], [50.8, 3859.0], [50.9, 3859.0], [51.0, 3859.0], [51.1, 3859.0], [51.2, 3859.0], [51.3, 3861.0], [51.4, 3861.0], [51.5, 3861.0], [51.6, 3861.0], [51.7, 3861.0], [51.8, 3861.0], [51.9, 3877.0], [52.0, 3877.0], [52.1, 3877.0], [52.2, 3877.0], [52.3, 3877.0], [52.4, 3877.0], [52.5, 3895.0], [52.6, 3895.0], [52.7, 3895.0], [52.8, 3895.0], [52.9, 3895.0], [53.0, 3895.0], [53.1, 3895.0], [53.2, 3896.0], [53.3, 3896.0], [53.4, 3896.0], [53.5, 3896.0], [53.6, 3896.0], [53.7, 3896.0], [53.8, 3907.0], [53.9, 3907.0], [54.0, 3907.0], [54.1, 3907.0], [54.2, 3907.0], [54.3, 3907.0], [54.4, 3911.0], [54.5, 3911.0], [54.6, 3911.0], [54.7, 3911.0], [54.8, 3911.0], [54.9, 3911.0], [55.0, 3924.0], [55.1, 3924.0], [55.2, 3924.0], [55.3, 3924.0], [55.4, 3924.0], [55.5, 3924.0], [55.6, 3924.0], [55.7, 3944.0], [55.8, 3944.0], [55.9, 3944.0], [56.0, 3944.0], [56.1, 3944.0], [56.2, 3944.0], [56.3, 3948.0], [56.4, 3948.0], [56.5, 3948.0], [56.6, 3948.0], [56.7, 3948.0], [56.8, 3948.0], [56.9, 3956.0], [57.0, 3956.0], [57.1, 3956.0], [57.2, 3956.0], [57.3, 3956.0], [57.4, 3956.0], [57.5, 3978.0], [57.6, 3978.0], [57.7, 3978.0], [57.8, 3978.0], [57.9, 3978.0], [58.0, 3978.0], [58.1, 3978.0], [58.2, 3979.0], [58.3, 3979.0], [58.4, 3979.0], [58.5, 3979.0], [58.6, 3979.0], [58.7, 3979.0], [58.8, 3988.0], [58.9, 3988.0], [59.0, 3988.0], [59.1, 3988.0], [59.2, 3988.0], [59.3, 3988.0], [59.4, 3996.0], [59.5, 3996.0], [59.6, 3996.0], [59.7, 3996.0], [59.8, 3996.0], [59.9, 3996.0], [60.0, 4022.0], [60.1, 4022.0], [60.2, 4022.0], [60.3, 4022.0], [60.4, 4022.0], [60.5, 4022.0], [60.6, 4022.0], [60.7, 4027.0], [60.8, 4027.0], [60.9, 4027.0], [61.0, 4027.0], [61.1, 4027.0], [61.2, 4027.0], [61.3, 4048.0], [61.4, 4048.0], [61.5, 4048.0], [61.6, 4048.0], [61.7, 4048.0], [61.8, 4048.0], [61.9, 4049.0], [62.0, 4049.0], [62.1, 4049.0], [62.2, 4049.0], [62.3, 4049.0], [62.4, 4049.0], [62.5, 4081.0], [62.6, 4081.0], [62.7, 4081.0], [62.8, 4081.0], [62.9, 4081.0], [63.0, 4081.0], [63.1, 4081.0], [63.2, 4082.0], [63.3, 4082.0], [63.4, 4082.0], [63.5, 4082.0], [63.6, 4082.0], [63.7, 4082.0], [63.8, 4085.0], [63.9, 4085.0], [64.0, 4085.0], [64.1, 4085.0], [64.2, 4085.0], [64.3, 4085.0], [64.4, 4092.0], [64.5, 4092.0], [64.6, 4092.0], [64.7, 4092.0], [64.8, 4092.0], [64.9, 4092.0], [65.0, 4109.0], [65.1, 4109.0], [65.2, 4109.0], [65.3, 4109.0], [65.4, 4109.0], [65.5, 4109.0], [65.6, 4109.0], [65.7, 4114.0], [65.8, 4114.0], [65.9, 4114.0], [66.0, 4114.0], [66.1, 4114.0], [66.2, 4114.0], [66.3, 4116.0], [66.4, 4116.0], [66.5, 4116.0], [66.6, 4116.0], [66.7, 4116.0], [66.8, 4116.0], [66.9, 4118.0], [67.0, 4118.0], [67.1, 4118.0], [67.2, 4118.0], [67.3, 4118.0], [67.4, 4118.0], [67.5, 4119.0], [67.6, 4119.0], [67.7, 4119.0], [67.8, 4119.0], [67.9, 4119.0], [68.0, 4119.0], [68.1, 4119.0], [68.2, 4128.0], [68.3, 4128.0], [68.4, 4128.0], [68.5, 4128.0], [68.6, 4128.0], [68.7, 4128.0], [68.8, 4132.0], [68.9, 4132.0], [69.0, 4132.0], [69.1, 4132.0], [69.2, 4132.0], [69.3, 4132.0], [69.4, 4159.0], [69.5, 4159.0], [69.6, 4159.0], [69.7, 4159.0], [69.8, 4159.0], [69.9, 4159.0], [70.0, 4162.0], [70.1, 4162.0], [70.2, 4162.0], [70.3, 4162.0], [70.4, 4162.0], [70.5, 4162.0], [70.6, 4162.0], [70.7, 4163.0], [70.8, 4163.0], [70.9, 4163.0], [71.0, 4163.0], [71.1, 4163.0], [71.2, 4163.0], [71.3, 4165.0], [71.4, 4165.0], [71.5, 4165.0], [71.6, 4165.0], [71.7, 4165.0], [71.8, 4165.0], [71.9, 4169.0], [72.0, 4169.0], [72.1, 4169.0], [72.2, 4169.0], [72.3, 4169.0], [72.4, 4169.0], [72.5, 4173.0], [72.6, 4173.0], [72.7, 4173.0], [72.8, 4173.0], [72.9, 4173.0], [73.0, 4173.0], [73.1, 4173.0], [73.2, 4175.0], [73.3, 4175.0], [73.4, 4175.0], [73.5, 4175.0], [73.6, 4175.0], [73.7, 4175.0], [73.8, 4177.0], [73.9, 4177.0], [74.0, 4177.0], [74.1, 4177.0], [74.2, 4177.0], [74.3, 4177.0], [74.4, 4186.0], [74.5, 4186.0], [74.6, 4186.0], [74.7, 4186.0], [74.8, 4186.0], [74.9, 4186.0], [75.0, 4189.0], [75.1, 4189.0], [75.2, 4189.0], [75.3, 4189.0], [75.4, 4189.0], [75.5, 4189.0], [75.6, 4189.0], [75.7, 4191.0], [75.8, 4191.0], [75.9, 4191.0], [76.0, 4191.0], [76.1, 4191.0], [76.2, 4191.0], [76.3, 4193.0], [76.4, 4193.0], [76.5, 4193.0], [76.6, 4193.0], [76.7, 4193.0], [76.8, 4193.0], [76.9, 4200.0], [77.0, 4200.0], [77.1, 4200.0], [77.2, 4200.0], [77.3, 4200.0], [77.4, 4200.0], [77.5, 4204.0], [77.6, 4204.0], [77.7, 4204.0], [77.8, 4204.0], [77.9, 4204.0], [78.0, 4204.0], [78.1, 4204.0], [78.2, 4205.0], [78.3, 4205.0], [78.4, 4205.0], [78.5, 4205.0], [78.6, 4205.0], [78.7, 4205.0], [78.8, 4206.0], [78.9, 4206.0], [79.0, 4206.0], [79.1, 4206.0], [79.2, 4206.0], [79.3, 4206.0], [79.4, 4207.0], [79.5, 4207.0], [79.6, 4207.0], [79.7, 4207.0], [79.8, 4207.0], [79.9, 4207.0], [80.0, 4211.0], [80.1, 4211.0], [80.2, 4211.0], [80.3, 4211.0], [80.4, 4211.0], [80.5, 4211.0], [80.6, 4211.0], [80.7, 4217.0], [80.8, 4217.0], [80.9, 4217.0], [81.0, 4217.0], [81.1, 4217.0], [81.2, 4217.0], [81.3, 4233.0], [81.4, 4233.0], [81.5, 4233.0], [81.6, 4233.0], [81.7, 4233.0], [81.8, 4233.0], [81.9, 4241.0], [82.0, 4241.0], [82.1, 4241.0], [82.2, 4241.0], [82.3, 4241.0], [82.4, 4241.0], [82.5, 4250.0], [82.6, 4250.0], [82.7, 4250.0], [82.8, 4250.0], [82.9, 4250.0], [83.0, 4250.0], [83.1, 4250.0], [83.2, 4253.0], [83.3, 4253.0], [83.4, 4253.0], [83.5, 4253.0], [83.6, 4253.0], [83.7, 4253.0], [83.8, 4258.0], [83.9, 4258.0], [84.0, 4258.0], [84.1, 4258.0], [84.2, 4258.0], [84.3, 4258.0], [84.4, 4266.0], [84.5, 4266.0], [84.6, 4266.0], [84.7, 4266.0], [84.8, 4266.0], [84.9, 4266.0], [85.0, 4277.0], [85.1, 4277.0], [85.2, 4277.0], [85.3, 4277.0], [85.4, 4277.0], [85.5, 4277.0], [85.6, 4277.0], [85.7, 4306.0], [85.8, 4306.0], [85.9, 4306.0], [86.0, 4306.0], [86.1, 4306.0], [86.2, 4306.0], [86.3, 4311.0], [86.4, 4311.0], [86.5, 4311.0], [86.6, 4311.0], [86.7, 4311.0], [86.8, 4311.0], [86.9, 4312.0], [87.0, 4312.0], [87.1, 4312.0], [87.2, 4312.0], [87.3, 4312.0], [87.4, 4312.0], [87.5, 4314.0], [87.6, 4314.0], [87.7, 4314.0], [87.8, 4314.0], [87.9, 4314.0], [88.0, 4314.0], [88.1, 4314.0], [88.2, 4329.0], [88.3, 4329.0], [88.4, 4329.0], [88.5, 4329.0], [88.6, 4329.0], [88.7, 4329.0], [88.8, 4331.0], [88.9, 4331.0], [89.0, 4331.0], [89.1, 4331.0], [89.2, 4331.0], [89.3, 4331.0], [89.4, 4380.0], [89.5, 4380.0], [89.6, 4380.0], [89.7, 4380.0], [89.8, 4380.0], [89.9, 4380.0], [90.0, 4400.0], [90.1, 4400.0], [90.2, 4400.0], [90.3, 4400.0], [90.4, 4400.0], [90.5, 4400.0], [90.6, 4400.0], [90.7, 4401.0], [90.8, 4401.0], [90.9, 4401.0], [91.0, 4401.0], [91.1, 4401.0], [91.2, 4401.0], [91.3, 4426.0], [91.4, 4426.0], [91.5, 4426.0], [91.6, 4426.0], [91.7, 4426.0], [91.8, 4426.0], [91.9, 4535.0], [92.0, 4535.0], [92.1, 4535.0], [92.2, 4535.0], [92.3, 4535.0], [92.4, 4535.0], [92.5, 4692.0], [92.6, 4692.0], [92.7, 4692.0], [92.8, 4692.0], [92.9, 4692.0], [93.0, 4692.0], [93.1, 4692.0], [93.2, 4693.0], [93.3, 4693.0], [93.4, 4693.0], [93.5, 4693.0], [93.6, 4693.0], [93.7, 4693.0], [93.8, 4703.0], [93.9, 4703.0], [94.0, 4703.0], [94.1, 4703.0], [94.2, 4703.0], [94.3, 4703.0], [94.4, 5247.0], [94.5, 5247.0], [94.6, 5247.0], [94.7, 5247.0], [94.8, 5247.0], [94.9, 5247.0], [95.0, 5383.0], [95.1, 5383.0], [95.2, 5383.0], [95.3, 5383.0], [95.4, 5383.0], [95.5, 5383.0], [95.6, 5383.0], [95.7, 5520.0], [95.8, 5520.0], [95.9, 5520.0], [96.0, 5520.0], [96.1, 5520.0], [96.2, 5520.0], [96.3, 5726.0], [96.4, 5726.0], [96.5, 5726.0], [96.6, 5726.0], [96.7, 5726.0], [96.8, 5726.0], [96.9, 5867.0], [97.0, 5867.0], [97.1, 5867.0], [97.2, 5867.0], [97.3, 5867.0], [97.4, 5867.0], [97.5, 5958.0], [97.6, 5958.0], [97.7, 5958.0], [97.8, 5958.0], [97.9, 5958.0], [98.0, 5958.0], [98.1, 5958.0], [98.2, 5974.0], [98.3, 5974.0], [98.4, 5974.0], [98.5, 5974.0], [98.6, 5974.0], [98.7, 5974.0], [98.8, 6072.0], [98.9, 6072.0], [99.0, 6072.0], [99.1, 6072.0], [99.2, 6072.0], [99.3, 6072.0], [99.4, 14125.0], [99.5, 14125.0], [99.6, 14125.0], [99.7, 14125.0], [99.8, 14125.0], [99.9, 14125.0]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2500.0, "maxY": 19.0, "series": [{"data": [[14100.0, 1.0], [2500.0, 1.0], [2600.0, 1.0], [2800.0, 4.0], [2700.0, 2.0], [2900.0, 16.0], [3000.0, 13.0], [3100.0, 13.0], [3200.0, 7.0], [3300.0, 3.0], [3400.0, 6.0], [3500.0, 4.0], [3600.0, 2.0], [3700.0, 4.0], [3800.0, 10.0], [3900.0, 10.0], [4000.0, 8.0], [4100.0, 19.0], [4300.0, 7.0], [4200.0, 14.0], [4500.0, 1.0], [4400.0, 3.0], [4600.0, 2.0], [4700.0, 1.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 1.0], [5800.0, 1.0], [5700.0, 1.0], [5900.0, 2.0], [6000.0, 1.0]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 160.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 160.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 160.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 7.954545454545455, "minX": 1.6834329E12, "maxY": 10.0, "series": [{"data": [[1.6834329E12, 10.0], [1.68343296E12, 7.954545454545455]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68343296E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3184.0, "minX": 1.0, "maxY": 5726.0, "series": [{"data": [[8.0, 3332.0], [4.0, 3463.0], [2.0, 5726.0], [1.0, 4132.0], [9.0, 4128.0], [10.0, 3805.7615894039723], [5.0, 3184.0], [6.0, 4426.0], [3.0, 4049.0], [7.0, 3370.0]], "isOverall": false, "label": "Escenario 2", "isController": false}, {"data": [[9.71875, 3815.499999999998]], "isOverall": false, "label": "Escenario 2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 81.4, "minX": 1.6834329E12, "maxY": 3.791660461666667E7, "series": [{"data": [[1.6834329E12, 510.6], [1.68343296E12, 81.4]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6834329E12, 3.791660461666667E7], [1.68343296E12, 6044675.216666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68343296E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3717.1159420289837, "minX": 1.6834329E12, "maxY": 4432.636363636365, "series": [{"data": [[1.6834329E12, 3717.1159420289837], [1.68343296E12, 4432.636363636365]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68343296E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3716.963768115942, "minX": 1.6834329E12, "maxY": 4432.636363636365, "series": [{"data": [[1.6834329E12, 3716.963768115942], [1.68343296E12, 4432.636363636365]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68343296E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 42.09090909090909, "minX": 1.6834329E12, "maxY": 123.5434782608695, "series": [{"data": [[1.6834329E12, 123.5434782608695], [1.68343296E12, 42.09090909090909]], "isOverall": false, "label": "Escenario 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68343296E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2586.0, "minX": 1.6834329E12, "maxY": 14125.0, "series": [{"data": [[1.6834329E12, 6072.0], [1.68343296E12, 14125.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6834329E12, 4329.2], [1.68343296E12, 5582.299999999999]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6834329E12, 6033.779999999999], [1.68343296E12, 14125.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6834329E12, 4736.999999999988], [1.68343296E12, 12865.149999999983]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6834329E12, 2586.0], [1.68343296E12, 3037.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6834329E12, 3840.5], [1.68343296E12, 4014.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68343296E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3680.5, "minX": 1.0, "maxY": 3886.5, "series": [{"data": [[4.0, 3886.5], [2.0, 3683.5], [1.0, 3850.5], [3.0, 3680.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3680.5, "minX": 1.0, "maxY": 3886.5, "series": [{"data": [[4.0, 3886.5], [2.0, 3683.5], [1.0, 3850.5], [3.0, 3680.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.2, "minX": 1.6834329E12, "maxY": 2.466666666666667, "series": [{"data": [[1.6834329E12, 2.466666666666667], [1.68343296E12, 0.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68343296E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6834329E12, "maxY": 2.3, "series": [{"data": [[1.6834329E12, 2.3], [1.68343296E12, 0.36666666666666664]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68343296E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6834329E12, "maxY": 2.3, "series": [{"data": [[1.6834329E12, 2.3], [1.68343296E12, 0.36666666666666664]], "isOverall": false, "label": "Escenario 2-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68343296E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.36666666666666664, "minX": 1.6834329E12, "maxY": 2.3, "series": [{"data": [[1.6834329E12, 2.3], [1.68343296E12, 0.36666666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68343296E12, "title": "Total Transactions Per Second"}},
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

