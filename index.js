const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = () => {
  // const titleCasedArray = [];
  
  // for (const line of tutorials) {
  //   const words = line.split(" ");
  //   let capitalizedLine = "";
    
  //   for (const word of words) {
  //     capitalizedLine += word.charAt(0).toUpperCase() + word.slice(1) + " ";
  //   }
    
  //   titleCasedArray.push(capitalizedLine.trim());
  // }

  // return titleCasedArray;

  return tutorials.map((line) => {
    const words = line.split(" ");
    const map1 = words.map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // console.log(map1.join(' ')) // TO CHECK OUT RUNING NODE INDEX.JS
    return map1.join(' ')

  })
};

console.log(titleCased())