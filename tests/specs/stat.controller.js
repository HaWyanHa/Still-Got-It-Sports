(function() {
    'use strict';

    var assert = chai.assert;

    suite('player controller', function() {      //everything the test is going to do
        var statCtrl;

        setup(module('football'));

        setup(inject(function($controller){

            statCtrl = $controller("StatController");

        }));

        test("test receiver math works with male and female", function(){    

                var player = {"gender": "female", "rec": 1, "rtd": 1};
                var malePlayer = {"gender": "female", "rec": 1, "rtd": 1};
                var points = statCtrl.recPoints(player);

            assert.strictEqual(points, 8, "receiver function works on female" );

        });



    });
})();