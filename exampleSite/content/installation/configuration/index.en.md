---
title: "Configuration"
date: 2022-12-29T11:02:05+06:00
lastmod: 2023-01-05T10:42:26+06:00
weight: 3
draft: false
# search related keywords
keywords: [""]
---

### Global site parameters

On top of [Hugo global configuration](https://gohugo.io/overview/configuration/), **Dot** lets you define the following parameters in your `config.toml` (here, values are default).

Note that some of these parameters are explained in details in other sections of this documentation.

```toml
######################## default configuration ####################
baseURL = "https://demo.gethugothemes.com/dot/site/"
title = "Dot"
theme = ["dot-hugo"]
# Default time zone for time stamps; use any valid tz database name: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List
timeZone = "UTC"
# post pagination
paginate = "6" # see https://gohugo.io/extras/pagination/
# post excerpt
summaryLength = "10" # see https://gohugo.io/content-management/excerpts/
# google analytics
googleAnalytics = "" # example: UA-123-45, for more info, read the article https://support.google.com/analytics/answer/1008080?hl=en
# disqus short name
disqusShortname = "themefisher-template" # we use disqus to show comments in blog posts . To install disqus please follow this tutorial https://portfolio.peter-baumgartner.net/2017/09/10/how-to-install-disqus-on-hugo/
# disable language
disableLanguages = []  # example: ["fr"] for disable french language. see https://gohugo.io/content-management/multilingual/
hasCJKLanguage = false #  If hasCJKLanguage true, auto-detect Chinese/Japanese/Korean Languages in the content. see: https://gohugo.io/getting-started/configuration/#hascjklanguage


############################# Build ##############################
[build]
writeStats = true

############################# Outputs ##############################
[outputs]
home = ["HTML", "JSON", "WebAppManifest"]

############################# Imaging ##############################
[imaging]
# See https://github.com/disintegration/imaging
# Default JPEG or WebP quality setting. Default is 75.
quality = 90

############################# Caches ###############################
[caches]
[caches.images]
dir = ":resourceDir/_gen"
maxAge = "720h"

[caches.assets]
dir = ":resourceDir/_gen"
maxAge = "720h"

```