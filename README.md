A reproduction for https://github.com/react-hook-form/react-hook-form/issues.

1. Clone the repo.
2. `npm run build`
3. `npm run serve`
4. Navigate to `localhost:8080`.
5. Open the JavaScript console to see the error, "process is not defined".

```
preact.module.js:1 Uncaught ReferenceError: process is not defined
    at registerFieldRef (index.esm.js:1092)
    at register (index.esm.js:1181)
    at I (preact.module.js:1)
    at m (preact.module.js:1)
    at $ (preact.module.js:1)
    at m (preact.module.js:1)
    at $ (preact.module.js:1)
    at O (preact.module.js:1)
    at main.js:20
    at main.js:20
```

Here is the relevant line of code:

https://github.com/react-hook-form/react-hook-form/blob/fce8ce14de463e37cb781baf33241ff823ad7e5a/src/useForm.ts#L929

You can "fix" the bug by uncommenting line #7 in `src/main.js`.

Feel free to email me at spaceaardvarkgo@gmail.com with questions!
