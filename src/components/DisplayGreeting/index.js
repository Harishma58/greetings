import './index.css'

const DisplayGreeting = props => {
  const {language} = props
  const {id, imageUrl, imageAltText} = language

  return (
    <>
      <img src={imageUrl} className="image" alt={imageAltText} />
    </>
  )
}
export default DisplayGreeting
