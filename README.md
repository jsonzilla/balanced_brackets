

# Balanced Brackets
----

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/27de1cc9bf504ebc89936de0f13f4026)](https://www.codacy.com/app/0um/BalancedBrackets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=0um/BalancedBrackets&amp;utm_campaign=Badge_Grade)

A function that takes a string of brackets as the input, and determines if the order of
the brackets is valid. A bracket is considered to be any one of the following characters: ```(, ),
{, }, [,``` or ```]```.
We say a sequence of brackets is valid if the following conditions are met:
* It contains no unmatched brackets.
* The subset of brackets enclosed within the confines of a matched pair of brackets is
also a matched pair of brackets.

Examples:
* ```(){}[]``` is valid
* ```[{()}](){}``` is valid
* ```[]{()``` is not valid
* ```[{)]``` is not valid

## Install
```
npm install
npm test
```

## Expected
```
TAP version 13
# Balanced Brackers {()}[]
ok 1 should be truthy
# Balanced Brackers (){}[]
ok 2 should be truthy
# Balanced Brackers (){}[]
ok 3 should be truthy
# Balanced Brackers {(a())*8+[fd()^^r()]}
ok 4 should be truthy
# Balanced Brackers []{()
ok 5 should be truthy
# Balanced Brackers [{)]
ok 6 should be truthy
# Balanced Brackers [{(}))]
ok 7 should be truthy
# Balanced Brackers [{(})])
ok 8 should be truthy

1..8
# tests 8
# pass  8

# ok
```
