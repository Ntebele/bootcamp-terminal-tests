import greet from "../greet";
import assert from "assert"

describe('Test my greet function' , function(){
    it("should return `Hello, Bob` when called with 'Bob' " , function(){
        assert.equal("Hello, Bob", greet('Bob'), "This should not be true");
    });

        it("should return `Hello, Sam` when called with 'Sam'", function() {
        assert.equal("Hello, Sam" , greet('Sam'),  "This should not be true");
    });

});