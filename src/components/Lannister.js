import React from 'react';
import axios from 'axios';
const BASE_URL = "http://www.anapioficeandfire.com/api/houses/229";

class Lannister extends React.Component {
    constructor() {
        super();
        this.state = {
            info: [],
            coatOfArms: null,
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



    componentDidMount() {
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

            </div>
        )
    }

}

export default Lannister;
