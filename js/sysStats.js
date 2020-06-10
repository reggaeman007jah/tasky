const path = require('path');
const osu = require('node-os-utils');
const cpu = osu.cpu;
const mem = osu.mem;
const os = osu.os;

// test notification on start
notifyUser({
  title: 'WELCOME TO THE ALERT',
});

// set model
document.getElementById('cpu-model').innerText = cpu.model();

// computer name
document.getElementById('comp-name').innerText = os.hostname();

// OS
document.getElementById('os').innerText = `${os.type()} ${os.arch()}`;

// total mem
mem.info().then((info) => {
  document.getElementById('mem-total').innerText = info.totalMemMb;
});

// send notification
function notifyUser(options) {
  new Notification(options.title, options);
}
