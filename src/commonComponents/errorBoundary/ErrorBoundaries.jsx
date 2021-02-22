import React from 'react';
import { Spinner } from 'reactstrap';

export default class ErrorBoundary extends React.Component {

    state = {
        hasError:false
    }

    static getDerivedStateFromError() {
        return {
            hasError:true
        }
    }

    render(){
        if(this.state.hasError) {
            return (
                <Spinner/>
            )
        }

        return(this.props.children);
    }
}