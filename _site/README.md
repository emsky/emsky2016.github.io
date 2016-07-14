# Aselle

Aselle is a custom Jekyll theme I built for my personal website.

Here are some of the custom page variables I added to the mix:

    masthead_src
Relative path to the image used for the page masthead or banner. There should be three versions of the same image, using `@sm`, `@md` and `@lg`, for mobile, tablet and large screens respectively. Use the `@md` version as the default src.

### Images are Adaptive

To make the masthead and inline images responsive and adaptive, I wrote a custom JS function that replaces the image source with one that's appropriate for the screen size and resolution. This is triggered on page load and when the window is resized.

Images are handled through art direction. I, personally, don't believe there's a perfect responsive or adaptive image strategy. The best one is always a mix of both art direction and media queries.
