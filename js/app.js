let nav = document.querySelector('.nav');
let menuBtn = document.querySelector('.menu-btn');
let menuOpen = !1;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = !0;
        nav.style.display = 'block'
    } else {
        menuBtn.classList.remove('open');
        menuOpen = !1;
        nav.style.display = 'none'
    }
});
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.querySelector('.slider');
const indicatorParents = document.querySelector('.controls ul');
let sectionIndex = 0;

function setIndex() {
    document.querySelector('.controls .selected').classList.remove('selected');
    slider.style.transform = 'translate(' + (sectionIndex) * -20 + '%)'
}
document.querySelectorAll('.controls li').forEach(function (indicator, Ind) {
    indicator.addEventListener('click', function () {
        sectionIndex = Ind;
        setIndex();
        indicator.classList.add('selected')
    })
});
rightArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex < 4) ? sectionIndex + 1 : 4;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected')
});
leftArrow.addEventListener('click', function () {
    sectionIndex = (sectionIndex > 0) ? sectionIndex + -1 : 0;
    setIndex();
    indicatorParents.children[sectionIndex].classList.add('selected')
})
