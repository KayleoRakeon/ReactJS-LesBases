let n = 0

const render = () => {
    const undertale = [
        'Sans',
        'Papyrus',
        'Undyne',
        'Alphys',
        'Toriel',
        'Asgore',
        'Asriel',
        'Frisk',
    ]

    const title = <React.Fragment>
        <h1 className="title" id="title">
            Hello World ! <span>{n}</span>
        </h1>
        {undertale.map((character, i) => <li key={i}>{character}</li>)}
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    render()
    n++
}, 1000)

