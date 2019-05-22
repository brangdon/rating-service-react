import React, {Component} from 'react';
import {Button, Collapse, Form} from 'react-bootstrap';
import fetch from 'isomorphic-fetch';
import * as myConfig from '../config'

const TYPE_DRAMA = 'drama'
const TYPE_ROMANTIC = 'romantic'
const TYPE_SENSATION = 'sensation'

const ICON_TYPE_DRAMA = "glyphicon glyphicon-picture";
const ICON_TYPE_ROMANTIC = "glyphicon glyphicon-move";
const ICON_TYPE_SENSATION = "glyphicon glyphicon-play";
const ICON_TYPE_DEFAULT = "glyphicon glyphicon-stop";

class Movie extends Component {


    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
            movie_rate: 1
        };
    }

    calculateRating(ratings) {
        console.log(ratings);
        if (ratings == null) {
            return "no rating"
        }
        if (ratings.length === 0) {
            return "no rating"
        } else {
            let sum = 0;
            for (let i = 0; i < ratings.length; i++) {
                sum += ratings[i].value;
            }
            let avg = sum / ratings.length;
            return avg.toFixed(2);
        }
    }

    rateMovie() {
        fetch(myConfig.BACKEND_RATING_URL + this.props.store._id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: this.state.movie_rate

        })
    }

    handleChangeSelect(event) {
        this.setState({movie_rate: event.target.value});
    }

    getIcon(type) {
        switch (type) {
            case TYPE_DRAMA:
                return ICON_TYPE_DRAMA;
                ;
            case TYPE_ROMANTIC:
                return ICON_TYPE_ROMANTIC;

            case TYPE_SENSATION:
                return ICON_TYPE_SENSATION;

            default:
                return ICON_TYPE_DEFAULT;
        }
    }

    render() {
        const {store} = this.props;

        return (
            <div className="movie_section">
                <h4 className="movie_header" onClick={() => this.setState({open: !this.state.open})}>
                    <span className="font-weight-bold">Tytuł:</span> {store.title}, <span className="font-weight-bold">Data produkcji:</span> {store.production_date}, <span
                    className="font-weight-bold">Gatunek:</span> <span
                    className={this.getIcon(store.type)}/>, <span
                    className="font-weight-bold">Ocena:</span> {this.calculateRating(store.ratings)}</h4>

                <Collapse in={this.state.open}>
                    <div>
                        <Form onSubmit={this.rateMovie.bind(this)}>
                            <Form.Group controlId="exampleForm.ControlSelect1"
                                        onChange={this.handleChangeSelect.bind(this)}
                                        defaultValue={this.state.movie_rate}>
                                <Form.Label>Wybierz ocenę</Form.Label>
                                <div>
                                    <Form.Control as="select" className="col-sm-1 text-center" size="3">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </div>
                                <Button type="submit">Dodaj ocenę</Button>
                            </Form.Group>
                            <div>

                            </div>
                        </Form>
                    </div>

                </Collapse>
            </div>
        );
    }
}

export default Movie;
