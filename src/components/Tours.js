import Card from './Card';

function Tours({tours,removeTour,interested}){
    return (
    <div className="container">
        <div>
            <h2 className="title">Plan with Shubh</h2>
        </div>
        <div className="cards">
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour} interested={interested}></Card>
                })
            }
        </div>
    </div>
    );
}

export default Tours;