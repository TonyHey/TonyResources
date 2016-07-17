function dcf(test){
    return({
            cat :function(){console.log('cat');},
            dog :function(){console.log('dog');}
        }
        [test] || function(){console.log('default');}
    )();
}

dcf();
dcf('dog');