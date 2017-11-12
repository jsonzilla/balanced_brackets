const test = require('tape');
const index = require('./index');

test('Balanced Brackers {()}[]', (t) => {
  t.assert(index.balancedBrackets('{()}[]') === true), 'Correct check! Valid';
  t.end();
});

test('Balanced Brackers (){}[]', (t) => {
  t.assert(index.balancedBrackets('(){}[]') === true), 'Correct check! Valid';
  t.end();
});

test('Balanced Brackers (){}[]', (t) => {
  t.assert(index.balancedBrackets('(){}[]') === true), 'Correct check! Valid';
  t.end();
});

test('Balanced Brackers {(a())*8+[fd()^^r()]}', (t) => {
  t.assert(index.balancedBrackets('{(a())*8+[fd()^^r()]}') === true), 'Correct check! Valid';
  t.end();
});

test('Balanced Brackers []{()', (t) => {
  t.assert(index.balancedBrackets('[]{()') === false), 'Correct check! Invalid';
  t.end();
});

test('Balanced Brackers [{)]', (t) => {
  t.assert(index.balancedBrackets('[{)]') === false), 'Correct check! Invalid';
  t.end();
});

test('Balanced Brackers [{(}))]', (t) => {
  t.assert(index.balancedBrackets('[{(}))]') === false), 'Correct check! Invalid';
  t.end();
});

test('Balanced Brackers [{(})])', (t) => {
  t.assert(index.balancedBrackets('[{(})])') === false), 'Correct check! Invalid';
  t.end();
});