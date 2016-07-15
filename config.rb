# Reload the browser automatically whenever files change
activate :livereload

# Navtree for managing navigation easily
activate :navtree do |options|
  options.data_file = 'tree.yml' # The data file where our navtree is stored.
  options.automatic_tree_updates = true # The tree.yml file will be updated automatically when source files are changed.
  options.ignore_files = ['sitemap.xml', 'robots.txt', '404.html.erb'] # An array of files we want to ignore when building our tree.
  options.ignore_dir = ['assets', 'views'] # An array of directories we want to ignore when building our tree.
  options.home_title = 'Accueil' # The default link title of the home page (located at "/"), if otherwise not detected.
  options.promote_files = ['index.html.erb'] # Any files we might want to promote to the front of our navigation
  options.ext_whitelist = [] # If you add extensions (like '.md') to this array, it builds a whitelist of filetypes for inclusion in the navtree.
end

# Prefixes for browsers CSS compatibility
activate :autoprefixer, browsers: ['last 2 versions', 'ie 8', 'ie 9']

# Clean URLs
activate :directory_indexes

# Add site map file
page "/sitemap.xml", layout: false

# Assets directories
set :js_dir, 'assets/javascripts'
set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'

# Activate deploy plugin
activate :deploy do |deploy|
  deploy.method = :git
  deploy.branch = 'master'
  deploy.build_before = true
end

# Build-specific configuration
configure :build do

  activate :minify_css
  activate :minify_javascript
  activate :minify_html
  activate :asset_hash, :ignore => %r{^assets/images/.*}
  activate :gzip

  activate :relative_assets
  set :relative_links, true

  activate :sitemap, hostname: data.settings.site.url

end
