scrollr: a lighweight jQuery iPad style image gallery scroller.
===============================================================

Uses touch events to emulate native image side-scrolling in the browser on
touch enabled devices.


Example Usage
-------------

1. Make sure jQuery is included in the page

2. Add slider markup similar to this (see demo/index.html for more)

        <ul id="slider">
            <li><img src="images/1024/img_1.jpg"></li>
            <li><img src="images/1024/img_2.jpg"></li>
            <li><img src="images/1024/img_3.jpg"></li>
            <li><img src="images/1024/img_4.jpg"></li>
        </ul>

3. Initiate the slider

    var slider = new $.scrollr($('#slider'));

Examples
--------

See the demo folder
