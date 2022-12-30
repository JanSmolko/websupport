# Websupport API

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
