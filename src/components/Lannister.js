import React from 'react';
import axios from 'axios';
const BASE_URL = "http://www.anapioficeandfire.com/api/houses/229";

class Lannister extends React.Component {
    constructor() {
        super();
        this.state = {
            info: [],
            coatOfArms: null,
            answer4: " ",
            answer5: " ",
            answer6: " ",
        }
    }

    async getinfo() {
        try {
            const firstRes = await axios.get(`${BASE_URL}`);
            console.log(firstRes);
            this.setState({ coatOfArms: firstRes.data });

        } catch (e) {
            console.error(e.message);
        }
    }

    async getfourthData(){
        const res = await axios.get("http://www.anapioficeandfire.com/api/houses/17")
        const answerFour = res.data.seats
        console.log(answerFour);
        this.setState({
            answer4: answerFour
        })
    }

  




    componentDidMount() {
        this.getfourthData();

        this.getinfo();
    }
    checkNull(){
        if(this.state.coatOfArms) {
            return(
                <h2> { this.state.coatOfArms.coatOfArms } </h2>
            )
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        return (
            <div>
                <h1>What's the coat of arms of House Lannister?</h1>
                {
                    this.checkNull()
                }
                <h1>What is the second seat of House Baratheon?</h1>
                <h2>{ this.state.answer4 }</h2>


            </div>
        )
    }

}

export default Lannister;
