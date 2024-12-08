# Dart Barrel File

[![Open VSX Version](https://img.shields.io/open-vsx/v/imgildev/ovsx-dart-barrel?style=for-the-badge)](https://open-vsx.org/extension/imgildev/ovsx-dart-barrel)
[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/imgildev/ovsx-dart-barrel?style=for-the-badge)](https://open-vsx.org/extension/imgildev/ovsx-dart-barrel)
[![Open VSX Rating](https://img.shields.io/open-vsx/rating/imgildev/ovsx-dart-barrel?style=for-the-badge)](https://open-vsx.org/extension/imgildev/ovsx-dart-barrel/reviews)
[![GitHub Repo stars](https://img.shields.io/github/stars/ManuelGil/ovsx-dart-barrel?style=for-the-badge&logo=github)](https://github.com/ManuelGil/ovsx-dart-barrel)
[![GitHub license](https://img.shields.io/github/license/ManuelGil/ovsx-dart-barrel?style=for-the-badge&logo=github)](https://github.com/ManuelGil/ovsx-dart-barrel/blob/main/LICENSE)

Dart Barrel File is an extension that helps you generate barrel files for your Dart and Flutter projects. Barrel files are used to export multiple files from a single location, making it easier to manage and import files across your project.

![demo](https://raw.githubusercontent.com/ManuelGil/ovsx-dart-barrel/main/docs/images/demo.gif)

A barrel is a file that exports all the files in a directory. It is a common practice in Dart and Flutter projects to use barrel files to export multiple files from a single location. Barrel files make it easier to manage and import files across your project, improving code organization and maintainability.

For example, suppose you have a directory with multiple files that you want to export from a single location. In that case, you can create a barrel file that exports all the files in the directory. This way, you can import the barrel file in other parts of your project and access all the exported files from a single import statement.

```dart
export 'file1.dart';
export 'file2.dart';
export 'file3.dart';
```

You can use the Dart Barrel File extension to generate barrel files for your Dart and Flutter projects. The extension provides a simple and intuitive interface that allows you to create barrel files with a single click. You can configure the extension to generate barrel files according to your project's needs, including specifying which file extensions to include, whether to include hidden files, and whether to export classes from files automatically.

## Table of Contents

- [Dart Barrel File](#dart-barrel-file)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Features](#features)
  - [Project Settings](#project-settings)
  - [Settings Options](#settings-options)
  - [Follow Me](#follow-me)
  - [VSXpert Template](#vsxpert-template)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Changelog](#changelog)
  - [Authors](#authors)
  - [License](#license)

## Requirements

- VSCode 1.76.0 or later

## Features

- **Generate Barrel Files**: Create barrel files with a single click to export multiple files from a single location.
- **Customizable Settings**: Configure the extension to generate barrel files according to your project's needs.
- **File Extensions**: Specify which file extensions to include in the barrel file.
- **Hidden Files**: Include or exclude hidden files from the barrel file generation process.
- **Class Export Detection**: Automatically detect and export classes from files in the barrel file.
- **Recursive Barrelling**: Generate barrel files for nested directories to export files from multiple locations.
- **Improve Productivity**: Focus on writing code and building great applications without worrying about managing exports.
- **Easy to Use**: Simple and intuitive interface makes it easy to generate barrel files with a single click.
- **Highly Customizable**: Tailor the extension to your project's needs with a wide range of settings options.
- **Free and Open Source**: Dart Barrel File is free to use and open-source software, so you can contribute to its development and improvement.

## Project Settings

Configure your project by creating or updating a settings.json file at the project's root. If you already have a `.vscode/settings.json` file, skip the first two steps.

1. Open the command palette in VSCode:

   - `CTRL + SHIFT + P` (Windows)
   - `CMD + SHIFT + P` (Mac OS)

2. Type `Preferences: Open Workspace Settings (JSON)`.

3. In the `.vscode/settings.json` file, copy and paste the following settings:

    ```json
    {
      "dartBarrel.files.disableRecursiveBarrelling": false,
      "dartBarrel.files.includeExtensionOnExport": ["dart"],
      "dartBarrel.files.ignoreFilePathPatternOnExport": ["**/*.freezed.dart", "**/*.g.dart"],
      "dartBarrel.files.supportsHiddenFiles": true,
      "dartBarrel.files.preserveGitignoreSettings": false,
      "dartBarrel.files.enableClassExportDetection": true,
      "dartBarrel.files.exportDefaultFilename": "barrel",
      "dartBarrel.files.outputFilePrefix": "",
      "dartBarrel.files.outputFileSuffix": "",
      "dartBarrel.files.outputFileSeparator": "_",
      "dartBarrel.formatting.endOfLine": "lf",
      "dartBarrel.formatting.insertFinalNewline": true,
    }
    ```

4. **Restart VS Code**

Your project is now set up to automatically format code upon saving.

## Settings Options

Configure Dart Barrel File settings in your `.vscode/settings.json` file to tailor the behavior of the barrel file generation process according to your project's needs.

- **`dartBarrel.files.disableRecursiveBarrelling`**: Disable recursive barrelling to generate barrel files only for the current directory. Default: `false`.
- **`dartBarrel.files.includeExtensionOnExport`**: Specify which file extensions to include in the barrel file. Default: `["dart"]`.
- **`dartBarrel.files.ignoreFilePathPatternOnExport`**: Specify file path patterns to ignore when exporting files. Default: `["**/*.freezed.dart", "**/*.g.dart"]`.
- **`dartBarrel.files.supportsHiddenFiles`**: Include or exclude hidden files from the barrel file generation process. Default: `true`.
- **`dartBarrel.files.preserveGitignoreSettings`**: Preserve `.gitignore` settings when generating barrel files. Default: `false`.
- **`dartBarrel.files.enableClassExportDetection`**: Automatically detect and export classes from files in the barrel file. Default: `true`.
- **`dartBarrel.files.exportDefaultFilename`**: Specify the default filename for the barrel file. Default: `"barrel"`.
- **`dartBarrel.files.outputFilePrefix`**: Specify a prefix for the barrel file name. Default: `""`.
- **`dartBarrel.files.outputFileSuffix`**: Specify a suffix for the barrel file name. Default: `""`.
- **`dartBarrel.files.outputFileSeparator`**: Specify a separator for the barrel file name. Default: `"-"`.
- **`dartBarrel.formatting.endOfLine`**: Specify the end-of-line character for the barrel file. Default: `"lf"`.
- **`dartBarrel.formatting.insertFinalNewline`**: Insert a final newline character at the end of the barrel file. Default: `true`.

For more information on settings options, see the [Project Settings](#project-settings) section.

## Follow Me

If you enjoy using Dart Barrel File, consider following me for updates on this and future projects:

[![GitHub followers](https://img.shields.io/github/followers/ManuelGil?style=for-the-badge&logo=github)](https://github.com/ManuelGil)
[![X (formerly Twitter) Follow](https://img.shields.io/twitter/follow/imgildev?style=for-the-badge&logo=x)](https://twitter.com/imgildev)

## VSXpert Template

This extension was created using [VSXpert](https://vsxpert.com), a template that helps you create Visual Studio Code extensions with ease. VSXpert provides a simple and easy-to-use structure to get you started quickly.

## Contributing

Dart Barrel File is open-source software, and we welcome contributions from the community. If you'd like to contribute, please fork the [GitHub repository](https://github.com/ManuelGil/ovsx-dart-barrel) and submit a pull request with your changes.

Before contributing, please read our [Contribution Guidelines](./CONTRIBUTING.md) for instructions on coding standards, testing, and more.

## Code of Conduct

We are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, disability, ethnicity, religion, or similar personal characteristic. Please review our [Code of Conduct](./CODE_OF_CONDUCT.md) before participating in our community.

## Changelog

For a complete list of changes, see the [CHANGELOG.md](./CHANGELOG.md)

## Authors

- **Manuel Gil** - _Owner_ - [ManuelGil](https://github.com/ManuelGil)

See also the list of [contributors](https://github.com/ManuelGil/ovsx-dart-barrel/contributors) who participated in this project.

## License

This extension is licensed under the MIT License. See the [MIT License](https://opensource.org/licenses/MIT) for details.
