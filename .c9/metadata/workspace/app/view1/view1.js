{"filter":false,"title":"view1.js","tooltip":"/app/view1/view1.js","undoManager":{"mark":13,"position":13,"stack":[[{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "],"id":2}],[{"start":{"row":12,"column":2},"end":{"row":44,"column":3},"action":"insert","lines":["$(document).ready(function(){","","function readTextFile(){","//var json = require(\"ServiceOakville_Service_Requests\");","//console.log(json);","","","$.ajax({","       url: \"ServiceOakville_Service_Requests.json\",","           //force to handle it as text","       dataType: \"text\",","       ","        success: function (dataTest) {","            ","            var parsed = JSON.parse(dataTest);","    ","            var arr = [];","            ","            for(var x in parsed){","              arr.push(parsed[x]);","            }","            console.log(arr);","         }","  });","","","};","","$(\"#hi\").on(\"click\",function(){","   readTextFile(); ","});","","});"],"id":3}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["/"],"id":4}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"remove","lines":["/"],"id":5}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["."],"id":6}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["."],"id":7}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["/"],"id":8}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["."],"id":9}],[{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["."],"id":10}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["/"],"id":11}],[{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"remove","lines":["/"],"id":12}],[{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"remove","lines":["."],"id":13}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"remove","lines":["."],"id":14}],[{"start":{"row":12,"column":0},"end":{"row":44,"column":3},"action":"remove","lines":["  $(document).ready(function(){","","function readTextFile(){","//var json = require(\"ServiceOakville_Service_Requests\");","//console.log(json);","","","$.ajax({","       url: \"../ServiceOakville_Service_Requests.json\",","           //force to handle it as text","       dataType: \"text\",","       ","        success: function (dataTest) {","            ","            var parsed = JSON.parse(dataTest);","    ","            var arr = [];","            ","            for(var x in parsed){","              arr.push(parsed[x]);","            }","            console.log(arr);","         }","  });","","","};","","$(\"#hi\").on(\"click\",function(){","   readTextFile(); ","});","","});"],"id":15}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":0},"end":{"row":12,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1463258097000,"hash":"b99c2723093c66c26439bfc3fb78a99f86da480a"}