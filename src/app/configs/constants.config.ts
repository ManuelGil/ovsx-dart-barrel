/**
 * EXTENSION_ID: The unique identifier of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_ID);
 *
 * @returns {string} - The unique identifier of the extension
 */
export const EXTENSION_ID: string = 'dartBarrel';

/**
 * EXTENSION_NAME: The repository ID of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_NAME);
 *
 * @returns {string} - The repository ID of the extension
 */
export const EXTENSION_NAME: string = 'ovsx-dart-barrel';

/**
 * EXTENSION_DISPLAY_NAME: The name of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXTENSION_DISPLAY_NAME);
 *
 * @returns {string} - The name of the extension
 */
export const EXTENSION_DISPLAY_NAME: string = 'Dart Barrel File';

/**
 * USER_PUBLISHER: The publisher of the extension.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(USER_PUBLISHER);
 *
 * @returns {string} - The publisher of the extension
 */
export const USER_PUBLISHER: string = 'imgildev';

/**
 * RECURSIVE_BARRELLING: The flag to recursively barrel.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(RECURSIVE_BARRELLING);
 *
 * @returns {boolean} - The flag to recursively barrel
 */
export const DISABLE_RECURSIVE: boolean = false;

/**
 * INCLUDE: The files to include.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(INCLUDE);
 *
 * @returns {string[]} - The files to include
 */
export const INCLUDE_EXTENSIONS: string[] = ['dart'];

/**
 * EXCLUDE: The files to exclude.
 * @type {string[]}
 * @public
 * @memberof Constants
 * @example
 * console.log(EXCLUDE);
 *
 * @returns {string[]} - The files to exclude
 */
export const EXCLUDE_PATTERNS: string[] = ['**/*.freezed.dart', '**/*.g.dart'];

/**
 * SUPPORTS_HIDDEN: The flag to support hidden files and directories (files that start with a dot).
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(SUPPORTS_HIDDEN);
 *
 * @returns {boolean} - The flag to support hidden files and directories
 */
export const SUPPORTS_HIDDEN: boolean = true;

/**
 * PRESERVE_GITIGNORE: The flag to preserve the .gitignore file.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(PRESERVE_GITIGNORE);
 *
 * @returns {boolean} - The flag to preserve the .gitignore file
 */
export const PRESERVE_GITIGNORE: boolean = false;

/**
 * DETECT_EXPORTS: The flag to detect exports.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(DETECT_EXPORTS);
 *
 * @returns {boolean} - The flag to detect exports
 */
export const DETECT_EXPORTS: boolean = true;

/**
 * DEFAULT_FILENAME: The default filename.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_FILENAME);
 *
 * @returns {string} - The default filename
 */
export const DEFAULT_FILENAME: string = '';

/**
 * DEFAULT_OUTPUT_FILE_PREFIX: The default output file prefix.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_OUTPUT_FILE_PREFIX);
 *
 * @returns {string} - The default output file prefix
 */
export const DEFAULT_OUTPUT_FILE_PREFIX: string = '';

/**
 * DEFAULT_OUTPUT_FILE_SUFFIX: The default output file suffix.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_OUTPUT_FILE_SUFFIX);
 *
 * @returns {string} - The default output file suffix
 */
export const DEFAULT_OUTPUT_FILE_SUFFIX: string = '';

/**
 * DEFAULT_OUTPUT_FILE_SEPARATOR: The default output file separator.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(DEFAULT_OUTPUT_FILE_SEPARATOR);
 *
 * @returns {string} - The default output file separator
 */
export const DEFAULT_OUTPUT_FILE_SEPARATOR: string = '_';

/**
 * END_OF_LINE: The end of line character.
 * @type {string}
 * @public
 * @memberof Constants
 * @example
 * console.log(END_OF_LINE);
 *
 * @returns {string} - The end of line character
 */
export const END_OF_LINE: string = 'lf';

/**
 * INSERT_FINAL_NEWLINE: The flag to insert a final newline.
 * @type {boolean}
 * @public
 * @memberof Constants
 * @example
 * console.log(INSERT_FINAL_NEWLINE);
 *
 * @returns {boolean} - The flag to insert a final newline
 */
export const INSERT_FINAL_NEWLINE: boolean = true;
