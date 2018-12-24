var context = new AudioContext()

var notes = [
    [4, 1], [4, 1], [4, 2], [4, 1], [4, 1], [4, 2], [4, 1], [7, 1], [0, 1.5], [2, 0.5], [4, 4],
    [5, 1], [5, 1], [5, 1.5], [5, 0.5], [5, 1], [4, 1], [4, 1], [4, 0.5], [4, 0.5], [4, 1], [2, 1], [2, 1], [4, 1], [2, 2], [7, 2],
    [4, 1], [4, 1], [4, 2], [4, 1], [4, 1], [4, 2], [4, 1], [7, 1], [0, 1.5], [2, 0.5], [4, 4],
    [5, 1], [5, 1], [5, 1.5], [5, 0.5], [5, 1], [4, 1], [4, 1], [4, 0.5], [4, 0.5], [7, 1], [7, 1], [5, 1], [2, 1], [0, 3], [12, 1]
];

var position = 0;

for(var i = 0; i < notes.length; i++) {

    setTimeout((function(note, len) {
        return function() {
            var o = context.createOscillator()
            o.type = 'sine'
            o.frequency.value = 440.0;
            for (var j = 0; j < note; j++) o.frequency.value *= 1.0594;
            o.connect(context.destination)
            o.start();
            setTimeout(function() { o.stop() }, 250 * len);
        }
    })(notes[i][0], notes[i][1]), position);
    position += notes[i][1] * 250 + 100;
}