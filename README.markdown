jQuery.scrollr.js
=================

A lighweight (< 2kb minified) jQuery iPad style image gallery scroller
----------------------------------------------------------------------

Uses touch events to emulate native image side-scrolling in the browser on
touch enabled devices. Please note, this is very much **BETA**, it works in
landscape mode in an iPad, and hasn't been tested on iPhone yet.

### Example Usage

1. Make sure jQuery is included in the page

2. Add slider markup similar to this (see demo/index.html for more)

        <ul id="slider">
            <li><img src="images/1024/img_1.jpg"></li>
            <li><img src="images/1024/img_2.jpg"></li>
            <li><img src="images/1024/img_3.jpg"></li>
            <li><img src="images/1024/img_4.jpg"></li>
        </ul>

3. Initiate the slider : `var slider = new $.scrollr($('#slider'));`

4. Get your sliding finger out!


### Examples

See the demo folder


### Credits

All photos taken and belong to [@jag4091](http://twitter.com/jag4091)


### Licence

Licensed for use under [Attribution 3.0 unported](http://creativecommons.org/licenses/by/3.0/).
