fs           = require 'fs'
axis         = require 'axis'
rupture      = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
js_pipeline  = require 'js-pipeline'
css_pipeline = require 'css-pipeline'
records      = require 'roots-records'
collections  = require 'roots-collections'
excerpt      = require 'html-excerpt'
moment       = require 'moment'
cleanUrls    = require 'clean-urls'
roots_config = require 'roots-config'
ClientTemplates = require 'client-templates'
sortObj = require 'sort-object'
sortBy = require 'sort-by'



monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]

api_url = 'data/events.json'

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'ship.*conf']

  locals:
    postExcerpt: (html, length, ellipsis) ->
      excerpt.text(html, length || 100, ellipsis || '...')
    dateFormat: (date, format) ->
      moment(date).format(format)


  extensions: [
    ClientTemplates(base: 'views/templates'),
    records(
      menu: { file: "data/menu.json" }
      site: { file: "data/site.json" }
    ),
    roots_config(api_url: api_url, static_items: 2),
    collections(folder: 'news', layout: 'post'),
    collections(folder: 'page', layout: 'page'),
    collections(folder: 'events', layout: 'page'),
    collections(folder: 'slider', layout: 'post'),
    js_pipeline(files: 'assets/js/*.coffee'),
    css_pipeline(files: 'assets/css/*.styl')
  ]

  stylus:
    use: [axis(), rupture(), autoprefixer()]
    sourcemap: true

  'coffee-script':
    sourcemap: true

  jade:
    pretty: true

  server:
    clean_urls: true
