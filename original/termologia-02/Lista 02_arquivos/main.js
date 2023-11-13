$(document).ready(() => {
    console.log("Fisica Invertida v1.0");

    function getData(name) {
        const data = localStorage.getItem(name) || "{}";
    
        return JSON.parse(data);
    }

    function saveData(name, data) {
        localStorage.setItem(name, JSON.stringify(data));
    }

    // click url, alternative to anchor
    $("[data-click]").each((i, e) => {
        const element = $(e);
        const url = element.attr("data-click");

        element.click(() => {
            window.location = url || "#";
        });
    });

    const turmaMenuData = getData("turma-menu");

    for(const turmaName in turmaMenuData)
        setStateTurmaMenu(turmaName, turmaMenuData[turmaName]);

    $(".turma-aulas h3").click((event) => {
        const target = $(event.target);
        const parent = $(target[0].parentNode);
        const name = target.text();
        const state = turmaMenuData[name];

        if(state != undefined)
            turmaMenuData[name] = !state;
        else
            turmaMenuData[name] = false;

        saveData("turma-menu", turmaMenuData);
        setStateTurmaMenu(name, turmaMenuData[name]);
    });

    function setStateTurmaMenu(name, value) {
        const target = $(`.turma-aulas h3:contains("${name.trim().replace(/\n|\t/g, "")}"):last`);

        if(target[0]) {
            $(target[0].parentNode).find(".list").toggle(value);
            target.find("img").attr("src", value ? "/images/down.png" : "/images/up.png")
        }
    }
});