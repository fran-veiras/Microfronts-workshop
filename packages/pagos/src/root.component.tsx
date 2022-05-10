import "./global.css?modules=false";

export default function Root(props) {
  return (
    <main>
      <div className="card-basic">
        <div className="card-header header-basic">
          <h1>Basic</h1>
        </div>
        <div className="card-body">
          <p><h2>$5 / mo</h2></p>
          <div className="card-element-hidden-basic">
            <ul className="card-element-container">
              <li className="card-element">2 team members</li>
              <li className="card-element">2GB storage</li>
              <li className="card-element">1000 request per day</li>
              <li className="card-element">20000 users</li>
            </ul>
            <button className="btn btn-basic">Order now</button>
          </div>
        </div>
      </div>
      
      <div className="card-standard">
        <div className="card-header header-standard">
          <h1>Standard</h1>
        </div>
        <div className="card-body">
          <p><h2>$10 / mo</h2></p>
          <div className="card-element-hidden-standard">
            <ul className="card-element-container">
              <li className="card-element">5 team members</li>
              <li className="card-element">5GB storage</li>
              <li className="card-element">2000 request per day</li>
              <li className="card-element">40000 users</li>
            </ul>
            <button className="btn btn-standard">Order now</button>
          </div>
        </div>
      </div>
      <div className="card-premium">
        <div className="card-header header-premium">
          <h1>Premium</h1>
        </div>
        <div className="card-body">
          <p><h2>$20 / mo</h2></p>
          <div className="card-element-hidden-premium">
            <ul className="card-element-container">
              <li className="card-element">Unlimited team members</li>
              <li className="card-element">10GB storage</li>
              <li className="card-element">5000 request per day</li>
              <li className="card-element">Unlimited users</li>
            </ul>
            <button className="btn btn-premium">Order now</button>
          </div>
        </div>
      </div>
    </main>
  )
}
