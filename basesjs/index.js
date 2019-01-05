const { taskOne, taskTwo } = require('./tasks');


async function main() {
    console.time('time');
    const valOne = await taskOne();
    const valTwo = await taskTwo();
    console.timeEnd('time');

    console.log('Task one', valOne);
    console.log('Task two', valTwo);
}

main();