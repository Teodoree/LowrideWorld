(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${30 - (_mouseY - _h) * 0.00}%`;
        let _depth2 = `${50 + (_mouseX - _w) * 0.02}% ${45 - (_mouseY - _h) * 0.00}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.04}% ${30 - (_mouseY - _h) * 0.00}%`;
        let _depth4 = `${50 - (_mouseX - _w) * 0.01}% ${75 - (_mouseY - _h) * 0.00}%`;
        let x = `${_depth4},${_depth3}, ${_depth2}, ${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();
