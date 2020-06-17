import React from 'react';

class Core extends React.Component {
    state = {
        imp: {
            libraryName: 'RedfoxUI' 
        },
        design: {
            template: 'React-Blue'
        }
    }
    
    render() {
        return (
            <h1 className="CoreComponent">React Core In Development...</h1>
        );
    }    
}

export default Core;