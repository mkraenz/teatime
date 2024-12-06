# Daily Questions App

Inofficial app to follow Marshall Goldsmith's 6 Daily Questions from his book [Triggers](https://marshallgoldsmith.com/book-page-triggers/).

This repo was moved into the monorepo from [mkraenz/daily-questions](https://github.com/mkraenz/daily-questions).

Check the [Readme of You are Awesome App! Daily Motivation Up!](https://github.com/proSingularity/you-are-awesome-app) on how to debug and much more.

<!-- TODO rewrite for monorepo setup -->

## Getting Started

```sh
yarn install --frozen-lockfile
yarn dev
```

**Warning**: At least for me on Ubuntu 22 with Expo 49 and 50, I was not able to run the app inside Expo Go on an Android Emulator. However, using an actual device with Expo Go (v2.30.8) installed everything works just fine, as long as you're on the same wifi network.

## Deployment

See also [EAS Build Guide](https://docs.expo.dev/build/setup/).

```sh
yarn eas login
# verify you're logged in
yarn eas whoami

# from repository root
# build and deploy
nx build daily-questions --platform=android

# submit to Google Playstore
# configure via eas.json
nx submit daily-questions --platform=android

# DEBUG: https://github.com/expo/fyi/blob/main/eas-build-archive.md
```

### Local installation on phone or emulator

#### Install the production build on a device

This is basically what Google Play does when an enduser downloads and installs the app.

##### Overview

- Download `.aab` file from EAS
- Download keystore from EAS
- Download bundletool
- Unpack `.aab` into `.apks` and sign it
- Connect device in USB debugging
- Install the app on device

##### Step by Step

Build the app as usual, then click 'Download' button in the EAS Build UI to download the appbundle `.aab` file. Move the file into `apps/daily-questions/` and rename to `dq.aab`.

```sh
cd apps/daily-questions/
npx eas-cli credentials --platform=android
# select 'production'
# select 'Keystore: Manage everything needed to build your project'
# select 'Download existing keystore'
# select 'yes' on the question about displaying sensitive information of the android keystore
```

This will download the keystore into the current working directory, and the terminal will output:

```txt
Keystore password: asdf
Key alias:         asdf==
Key password:      asdf

Path to Keystore:  @username__daily-questions.jks
```

Next, back to repository root, download bundletool, then back into the project root:

```sh
cd ../..
nx download:bundletool-latest daily-questions
cd apps/daily-questions
```

Next, lets unpack into almost installable `.apks` file:

```sh
KEYSTORE_FILE_NAME='@username__daily-questions.jks' # copy from above
KEYSTORE_KEY_ALIAS='' # copy from above

java -jar bundletool.jar build-apks --bundle=dq.aab --output=dq.apks --mode=universal --ks=$KEYSTORE_FILE_NAME --ks-key-alias=$KEYSTORE_KEY_ALIAS
```

It will ask for the keystore password and key password. Enter the password you got from downloading the keystore.

Finally, connect your device and enable USB Debugging. Then run:

```sh
java -jar bundletool.jar install-apks --apks=dq.apks
```

If you get an error saying `Error: Device found but not authorized for connecting. Please allow USB debugging on the device.`, then check your device for the authorization popup, accept it, and try again.

### Local .apk build

To speed up development, it is sometimes possible to build an apk without using the expo build services (Turtle). This may require some setup (like Android Studio and maybe more).

```sh
yarn build:local
```

## Development

### FAQ

#### Some redux middleware complaints when used with react-redux

##### Symptom

```log
A non-serializable value was detected in an action, in the path: `payload`. Value:, Class {
  "_dispatchInstances": FiberNode {
...
SerializableStateInvariantMiddleware took 64ms, which is more than the warning threshold of 32ms.
...
```

##### Analysis and Solution

You probably use some code like this

```tsx
<Button mode="outlined" onPress={clearHistory}>
  Clear history
</Button>
```

where `clearHistory` is an action creator injected using react-redux' `connect` and `mapDispatch`.

`onPress` seems to implicitely pass some argument to the function. So to fix the warning, explicitely ignore the argument and call your function without it like so

```tsx
<Button mode="outlined" onPress={() => clearHistory()}>
  Clear history
</Button>
```

## Licence

Code is licensed under MIT. Files under `/assets/` are **NOT** licensed under MIT. You may clone or forge the repository with the assets included but please do not distribute your app using the same images and logos. Thank you :)

## Links and Resources

- [Mobile Screen Reader Testing](https://scottvinkle.me/blogs/work/mobile-screen-reader-testing)
- [React Native Accessibility](https://www.shopify.com/partners/blog/react-native-accessibility)
