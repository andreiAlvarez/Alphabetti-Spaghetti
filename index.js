// You will be given a string of letters. The string must be returned in alphabetical order.

const alphabetti = str => str.split``.sort((a,b)=>a.toLowerCase()>b.toLowerCase()).join``;
