import './App.css'
import Card1 from "./components/Cards/Card1/Card1.jsx";
import Image from '../src/assets/images/image.png'

const cardData = [
    {
        title: 'Cantilever chair',
        image: { src: Image, alt: 'Beautiful chair '},
        colorSet: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: 42
    },
    {
        title: 'Cantilever chair',
        image: { src: Image, alt: 'Beautiful chair '},
        colorSet: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: 42
    },
    {
        title: 'Cantilever chair',
        image: { src: Image, alt: 'Beautiful chair '},
        colorSet: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: 42
    },
    {
        title: 'Cantilever chair',
        image: { src: Image, alt: 'Beautiful chair '},
        colorSet: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: 42
    }
]

function App() {
    return (
        <div className="App">
            <h1>Featured Products</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 20
            }}>
                {
                    cardData.map(card => (
                        <Card1 key={card.code} {...card} />
                    ))
                }
            </div>
        </div>
    )
}

export default App
