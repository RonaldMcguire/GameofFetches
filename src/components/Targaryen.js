import React from 'react';
import axios from 'axios';
const BASE_URL = "http://www.anapioficeandfire.com/api/houses/378";

class Targaryen extends React.Component {
    constructor() {
        super();
        this.state = {
            info: [],
            region: null,
        }
    }

    async getinfo() {
        try {
            const firstRes = await axios.get(`${BASE_URL}`);
            console.log(firstRes);
            this.setState({ region: firstRes.data });

        } catch (e) {
            console.error(e.message);
        }
    }



    componentDidMount() {
        this.getinfo();
    }
    checkNull(){
        if(this.state.region) {
            return(
                <h2> { this.state.region.region } </h2>
            )
        } else {
            return <p>Loading...</p>
        }
    }

    render() {
        return (
            <div>
                <h1>What region is House Targaryen in?</h1>
                {
                    this.checkNull()
                }

            </div>
        )
    }

}

export default Targaryen;