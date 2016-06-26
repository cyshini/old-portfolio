# Reload the browser automatically whenever files change
activate :livereload

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
