

/** Constants. */
const CLICK = 'click';

const elements = {
  button: document.getElementById('newcell'),
  counter: document.getElementById('counter'),
  cursor: document.getElementById('upgrade'),
  message: document.getElementById('message'),
  store: document.getElementById('store'),
};

/** State. */
const state = {};

state.clicks = {
  current: 500,
  total: 0,
  cps: 0,
};

state.cursor = {
  message: 'Upgraded cursor click power.',
  owned: 1,
  cost: {
    base: 100,
    rate: 2.1,
  },
  output: {
    base: 2,
    current: 1,
  },
};

/** @see {@link https://coderpatsy.bitbucket.io/cookies/cookies.html} */
state.generators = {
  generatorA: {
    label: 'Zygote',
    message: 'You made a zygote.',
    owned: 0,
    delay: 10,
    cost: {
      base: 15,
      rate: 1.15,
    },
    output: {
      base: 1,
      current: 0,
    },
  },

  generatorB: {
    label: 'Embryo',
    message: 'Purchased Generator B.',
    owned: 0,
    delay: 1,
    cost: {
      base: 100,
      rate: 1.15,
    },
    output: {
      base: 1,
      current: 0,
    },
  },

  generatorC: {
    label: 'Baby',
    message: 'Purchased Generator C.',
    owned: 0,
    delay: 1,
    cost: {
      base: 11e2, // 1,100
      rate: 1.15,
    },
    output: {
      base: 8,
      current: 0,
    },
  },

  generatorD: {
    label: 'Incubator',
    message: 'Purchased Generator D.',
    owned: 0,
    delay: 1,
    cost: {
      base: 12e3, // 12,000
      rate: 1.15,
    },
    output: {
      base: 47,
      current: 0,
    },
  },

  generatorE: {
    label: 'Scientist',
    message: 'Purchased Generator E.',
    owned: 0,
    delay: 1,
    cost: {
      base: 13e4, // 130,000
      rate: 1.15,
    },
    output: {
      base: 260,
      current: 0,
    },
  },

  generatorF: {
    label: 'Robots',
    message: 'Purchased Generator F.',
    owned: 0,
    delay: 1,
    cost: {
      base: 14e5, // 1,400,000
      rate: 1.15,
    },
    output: {
      base: 14e2, // 1,400
      current: 0,
    },
  },

  generatorG: {
    label: 'AI Machine',
    message: 'Purchased Generator G.',
    owned: 0,
    delay: 1,
    cost: {
      base: 2e7, // 20,000,000
      rate: 1.15,
    },
    output: {
      base: 78e2, // 7,800
      current: 0,
    },
  },

  generatorH: {
    label: 'Dark Particle',
    message: 'Purchased Generator H.',
    owned: 0,
    delay: 1,
    cost: {
      base: 33e7, // 330,000,000
      rate: 1.15,
    },
    output: {
      base: 44e3, // 44,000
      current: 0,
    },
  },

  generatorI: {
    label: 'Alien',
    message: 'Purchased Generator I.',
    owned: 0,
    delay: 1,
    cost: {
      base: 51e8, // 5,100,000,000
      rate: 1.15,
    },
    output: {
      base: 26e4, // 260,000
      current: 0,
    },
  },

  generatorJ: {
    label: 'Energy',
    message: 'Purchased Generator J.',
    owned: 0,
    delay: 1,
    cost: {
      base: 75e9, // 75,000,000,000
      rate: 1.15,
    },
    output: {
      base: 16e5, // 1,600,000
      current: 0,
    },
  },

  generatorK: {
    label: 'Dimension Cell',
    message: 'Purchased Generator K.',
    owned: 0,
    delay: 1,
    cost: {
      base: 1e12, // 1,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 1e5, // 10,000,000
      current: 0,
    },
  },

  generatorL: {
    label: 'Generator L',
    message: 'Purchased Generator L.',
    owned: 0,
    delay: 1,
    cost: {
      base: 14e12, // 14,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 65e6, // 65,000,000
      current: 0,
    },
  },

  generatorM: {
    label: 'Generator M',
    message: 'Purchased Generator M.',
    owned: 0,
    delay: 1,
    cost: {
      base: 17e13, // 170,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 43e7, // 430,000,000
      current: 0,
    },
  },

  generatorN: {
    label: 'Generator N',
    message: 'Purchased Generator N.',
    owned: 0,
    delay: 1,
    cost: {
      base: 21e14, // 2,100,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 29e8, // 2,900,000,000
      current: 0,
    },
  },

  generatorO: {
    label: 'Generator O',
    message: 'Purchased Generator O.',
    owned: 0,
    delay: 1,
    cost: {
      base: 26e15, // 26,000,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 21e9, // 21,000,000,000
      current: 0,
    },
  },

  generatorP: {
    label: 'Generator P',
    message: 'Purchased Generator P.',
    owned: 0,
    delay: 1,
    cost: {
      base: 31e16, // 310,000,000,000,000,000
      rate: 1.15,
    },
    output: {
      base: 15e10, // 150,000,000,000
      current: 0,
    },
  },
};

state.messages = {
  1: 'You synthesized a cell.',
  10: 'You made ten cells.',
  13: 'You almost have enough to cultivate a zygote.',
  100: 'Your new company has now produced a total of one hundred cells.',
  1000: 'The button has been clicked one thousand times.',
  10000: 'The button has been clicked ten thousand times.',
  100000: 'The button has been clicked one hundred thousand times.',
  1000000: 'The button has been clicked one million times.',
  10000000: 'The button has been clicked ten million times.',
  100000000: 'The button has been clicked one hundred million times.',
  1000000000: 'The button has been clicked one billion times.',
  10000000000: 'The button has been clicked ten billion times.',
  100000000000: 'The button has been clicked one hundred billion times.',
  1000000000000: 'The button has been clicked one trillion times.',
  10000000000000: 'The button has been clicked ten trillion times.',
  100000000000000: 'The button has been clicked one hundred trillion times.',
  1000000000000000: 'The button has been clicked one quadrillion times.',
  10000000000000000: 'The button has been clicked ten quadrillion times.',
  100000000000000000: 'The button has been clicked one hundred quadrillion times.',
  1000000000000000000: 'The button has been clicked one quitillion times.',
  10000000000000000000: 'The button has been clicked ten quitillion times.',
  100000000000000000000: 'The button has been clicked one hundred quitillion times.',
  1000000000000000000000: 'The button has been clicked one sextillion times.',
};


var tick;
function cellTick() {
  clearInterval(tick);
  if (state.clicks.cps == 0){

  } else {
    if (state.clicks.cps <= 100){
      tick = setInterval(function(){
        actions.increment(1);
      }, 1000 / state.clicks.cps)
    }
    if (100 < state.clicks.cps && state.clicks.cps < 1000){
      tick = setInterval(function(){
        actions.increment(10);
      }, 1000 / (state.clicks.cps / 10));
    }
    if (1000 < state.clicks.cps && state.clicks.cps < 10000){
      tick = setInterval(function(){
        actions.increment(100);
      }, 1000 / (state.clicks.cps / 100));
    }
    if (10000 < state.clicks.cps && state.clicks.cps < 100000){
      tick = setInterval(function(){
        actions.increment(1000);
      }, 1000 / (state.clicks.cps / 1000));
    }
    if (state.clicks.cps > 100000){
      tick = setInterval(function(){
        actions.increment(state.clicks.cps/20);
      }, 50);
    }
  }

}
/** Events. */

const loadEventListeners = () => {
  // button click
  elements.button.addEventListener(CLICK, () => {
    actions.increment(state.cursor.output.current);
    var cell = document.createElement('DIV');
    cell.innerText += '+ ' + state.cursor.output.current;
    cell.setAttribute('class', 'cell-anim');
    document.getElementById('cellholder').appendChild(cell);
    elements.button.style.transform = 'scale(0.9)';
    setTimeout(function() {
      elements.button.style.transform = 'scale(1)';
    }, 75);
    setTimeout(function() {
      cell.parentNode.removeChild(cell);
    }, 500);
  });
  document.getElementById('delete').addEventListener(CLICK, () => {
    storage.delete();
  });

  // cursor upgrade
  elements.cursor.addEventListener(CLICK, () => {
    if (state.clicks.current >= state.cursor.cost.next) {
      const { cursor } = state;
      actions.decrement(cursor.cost.next);
      actions.updateCursor();
      views.renderMessage(cursor.message);
      storage.save();
    }
  });
  // generator purchase
  Object.keys(state.generators).forEach(id => {
    const generator = state.generators[id];
    const generatorRow = getElementById(id);

    generatorRow.addEventListener(CLICK, () => {
      if (state.clicks.current >= generator.cost.next) {
        state.clicks.cps += generator.output.base / generator.delay;
        actions.decrement(generator.cost.next);
        actions.updateGenerator(id);
        storage.save();
/*
        if (generator.interval) {
          generator.interval.callback = () => {
            actions.increment(generator.output.current);
          };
        } else {
          generator.interval = {
            output: generator.output.current,
            callback: () => {
              actions.increment(generator.output.current);
            },
          };
          setInterval(generator.interval.callback, generator.delay * 1000);
        }
*/
        cellTick();

        if (generator.message) {
          views.renderMessage(generator.message);
        }
      }
    });
  });
};

/** Helpers. */

/**
 * @param  {Number} base
 * @param  {Number} rate
 * @param  {Number} owned
 * @return {Number}
 */
const calculateNextCost = (base, rate, owned) => {
  return Math.floor(base * Math.pow(rate, owned));
};

/**
 * @param  {String}      id
 * @return {HTMLElement}
 */
const getElementById = id => {
  return elements[id]
    ? elements[id]
    : (elements[id] = document.getElementById(id));
};

const format = (text, num) => {
  var text = Game.nFormat(text, num);
  return text;
};

const Game = {};
Game.nArray = ["", " K", " M", " B", " T", " Qa", " Qi", " Sx", " Sp", " Oc", " No", " De", "UnD", "DuD", "TrD", "QaD", "QiD", "SeD", "SpD", "OcD", "NoD", "Vi", "UnV"];
 Game.floor = function(n) {
   return (Math.abs(n) - Math.abs(Math.floor(n)) >= 0.9999999999999991) ? Math.ceil(n) : Math.floor(n);
 };
 Game.nFormat = function(n, d) {
   var l = (Game.floor(Math.log(Math.abs(n)) / Math.log(10)) <= 0) ? 0 : Game.floor(Math.log(Math.abs(n)) / Math.log(10));
   var p = (l % 3 === 0) ? 2 : (((l - 1) % 3 === 0) ? 1 : 0);
   var r = (Math.abs(n) < 1000) ? ((typeof d === "number") ? (Math.round(n * 100) / 100).toFixed(d) : Game.floor(n)) : (Game.floor(n / (Math.pow(10, Game.floor(l / 3) * 3 - p))) / Math.pow(10, p));
   return r + Game.nArray[Game.floor(l / 3)];
 };

/**
 * @param  {Number} clicks
 * @param  {Number} seconds
 * @return {String}

const formatGeneratorOutput = (clicks, seconds) => {
  return [
    clicks.toLocaleString(),
    clicks === 1 ? 'click' : 'clicks',
    '/',
    seconds.toLocaleString(),
    seconds === 1 ? 's' : 's',
  ].join(' ');
};
*/

/** Views. */
const views = {
  renderCounter: () => {
    if (state.clicks.current > 999999){
        $('#counter-fade').text('('+(state.clicks.current).toLocaleString()+')');
        $('#counter').text(format(state.clicks.current, 2))
    } else {
      $(elements.counter).text(state.clicks.current.toLocaleString());
    }
    $('#cps').text(format(state.clicks.cps, 1));
  },

  renderCursor: () => {
    const cursorRow = elements.cursor;
    const { cursor } = state;

    cursorRow.querySelector('.owned').innerText = (
      cursor.owned - 1
    ).toLocaleString();
    cursorRow.querySelector('.cost').innerText = format(cursor.cost.next);
  },

  /**
   * @param {String} id
   */
  renderGenerator: id => {
    const generator = state.generators[id];
    const generatorRow = getElementById(id);

    generatorRow.querySelector(
      '.owned'
    ).innerText = generator.owned.toLocaleString();
    generatorRow.querySelector('.cost').innerText = format(generator.cost.next);
  },

  renderGenerators: () => {
    Object.keys(state.generators).forEach(id => {
      views.renderGenerator(id);
    });
  },

  /**
   * @param {String} [text]
   */
  renderMessage: function(text) {
    var total = state.clicks.total;
    var message;

    if (text) {
      message = text;
    } else {
      // check for exact match in messages table
      if (state.messages[total]) {
        message = state.messages[total];
        delete state.messages[total];
      } else {
        // otherwise compare number of first message
        for (var key in state.messages) {
          if (total >= key) {
            message = state.messages[key];
            delete state.messages[key];
          }
          break;
        }
      }
    }

    if (!message) {
      return;
    }

    message = message.toLocaleString();
    if (message !== elements.message.innerText) {
      elements.message.innerText = message;
    }
  },

  constructTab: (label) => {
    var tab = document.createElement('A');
    tab.innerText = label;
    tab.setAttribute('onclick', 'show("' + label + '")');
    document.getElementById('nav').appendChild(tab);
  },
};

/** Actions. */
const actions = {
  /**
   * @param {Number}  number
   * @param {Boolean} [skipTotal]
   */
  increment: (number, skipTotal) => {
    const { clicks } = state;
    clicks.current += number;
    if (!skipTotal) {
      clicks.total += number;
      views.renderMessage();
    }

    views.renderCounter();
    project.checkUnlock();
    project.checkAffinity();

    elements.cursor.style.opacity =
      clicks.current < state.cursor.cost.next ? '0.2' : '1';

    const { generators } = state;

    Object.keys(generators).forEach(id => {
      const generatorRow = getElementById(id);
      generatorRow.style.opacity =
        clicks.current < generators[id].cost.next ? '0.2' : '1';
    });
    /*    INITIALIZING A NEW FEATURE
     */

    storage.save();
  },

  /**
   * @param {Number} clicks
   */
  decrement: clicks => {
    actions.increment(-clicks, true);
  },

  updateCursor: () => {
    const { cursor } = state;
    const { cost, output } = cursor;
    const owned = ++cursor.owned;
    cost.next = calculateNextCost(cost.base, cost.rate, owned - 1);
    output.current = output.next;
    output.next = Math.round(output.base * owned);
    views.renderCursor();
  },

  /**
   * @param {String} id
   */
  updateGenerator: id => {
    const generator = state.generators[id];
    const { cost, output } = generator;
    const owned = ++generator.owned;
    cost.next = calculateNextCost(cost.base, cost.rate, owned);
    output.current = output.next;
    output.next = Math.round(output.base * (owned + 1));
    views.renderGenerator(id);
  },
};















/* ==========    PROJECTS ============ */



state.projects = {
  currency: 'cells',
  message: 'Your generator has evolved. Projects unlocked.',
  unlock: 500,
  unlocked: false,
  funds: 0,
  affinity: 2,
  nextaffinity: 600,
  speed: 1,
  storage: 100,
  tier1: {
    p1: {
      label:'Nanoparticle Discovery',
      info:'The study of nanoparticles will allow for 25% more efficient cell engineering.',
      cost:34,
    },
    p2: {
      label:'Miracle Seed',
      info:'A new fertilization technique attempts to cease disease inheritance. Gain 3000 cells. ',
      cost:45,
    },
    p3: {
      label:'Lab Expansion',
      info:'Make more room to hold more cells. ',
      cost:90,
    },
    p4: {
      label:'Micro Encapulation',
      info:'Dissect cells to determine its inner secrets. Development efficiency increases. ',
      cost:200,
    },
    p10: {
      label:'Assemble SBE',
      info:'Design blueprint for a Synthetic Biological Engine (SBE).',
      cost:400,
    },
    p11: {
      label:'Initialize SBE',
      info:'Start up the engine for the artifical sythesis of cells with computated automation.',
      cost:500,
    },
    p11: {
      label:'Andrew Shi',
      info:'A furious clicker. Increase click count by 50.',
      cost:1000,
    }
  },
};


var fundTick;

const project = {
  checkUnlock: () => {
    if (state.clicks.current >= state.projects.unlock){
      if (!state.projects.unlocked){
        state.projects.unlocked = true;
        views.constructTab('Projects');
        project.init();
      }
    }
  },

  init: () => {
    project.btnState();
    clearInterval(fundTick);
    fundTick = setInterval(function(){
      project.incrementFunds();
    }, 1000 * 0.8 ** state.projects.speed)
  },

  incrementFunds: () => {
    if (state.projects.funds < state.projects.storage){
      state.projects.funds += 1;
      project.render();
      storage.save();
    }
  },

  render: () => {
    project.renderTier1();
    $('#funding').text(state.projects.funds);
    $('#maxfunds').text(state.projects.storage);
    $('#affinity').text(state.projects.affinity);
    $('#nextaffinity').text(format(state.projects.nextaffinity));
    $('#speed').text(state.projects.speed);
    $('#storage').text(state.projects.storage/100);
  },

  checkAffinity: () => {
    if (state.clicks.current >= state.projects.nextaffinity){
      state.projects.nextaffinity = state.projects.nextaffinity * 1.5 ** state.projects.affinity;
      state.projects.affinity ++;
      $('#speed').attr('disabled', state.speed + (state.storage/100) == state.affinity ? true : false);
      $('#storage').attr('disabled', state.speed + (state.storage/100) == state.affinity ? true : false);
      project.render();
      project.btnState();
    }
  },

  renderUpgrade: () => {
    $('#speed-btn').click(function(){
      if (state.projects.speed + state.projects.storage / 100 < state.projects.affinity){
        state.projects.speed += 1;
        project.init();
        project.render();
        project.btnState();
      }
    });
    $('#storage-btn').click(() => {
      if (state.projects.speed + state.projects.storage / 100 < state.projects.affinity){
        state.projects.storage += 100;
        project.render();
        project.btnState();
      }
    });
  },

  btnState: () => {
    if (state.projects.speed + state.projects.storage / 100 < state.projects.affinity){
      $('#speed-btn').attr('disabled',false);
      $('#storage-btn').attr('disabled',false);
    } else {
      $('#speed-btn').attr('disabled',true);
      $('#storage-btn').attr('disabled',true);
    };

  },

  drawTier1: () =>{
    Object.keys(state.projects.tier1).forEach(id => {
      const proj = state.projects.tier1[id];
      const projectElement = document.getElementsByClassName('project')[0].cloneNode(true);
      projectElement.id = id;
      const name = projectElement.querySelector('.name');
      const img = projectElement.querySelector('.icon');
      const cost = projectElement.querySelector('.cost');
      const details = projectElement.querySelector('.details');
      img.setAttribute('src', 'img/projects/' + proj.label + '.png');
      name.innerText = proj.label;
      details.innerText = proj.info;
      cost.innerText = proj.cost;
      $(projectElement).appendTo('#project-con');

      $('#'+id).click(function(){
        delete state.projects.tier1[id];
        $('#'+id).remove();
      })
    });
    var sample = document.getElementById('sample');
    sample.parentNode.removeChild(sample);
    project.renderTier1();
  },

  renderTier1: () => {
    Object.keys(state.projects.tier1).forEach(id => {
      const proj = state.projects.tier1[id];
      if (proj.cost > state.projects.funds) {$('#'+id).addClass('locked')} else {$('#'+id).removeClass('locked')}
    });
  }

};





// ONLOAD PAGE

const storage = {
  save: () => {
    localStorage.setItem('clicks', JSON.stringify(state.clicks));
    localStorage.setItem('cursor', JSON.stringify(state.cursor));
    localStorage.setItem('generators', JSON.stringify(state.generators));
    localStorage.setItem('projects', JSON.stringify(state.projects));
    localStorage.setItem('messages', JSON.stringify(state.messages));
  },
  load: () => {
    var tempClicks = JSON.parse(localStorage.getItem('clicks'));
    var tempCursor = JSON.parse(localStorage.getItem('cursor'));
    var tempGenerators = JSON.parse(localStorage.getItem('generators'));
    var tempProjects = JSON.parse(localStorage.getItem('projects'));
    var tempMessages = JSON.parse(localStorage.getItem('messages'));

    if (tempClicks !== null) {
      state.clicks = tempClicks;
      console.log('Clicks loaded successfully.');
    } else {
      //
      /* NEW GAME */

      console.log('New game rendered successfully.');
      // set `next` value for cursor `cost` and `output`
      state.cursor.cost.next = state.cursor.cost.base;
      state.cursor.output.next = state.cursor.output.base;
    }
    if (tempCursor !== null) {
      state.cursor = tempCursor;
      console.log('Cursor loaded successfully.');
    }
    if (tempGenerators !== null) {
      state.generators = tempGenerators;
      console.log('Upgrades loaded successfully.');
    }
    if (tempProjects !== null) {
      state.projects = tempProjects;
      console.log('Projects loaded successfully.');
    }
    if (tempMessages !== null) {
      state.messages = tempMessages;
      console.log('Messages loaded successfully.');
    }

    Object.keys(state.generators).forEach(id => {
      // set `next` value for generator `cost` and `output
      const generator = state.generators[id];
      generator.cost.next = generator.cost.base;
      generator.output.next = generator.output.base;

      // append upgrade to store
      const generatorElement = elements.cursor.cloneNode(true);
      generatorElement.id = id;
      const div = generatorElement.querySelector('.name');
      const img = generatorElement.querySelector('.icon');
      const out = generatorElement.querySelector('.output');
      img.setAttribute('src', 'img/' + id + '.png');
      div.innerText = generator.label;
      elements.store.appendChild(generatorElement);
      out.innerText =
        format(generator.output.base / generator.delay) + ' clicks / s';
    });

    loadEventListeners();

    views.renderCounter();
    views.renderCursor();
    views.renderGenerators();
    project.render();
    project.renderUpgrade();
    if (state.projects.unlocked){
      views.constructTab('Projects');
      project.init();
    }
    actions.increment(0);
    project.drawTier1();
    cellTick();
  },
  delete: () => {
      clearInterval(tick);
      localStorage.removeItem('clicks');
      localStorage.removeItem('cursor');
      localStorage.removeItem('generators');
      localStorage.removeItem('projects');
      localStorage.removeItem('messages');
      location.reload();
  },
};

const offline = {
  permission: () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification('Welcome Back', {
       icon: 'img/cell.png',
       body: '10000 cells were made while you were gone!',
      });
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification('Achievement Unlocked!', {
           icon: 'img/cell.png',
           body: 'You cultivated a lot of cells!',
          });
        }
      });
    }
  },
}

/** Bootstrap. */

storage.load();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
