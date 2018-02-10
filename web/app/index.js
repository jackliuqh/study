import React from 'react'
import ReactDom from 'react-dom'
import {Button} from '../component'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {Router, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
class Box extends React.Component{
    render() {
        return (
            <div style={{backgroundColor: "red", width: '100px', height: '100px'}}>
                {
                    this.props.children
                }
            </div>
        )
    }
}
const route =  () => {
    <Route path='/' component={Button}>
        <Route path="button" component={Button}/>
    </Route>
}

const client = new ApolloClient({
    //Graphql server url
    link: new HttpLink({uri: ''}),
    cache: new InMemoryCache()
});
const someReducers = () => {
}
const store = createStore(someReducers)

// store.subscribe(throttle(() => {
//     //todo
// }, 1000))

ReactDom.render((
        <Provider store={store}>
            <ApolloProvider client={client}>
                <BrowserRouter>
                    {
                        route()
                    }
                </BrowserRouter>
            </ApolloProvider>
        </Provider>
    ),
    document.getElementById('root')
)
