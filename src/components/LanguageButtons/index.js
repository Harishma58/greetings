import './index.css'

const LanguageButtons = props => {
  const {languageButton, clickTab, isActive} = props
  const {id, buttonText} = languageButton
  const activeButton = isActive ? 'activeButton' : ''

  const onClickTab = () => {
    clickTab(id)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={`btn ${activeButton}`}
        onClick={onClickTab}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageButtons
