function submitData(event) {
    const selectedFile = document.getElementById('file').files[0];
    var reader = new FileReader(); reader.onload = onReaderLoad;
    reader.readAsText(selectedFile);
}

dataout = {};
species = 0;
di=0;

function onReaderLoad(event){
    var obj = JSON.parse(event.target.result);
    var i;
    for (i = 0; i < obj.length; i++) {
        if (i != 0){
            if (obj[i].scientific_name == obj[i-1].scientific_name){
                dataout[obj[i].scientific_name] ++;
            }
            else{
                dataout[obj[i].scientific_name] = 1;
                species++;
            }
        }
        else{
            dataout[obj[i].scientific_name] = 1;
            species++;
        }
    }
    numer = species*(species - 1);
    denom = 0;
    p = Object.values(dataout);
    var k;
    for (k=0;k<p.length;k++){
        denom += p[k]*(p[k]-1);
    }
    di = numer/denom;
    print();
}

function print(){
    document.getElementById('species').innerHTML = "Species Count: "+species;
    document.getElementById('diversity').innerHTML = "Simpson's Diversity Index: "+di;
    var datafinal = JSON.stringify(dataout, null, 4);
    $('#dataset').text(datafinal);
}


