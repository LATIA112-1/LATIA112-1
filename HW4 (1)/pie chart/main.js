let myGraph = document.getElementById('myGraph');
let trace1 ={};
trace1.type ="pie";
trace1.title ="國籍比";
trace1.labels =[];
trace1.values =[];
trace1.domain = {
    row:0,
    column:0
};

for (let x=0; x<evaluation_ratio.length; x++){
    trace1.labels[x] = evaluation_ratio[x]['name'];
    trace1.values[x] = evaluation_ratio[x]['count'];
} 

let data = [];
data.push(trace1);


let layout ={
    margin:{
        t:10,
        l:0,
    }
    
};

Plotly.newPlot(myGraph, data, layout);