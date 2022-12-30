# Websupport API

<div float="left">

[![npm version](https://img.shields.io/npm/v/websupport.svg)](https://www.npmjs.org/package/websupport)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/websupport)](https://bundlephobia.com/package/websupport@latest)
[![npm install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=websupport&query=$.install.pretty&label=install%20size)](https://packagephobia.now.sh/result?p=websupport)
[![npm downloads](https://img.shields.io/npm/dw/websupport)](https://www.npmjs.org/package/websupport)

</div>

https://rest.websupport.sk/docs/index

- [x] User management
- [x] Service management
- [ ] Invoice management
- [ ] Ordering new services
- [x] DNS management
- [ ] Hosting management
- [ ] VPS management

How to use:

```
import { Websupport } from "websupport";

const websupport = new Websupport({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});

const myUser = websupport.user.getOneMine();
console.log("My username:", myUser.login)
```

in case some endpoints are not implemented yet, you can use it like this

```
import { Websupport } from "websupport";

const websupport = new Websupport({
  apiKey: 'YOUR_API_KEY',
  apiSecret: 'YOUR_API_SECRET',
});

const apiService = websupport.getApiService();
const myUser = await apiService.get("/user/self")
console.log("My username:", myUser.login)
```
