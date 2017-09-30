# hyper-vertical-tabs

This plugin for Hyper adds vertical (well, left, actually) tabs.   If you use iTerm2 on Mac, and use its tabs-on-the-left setting, and can't find a similarly configurable terminal on Linux except Roxterm which is end-of-lifed and is broken on Wayland due to incompatible use of transparency putting a wide border around the wind--- &lt;deep breath&gt;.

Well, anyway, look at the screenshot, made more classy with [hyperline](https://www.npmjs.com/package/hyperline) there at the bottom.

![hyper-vertical-tabs](https://raw.githubusercontent.com/randallsquared/references/master/images/hyper-vertical-tabs.png)


If you want that, use this plugin.   There are a number of problems, though...

## problems

### doesn't play well with others

This doesn't play nicely with other tab-affecting plugins.  Most other tab-affecting plugins do not compose well with each other, either, because of the way Hyper's composition works, but that's actually not a good excuse, because it is probably *possible* to do so.   Might need to depend on a CSS-parser, and certainly would need to do more than just add CSS config, which is literally all this plugin does.


### hardcoded colors, sizes, etc

This has hardcoded values that I like:

* visibility is "always" rather than being configurable or only showing when you have tabs
* width is 120px; tab heights are 22px
* background runs all the way down the left, rather than stopping when the tabs do
* hugs the left, rather than whichever side you configure it to (hint: you can't configure it)
* ...it's not configurable

