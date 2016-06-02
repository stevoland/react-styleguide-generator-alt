# UNRELEASED
  * Removing git dependencies for deepmerge and react-simpletabs in favor of npm modules

# 2.8.0 (2016-06-02)
  * Fixing navigation when using pushstate

# 2.7.0 (2016-05-07)
  * Adding json-loader to webpack loaders to handle json requires

# 2.6.3 (2016-01-28)

  * Change hmr server hostname to 0.0.0.0 so we can use with vagrant/virtualbox

# 2.6.0, 3.1.0 (2016-01-07)

  * Allow passing a Javascript file for the `--config` option. This will allow usage of `webpackConfig` outside of using `gulp` or `grunt`

# 2.5.5 (2015-12-15)

  * Fix issues where exception gets thrown where highlighter is fed an empty node

# 2.5.4, 3.0.2 (2015-12-13)

  * Fix "show all" link where it was not using the configured base (if used)

# 2.5.2, 3.0.1 (2015-12-13)

  * Fix syntax highlighting when individual components in the sidebar is selected
  * Adjust component category spacing
  * Add show all link on sidebar

# 2.5.1 (2015-12-13)

  * Show components in each category in the sidebar

# 2.4.0 (2015-12-11)

  * Base exclusion `babel-loader` rule is no longer `path.resolve(process.cwd(), 'node_modules')`, but instead `node_modules`. This is mainly for projects that need to compile guides against directories that contain individually packaged components that have their own `node_modules` directory.

# 2.3.0 (2015-12-08)

  Performance enhancements:

  * separate vendor components into another bundle
  * Cache highlighted nodes so they are not re-processed. For really large pages, the highlighter can take a LOT of time for processing before the page is re-rendered. This fix hopefully resolves most of that.
  * `highlight.js` updated to `9.x`

# 2.2.0 (2015-12-01)

  * Add `webpackConfig` configuration file option to extend the rsg webpack configuration

# 2.1.1 (2015-12-01)

  * Fix issue where the props metadata file was not being written out if no propdocs were defined

# 2.1.0 (2015-11-30)

  * add `transpileIncludes` option to the config to allow for additional rules for babel transpiling

# 2.0.5 (2015-11-24)

  * Fix major bug as a result of renaming the package from fork

# 2.0.0 (2015-11-24)

  * First alt version, forked from `react-styleguide-generator`
  * Removed `browserify` and replaced with `webpack` + hot module replacement
  * Complete overhaul of the core `rsg.js` lib to support `webpack`
  * `react-docgen` generation and asset distribution moved to custom webpack plugins
  * Fixed a bug where using input text boxes and typing into them will shift focus to the search box
