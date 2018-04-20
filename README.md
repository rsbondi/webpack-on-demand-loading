# How do I do this?

I want an app that can load plugins/extensions that are not part of the bundle

in `index.js`

```javascript
const pages = ["Home", "About"/*, "Extension"*/]
```

in the `pages` directory there is a file `extension.txt`

how can I set up so that I can remove the comment on the `pages` array and build.  Now to simulate a third party plugin, take `extension.txt` as an example, renamed to `extension.js` and put somewhere, somehow so that it will work outside of the bundle

The use case is an electron app, but this seemed the simplest way to illustrate.  The `pages` array will be read from the filesystem.  `Home` and `About` represent built in components, and `Extension` represents a third party post build component.