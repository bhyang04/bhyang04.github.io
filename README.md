# Bohan Yang — academic homepage

This site uses [Shicheng Fan's homepage](https://github.com/shichengf/shichengf.github.io) (revision `40983bdfb860c403c3fdc4769f84eb24c1aca45b`), built with [al-folio](https://github.com/alshedivat/al-folio) v1 and Jekyll. The homepage markup, blue accent, card styling, typography and news component follow that reference. The navigation follows About / Publications; CV is disabled and Code is temporarily excluded from the build. Restore Code by removing `_pages/repositories.md` from `_config.yml`'s `exclude` list and setting its `nav` to `true`. Original blog and gallery pages remain available at `/blog/` and `/showcase/`. The MIT license is retained in `LICENSE`; the previous theme license is preserved in `LICENSES/academic-homepage.txt`.

## Development

Use Ruby 3.3, Node.js 20 or newer, and Bundler 4.0.6 (the version in `Gemfile.lock`).

```sh
gem install bundler -v 4.0.6
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open http://127.0.0.1:4000/. For a production build, run `JEKYLL_ENV=production bundle exec jekyll build --trace`.

## Content

- `_pages/about.md`: biography, experience, education and awards
- `_bibliography/papers.bib`: publications, original author order, correspondence markers, links and selected papers
- `_bibliography/hidden-papers.bib`: temporarily hidden manuscripts
- `_news/`: personal news
- `_data/socials.yml`: email, GitHub and Scholar
- `_data/repositories.yml`: GitHub profile and research code
- `_posts/`: blog posts (old template examples stay unpublished)
- `_showcase/`: original gallery content; `assets/images/`: original personal assets
- `_data/profile.yml` and `_data/authors.yml`: retained source records from the previous site; active theme content is in the files above

The existing GitHub Pages Actions deployment is retained. A push to `main` builds and publishes `_site`; no `gh-pages` branch or repository setting change is required.
