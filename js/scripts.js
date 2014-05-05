$(document).foundation();



redraw();

        function redraw() {
            console.log("drawing "+document.body.clientWidth+"x"+height())
            var pattern = t.generate(document.body.clientWidth, height());
            document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
            saveas.setAttribute('href', pattern.dataUri);
            noise_display.innerHTML = t.options.noiseIntensity.toFixed(1);
            cellsize_display.innerHTML = t.options.cellsize.toFixed(0);
            cellpadding_display.innerHTML = t.options.cellpadding.toFixed(0);
        };

        function recolor() {
            t.options.x_gradient = Trianglify.randomColor();
            t.options.y_gradient = t.options.x_gradient.map(function(c){return d3.rgb(c).brighter(.5)});
        }

        function noise(i) {
            i += t.options.noiseIntensity;
            if (i >= 0 && i <= 1) {
                t.options.noiseIntensity = i;
                redraw();
            } else if (i < 0) { 
                t.options.noiseIntensity = 0;
                redraw();
            }
        }

        function cellsize(i) {
            i += t.options.cellsize;
            if (i >= 0) {
                t.options.cellsize = i;
                t.options.bleed = i;
                if (t.options.cellpadding >= t.options.cellsize/2) {
                    t.options.cellpadding = 5*Math.floor((t.options.cellsize/2 - 1)/5);
                }
                redraw();
            }
        }

        function cellpadding(i) {
            i += t.options.cellpadding;
            if (i >= 0  && i < t.options.cellsize/2) {
                t.options.cellpadding = i;
                redraw();
            }
        }

        function height() {
            return Math.max(
                document.body.scrollHeight, document.documentElement.scrollHeight,
                document.body.offsetHeight, document.documentElement.offsetHeight,
                document.body.clientHeight, document.documentElement.clientHeight
            );
        }

        function toggleClass(el, className) {
            if (el.classList) {
              return el.classList.toggle(className);
            } else {
              var classes = el.className.split(' ');
              var existingIndex = classes.indexOf(className);

              if (existingIndex >= 0)
                classes.splice(existingIndex, 1);
              else
                classes.push(className);

              el.className = classes.join(' ');
              return existingIndex >= 0;
            }
        }