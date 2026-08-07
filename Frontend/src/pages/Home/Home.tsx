import "./Home.css"
import Card from "../../components/Card/Card"


function Home () {
    return (
        <>
            <section className="filter-section">

                <select>
                    <option>All Categories</option>
                    <option>Mobiles</option>
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Vehicles</option>
                </select>

                <button>Apply</button>

            </section>

            <div className="heading">
                <h2>Fresh Recommendations</h2>
            </div>

            

            <section className="products">

                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>

            </section>
        </>
    )
}

export default Home