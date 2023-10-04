import countdown from './img/countdown.gif'

export default function LoadingComponent() {
  return (
    <div className="loading">
      <img src={countdown} alt="Loading"/>
      <p>Loading...</p>
    </div>
  )
}