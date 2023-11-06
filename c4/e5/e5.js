const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function executePromises() {
  try {
    await delay(2000);
        console.log('One');
    await delay(4000);
        console.log('Two');
    await delay(6000);
        console.log('Three');
        console.log('All promises have resolved');
  } catch (error) {
        console.error('An error occurred:', error);
  }
}

executePromises();
