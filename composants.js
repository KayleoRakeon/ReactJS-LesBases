const Welcome = ({ name, family, children }) => <div>
    <h1>Salut {name} {family} !</h1>
    <p>{children}</p>
</div>

const App = () => (
    <div>
        <Welcome name="Benji" family="B">
            Coucou
        </Welcome>
        <Welcome name="Toto" family="noLastName" />
        <Clock name="Benji" age={21} />
    </div>
)

// const render = () => {
//     const date = new Date()
//     const clock = <p>Il est {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>

//     ReactDOM.render(clock, document.querySelector("#app"))
// }

// render()

// window.setInterval(() => {
//     render()
// }, 1000)

/**
 * On veut une horloge qui va afficher l'heure toutes les secondes 
 */

// 1 - On crée une class qui va hériter de React.Component 

class Clock extends React.Component {
    // 3 - On doit gérer un état donc on fait appel au constructeur de notre class
    constructor(props) {
        super(props) // Indispensable quand on est sur React.Component

        this.state = {
            date: new Date
        }

        this.timer = false
    }

    // 4 - On veut faire une modification sur l'état
    componentDidMount() {
        this.timer = window.setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({
            date: new Date,
            location: 'Paris',
        })
        // setState() prend en paramètre le nouvel état
    }

    // 2 - On crée et affiche les éléments
    render() {
        const { date, location } = this.state
        // const date = this.state.date
        const { name, age } = this.props
        return (
            <div>
                <p>Bonjour {name}, vous avez {age} ans et vous habitez à {location}</p>
                <p>Il est : {date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#app')
)
