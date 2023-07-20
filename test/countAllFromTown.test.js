import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";


describe('The countAllFromTown function', function()
{
    var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
    //fromStellies should contains
    it('should return the number of registration numbers', function()
    {
        assert.equal(fromStellies, 3)
    }
    )
    
    var fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
    //fromStellies should contains
    it('should return the number of registration numbers', function()
    {
        assert.equal(fromKuilsriver, 1)
    })
    
});
