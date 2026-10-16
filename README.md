# hasantahabagci.github.io

Source of my academic website, [hasantahabagci.github.io](https://hasantahabagci.github.io/).

The design follows [Jon Barron's website](https://github.com/jonbarron/jonbarron_website): a short bio,
then publications and projects, each with a thumbnail that swaps to a figure or a video on hover.
It is plain HTML and CSS with no build step, rewritten without tables so it stacks on phones, and it
follows the system dark mode.

## Layout

```
index.html          the whole site
styles.css          layout, type and colors (light and dark tokens at the top)
script.js           plays a row's hover video while the row is hovered or focused
images/             thumbnails (480x360 JPEG) and hover clips (480x360 H.264, no audio)
assets/             CV PDF, favicon, original profile photo
publications.html   redirect to index.html#publications, so old links keep working
projects.html       redirect to index.html#projects
```

## Adding a paper or project

Copy an `<article class="entry">` block in `index.html`. Add `highlight` to its class to give it the yellow
background. The thumbnail is the `<img>` inside `.thumb`; an optional second element with class `hover`
(an `<img>` or a muted `<video>`) fades in on hover.

Thumbnails are 4:3. To make one from a figure or a clip:

```bash
magick figure.png -resize 480x360^ -gravity center -extent 480x360 -quality 85 images/name.jpg
ffmpeg -i clip.mp4 -vf "crop=ih*4/3:ih,scale=480:360,format=yuv420p" -an -c:v libx264 -crf 28 \
  -movflags +faststart images/name.mp4
```

## Local preview

```bash
python3 -m http.server 8000
```

## License

The site code is under the GPL-3.0 license in `LICENSE`. Text, photos, figures and the CV are mine or my
co-authors' and are not covered by it.
