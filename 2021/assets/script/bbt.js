
var teadata;

function send2JSON(id){
    var newdata = [];
    fetch(`https://docs.google.com/spreadsheets/d/` + id + `/gviz/tq?tqx=out:json`)
        .then(res => res.text())
        .then(text => {
            const json = JSON.parse(text.substr(47).slice(0, -2));
            console.log(json);
            (json.table.rows).forEach(row => {
                var newrow ={};
                (row.c).forEach((col, index) => {
                    if (json.table.cols[index].label != ''){
                        if (col != null){
                            newrow[json.table.cols[index].label] = col.v
                        } else {
                            newrow[json.table.cols[index].label] = null
                        }
                    }
                });
                (newdata).push(newrow);
            });
        }).then(()=>{
            console.log("receiving the data...");
            receive2JSON(newdata);
        });
}


$(document).ready(function() {
    send2JSON('1Eb1_OFLki60vHWHA3C8Grn-hx04A7dvljXsMfOjtVS8');
});

function receive2JSON(data){
    data.forEach(tea=>{
        if (tea.tag=='starred'){
            var teas = $('#clone').clone().appendTo('.starred-con');
            teas.find('.name').text(tea.name);
            teas.find('.stars').text(tea.stars+' / 10');
            teas.find('.shop').text(tea.location);
            if (tea.image == null | tea.image == undefined | tea.image == ''){
                teas.find('.img').attr('src', 'https://rmacl.org/rmacl/wp-content/uploads/placeholder.png');
            } else {
                teas.find('.img').attr('src', tea.image);
            }
            teas.show();
        }

        var teas;
        if (tea.review != null){
            teas = $('#clone2').clone().appendTo('.all-con');
            teas.addClass('full');
            teas.find('.detail').text(tea.review);
        } else {
            teas = $('#clone').clone().appendTo('.all-con');
        }
        teas.find('.name').text(tea.name);
        teas.find('.stars').text(tea.stars+' / 10');
        teas.find('.shop').text(tea.location);
        console.log(tea.image);
        if (tea.image == null | tea.image == undefined | tea.image == ''){
            teas.find('.img').attr('src', 'https://cel.ac/wp-content/uploads/2016/02/placeholder-img-1.jpg');
        } else {
            teas.find('.img').attr('src', tea.image);
        }
        teas.show();
        
    });
    $('.loader').hide();
}