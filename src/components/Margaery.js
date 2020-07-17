import React from 'react';
import axios from 'axios';
const BASE_URL = "https://www.anapioficeandfire.com/api/characters/16";

class Margaery extends React.Component {
    constructor() {
        super();
        this.state = {
            info: [],
            born: null,
        }
    }

    async getinfo() {
        try {
            const firstRes = await axios.get(`${BASE_URL}`);
            console.log(firstRes);
            this.setState({ born: firstRes.data });

        } catch (e) {
            console.error(e.message);
        }
    }



    componentDidMount() {
        this.getinfo();
    }
    checkNull(){
        if(this.state.born) {
            return(
                <h2> { this.state.born.born } </h2>
            )
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        return (
            <div>
                <h1>Where was Margaery Tyrell born?</h1>
                {
                    this.checkNull()
                }

            </div>
        )
    }

}

export default Margaery;
