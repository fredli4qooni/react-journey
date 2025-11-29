function runSynchronous() {
    console.log('Sychronous Start');
    
    const start = Date.now();
    while (Date.now() - start < 3000) {
    }
    
    console.log('Synchronous End');
    alert('Finished Blocking Task!'); 
}

function runAsynchronous() {
    console.log('Async Start');

    setTimeout(() => {
        console.log('Async Callback Executed (from Callback Queue)');
        alert('Async Task Done!');
    }, 3000);

    console.log('Async End (Main Thread continues immediately)');
}