const coverEff = () => {
    console.log('coverEff');

    const clapStart = document.querySelector(".clapStart");
    clapStart.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("clap");
        const section_cover = document.querySelector(".section_cover");
        section_cover.style.backgroundColor = "#fff";
        clapStart.style.color = "#000";
        // section_cover.classList.add("hidden");

        // window.setTimeout(clapStart.classList.add("visible"), 2000);
    })
}


module.exports = coverEff;