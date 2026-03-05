function throttle(fn,delay){

    let isThrottled =false;

    return function(...args){
       if(!isThrottled ){
        fn.apply(this,args);
        isThrottled =true;

        setTimeout(()=>{
            isThrottled= false
        },delay)

       }

    }

}

const search=(query)=>{
    console.log("testing js code", query)

}
const useThrottle= throttle(search,500);

useThrottle('sagar')
