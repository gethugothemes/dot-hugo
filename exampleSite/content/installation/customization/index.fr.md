---
title: "Customization"
date: 2022-12-29T11:02:05+06:00
lastmod: 2023-01-05T10:42:26+06:00
weight: 4
draft: false
# search related keywords
keywords: [""]
---

**Dot** has been built to be as configurable as possible.


### Change the logo

In `config.toml` you will find a logo variable. you can change your logo there.

{{< notice "tip" >}}
  The size of the logo will adapt automatically
{{< /notice >}}

### Change the favicon

If your favicon is a png, just drop off your image in your local `static/images/` folder and name it `favicon.png`

If you need to change this default behavior, create a new file in `layouts/partials/` named `head.html`. Then write something like this:

```html
<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
```

### Change default colors

**Dot** support change color. You can change the colors from `config.toml`. You can change the colors of the template as you want.


```toml
# customize your color and font from here.
[params.variables]
color_primary = "#02007e"
body_color = "#f9f9f9"
text_color = "#636363"
text_dark = "#242738"
text_light = "#f8f9fa"
black = "#000"
white = "#fff"
dark = "#222"
light = "#eee"
```

### Change default Fonts


```toml
# go to https://fonts.google.com/ to find the font you want to use. select your font and copy only the bold part from the URL. and paste it here.
# example: "Work+Sans:wght@400;500;600"
font_primary = "Lato:wght@300;400;700"
```