import React, { Component } from 'react'

import ImageContainer from '../components/ImageContainer';

import unsplash from "../api/unsplash";

export default class Home extends Component {
    state = { images: [] };
    constructor(props) {
        super(props);
        this.getImages = this.getImages.bind(this);
        this.getImages('a');
    }

    getImages = async (term) => {
        const response = await unsplash.get("/search/photos", {
            params: {
                query: term
            }
        });
        this.setState({ images: response.data.results });
        console.log(response);
    };
    render() {
        return (
            <section className="ui container" style={{ marginTop: "10px" }}>
                <ImageContainer images={this.state.images} />
            </section>
        );
    }
}
