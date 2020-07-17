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
            answer7a: " ",
            answer7b: " ",
            answer7c: " "
            
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
        const answerFour = res.data.seats[1]
        console.log(answerFour);
        this.setState({
            answer4: answerFour
        })
    }

    async getfifthData(){
        const muffin = await axios.get("http://www.anapioficeandfire.com/api/characters/901")
        const answerFive = muffin.data.aliases[1]
        console.log(answerFive);
        this.setState({
            answer5: answerFive
        })
    }

    async getsixthData(){
        const founder = await axios.get("https://www.anapioficeandfire.com/api/characters/209")
        const a = founder.data.name
        this.setState({
            answer6: a
        })
    }

async getseventhData(){
    const one = await axios.get ("https://www.anapioficeandfire.com/api/books/1")
    const b = one.data.name
    this.setState({
        answer7a: b
    })
}

async getseventhData2(){
    const two = await axios.get ("https://www.anapioficeandfire.com/api/books/2")
    const b = two.data.name
    this.setState({
        answer7b: b
    })
}

async getseventhData3(){
    const three = await axios.get ("https://www.anapioficeandfire.com/api/books/3")
    const c = three.data.name
    this.setState({
        answer7c: c
    })
}



    componentDidMount() {
        this.getfourthData();
        this.getfifthData();
        this.getsixthData();
        this.getseventhData();
        this.getseventhData2();
        this.getseventhData3();
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

                <h1>What is Robert Baratheon's second alias?</h1>
                <h2>{ this.state.answer5 }</h2>

                <h1>What's the name of the founder of House Stark?</h1>
                <h2>{ this.state.answer6 }</h2>

                <h1>What are the titles of Catelyn Stark's three POV books?</h1>
                <h2>{ this.state.answer7a }</h2>
                <h2>{ this.state.answer7b }</h2>
                <h2>{ this.state.answer7c }</h2>

            </div>
        )
    }

}

export default Lannister;
