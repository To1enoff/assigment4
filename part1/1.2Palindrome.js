function isPolindrome(S){
    for(let i = 0; i < S.length; i++){
        if(S[i] != S[S.length - 1 - i])
        return false;
    }
    return true;
}
 console.log(isPolindrome("sdsd"));