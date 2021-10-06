async function aa() {
    const promise = Promise.resolve(123);
    console.log(await promise);
}

aa();
