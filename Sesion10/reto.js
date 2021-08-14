const globo = document.querySelector("p");
let tam = 20;
globo.style.fontSize = tam + 'px'
function inflarGlobo(event) {
    event.preventDefault();
    tam > 80 ? globo.textContent = '💥' : '🎈';
    if (event.key == "ArrowUp") {
        tam *= 1.1;
        globo.style.fontSize = tam + 'px';
    }
    if (event.key == "ArrowDown") {
        tam *= 0.9;
        globo.style.fontSize = tam + 'px';
    }
}
document.body.addEventListener("keydown", inflarGlobo)
/*reto 2 Modal*/
const button = document.querySelector("button");
const cambio = document.getElementById("modal");
const cerrar = document.getElementsByClassName("close")[0]
function modal() {
    cambio.style.display = 'block';
    document.getElementById('modal-image').setAttribute("src", "https://picsum.photos/300/200");
}

function close() {
    cambio.style.display = "none"
}

button.addEventListener("click", modal);
cerrar.addEventListener("click", close);
/*reto 3 */


function createTabs(node) {
    const tabs = Array.from(node.children).map(function (node) {
        const button = document.createElement("button")
        button.textContent = node.getAttribute("data-tabname")

        const tab = {
            node: node,
            button: button
        }

        button.addEventListener("click", function () {
            return selectTab(tab)
        })

        return tab;
    })

    const tabList = document.createElement("div")

    for (const tab of tabs) {
        tabList.appendChild(tab.button)
    }

    node.insertBefore(tabList, node.firstChild)

    function selectTab(selectedTab) {
        for (const tab of tabs) {
            const selected = tab === selectedTab
            tab.node.style.display = selected ? "" : "none"
            tab.button.style.color = selected ? "red" : ""
        }
    }

    selectTab(tabs[0])
}

createTabs(document.querySelector("#tab-panel"));
