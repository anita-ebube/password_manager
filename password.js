const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const numbercaseEl = document.getElementById('numbers');



const randomFunc ={
    lower: getRandomLower,
     upper:getRandomUpper, 
     number:getRandomNumber,
     symbol:getRandomSymbols
};

//this function is to get if the buttonns are clicked or not
generateEl.addEventListener('click' ,() =>{
    //This to be able to get the length of inputed range
    
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbercaseEl.checked;
    const hasSymbol= symbolsEl.checked;
    //Storing into resultEl the true or false
    resultEl.innerText = generatePassword(hasLower,hasNumber,hasUpper,hasSymbol,length);
   
});

function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;

    // console.log('typescount', typesCount);

    const typesArr=[{lower},{upper},{number},{symbol}].filter(
        item => Object.values(item)[0]
    );

    // console.log('typesArr:', typesArr);

    if(typesCount === 0){
        return '';
    }
    // console.log("me",lengthEl)

    for (let i = 0; i < length; i += typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];

            generatePassword += randomFunc[funcName]();
        });
        // console.log(generatedPassword)
    }
     const finalPassword = generatedPassword.slice(0, length);
     return finalPassword ;
    
}
    // console.log(generatePassword(lower,upper,number,symbol,length))

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() *26));

}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26));
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() *10));
}

function getRandomSymbols(){
    const symbols = '!@#$%^&*(){}[]=<>?,.';
    return symbols[Math.floor(Math.random() * symbols.length)]
}
