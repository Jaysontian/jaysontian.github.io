
var teadata;

function send2JSON(id){
    var newdata = [];
    $.getJSON('https://spreadsheets.google.com/feeds/list/' + id + '/od6/public/values?alt=json', function(returned) {
        data = returned.feed.entry;

        data.forEach(tag => {
            var newrow = {};

            for (var key of Object.keys(tag)) {
                if ((key.toString()).includes('gsx')){
                    var keyname = (key.toString()).substring(4);
                    //console.log(keyname + ' -> ' + tag[key]['$t']);
                    newrow[keyname] = tag[key]['$t'];
                }
            }
            (newdata).push(newrow);
        });

        receive2JSON(newdata)
    }).fail(()=>{
        location.reload();
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
                teas.find('.img').attr('src', 'https://cel.ac/wp-content/uploads/2016/02/placeholder-img-1.jpg');
            } else {
                teas.find('.img').attr('src', tea.image);
            }
        }
    });
    $('#clone').remove();
}