const coverEff = () => {

    var clapStart = document.querySelector(".clapStart");
    clapStart.addEventListener("click", function(e) {
        // e.preventDefault();


        console.log("clap");
        // windows.addEventListener("mouseover", function(e) {
        //         alert('mouseover');
        //     }
        const section_cover = document.querySelector(".section_cover");
        section_cover.style.backgroundColor = "#fff";
        clapStart.style.color = "#000";
        console.log('ok111');
        // section_cover.classList.add("hidden");
        console.log('START');

        function myFunction() {
            clapStart.classList.add("clapStartMove");
            section_cover.classList.add("animateOnce");
        }
        // window.setTimeout(clapStart.classList.add("visible"), 2000);
        setTimeout(function() { myFunction() }, 1000);
        console.log("END")



    })
}


module.exports = coverEff;