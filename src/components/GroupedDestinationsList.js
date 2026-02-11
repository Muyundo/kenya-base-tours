import { groupedDestinations } from '../data/groupedDestinations';
import { Link } from 'react-router-dom';

function GroupedDestinationsList() {
  return (
    <div>
      {groupedDestinations.map((group) => (
        <div key={group.group} style={{ marginBottom: '2rem' }}>
          <h2>{group.group}</h2>
          <ul>
            {group.destinations.map((dest) => (
              <li key={dest.name}>
                <Link to={dest.route}>{dest.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupedDestinationsList;
