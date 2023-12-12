let myGraph = document.getElementById('myGraph');
let trace1 = {};
trace1.type ="bar";
trace1.x = [];
trace1.y = [];

for(let i=0;i<gender.length;i++){
    trace1.x[i] = gender[i]['name'];
    trace1.y[i] = gender[i]['count'];
}

let data =[];
data.push(trace1);

let layout ={
    margin:{
        t:0
    }
};

Plotly.newPlot(myGraph, data, layout);
