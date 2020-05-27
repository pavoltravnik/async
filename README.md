# Async and sync function in javascript as practical explanation

[Explained on stackowerflow](https://stackoverflow.com/questions/748175/asynchronous-vs-synchronous-execution-what-does-it-really-mean)

```bash
npm install
```

## Async function example

```bash
node async.js
```

```text
0s started A request
3.476s finished A request
3.476s started B request
3.476s started C request
3.477s started D request
3.477s started E request
5.213s finished C request
5.215s finished D request
6.954s finished E request
7.874s finished B request
7.874s started F request
11.353s finished F request
```

## Sync function example

```bash
node sync.js
```

```text
0s started A request
3.385s finished A request
3.385s started B request
3.385s started C request
3.385s started D request
3.385s started E request
4.809s finished D request
4.811s finished C request
6.754s finished E request
7.777s finished B request
```
