const QRCode = require('qrcode');
const sources = require('./data/sources.json');

console.log(`Generating ${sources.length} file(s)...`);

sources.map((source) => {
  QRCode.toFile(
    `results/${source.name}.png`,
    source.value,
    {
      color: {
        dark: '#000',
        light: '#FFF',
      },
      width: 1024,
    },
    function (err) {
      if (err) throw err;
      console.log('Filename:', `${source.name}.png`, 'is done!');
    }
  );
});
