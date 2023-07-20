import assert from "assert";
import greet from "../greet.js";


describe('The greet function', function()
{
    it('should greet Lerato correctly', function(){
        assert.equal('Hello, Lerato', greet('Lerato'));
    });
    it('should greet Lebohang correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Lebohang', greet('Lebohang'));
});
})
