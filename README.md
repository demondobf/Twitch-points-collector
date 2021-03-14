## Installation

From the [releases page](https://github.com/demondobf/twitch-points-collector/releases) download
`twitch-points-collector.zip`, then unzip it. <br> Now you have to add the unzipped directory to
your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `twitch-points-collector` directory.

## Development

Navigate to the project directory and install the dependencies.

```
$ npm install
```

To build the extension, and rebuild it when the files are changed, run

```
$ npm start
```

After the project has been built, a directory named `dist` has been created. You have to add this
directory to your Chrome browser:

1. Open Chrome.
2. Navigate to `chrome://extensions`.
3. Enable _Developer mode_.
4. Click _Load unpacked_.
5. Select the `dist` directory.
