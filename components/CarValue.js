import { useSelector } from "react-redux";

function CarValue(){
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        // Option 1
        // let cost = 0;
        // for(let car of filteredCars){
        //     cost += car.cost
        // }
        // return cost;

        // Option 2
        return filteredCars.reduce((acc, car) => {
            return acc + car.cost
        }, 0)
        
    });

    return <div className="car-value">
            Total Cost: ${totalCost}
        </div>;
}

export default CarValue;