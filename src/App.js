import React, { useState } from 'react';
import './App.css';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departure, setDeparture] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // For now, show mock data
    setResults([
      {
        id: 1,
        carrier: 'Maersk',
        vessel: 'MAERSK SEALAND',
        voyage: '0123E',
        etd: 'Jun 15',
        eta: 'Jul 13',
        transit: '28d',
        transship: 'Direct'
      },
      {
        id: 2,
        carrier: 'MSC',
        vessel: 'MSC GÜLSÜN',
        voyage: 'FA624',
        etd: 'Jun 18',
        eta: 'Jul 18',
        transit: '30d',
        transship: '1 T/S'
      }
    ]);
    
    setLoading(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>ASTROLABE</h1>
        <p>Find ocean sailings. No account required.</p>
      </header>

      <div className="container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-group">
            <label>Origin Port</label>
            <input
              type="text"
              placeholder="e.g. USSEA"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Destination Port</label>
            <input
              type="text"
              placeholder="e.g. NLRTM"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Departure Date</label>
            <input
              type="date"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </form>

        {results.length > 0 && (
          <div className="results">
            <h2>Available Sailings</h2>
            <table>
              <thead>
                <tr>
                  <th>Carrier</th>
                  <th>Vessel</th>
                  <th>Voyage</th>
                  <th>Departs</th>
                  <th>Arrives</th>
                  <th>Transit</th>
                  <th>Transship</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {results.map((sailing) => (
                  <tr key={sailing.id}>
                    <td>{sailing.carrier}</td>
                    <td>{sailing.vessel}</td>
                    <td>{sailing.voyage}</td>
                    <td>{sailing.etd}</td>
                    <td>{sailing.eta}</td>
                    <td>{sailing.transit}</td>
                    <td>{sailing.transship}</td>
                    <td>
                      <button className="detail-btn">Request Quote</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;