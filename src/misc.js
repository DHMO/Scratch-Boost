(function(ext) {
    var countDown = false;
    var readyS = true;
	ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.countdown = function(time) {
        window.setTimeout(function(){
            countDown = true;
        }, time*1000);
    }
    ext.countdownOff = function() {
        if (countDown === true) {
            countDown = false;
            return true;
        }else{
            return false;
        }
    }
    ext.ifElseVal = function(tf, op1, op2) {
        if (tf) {
            return op1;
        }else{
            return op2;
        }
    }
    ext.inequal = function(x, ine, y) {
        if (ine == '≥') {
            return (x >= y);
        }else if (ine == '≤') {
            return (x <= y);
        }else if (ine == '≠') {
            return (x != y);
        }
    }
    ext.bi = function() {
        return true
    }
    ext.rgb = function(r, g, b) {
        return ((r*65536)+(g*256)+b);
    }
    ext.com = function() {}
    ext.when = function(tf) {
        if(readyS){
            if(tf){
                readyS = false;
                return true;
            }else{
                return false;
            }
        }else{
            if(tf){
                return false;
            }else{
                readyS = true;
                return false;
            }
        }
    }
    ext.toNum = function(bool) {
	return (bool) ? 1 : 0
    }
    var descriptor = {
        blocks: [
            ['h', 'when countdown goes off', 'countdownOff'],
            [' ', 'set countdown to %n secs', 'countdown', 1],
            ['r', 'if %b then %s else %s', 'ifElseVal', null, '1', '0'],
            ['b', '%n %m.inequals %n', 'inequal', 2, '≠', 2],
            ['r', 'color r: %n g: %n b: %n', 'rgb', 255, 255, 255],
            ['b', 'Scratch Boost installed?', 'bi'],
            [' ', 'comment %s', 'com', 'Blah Blah Blah'],
            ['h', 'whenever %b becomes true', 'when', null],
            ['r', '%b to number', 'toNum', null],
        ],
        menus: {
            inequals: ['≥', '≤', '≠']
        },
        url: "http://Iwotastic.github.io/Scratch-Boost/index.html#miscellaneous"
    };
    ScratchExtensions.register('Boost - Miscellaneous', descriptor, ext);
})({}); 
