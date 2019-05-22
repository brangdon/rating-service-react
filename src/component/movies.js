import React, {Component} from 'react';
import Movie from './movie'

class Movies extends Component {
    componentDidMount() {
        const { getData } = this.props;
        getData();
    }

    render() {
        const {store} = this.props;
        return (
            <div>
                <h3>Lista filmów:</h3>

                <ul>
                    {store.movies.map((movie, i) => (

                        <Movie  key={i} store={movie}/>
                    ))}
                </ul>
            </div>

        )
    }
}

export default Movies;