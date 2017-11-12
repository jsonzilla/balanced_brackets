
function open(char) {
  return char === '{' || char === '(' || char === '[';
}

function close(char) {
  return char === '}' || char === ')' || char === ']';
}

function math_pair_pattern(o, c) {
  if (o === '(' && c === ')') return true;
  else if (o === '[' && c === ']') return true;
  else if (o === '{' && c === '}') return true;
  return false;
}

function balancedBrackets(str) {
  const stack = [];

  for (let i = 0; i <= str.length; i++) {
    let char = str[i];
    if (open(char)) {
      stack.push(char);
    }
    else if (close(char)) {
      if (!math_pair_pattern(stack.pop(), char)) return false;
    }
  }
        
  return stack.length === 0;
}

module.exports = {balancedBrackets};