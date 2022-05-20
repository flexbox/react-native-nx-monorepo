# FAQ

## debug hoist issues

I have a build error with native dependencies, how to I detect where the library is installed?

1. run this from your terminal

```console
find . -type d | grep react-native-safe-area-context
```

2. Update `apps/mobile/package.json` to

```json
  "dependencies": {
    ...
    "react-native-safe-area-context": "*",
    ...
  }
```
