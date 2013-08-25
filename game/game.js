TheGame = pc.Game.extend('TheGame',
  { },
  {
    gameScene: null,
    loadingScene: null,
    loadingLayer: null,

    onReady: function() {
        this._super();

        // load resources
        pc.device.loader.setDisableCache();
        pc.device.loader.add(new pc.Image('playerShip',     'sprites/ship1.png'));
        pc.device.loader.add(new pc.Image('stars',          'sprites/stars.png'));
        pc.device.loader.add(new pc.Image('explosions',     'sprites/smallexplosions.png'));
        pc.device.loader.add(new pc.Image('plasma-fire',    'sprites/flareblue16.png'));
        pc.device.loader.add(new pc.Image('asteroid1',      'sprites/asteroid1.png'));
        pc.device.loader.add(new pc.Image('asteroid-small', 'sprites/asteroid-small.png'));
        pc.device.loader.add(new pc.Image('smoke',          'sprites/smoke1.png'));

        // if (pc.device.soundEnabled) {
        //     pc.device.loader.add(new pc.Sound('fire', 'sounds/lowfire', ['ogg', 'mp3'], 15));
        //     pc.device.loader.add(new pc.Sound('explosion', 'sounds/explosion', ['ogg', 'mp3'], 12));
        //     pc.device.loader.add(new pc.Sound('music1', 'sounds/flashforward', ['ogg', 'mp3'], 1));
        // }

        this.loadingScene = new pc.Scene();
        this.loadingLayer = new pc.Layer('loading');
        this.loadingScene.addLayer(this.loadingLayer);

        pc.device.loader.start(this.onLoading.bind(this), this.onLoaded.bind(this));
    },

    onLoading: function(percentageComplete) {
        var ctx = pc.device.ctx;
        ctx.clearRect(0, 0, pc.device.canvasWidth, pc.device.canvasHeight);
        ctx.font = "normal 50px Verdana";
        ctx.fillStyle = "#88f";
        ctx.fillText('Asteroids', 40, (pc.device.canvasHeight / 2) - 50);
        ctx.font = "normal 18px Verdana";
        ctx.fillStyle = "#777";
        ctx.fillText('Loading: ' + percentageComplete + '%', 40, pc.device.canvasHeight / 2);
    },

    onLoaded: function() {
        this.gameScene = new GameScene();
        this.addScene(this.gameScene);
    }

  }
);