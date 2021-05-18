let n = 0

const render = () => {
    const title = React.createElement('h1', {}, 'Hello world ! ',
        React.createElement('span', {}, n)
    )

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    render()
    n++
}, 1000)