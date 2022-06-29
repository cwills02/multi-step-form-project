const LeftContainer = (props) => {
  return(
    <section className='form-container'>
        <div>
          <h2>Apply to work with our agency</h2>
          <input placeholder="What's your email?" />
          <div>
            <button onClick={props.handleClick}>Next</button>
          </div>
        </div>
      </section>
  )
}

export default LeftContainer