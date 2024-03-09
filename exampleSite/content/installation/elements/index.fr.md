---
title: "Elements"
date: 2022-12-29T11:02:05+06:00
lastmod: 2023-01-05T10:42:26+06:00
weight: 3
draft: false
# search related keywords
keywords: [""]
---

#### Heading example

Here is an example of headings. You can use this heading by the following markdown rules. For example: use `#` for heading 1 and use `######` for heading 6.

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

<hr>

### Emphasis

The emphasis, aka italics, with *asterisks* or *underscores*.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

The combined emphasis with **asterisks and *underscores***.

Strike through uses two tildes. ~~Scratch this.~~

{{< button "hello" "#" >}}

<hr>

### Link

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
<http://www.example.com> or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.themefisher.com
[1]: https://gethugothemes.com
[link text itself]: https://www.getjekyllthemes.com

<hr>

### Paragraph

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus, facilis placeat pariatur! Voluptatem, sed harum pariatur adipisci voluptates voluptatum cumque, porro sint minima similique magni perferendis fuga! Optio vel ipsum excepturi tempore reiciendis id quidem? Vel in, doloribus debitis nesciunt fugit sequi magnam accusantium modi neque quis, vitae velit, pariatur harum autem a! Velit impedit atque maiores animi possimus asperiores natus repellendus excepturi sint architecto eligendi non, omnis nihil. Facilis, doloremque illum. Fugit optio laborum minus debitis natus illo perspiciatis corporis voluptatum rerum laboriosam.

<hr>

### Ordered List

1. List item
2. List item
3. List item
4. List item
5. List item

<hr>

### Unordered List

* List item
* List item
* List item
* List item
* List item

<hr>

### Notice

{{< notice "note" >}}
  This is a simple note.
{{< /notice >}}

{{< notice "tip" >}}
  This is a simple tip.
{{< /notice >}}

{{< notice "info" >}}
  This is a simple info.
{{< /notice >}}

{{< notice "warning" >}}
  This is a simple warning.
{{< /notice >}}

<hr>

### Tab

{{< tabs "code" >}}

{{< tab "python" >}}

```python
print("Hello World!")
```

{{< /tab >}}

{{< tab "R" >}}

```R
> print("Hello World!")
```

{{< /tab >}}

{{< tab "Bash" >}}

```Bash
echo "Hello World!"
```

{{< /tab >}}
{{< /tabs >}}

<hr>

### Collapse

{{< collapse "Why should you need to do this?" >}}
##### This is title

elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.
{{< /collapse >}}

{{< collapse "How can I adjust Horizontal centering" >}}
##### This is title

elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.
{{< /collapse >}}

{{< collapse "Should you use Negative margin?" >}}
##### This is title

elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.elit sit amet consectetur adipisicing elit. consectetur dolor adipisicing elit. sit amet consectetur dolor sit amet consectetur adipisicing elit.
{{< /collapse >}}

<hr>

### Code and Syntax Highlighting

This is an `Inline code` sample.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print s
```

<hr>

### Blockquote

> This is a blockquote example.

<hr>

### Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<hr>

### Codepen

{{< codepen id="QWvKwmq" theme="light" height="600" >}}

<hr>

### Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

<hr>

### Image

{{< image src="images/favicon.png" caption="" alt="alter-text" height="" width="" position="center" command="fill" option="q100" class="img-fluid" title="image title"  webp="false" >}}

<hr>

### Gallery

{{< gallery dir="images/gallery" class="" height="400" width="400" webp="true" command="Fit" option="" zoomable="true" >}}

<hr>

### Youtube video

{{< youtube ResipmZmpDU >}}

<hr>

### Custom video

{{< video src="https://www.w3schools.com/html/mov_bbb.mp4" width="500" height="auto" autoplay="false" loop="false" muted="false" controls="true" class="" >}}
