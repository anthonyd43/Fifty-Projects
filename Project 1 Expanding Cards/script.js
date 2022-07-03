const panels = document.querySelectorAll('.panel')
var active_panel = document.querySelector('.active')
console.log(active_panel)

panels.forEach((panel) => {
    panel.addEventListener('click', () =>{
        active_panel.classList.toggle("active");
        panel.classList.toggle("active");

        active_panel = panel;
        console.log(active_panel);
    });
})
