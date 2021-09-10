import {React} from 'react';
import {PieChart} from 'react-minimal-pie-chart';

const CustomPieChart = ({team}) => {
    return (
        <div className="win-loss-section">
            Wins / Losses
            <PieChart
                data = {[
                    {title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d'},
                    {title: 'Wins', value: team.totalWins, color: '#4da375'}
                    ]
                }
            />
        </div>
    )
};

export default CustomPieChart;