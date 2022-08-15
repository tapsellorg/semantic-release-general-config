# @tapsellorg/semantic-release-general-config

![semantic-release-general-config](https://socialify.git.ci/tapsellorg/semantic-release-general-config/image?description=1&font=Inter&logo=https%3A%2F%2Fwww.gitbook.com%2Fcdn-cgi%2Fimage%2Fwidth%3D100%2Cheight%3D100%2Cfit%3Dcontain%2Cdpr%3D1%2Cformat%3Dauto%2Fhttps%253A%252F%252F1374781452-files.gitbook.io%252F~%252Ffiles%252Fv0%252Fb%252Fgitbook-legacy-files%252Fo%252Fspaces%25252F-LGsE7zdvzHI5cG-XV6p%25252Favatar.png%253Fgeneration%253D1531025611396529%2526alt%253Dmedia&owner=1&pattern=Circuit%20Board&theme=Light)

[**semantic-release**](https://github.com/semantic-release/semantic-release) shareable config to publish npm packages with [GitLab](https://gitlab.com).

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/npm`](https://github.com/semantic-release/npm)
- [`@semantic-release/gitlab`](https://github.com/semantic-release/gitlab)

## Install

```bash
$ npm install --save-dev semantic-release @tapsellorg/semantic-release-general-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@tapsellorg/semantic-release-general-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
