require([
    'tests/Recursive',
    'src/stub-module'
], function (
    Recursive,
    stubmodule
    ) {
    describe('recursive', function () {
        it('allows you to mock dependencies of base classes', function (done) {
            var spy = jasmine.createSpy('requestSpy');
            stubmodule('tests/Recursive', {
                'dojo/request': spy
            }).then(function (StubbedModule) {
                var testObject = new StubbedModule();

                testObject.test();

                expect(spy).toHaveBeenCalledWith('blah');
                done();
            });
        });
    });
});