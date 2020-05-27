# Async function practical explanation

```bash
npm install
node index.js
```

```text
0s started A request synchronous
3.401s finished A request synchronous
3.402s started B request asynchronous
3.402s started C request asynchronous
3.402s started D request asynchronous
3.402s started E request asynchronous
4.835s finished C request asynchronous
4.836s finished D request asynchronous
6.878s finished E request asynchronous
7.799s finished B request asynchronous
7.799s started F request synchronous
11.387s finished F request synchronous
```

[Explained on stackowerflow](https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean)