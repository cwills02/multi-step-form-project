import './App.css'

const RightContainer = ({stage, images}) => {
  return (
    <section
    stage={stage} className='image-container' style={{backgroundImage: `url(${images[stage]})`}}
    >

    </section>
  )
}

export default RightContainer