const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    
    async taskOne(){
        throw new Error('Algo anda mal!!');
        await sleep(4000);
        return 'One';
    },
    
    async taskTwo(){
        await sleep(2000);
        return 'Two';
    }
    
};
    
    

