import React, { Component } from 'react';
import './InstaAlbum.css';
import InstaAlbumArticle from './InstaAlbumArticle';

// const displayCommentList = commentList.map((c, idx) => {
//     return ();
// }

const post = {
    caption: 'I love coding. All day everyday....',
    username: '@PatrickBrennan'
}

const postList = [
    {
        message: 'I love bball....',
        author: '@stephcurry'
    },
    {
        message: 'What are those???? ....',
        author: '@mike'
    },
    {
        message: 'What up...',
        author: '@ChrisRollins'
    },
    {
        message: 'Comment here...',
        author: '@Evalist'
    },
    {
        message: 'Scenic Route Belongs Here',
        author: '@JJackson'
    },
    {
        message: 'Yo Yo Yo',
        author: '@SaintNick'
    }
]

const displayCommentList = postList.map((c, idx) => {
    return (
        <InstaAlbumArticle key={idx} index={idx} message={c.message} person={c.author} />
    )
})



class InstaAlbum extends Component {
    render() {
        return (
            <div>
                <div className="navbar is-inline-flex is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-item">
                            <div className="control has-icons-left">
                                <input className="input is-small has-text-centered" type="text" placeholder="search" />
                                <span className="icon is-left is-small">
                                    <i className="material-icons">search</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item is-flex-touch">
                        <a className="navbar-item">
                            <i className="material-icons">explore</i>
                        </a>
                        <a className="navbar-item">
                            <i className="material-icons">favorite_border</i>
                        </a>
                        <a className="navbar-item">
                            <i className="material-icons">person_outline</i>
                        </a>
                    </div>
                </div>
                <div className="columns body-columns">
                    <div className="column is-half is-offset-one-quarter">
                        <div className="card">
                            <div className="header">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content" data-testid="blurb">
                                        <p className="title is-4">{post.caption}</p>
                                        <p className="subtitle is-6">{post.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-left">
                                        <div className="level-item has-text-centered">
                                            <a href="">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <a href="">
                                                    <i className="material-icons">chat_bubble_outline</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>
                                        <strong title="zoinks">33 Likes</strong>
                                    </p>
                                    Lorem ipsum dolor sit amet, consectetur dogma adipiscing elit. Phasellus nec iaculis mauris.
                                    <a>@bulmaio</a>.
                                    <a href="#">#css</a>
                                    <a href="#">#sustainable</a>
                                    <br>
                                    </br>
                                    <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="columns is-mobile">
                                    <div className="column is-11">
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-medium" type="text" placeholder="Add a comment . . ." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column has-text-centered">
                                        <button className="button">
                                            <i className="material-icons">more_horiz</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{post.caption}</p>
                                        <p className="subtitle is-6">{post.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-left">
                                        <div className="level-item has-text-centered">
                                            <a href="">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <a href="">
                                                    <i className="material-icons">chat_bubble_outline</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>
                                        <strong>32 Likes</strong>
                                    </p>
                                    Lorem ipsum dolor sit amet, cetazine consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    <a>@bulmaio</a>.
                                    <a href="#">#css</a>
                                    <a href="#">#responsive</a>
                                    <br>
                                    </br>
                                    <time dateTime="2018-1-1">11:09 PM - 1 Jan 2018</time>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="columns is-mobile">
                                    <div className="column is-11">
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-medium" type="text" placeholder="Add a comment . . ." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column has-text-centered">
                                        <button className="button">
                                            <i className="material-icons">more_horiz</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="header">
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img src="https://source.unsplash.com/random/96x96" alt="Placeholder image" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-4">{post.caption}</p>
                                        <p className="subtitle is-6">{post.username}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="https://source.unsplash.com/random/1280x960" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="level is-mobile">
                                    <div className="level-left">
                                        <div className="level-item has-text-centered">
                                            <a href="">
                                                <i className="material-icons">favorite_border</i>
                                            </a>
                                        </div>
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <a href="">
                                                    <i className="material-icons">chat_bubble_outline</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content">
                                    <p>
                                        <strong>32 Likes</strong>
                                    </p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                    <a>@bulmaio</a>.
                                    <a href="#">#css</a>
                                    <a href="#">#responsive</a>
                                    <br>
                                    </br>
                                    <time dateTime="2018-1-1">12:02 PM - 1 May 2018</time>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="columns is-mobile">
                                    <div className="column is-11">
                                        <div className="field">
                                            <div className="control">
                                                <input className="input is-medium" type="text" placeholder="Add a comment . . ." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column has-text-centered">
                                        <button className="button">
                                            <i className="material-icons">more_horiz</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {displayCommentList}



                        <footer className="footer">
                            <div className="container is-fluid">
                                <div className="content has-text-centered">
                                    <p>
                                        <strong>Bulma</strong> by
                                        <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default InstaAlbum;