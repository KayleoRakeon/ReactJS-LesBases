let n = 0

const render = () => {
    const title = <h1>
        Hello World ! <span>{n}</span>
    </h1>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    render()
    n++
}, 1000)