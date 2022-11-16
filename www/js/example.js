// Using example
let appID = "<appID>" // Coloque o appID da tua aplicação no facebook aqui
let backgroundImage = "img/vaisercagao.jpg";
let stickerImage = "img/claudia.png";
let attributeURL = null; // Link pra url, quando o usuario clica o cordova manda uma request pra ele
let backgroundTopColor = null
let backgroundBottomColor = null
let opts = { appID, backgroundImage, stickerImage, backgroundTopColor, backgroundBottomColor };

console.log("starting share to story test")
var PLUGIN_NAME = 'IGStory';
cordova.plugin = {
  igstory: {
    shareToStory: function(opts, cb, err) {
      cordova.exec(cb, err, PLUGIN_NAME, 'shareToStory', [opts.appID, opts.backgroundImage, opts.stickerImage, opts.attributionURL, opts.backgroundTopColor, opts.backgroundBottomColor]);
    },
    shareImageToStory: function(opts, cb, err) {
      cordova.exec(cb, err, PLUGIN_NAME, 'shareImageToStory', [opts.appID, opts.backgroundImage]);
    },
  }
};

console.log(JSON.stringify(opts), JSON.stringify(cordova.plugin));
document.getElementById("send").addEventListener("click", e => {
  cordova.plugin.igstory.shareToStory(opts, s => console.log("success: ", s), e => console.log("error: ", e)) // .then((s) => console.log(s)).catch(e => console.log(e));
})
