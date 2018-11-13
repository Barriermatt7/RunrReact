import React, { Component } from 'react';

// Import widgets being used in this component
import ListWidgetContainer from './ListWidgetContainer/ListWidgetContainer';
import NumberWidgetContainer from './NumberWidgetContainer/NumberWidgetContainer';
import GraphWidgetContainer from './GraphWidgetContainer/GraphWidgetContainer';

// Add in styles
import '../styles/App.css';



class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Add Widgets to display */}
                <GraphWidgetContainer href="http://localhost:3001/tickets/progression" heading="Tickets Over Time" colspan={2} rowspan={2} />
                <ListWidgetContainer href="http://localhost:3001/stats/days" heading="Top Rides Per Day" rowspan={3} />
                <NumberWidgetContainer href="http://localhost:3001/tickets/open" heading="Open Ticket Total" />
                <NumberWidgetContainer href="http://localhost:3001/tickets/today" heading="Tickets Opened Today" />
                <NumberWidgetContainer href="http://localhost:3001/tickets/urgent" heading="Tickets Marked 'Urgent'" />
                <NumberWidgetContainer href="http://localhost:3001/stats/response" heading="4 Hour Response %" />
                <NumberWidgetContainer href="http://localhost:3001/stats/solved" heading="7 Day Solved %" />
                
            </div>
        );
    }
}

export default App;