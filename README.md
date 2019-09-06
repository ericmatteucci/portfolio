# Welcome to my portfolio!

This application was created using Next.js with some added technologies.
These include:
- Redux
- Typescript
- ESLint

## Development 

This application was created with simple development in mind! In order to create a dev instance, 
simple run the following:
```shell
$ npm run dev
```
This will create a local instance on port 3000.

## Testing

This application has the finest built in tools for testing! For enforcement of code style 
and typing, ESLint and typescript have been installed. For ESLint, you can both run the lint on its own,
and run it with auto-fixing functionality. Run the following commands to do either of these options:
```shell
$ npm run lint

$ npm run lint-fix
```
Typescript is already built in! Your IDE should post warnings as you type. When creating a new file, ensure 
you are using typescript line endings. That is, .js -> .ts and .jsx -> .tsx

Finally, for unit testing, jest is installed! (Mocha, chai, and/or enzyme are probably coming in future...)
To run the test suite, simple do the following:
```shell
npm run test
```

## Deployment

This application has built in deployment! To deploy simple run the following:
```shell
$ now
```
This will deploy the instance to
```text
https://{project-name}.{now-username}.now.sh
```
Note you need an active user account in order to deploy. As well, the repo needs to be connected to the now website.