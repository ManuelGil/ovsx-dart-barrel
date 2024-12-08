import { WorkspaceConfiguration } from 'vscode';

import {
  DEFAULT_FILENAME,
  DEFAULT_OUTPUT_FILE_PREFIX,
  DEFAULT_OUTPUT_FILE_SEPARATOR,
  DEFAULT_OUTPUT_FILE_SUFFIX,
  DETECT_EXPORTS,
  DISABLE_RECURSIVE,
  END_OF_LINE,
  EXCLUDE_PATTERNS,
  INCLUDE_EXTENSIONS,
  INSERT_FINAL_NEWLINE,
  PRESERVE_GITIGNORE,
  SUPPORTS_HIDDEN,
} from './constants.config';

/**
 * The Config class.
 *
 * @class
 * @classdesc The class that represents the configuration of the extension.
 * @export
 * @public
 * @property {WorkspaceConfiguration} config - The workspace configuration
 * @property {boolean} disableRecursiveBarrelling - The flag to disable recursive barrelling
 * @property {string[]} includeExtensionOnExport - The extensions to include in the export
 * @property {string[]} ignoreFilePathPatternOnExport - The file path patterns to ignore on export
 * @property {boolean} supportsHiddenFiles - The flag to allow hidden files
 * @property {boolean} preserveGitignoreSettings - The flag to respect the .gitignore file
 * @property {boolean} enableClassExportDetection - The flag to detect exports in files
 * @property {boolean} exportDefaultFilename - The filename to export the default export
 * @property {string} outputFilePrefix - The output file prefix
 * @property {string} outputFileSuffix - The output file suffix
 * @property {string} outputFileSeparator - The output file separator
 * @property {string} endOfLine - The end of line character
 * @property {boolean} insertFinalNewline - The flag to insert a final newline
 * @example
 * const config = new Config(workspace.getConfiguration());
 * console.log(config.includeExtensionOnExport);
 * console.log(config.exclude);
 */
export class ExtensionConfig {
  // -----------------------------------------------------------------
  // Properties
  // -----------------------------------------------------------------

  // Public properties

  /**
   * The flag to disable recursive barrelling.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.disableRecursiveBarrelling);
   */
  disableRecursiveBarrelling: boolean;

  /**
   * The extensions to include in the export.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.includeExtensionOnExport);
   */
  includeExtensionOnExport: string[];

  /**
   * The file path patterns to ignore on export.
   * @type {string[]}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.ignoreFilePathPatternOnExport);
   */
  ignoreFilePathPatternOnExport: string[];

  /**
   * The flag to allow hidden files.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.supportsHiddenFiles);
   */
  supportsHiddenFiles: boolean;

  /**
   * The flag to respect the .gitignore file.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.preserveGitignoreSettings);
   */
  preserveGitignoreSettings: boolean;

  /**
   * The flag to detect class exports in files.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.enableClassExportDetection);
   */
  enableClassExportDetection: boolean;

  /**
   * The filename to export the default export.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.exportDefaultFilename);
   */
  exportDefaultFilename: string;

  /**
   * The output file prefix.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.outputFilePrefix);
   */
  outputFilePrefix: string;

  /**
   * The output file suffix.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.outputFileSuffix);
   */
  outputFileSuffix: string;

  /**
   * The output file separator.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.outputFileSeparator);
   */
  outputFileSeparator: string;

  /**
   * The end of line character.
   * @type {string}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.endOfLine);
   */
  endOfLine: string;

  /**
   * The flag to insert a final newline.
   * @type {boolean}
   * @public
   * @memberof Config
   * @example
   * const config = new Config(workspace.getConfiguration());
   * console.log(config.insertFinalNewline);
   */
  insertFinalNewline: boolean;

  // -----------------------------------------------------------------
  // Constructor
  // -----------------------------------------------------------------

  /**
   * Constructor for the Config class.
   *
   * @constructor
   * @param {WorkspaceConfiguration} config - The workspace configuration
   * @public
   * @memberof Config
   */
  constructor(readonly config: WorkspaceConfiguration) {
    this.disableRecursiveBarrelling =
      config.get<boolean>('files.disableRecursiveBarrelling') ??
      DISABLE_RECURSIVE;
    this.includeExtensionOnExport =
      config.get<string[]>('files.includeExtensionOnExport') ??
      INCLUDE_EXTENSIONS;
    this.ignoreFilePathPatternOnExport =
      config.get<string[]>('files.ignoreFilePathPatternOnExport') ??
      EXCLUDE_PATTERNS;
    this.supportsHiddenFiles =
      config.get<boolean>('files.supportsHiddenFiles') ?? SUPPORTS_HIDDEN;
    this.preserveGitignoreSettings =
      config.get<boolean>('files.preserveGitignoreSettings') ??
      PRESERVE_GITIGNORE;
    this.enableClassExportDetection =
      config.get<boolean>('files.enableClassExportDetection') ?? DETECT_EXPORTS;
    this.exportDefaultFilename =
      config.get<string>('files.exportDefaultFilename') ?? DEFAULT_FILENAME;
    this.outputFilePrefix =
      this.config.get<string>('files.outputFilePrefix') ??
      DEFAULT_OUTPUT_FILE_PREFIX;
    this.outputFileSuffix =
      this.config.get<string>('files.outputFileSuffix') ??
      DEFAULT_OUTPUT_FILE_SUFFIX;
    this.outputFileSeparator =
      this.config.get<string>('files.outputFileSeparator') ??
      DEFAULT_OUTPUT_FILE_SEPARATOR;
    this.endOfLine = config.get<string>('formatting.endOfLine') ?? END_OF_LINE;
    this.insertFinalNewline =
      config.get<boolean>('formatting.insertFinalNewline') ??
      INSERT_FINAL_NEWLINE;
  }
}
