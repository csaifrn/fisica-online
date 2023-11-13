(function($) {

    $(document).ready(async () => {
        await loadMenu();
        await menuEvents();
        librasPictureMode();
        defaultValues();
        wrappVideos();
        initVideos();
    });

    function initVideos() {
        $("video").each((i, e) => {
            new Plyr(e);
        }) 
    }

    async function loadMenu()
    {
        const path = "/menu.html";
        const html = await fetch(path).then(resp => resp.text());

        $(".aula-menu .items").append(html);
    }

    async function menuEvents()
    {
        const path = "/options.json";
        const options = await fetch(path).then(resp => resp.json());
        const clicker = $("#acessibilidade");
        const menu = $("#menu-acessibilidade");
        let currentTab = null;

        // expand menu
        clicker.click(() => {
            menu.toggle();
            menu.find(".options").hide();
        });

        menu.find("#close").click(() => {
            menu.hide();
            menu.find(".options").hide();
        });

        // vlibras
        $("#vlibras-status").click(() => {
            $("#vlibras").toggleClass("enabled");
        });

        // expand option
        menu.find(".item .d-flex").click((event) => {
            $(event.currentTarget.parentNode).find(".options").toggle();
        });

        // reset option (no value field)
        menu.find("[data-opt='reset']").click(() => {
            for(const optionType in options)
            {
                const firstField = Object.values(options[optionType])[0];

                optionHandler(optionType, firstField);
            }
        });

        // option type
        for(const optionType in options)
        {
            // get options item type
            const htmlTarget = $(`[data-opt=${optionType}]`);
            const optionsContainer = htmlTarget.find(".options");
            
            // options items value
            for(const item in options[optionType])
            {
                const parsed = $.parseHTML(`
                    <div class="option">${item}</div>
                `);

                // handle option click event
                $(parsed).click(() => {
                    const type = optionType;
                    const value = options[optionType][item];

                    // ex: contraste, invert(100%)
                    optionHandler(type, value);
                });

                $(parsed).attr("tabindex", 0);

                optionsContainer.append(parsed);
            }
        }
    }

    function getData()
    {
        const data = localStorage.getItem("menu") || "{}";
    
        return JSON.parse(data);
    }

    function saveData(type, value)
    {
        const data = getData();
        data[type] = value;

        localStorage.setItem("menu", JSON.stringify(data));
    }

    function defaultValues()
    {
        const data = getData();

        for(const type in data)
            optionHandler(type, data[type])
    }

    function changeTextCSS(type, value)
    {
        const filter = ["h1", "h2", "h3", "h4", "h5", "h6", "span", "b", "u", "p", "a"];

        return $(".aula-body")
        .find('*')
        .filter(function (){
            return filter.indexOf(this.tagName.toLowerCase()) !== -1;
        })
        .each((i, e) => {
            $(e.parentNode).css(type, value);
        });
    }

    function optionHandler(type, value)
    {
        switch (type) {
            case "contraste":
                $(document.body).css("filter", value);
            break;
            case "tamanho-texto":
                const body = $(".aula-body");
                const [mw, mh] = [20, 15];
                const percent = Number(value.split("%")[0]) / 100;
                
                body.find(".paragrafo").each((i, e) =>
                {
                    $(e).css("margin", `${percent * mw}px ${percent * mh}px`);
                });
                body.css("font-size", value);
            break;
            case "espacamento-texto":
                changeTextCSS("letter-spacing", value);
            break;
            case "distancia-texto":
                changeTextCSS("line-height", value);
            break;
            case "tipo-fonte":
                changeTextCSS("font-family", value);
            break;
            case "formato-texto":
                changeTextCSS("text-transform", value);
            break;
        }

        saveData(type, value);
    }

    function librasPictureMode()
    {
        let video = document.createElement("video");
        let opened = false;

        $("[data-libras]").click((event) => {
            if(opened)
                return;

            const target = $(event.currentTarget);
            const src = target.attr("data-libras");

            video.src = src;
            video.autoplay = true;
            opened = true;

            video.oncanplay = () => {
                video.requestPictureInPicture();
            }

            video.onleavepictureinpicture= () => {
                video.pause();
                opened = false;
            }
        });
    }

    function wrappVideos()
    {
        const videos = $("video");

        videos.each((i, video) => {
            const v = $(video);

            v.attr("controls", false);
        });
    }

    hotkeys("enter", () => {
        const elTarget = $(document.activeElement)

        if(elTarget.is(".item")) // this item have a close event
            elTarget.find(".d-flex").click(); // this not

        elTarget.click();
    });
	
	/**/

    hotkeys("alt+1", () => {
        document.getElementById("app").scrollIntoView({
            behavior: "smooth"
        });
    });

    hotkeys("alt+2", () => {
        document.getElementById("conteudo").scrollIntoView({
            behavior: "smooth"
        });
    });
	
	 hotkeys("alt+3", () => {
        document.getElementById("atividade").scrollIntoView({
            behavior: "smooth"
        });
    });

    // end
    hotkeys("alt+3", () => {
        // document.getElementById("aula-content").scrollIntoView({
        //     behavior: "smooth"
        // });
    });
	
	
})(jQuery);