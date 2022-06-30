import './App.css'

const LeftContainer = (props) => {
    if(props.stage === 0) {
    return(
    <section className='form-container'>
        <div>
          <h2>Apply to work with our agency</h2>
          <input className="email" placeholder="What's your email?" />
          <div>
            <button className='next-button' onClick={props.handleClick}>Next</button>
          </div>
        </div>
      </section>
  )
    } if(props.stage === 1) {
        return (

        <section className='form-container'>
        <div>
          <h2>What's your budget?</h2>
          <div className='stage-2-buttons'>
            <button className='stage-2-button'>$2k</button>
            <button className='stage-2-button'>$5</button>
            <button className='stage-2-button stage-2-button-active'>No Limit</button>
          </div>
          <div>
            <button className='next-button' onClick={props.handleClick}>Next</button>
          </div>
        </div>
      </section>
        )
    } else if(props.stage === 2) {
        return (
        <section className='form-container'>
          <div>
            <div>
                <h2>Anything else we should know?</h2>
                <input className="stage-2-input"  />
            </div>
            <button className='next-button' onClick={props.handleClick}>Next</button>
          </div>
      </section>
        )
    } else if(props.stage === 3) {
        return (
            <div className='form-container'>
                <h2>Thank you!</h2>
            </div>
        )
    }
}

export default LeftContainer