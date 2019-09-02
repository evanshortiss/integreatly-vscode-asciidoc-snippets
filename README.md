# Integreatly VS Code AsciiDoc Snippets

These snippets can be installed as a VS Code plugin to assist your development of walkthroughs for Integreatly clusters.

## Usage

Simply start typing "integreatly" and a dropdown of variables should appear in your editor. If you know the name of the variable you need you can begin typing that instead and it will be suggested.

<div align="center">
  <img alt="Extension Example GIF" src="https://github.com/evanshortiss/integreatly-vscode-walkthrough-snippets/blob/master/images/auto-complete.gif?raw=true"/>
</div>

## Installation

You can install from the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=evanshortiss.integreatly-vscode-asciidoc-snippets),
or directly from VS Code using the Extensions view.

Alternatively you can install the plugin manually like so:

1. Download a release `.vsix` file from the Releases page of this repository.
2. Use the `code` command to install the extenstion from the file, e.g
`code ~/Downloads/integreatly-vscode-asciidoc-snippets-0.5.0.vsix`

## Release Process

Scripts to manage releases are in the *package.json*. Increment the version
in the `package.version` field and run:

```
export VSCE_PAT=the-personal-access-token
npm run vsce:package
npm run vsce:publish
```

## Contributing

If you'd like to make a PR, fork the repository, add your changes to the `.vscode/integreatly.code-snippets` file, and make a Pull Request.

To verify your changes simply use the `walkthroughs/snippets-test/walkthrough.adoc` to try them out.
