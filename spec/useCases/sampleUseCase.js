/*
if (typeof MembraneMocks != "function") {
    if (typeof require == "function") {
        var { MembraneMocks } = require("../../dist/node/mocks.js");
    }
    else
        throw new Error("Unable to run tests: cannot get MembraneMocks");
}

if (typeof dampObjectGraph != "function") {
    if (typeof require == "function") {
        var { dampObjectGraph } = require("../../mocks/dampObjectGraph.js");
    }
    else
        throw new Error("Unable to run tests:  cannot get dampObjectGraph");
}

{
    let MockupsForThisTest = function() {
        // This function you're free to customize any way you want.
        let parts = MembraneMocks();
        dampObjectGraph(parts);
    
        let dryProto = parts.membrane.convertArgumentToProxy(
            parts.handlers.wet,
            parts.handlers.dry,
            Object.prototype
        );
        dryHandler.defineProxyProperties(dryProto, {
            "membraneGraphName":  {
                get: function() {
                    return dryHandler.fieldName;
                },
                enumerable: false,
                configurable: false
            }
        });
        return parts;
    };

    xdescribe("Sample use case template", function() {
        // Customize this for whatever variables you need.
        var parts;
        beforeEach(function() {
            parts = MockupsForThisTest();
        });
        afterEach(function() {
          parts = null;
        });

        xit("Sample test case", function() {
            // Check the new property is available in the dry object graph.
            expect(parts.dry.doc.membraneGraphName).toBe("dry");

            // Ensure the new property is NOT available in the wet object graph.
            // This represents unwrapped objects.
            expect(typeof parts.wet.doc.membraneGraphName).toBe("undefined");
            expect("membraneGraphName" in parts.wet.doc).toBe(false);

            // Ensure the new property is NOT available in the damp object graph.
            // This represents that only the desired object graph is affected.
            expect(typeof parts.damp.doc.membraneGraphName).toBe("undefined");
            expect("membraneGraphName" in parts.damp.doc).toBe(false);

            // etc., etc., etc.
        });

        // Update wrappers/browser/test-browser.xhtml to include this test.
    });
}
*/
