(function() {
    'use strict';

    var assert = chai.assert;

    suite('player controller', function() {      //everything the test is going to do
        var statCtrl;
        var femalePlayer = {
            "rec": 1, 
            "rtd": 2, 
            "tackles": 1, 
            "dint": 1, 
            "dtd": 1, 
            "comp": 1, 
            "ptd": 1, 
            "pint": 1, 
            "gender": "female"
        }
        var malePlayer = {
            "rec": 2, 
            "rtd": 2, 
            "tackles": 1, 
            "dint": 1, 
            "dtd": 1, 
            "comp": 3, 
            "ptd": 1, 
            "pint": 2, 
            "gender": "male"
        }


        setup(module('football'));

        setup(inject(function($controller){

            statCtrl = $controller("StatController");

        }));
        test("receiver math works for male", function(){    

                var points = statCtrl.recPoints(malePlayer);

            assert.strictEqual(points, 12, "math is correct" );
        });
        test("receiver math works for female", function(){    

                var points = statCtrl.recPoints(femalePlayer);

            assert.strictEqual(points, 15, "math is correct" );
        });
        test("defensive math works for male", function(){    

                var points = statCtrl.defPoints(malePlayer);

            assert.strictEqual(points, 13, "math is correct" );
        });
        test("defensive math works for male", function(){    

                var points = statCtrl.defPoints(femalePlayer);

            assert.strictEqual(points, 18, "math is correct" );
        });
        test("passing math works for male", function(){    

                var points = statCtrl.pasPoints(malePlayer);

            assert.strictEqual(points, 0, "math is correct" );
        });
        test("passing math works for male", function(){    

                var points = statCtrl.pasPoints(femalePlayer);

            assert.strictEqual(points, 3, "math is correct" );
        });


    });
})();