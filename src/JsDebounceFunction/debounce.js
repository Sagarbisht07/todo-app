function debounce(fn,delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
             fn.apply(this , args)
        },delay)
    }
}

const search = (query) => {
  console.log("Searching for:", query);
};

const debouncedSearch = debounce(search, 500);

debouncedSearch('sagar')