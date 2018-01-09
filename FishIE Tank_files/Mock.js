// AZM: Benchmarkification
// AZM: This value controls whether mock cavnas elements are used.
var benchmarkify = true;

function MockCanvas() {
    this.style = {};
    this.width = 0;
    this.height = 0;

    this.context = new MockContext(this);

    this.getContext = function () {
        return this.context;
    };

    this.setAttribute = function () { };
}

function MockContext(canvas) {
    this.canvas = canvas;

    this.arc = function () { };
    this.save = function () { };
    this.restore = function () { };
    this.strokeWidth = 0;
    this.strokeStyle = 0;
    this.fillStyle = 0;
    this.beginPath = function () { };
    this.closePath = function () { };
    this.stroke = function () { };
    this.rect = function () { };
    this.fill = function () { };
    this.translate = function () { };
    this.globalAlpha = 0;
    this.drawImage = function () { };
    this.clearRect = function () { };
    this.scale = function () { };
    this.transform = function () { };
    this.setTransform = function () { };
    this.moveTo = function () { };
    this.lineTo = function () { };
    this.bezierCurveTo = function () { };
    this.clip = function () { };
    this.font = 0;
    this.textAlign = 0;
    this.strokeText = function () { };
    this.fillText = function () { };
    this.fillRect = function () { };
    this.globalCompositeOperation = "";
    this.rotate = function () { };
    this.scale = function () { };
    this.lineCap = "";
    this.lineJoin = "";
    this.lineWidth = "";
    this.createLinearGradient = function () {
        return new MockGradient();
    };
    this.measureText = function () {
        return new MockTextSize();
    };
}

function MockGradient() {
}

MockGradient.prototype.addColorStop = function () {
}

function MockTextSize() {
    this.width = 0;
    this.height = 0;
}

function Mock() {
    if (benchmarkify) {
        this.fishCanvas = new MockCanvas();
        this.backgroundCanvas = new MockCanvas();
        this.fpsCanvas = new MockCanvas();
    } else {
        this.fishCanvas = document.createElement("canvas");
        this.backgroundCanvas = document.createElement("canvas");
        this.fpsCanvas = document.createElement("canvas");
    }
}

var mock = new Mock();
