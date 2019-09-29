let obj = { notA : "dancing",  a : 1, b : 14, c : true}
for (let prop in obj) {
    console.log(`obj[${prop}] = ${obj[prop]} `);
}
