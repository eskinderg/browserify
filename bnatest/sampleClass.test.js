suite('Sample Class Test', function() {
  test('Default Attribute Must return False', function() {

    var sampleClass = BNAApp.sampleClass;

    assert.equal(sampleClass.get('completed'),false);

  });
});
