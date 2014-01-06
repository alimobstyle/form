define(function(require) {
    var Events = require('../src/events')
    var expect = require('expect')

    describe('Events', function() {
        it('on and trigger', function() {
            var obj = new Events()
            obj.counter = 0

            obj.on('event', function() {
                obj.counter += 1
            })

            obj.trigger('event')
            expect(obj.counter).to.equal(1)

            obj.trigger('event')
            obj.trigger('event')
            obj.trigger('event')
            obj.trigger('event')
            expect(obj.counter).to.equal(5)
        })
    })
})