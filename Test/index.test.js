const index = require('../index.js');

test('Ensures we have our index.', () => {
    expect(index).not.toBeFalsy();
})
// This one should give me a fail.