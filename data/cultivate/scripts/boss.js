
var i = 0;
var txt = ''; /* The text */
var speed = 25;

const type = string => {
    boss1.save();

  	var i = 0;
  	var txt = string; /* The text */

    var chatWindow = document.getElementById("terminal");
    chatWindow.scrollTop = chatWindow.scrollHeight;

  	if (i < txt.length) {
  		var div = $('<p>').appendTo('#terminal');
  	    setInterval(function(){
  	    	if (i < txt.length) {
  			    div.text(div.text() + txt.charAt(i));
  			    i++;
  			  }
  	    }, speed);
  	  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, 1000* ms));
}

function query() {
  var input = $('<INPUT>').appendTo('#terminal').focus().on('keypress',function(e) {
    if(e.which == 13) {
      Object.keys(sbe.actions).forEach(async function (id) {
        if (sbe.actions[id].enabled && input.val()==sbe.actions[id].key){
          input.remove();
          type('..........................');
          await boss1.actions[id].load();
          storage.save();
          query();
        }
      });
    }
});
}




var terminal;

var sbe = {
  unlocked:false,
  auto:false,
  power: 0,
  level: 0,
  cost: 600,
  stage: {
    0: 'Baby',
    1: 'First Anniversary',
    2: 'Doubled in Numbers',
    3: 'Third Time a Charm',
  },
  actions: {
    toggle: {
      label:'Turn ON',
      key:'B',
      enabled:true,
    },
    levelup: {
      label:'Level Up',
      key:'L',
      enabled:true,
    },
    stats:{
      label:'Statistics',
      key:'I',
      enabled:true,
    },
    settings: {
      label:'Settings',
      key:'S',
      enabled:false,
    },
    help: {
      label:'Help',
      key:'H',
      enabled:true,
    },
    exit: {
      label:'Exit',
      key:'E',
      enabled:true,
    },
  }

};

const boss1 = {
  init: async function(){
    sbe.unlocked = true;
    boss1.renderTab();
    $('.wrapper').hide();
    terminal = $('<DIV>').attr("id",'terminal').appendTo('body');
    type('INITIALIZING SYSTEM FUNCTIONS......'); await sleep(2);
    type('$ REQUESTING LAN.KEY AGHAST v1.0 SITE 9999 at %STATE%.QUERY ZARVOX AUTHORIZATION'); await sleep(2);
    type('UPDATING SERVERS... '); await sleep(1);
    type('....................................................'); await sleep(5);
    type("EJECTING ROOT PARTITION -V TRINOIDS ACTIVATED"); await sleep(3);
    type("PROPOGATION COMPLETE."); await sleep(3);
    $('#terminal').empty(); await sleep(2);
    type('SBE initiation complete. Lifetime production of ' + state.clicks.current + ' cells. Memory updatated.'); await sleep(2);
    await sbe.actions['help'].load();
    query();
  },
  renderTab: function(){
    if (sbe.unlocked){
      var tab = document.createElement('A');
      tab.innerText = 'SBE';
      tab.setAttribute('onclick', 'boss1.start()');
      document.getElementById('nav').appendChild(tab);
    }
  },
  start: async function(){
    $('.wrapper').hide();
    terminal = $('<DIV>').attr("id",'terminal').appendTo('body');
    type('SBE booted successfully. Lifetime production of ' + state.clicks.current + ' cells. Memory updatated.'); await sleep(2);
    await boss1.actions['help'].load();
    query();
  },
  save: () =>{
    localStorage.setItem('sbe', JSON.stringify(sbe));
    console.log('sbe data saved')
  },
  load: () =>{
    var tempSbe = JSON.parse(localStorage.getItem('sbe'));
    if (tempSbe !== null) {
      sbe = tempSbe;
      console.log('SBE data loaded successfully.');
      boss1.renderTab()
    }
  },

  actions: {
    toggle: {
      load: async function(){
        sbe.auto = !sbe.auto;
        var text = sbe.auto ? 'ENABLED cell automation while away.' : 'DISABLED cell automation while away.';
        var text2 = sbe.auto ? 'System turned ON.' : 'System turned OFF.';
        sbe.actions['toggle'].label = sbe.auto ? 'Turn OFF' : 'Turn ON';
        type(text2); await sleep(0.5);
        type(text); await sleep(0.5);
      },
    },
    levelup: {
      load: async function(){
        if (state.clicks.current >= sbe.cost){
          sbe.level ++;
          state.clicks.current -= sbe.cost.toFixed();
          type('You have used '+ format(sbe.cost) + ' cells to upgrade the computing level to '+sbe.level);await sleep(1);
          sbe.cost *= 1.25**sbe.level;
          type('You have leveled up:    ' + sbe.stage[sbe.level-1]+' ===> '+sbe.stage[sbe.level] +'');await sleep(1);
        }
        else {
          type('You do not have enough cells to upgrade. You must have '+ format(sbe.cost) + ' cells.');await sleep(0.5);
        }
      },
    },
    stats:{
      load: async function(){
        type('Cells ['+ format(state.clicks.current) + '] Allows for computing level upgrades.'); await sleep(0.5);
        type('Computing Level ['+ sbe.level + '] Enables more system features and new abilities.'); await sleep(0.5);
        type('Engineering Power ['+ sbe.power + '] Generates higher quantities of cells while away.'); await sleep(0.5);
      }
    },
    settings: {
      load: async function(){
        alert('SETTINGS')
      },
    },
    help: {
      load: async function(){
        type('Current Available Commands:'); await sleep(0.5);
        Object.keys(sbe.actions).forEach( async function (id) {
          if (sbe.actions[id].enabled){
            var string = '['+ sbe.actions[id].key +'] ' + sbe.actions[id].label;
            type(string); await sleep(1);
          }
        });
      }
    },
    exit: {
      load: async function(){
        type('Shutting down.'); await sleep(2);
        $('.wrapper').show();
        $('#terminal').remove();
      },
    },
  }
}

boss1.load();
